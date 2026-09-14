import { Task, QuizQuestion } from '../../types/roadmap.types';

export const ENGLISH_EMAIL_WRITING_INTERMEDIATE_ASSESSMENT: QuizQuestion[] = [
  {
    "id": 1,
    "topic": "Professional Tone & Voice",
    "question": "Which sentence effectively transforms the passive-aggressive statement 'As I previously stated in my last email that you ignored' into a diplomatic, constructive follow-up?",
    "options": [
      "Re-attaching my earlier email for your convenience—please let me know if you need any additional context on the timeline.",
      "Why didn't you read what I wrote before?",
      "I am stating this again because nobody listened.",
      "See my previous email because I already answered this."
    ],
    "correctAnswer": 0,
    "explanation": "'Re-attaching my earlier email for your convenience...' gently brings prior context to the recipient's attention without assigning blame or sounding combative."
  },
  {
    "id": 2,
    "topic": "Concise Writing & Eliminating Fluff",
    "question": "Which version demonstrates the highest level of executive conciseness without sacrificing clarity or politeness?",
    "options": [
      "I am writing this email to essentially let you know that in my personal opinion we might want to perhaps consider meeting.",
      "Please let me know your availability for a 20-minute project sync this Wednesday.",
      "Due to the fact that we have various and sundry items to discuss, it would be advantageous to gather together.",
      "At this point in time we should probably have a quick conversation about stuff."
    ],
    "correctAnswer": 1,
    "explanation": "'Please let me know your availability for a 20-minute project sync this Wednesday' eliminates redundant filler ('various and sundry', 'in my personal opinion', 'at this point in time') and states the exact request in 13 words."
  },
  {
    "id": 3,
    "topic": "Job Application Emails",
    "question": "When submitting an unsolicited or posted job application email, what should the opening paragraph immediately communicate?",
    "options": [
      "Your life story from childhood to the present day.",
      "Complaints about your previous manager.",
      "The specific position you are applying for, where you discovered the listing (or who referred you), and your enthusiasm for the role.",
      "A demand for your desired salary before they review your resume."
    ],
    "correctAnswer": 2,
    "explanation": "Recruiters review hundreds of emails. Stating the exact target role and referral source immediately establishes applicant identity and relevant context."
  },
  {
    "id": 4,
    "topic": "Cover Letter Email Strategy",
    "question": "How should an email cover letter differ from an attached PDF document cover letter?",
    "options": [
      "The email cover letter should be a dense 4-page essay with microscopic font.",
      "The email cover letter should be completely empty with no text at all.",
      "The email body should be an identical copy with all legal formatting tags included.",
      "The email cover letter acts as an executive hook—a concise 3-paragraph summary highlighting 2-3 key achievements that entice the recruiter to open the attached full CV."
    ],
    "correctAnswer": 3,
    "explanation": "An email body serves as a high-impact teaser highlighting core value propositions and prompting the hiring manager to inspect the attached comprehensive resume and portfolio."
  },
  {
    "id": 5,
    "topic": "Interview Follow-Up Emails",
    "question": "When is the optimal time to send a post-interview thank-you email, and what should it contain?",
    "options": [
      "Within 24 hours of the interview, referencing a specific insight discussed during the conversation and reiterating enthusiasm for the role.",
      "Two weeks later with a complaint about how long the decision is taking.",
      "Immediately during the interview from your phone under the table.",
      "Never, because follow-ups make candidates look desperate."
    ],
    "correctAnswer": 0,
    "explanation": "Sending a thank-you note within 24 hours reinforces professionalism, keeps you top-of-mind, and allows you to reference tailored discussion points."
  },
  {
    "id": 6,
    "topic": "Business Inquiries",
    "question": "When requesting a formal B2B pricing quotation from a prospective software vendor, what information must you provide?",
    "options": [
      "Just the word 'Quote?' in the body.",
      "Estimated seat count, required features/integrations, anticipated deployment timeline, and decision-maker contact details.",
      "Your company's entire confidential source code repository.",
      "A complaint about a competitor's customer service."
    ],
    "correctAnswer": 1,
    "explanation": "Vendors require operational parameters (user volume, feature requirements, timelines) to calculate customized corporate pricing and volume discounts."
  },
  {
    "id": 7,
    "topic": "Customer Service De-escalation",
    "question": "Which response model is most effective when replying to an upset customer experiencing an unexpected service outage?",
    "options": [
      "Argue that it was an act of nature and refuse to assist.",
      "Ignore their email for 72 hours until they calm down.",
      "HEAR Framework: Hear/Acknowledge, Empathize, Action Plan, and Reassurance/Timeline.",
      "Forward their email to a competitor's support inbox."
    ],
    "correctAnswer": 2,
    "explanation": "The HEAR Framework validates customer frustration with empathy, presents an immediate concrete remediation plan, and provides a clear time-bound update."
  },
  {
    "id": 8,
    "topic": "Constructive Escalation",
    "question": "How should a professional escalation email be structured when a vendor misses three consecutive project milestones?",
    "options": [
      "Use all caps, swear words, and threaten immediate public lawsuits.",
      "Post negative memes on public social media forums.",
      "Send 100 identical blank emails every minute.",
      "State objective timeline facts, highlight project business impact, reference contract commitments, and request an executive resolution meeting within 48 hours."
    ],
    "correctAnswer": 3,
    "explanation": "Objective, fact-grounded escalation focusing on business impact and contractual commitments commands respect and drives rapid executive intervention."
  },
  {
    "id": 9,
    "topic": "Meeting Scheduling & Agendas",
    "question": "When proposing a cross-time-zone meeting across New York (EST) and London (GMT), what is essential in your invitation?",
    "options": [
      "Stating times in both relevant time zones (e.g., '10:00 AM EST / 3:00 PM GMT') and proposing 2-3 distinct time slots.",
      "Stating 'Let's meet at 3 o'clock' without specifying time zone, city, or date.",
      "Assuming the recipient will guess the time difference.",
      "Scheduling the meeting at 2:00 AM recipient local time without notice."
    ],
    "correctAnswer": 0,
    "explanation": "Explicitly displaying both time zones and offering multiple windows prevents calendar mismatches and respects international working hours."
  },
  {
    "id": 10,
    "topic": "Polite Reminder Strategy",
    "question": "What is the best approach when sending a second follow-up on an overdue invoice that is 14 days past terms?",
    "options": [
      "Show up at the client's home unannounced.",
      "Send a firm yet polite reminder referencing the invoice number, due date, payment instructions, and requesting confirmation of the scheduled remittance date.",
      "Send a rude message calling the client dishonest.",
      "Cancel the contract immediately without communicating."
    ],
    "correctAnswer": 1,
    "explanation": "A professional reminder maintains commercial rapport, reiterates all banking details, and secures an explicit payment commitment."
  },
  {
    "id": 11,
    "topic": "Persuasive B2B Communication",
    "question": "What is the core principle of ethical, high-converting B2B sales outreach emails?",
    "options": [
      "Focusing entirely on your own company's history and revenue figures.",
      "Using misleading subject lines like 'Re: Our dinner yesterday' with strangers.",
      "Focusing on the prospect's specific operational pain points and demonstrating quantifiable value/ROI.",
      "Sending 10 follow-ups per day."
    ],
    "correctAnswer": 2,
    "explanation": "Prospects care about solving their operational inefficiencies. Demonstrating how your solution cuts costs or increases efficiency drives engagement."
  },
  {
    "id": 12,
    "topic": "Internal Workplace Delegation",
    "question": "When delegating a critical task to a team member via email, what must you clearly define?",
    "options": [
      "Only the phrase 'Do this now'.",
      "Vague guidelines that allow them to guess what success looks like.",
      "An impossible deadline that is 5 minutes in the past.",
      "Task objective, expected deliverables, resources/guidance available, and explicit completion deadline."
    ],
    "correctAnswer": 3,
    "explanation": "Clear delegation outlines the objective, expected format, success criteria, and deadline, preventing bottlenecks and rework."
  },
  {
    "id": 13,
    "topic": "Scannability & Formatting",
    "question": "Why are bullet points, bold headers, and short 2-3 sentence paragraphs essential in business emails?",
    "options": [
      "Because over 60% of professional emails are triaged on mobile devices where dense text is hard to read.",
      "Because email programs crash if paragraphs have more than 4 lines.",
      "Because bullet points automatically decrypt passwords.",
      "Because text looks prettier in pastel rainbow colors."
    ],
    "correctAnswer": 0,
    "explanation": "Mobile readers scan emails rapidly. Strategic white space, bold key phrases, and bullet lists allow decision-makers to extract vital info in seconds."
  },
  {
    "id": 14,
    "topic": "Multi-Item Inquiries",
    "question": "When asking a vendor or colleague 4 distinct questions in a single email, how should you format them?",
    "options": [
      "As a single continuous 80-word sentence with multiple semicolons.",
      "Numbered list (1, 2, 3, 4) with bold topic keywords for each question.",
      "Send 4 separate emails within 30 seconds of each other.",
      "Hide the questions inside a poem."
    ],
    "correctAnswer": 1,
    "explanation": "Numbered questions allow the respondent to reply point-by-point (e.g., 'Regarding item 2...') without missing critical questions."
  },
  {
    "id": 15,
    "topic": "Diplomatic Disagreement",
    "question": "Which sentence demonstrates professional, diplomatic disagreement during a product strategy debate?",
    "options": [
      "That idea is totally wrong and won't work.",
      "You clearly have no idea what you are doing.",
      "While I see the merits of expanding to that demographic, I have reservations regarding our current server capacity to support that volume.",
      "Whatever, let's just do it and fail."
    ],
    "correctAnswer": 2,
    "explanation": "'While I see the merits of... I have reservations regarding...' validates the colleague's perspective before introducing data-backed concerns."
  },
  {
    "id": 16,
    "topic": "Rescheduling Meetings Courteously",
    "question": "When you must reschedule an important client demo due to an unavoidable conflict, what should your email contain?",
    "options": [
      "A demand that the client adjust their life around yours.",
      "No explanation and a calendar decline notice 5 minutes before the call.",
      "A long excuse blaming other coworkers.",
      "A sincere apology, a brief non-defensive reason, and 2-3 specific alternative dates/times with calendar links."
    ],
    "correctAnswer": 3,
    "explanation": "Proactively offering 2-3 alternative slots and apologizing for the disruption minimizes friction and shows deep respect for the client's time."
  },
  {
    "id": 17,
    "topic": "Handling Project Delays",
    "question": "When a software release milestone will be delayed by one week, when and how should you notify executive stakeholders?",
    "options": [
      "Communicate proactively as soon as the risk is identified, explaining the cause, adjusted milestone schedule, and risk mitigation steps.",
      "Wait until the deadline has passed by 3 days and hope they don't notice.",
      "Blame the junior engineers in a public company-wide email.",
      "Turn off your computer and take a vacation."
    ],
    "correctAnswer": 0,
    "explanation": "Proactive transparency allows stakeholders to adjust downstream plans and reinforces trust in your project leadership."
  },
  {
    "id": 18,
    "topic": "Declining Invitations Professionally",
    "question": "How should you politely decline an invitation to speak at an industry conference due to prior commitments?",
    "options": [
      "Tell the organizers their conference sounds boring.",
      "Express sincere gratitude for the invitation, state that your schedule cannot accommodate the event, and offer to stay connected for future opportunities.",
      "Ignore the message completely.",
      "Accept the invitation and then fail to show up."
    ],
    "correctAnswer": 1,
    "explanation": "Expressing appreciation and declining with courtesy preserves industry relationships for future collaborations."
  },
  {
    "id": 19,
    "topic": "Feedback Delivery",
    "question": "Which phrasing is best suited for providing constructive feedback on a colleague's presentation deck?",
    "options": [
      "The presentation is terrible, redo everything.",
      "I didn't like it.",
      "Overall the narrative is compelling; I recommend simplifying slide 4 to make the financial projections more digestible for executive viewers.",
      "Why did you use blue on slide 2?"
    ],
    "correctAnswer": 2,
    "explanation": "Constructive feedback balances genuine positive acknowledgment with specific, actionable, outcome-oriented recommendations."
  },
  {
    "id": 20,
    "topic": "Offer Acceptance Emails",
    "question": "What key details should be confirmed in a formal employment offer acceptance email?",
    "options": [
      "Only the words 'I accept'.",
      "Demands for a promotion before day one.",
      "A list of complaints about the interview process.",
      "Formal statement of acceptance, agreed start date, job title, and expression of enthusiasm to join the team."
    ],
    "correctAnswer": 3,
    "explanation": "Reiterating the official title, agreed start date, and expressing enthusiasm creates a clean record and sets a positive tone for onboarding."
  },
  {
    "id": 21,
    "topic": "Customer Apology Nuance",
    "question": "In customer service writing, why is 'We apologize for any inconvenience caused' often viewed as weak or insincere?",
    "options": [
      "Because it sounds like a generic boilerplate template that questions whether the customer actually experienced an inconvenience.",
      "Because it is too short.",
      "Because customers hate polite words.",
      "Because it contains too many letters."
    ],
    "correctAnswer": 0,
    "explanation": "Replacing boilerplate phrases with specific empathy ('We sincerely apologize for the shipping delay on your order') demonstrates authentic accountability."
  },
  {
    "id": 22,
    "topic": "Email Thread Subject Hygiene",
    "question": "When a long email thread about 'Project Alpha Budget' naturally shifts to 'Q4 Marketing Vendor Selection', what should you do?",
    "options": [
      "Keep the old subject line forever even if the topic is completely unrelated.",
      "Update the subject line (e.g., 'Vendor Selection (was: Project Alpha Budget)') to reflect the new topic for team searchability.",
      "Delete all previous emails in the company inbox.",
      "Type 'NEW TOPIC' in all capital letters in the body."
    ],
    "correctAnswer": 1,
    "explanation": "Updating the subject line maintains archival searchability and ensures recipients know the conversation focus has evolved."
  },
  {
    "id": 23,
    "topic": "Professional Networking Outreach",
    "question": "What is the golden rule when emailing an industry leader for a brief informational interview or advice?",
    "options": [
      "Ask them to review your 300-page business plan for free.",
      "Demand that they hire you immediately.",
      "Keep the request focused, specific, and respectful of their time (e.g., a 15-minute phone call on a specific topic).",
      "Send a generic mass email addressed to 'Dear Friend'."
    ],
    "correctAnswer": 2,
    "explanation": "Industry leaders are busy. A hyper-specific, low-friction request (15 minutes on a defined topic) dramatically increases response rates."
  },
  {
    "id": 24,
    "topic": "Vendor Inquiry Deadlines",
    "question": "When requesting proposals (RFP) from multiple vendors, what prevents delayed submissions?",
    "options": [
      "Not providing any deadline.",
      "Telling them to send it whenever they have free time.",
      "Calling them every 10 minutes.",
      "Setting an explicit RFP deadline with date, time, time zone, and primary contact email."
    ],
    "correctAnswer": 3,
    "explanation": "Explicit RFP deadlines ensure all competing vendors submit proposals within an equitable, structured procurement window."
  },
  {
    "id": 25,
    "topic": "Clarifying Responsibilities",
    "question": "Which sentence clearly establishes task ownership and accountability in an internal project email?",
    "options": [
      "Marcus will lead the staging QA testing and deliver the bug report by Thursday at 3 PM EST.",
      "Someone should probably look at the bugs sometime.",
      "Let's all just do our best with things.",
      "I assume testing is happening."
    ],
    "correctAnswer": 0,
    "explanation": "Assigning a named owner ('Marcus'), specific deliverable ('staging QA bug report'), and deadline ('Thursday 3 PM EST') eliminates ambiguity."
  },
  {
    "id": 26,
    "topic": "Professional Confidence",
    "question": "Which phrase conveys professional confidence rather than excessive self-doubt?",
    "options": [
      "I might be totally wrong, but maybe we could possibly try this?",
      "Based on our Q2 conversion data, I recommend testing a simplified 2-step checkout flow.",
      "I am not an expert so don't blame me if this fails.",
      "Sorry to bother you with my dumb idea."
    ],
    "correctAnswer": 1,
    "explanation": "'Based on our Q2 conversion data, I recommend...' grounds the proposal in objective evidence while speaking with professional authority."
  },
  {
    "id": 27,
    "topic": "Customer Support Resolution Confirmation",
    "question": "How should a customer service agent conclude a resolved support ticket email?",
    "options": [
      "Never write back to the customer again.",
      "Ask the customer to pay extra money.",
      "Confirm the resolution, provide steps for what to do if issues persist, and invite further questions courteously.",
      "Close the ticket without telling the customer what was fixed."
    ],
    "correctAnswer": 2,
    "explanation": "Confirming the resolution and inviting follow-up inquiries ensures complete customer satisfaction and reduces repeat tickets."
  },
  {
    "id": 28,
    "topic": "Diplomatic Status Inquiries",
    "question": "When following up with a senior executive who has not signed off on a contract, which phrasing is most diplomatic?",
    "options": [
      "You are holding up the entire company, sign this now.",
      "Why are you so slow at signing documents?",
      "Did you lose the contract?",
      "I wanted to gently follow up on the Acme contract to see if you have any questions or require any adjustments prior to signature."
    ],
    "correctAnswer": 3,
    "explanation": "Offering assistance and inquiring about potential questions provides a courteous nudge without sounding accusatory."
  },
  {
    "id": 29,
    "topic": "Executive Summary in Emails",
    "question": "Where should the Executive Summary be located in a detailed 400-word analysis email?",
    "options": [
      "At the very top immediately following the greeting, allowing leaders to grasp key conclusions in 10 seconds.",
      "Hidden in the middle of paragraph 4.",
      "At the very bottom below the signature.",
      "Only in a password-protected zip file."
    ],
    "correctAnswer": 0,
    "explanation": "Executives need the bottom-line conclusions upfront. Placing the summary at the top respects their time and guides their reading of the supporting details."
  },
  {
    "id": 30,
    "topic": "Professional Boundary Setting",
    "question": "How should an employee establish a polite professional boundary regarding weekend email responses?",
    "options": [
      "Reply with angry insults on Saturday morning.",
      "Set an automated out-of-office response stating when you will return and who to contact for urgent emergencies.",
      "Ignore all emails on Monday as revenge.",
      "Send a message saying you will never work again."
    ],
    "correctAnswer": 1,
    "explanation": "An automated out-of-office message professionally sets expectations, states return timing, and provides emergency escalations without friction."
  }
];

export const ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS: Task[] = [
  {
    id: 'eew-int-01',
    orderIndex: 1,
    title: '13. Professional Tone and Voice',
    description: 'Master the art of calibrating tone: confident, respectful, friendly, neutral, and diplomatic. Learn techniques to eliminate passive-aggressive undertones and elevate professional impact.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'in_progress',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Tone in written communication is subtle yet decisive. Without vocal inflections and facial cues, emails can easily sound colder or harsher than intended. Mastering tone calibration ensures your messages inspire trust, collaboration, and respect.',
      objectives: [
        'Recognize and eliminate unintentional passive-aggressive phrasing',
        'Learn the 5 core workplace voices: Diplomatic, Confident, Collaborative, Executive, and Empathetic',
        'Use softening techniques and positive framing to deliver constructive messages',
        'Audit emails for emotional bias before sending'
      ],
      sections: [
        {
          title: 'Transforming Passive-Aggressive to Constructive Tone',
          content: 'Phrases like "Per my previous email", "As stated before", and "Re-attaching for the third time" signal irritation and defensiveness. Replace them with service-oriented, collaborative phrasing.',
          explanation: 'Preserving the recipient\'s dignity during misunderstandings accelerates problem resolution and maintains strong working relationships.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Tone Transformation Matrix',
              code: `Passive-Aggressive: Per my last email, the deadline was yesterday.\nDiplomatic: I wanted to check in on the draft status—please let me know if you need any support to finalize the submission today.\n\nBlunt / Cold: That won't work for us.\nDiplomatic: While we appreciate this approach, our current technical constraints require us to explore alternative solutions.\n\nWeak / Timid: I'm sorry to bother you, I know you're super busy, but maybe you have time?\nConfident: When your schedule permits this week, I would value a 15-minute discussion on the Q3 roadmap.`
            },
            {
              language: 'markdown',
              title: 'Example 2: Diplomatic Client Boundary Setting',
              code: `Subject: Scope Confirmation & Timeline Update - Project Vantage\n\nDear Ms. Kensington,\n\nThank you for sharing your ideas regarding the additional multi-currency checkout feature. It is an exciting addition that will certainly enhance the global customer experience.\n\nTo ensure we maintain the October 30 launch date for Phase 1, we recommend scheduling this new feature for our Phase 2 release in November. This allows us to complete rigorous security audits without compromising your holiday marketing launch.\n\nCould we review this phasing during our Tuesday sync?\n\nWarm regards,\nJulian Hayes\nSenior Project Manager`
            },
            {
              language: 'markdown',
              title: 'Example 3: Confident Upward Communication',
              code: `Subject: Recommendation: Cloud Infrastructure Migration Plan\n\nDear Executive Committee,\n\nFollowing our performance benchmarks over the past month, I recommend migrating our staging environments to the new autoscaling cluster.\n\nKey Strategic Benefits:\n- 35% reduction in monthly compute overhead ($12,000 annual savings)\n- Sub-second build pipeline execution times\n- Zero scheduled downtime during maintenance windows\n\nI have prepared the detailed migration plan for your review. I look forward to addressing any questions during Friday's briefing.\n\nSincerely,\nDavid Zhao\nDirector of Infrastructure`
            }
          ],
          commonMistakes: [
            'Using "No offense, but..." which invariably introduces an offensive remark.',
            'Over-apologizing for legitimate business requests ("Sorry to exist, sorry to ask...").',
            'Letting frustration from a difficult meeting leak into an unrelated client email.'
          ],
          proTip: 'If an email triggers an emotional reaction in you, draft your response in a separate notepad, take a 10-minute break, and edit for diplomatic neutrality before sending.'
        }
      ],
      keyTakeaways: [
        'Eliminate passive-aggressive cliches ("Per my previous email", "Clearly").',
        'State recommendations with data-backed confidence rather than timidity.',
        'Protect working relationships by adopting diplomatic, solution-focused framing.'
      ],
      practiceExercises: [
        {
          title: 'Tone Calibration Lab',
          instructions: 'Rewrite 4 passive-aggressive sentences and 4 timid sentences into balanced, confident professional statements.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: "Professional Tone and Voice",
        question: "Which of the following sentences best demonstrates confident, professional upward communication?",
        options: [
          "I might be totally wrong, but maybe we should think about changing our vendor?",
          "Based on our vendor cost audit, I recommend switching to Provider B to capture a 22% annual cost reduction.",
          "Our current vendor is awful and whoever picked them made a mistake.",
          "Sorry to bug you, but look at this vendor spreadsheet if you have time."
        ],
        correctAnswer: 1,
        explanation: "'Based on our vendor cost audit, I recommend switching...' grounds the proposal in objective data and speaks with authoritative clarity."
      }
    ]
  },
  {
    id: 'eew-int-02',
    orderIndex: 2,
    title: '14. Writing Clear and Concise Emails',
    description: 'Learn the principles of high-density, low-word-count communication. Practice eliminating redundant modifiers, cutting deadwood, structuring scannable paragraphs, and applying the one-purpose rule.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Brevity is the soul of professional communication. Readers do not read emails word-for-word; they scan them. Cutting fluff and structuring information hierarchically ensures your message is comprehended immediately.',
      objectives: [
        'Apply the "One Email, One Primary Objective" rule',
        'Prune 30-50% of word count from drafts without losing meaning or courtesy',
        'Structure content with bold lead-ins, bulleted items, and white space',
        'Format multi-point updates for rapid mobile reading'
      ],
      sections: [
        {
          title: 'Pruning Fluff and Redundancies',
          content: 'Cut filler phrases: "in order to" -> "to"; "due to the fact that" -> "because"; "at this point in time" -> "now"; "for the purpose of" -> "to". Keep paragraphs under 3 sentences.',
          explanation: 'Clear writing reflects clear thinking. Readers appreciate executives who respect their time.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Fluff Removal Table',
              code: `Wordy Phrase -> Concise Equivalent\n\nAt the present time -> Now / Currently\nIn the event that -> If\nDue to the fact that -> Because\nIn spite of the fact that -> Although\nFor the purpose of -> To\nWith reference to the matter of -> Regarding\nIn the near future -> Soon / By next week\nIt has come to our attention that -> We noticed`
            },
            {
              language: 'markdown',
              title: 'Example 2: 120-Word Draft Compressed to 45 Words',
              code: `Wordy Draft (120 words):\nDear Team,\nI am writing this email to essentially let everybody know that due to the fact that our quarterly targets have recently been adjusted by senior management, we are going to need to have a mandatory team meeting in order to discuss the changes in the near future. The meeting will be held on Thursday at 2 PM. Please make sure that you are able to attend this meeting because it is very important for all of us.\n\nConcise Revision (42 words):\nSubject: Mandatory Meeting: Q3 Target Updates - Thursday 2 PM EST\n\nHi Team,\n\nFollowing recent leadership adjustments to our quarterly targets, please join our strategic planning session this Thursday at 2:00 PM EST.\n\nAgenda:\n- Updated Q3 KPIs\n- Resource allocation\n\nCalendar invitation attached.\n\nBest regards,\nSarah`
            },
            {
              language: 'markdown',
              title: 'Example 3: Actionable Bulleted Structure',
              code: `Subject: Decision Needed: Vendor Selection for Cloud Migration\n\nHi Alex,\n\nWe have evaluated three cloud migration vendors. Here is our recommendation:\n\n1. Recommended Vendor: CloudScale Systems ($45k, 6-week delivery)\n2. Alternative: DataCore Inc. ($52k, 8-week delivery)\n3. Key Factor: CloudScale includes 24/7 post-launch dedicated engineer support.\n\nAction Required: Please approve the CloudScale contract by Friday 5 PM so we can start on Nov 1.\n\nBest regards,\nLiam`
            }
          ],
          commonMistakes: [
            'Burying the main question or request in the 5th paragraph.',
            'Writing 5 different unrelated topics in one single email thread.',
            'Using passive voice constructions that hide who is responsible for actions.'
          ],
          proTip: 'After drafting an email, challenge yourself to cut 20% of the words before hitting send.'
        }
      ],
      keyTakeaways: [
        'Limit paragraphs to 2-3 sentences for effortless mobile reading.',
        'Use bold lead-in tags on bullet points to highlight key takeaways.',
        'Eliminate deadwood phrases ("due to the fact that", "in order to").'
      ],
      practiceExercises: [
        {
          title: 'Word Count Compression Challenge',
          instructions: 'Take a provided 200-word rambling email and compress it to under 75 words while preserving 100% of vital information.'
        }
      ]
    },
    questions: [
      {
        id: 2,
        topic: "Writing Clear and Concise Emails",
        question: "Which of the following phrases should be replaced with the single word 'because' in business writing?",
        options: [
          "Due to the fact that",
          "Furthermore",
          "In accordance with",
          "Notwithstanding"
        ],
        correctAnswer: 0,
        explanation: "'Due to the fact that' is a wordy 5-word cliché that adds zero value over the clean conjunction 'because'."
      }
    ]
  },
  {
    id: 'eew-int-03',
    orderIndex: 3,
    title: '15. Job Application Emails',
    description: 'Learn how to write high-impact job application emails that capture recruiter attention, introduce your CV/portfolio, highlight key qualifications, and demonstrate cultural fit.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Your job application email is the first work sample a hiring manager evaluates. A compelling, concise application email differentiates you from hundreds of candidates and secures interview invitations.',
      objectives: [
        'Craft targeted application subject lines with job titles and reference IDs',
        'Structure the 3-paragraph application formula: Hook, Value Evidence, Call to Action',
        'Incorporate quantifiable achievements (metrics, percentages, revenue impact)',
        'Write professional follow-up inquiries after submitting applications'
      ],
      sections: [
        {
          title: 'The 3-Paragraph Job Application Formula',
          content: 'Paragraph 1: State the exact position, reference ID, and referral source.\nParagraph 2: Highlight 2-3 quantified achievements that directly align with the job requirements.\nParagraph 3: Reference attached CV/portfolio, express enthusiasm, and provide availability for interview.',
          explanation: 'Hiring managers spend an average of 6 seconds scanning an initial application email.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Software Engineer Application Email',
              code: `Subject: Application: Senior Full-Stack Engineer (Ref #842) - Marcus Sterling\n\nDear Hiring Team,\n\nI am writing to express my strong interest in the Senior Full-Stack Engineer position at Skillora AI, as advertised on LinkedIn. With over six years of experience architecting distributed React and Node.js microservices, I have specialized in building high-throughput educational technology platforms.\n\nIn my current role at NexaTech, I led the redesign of our real-time collaboration engine, reducing latency by 42% across 250,000 active daily learners. My technical background in TypeScript, GraphQL, and cloud containerization aligns closely with Skillora's engineering roadmap.\n\nI have attached my comprehensive resume and portfolio for your review. I would welcome the opportunity to discuss how my technical expertise can contribute to Skillora's ongoing expansion.\n\nThank you for your time and consideration.\n\nSincerely,\nMarcus Sterling\nmarcus.sterling@email.com | +1 (555) 345-6789 | linkedin.com/in/marcus-sterling`
            },
            {
              language: 'markdown',
              title: 'Example 2: Career Changer / Growth Marketing Application',
              code: `Subject: Application: Growth Marketing Manager - Elena Rostova\n\nDear Ms. Albright,\n\nI was thrilled to see the opening for Growth Marketing Manager at Finova Global. Having followed Finova's product milestones, I am eager to bring my five years of B2B demand generation experience to your growth marketing team.\n\nKey Qualifications:\n- Scaled enterprise SaaS pipeline by 140% YoY through targeted multi-channel LinkedIn & Google campaigns.\n- Optimized onboarding funnel conversion rates from 3.2% to 6.8% through rigorous A/B testing.\n- Managed a $1.2M annual digital advertising budget with an average 4.2x ROAS.\n\nPlease find my resume and campaign case studies attached. I look forward to exploring how I can drive measurable pipeline growth for Finova.\n\nBest regards,\nElena Rostova\nelena.rostova@email.com | +1 (555) 987-6543`
            },
            {
              language: 'markdown',
              title: 'Example 3: Courteous 10-Day Application Follow-Up',
              code: `Subject: Following Up: Senior Full-Stack Engineer Application - Marcus Sterling\n\nDear Hiring Team,\n\nI hope this email finds you well.\n\nI am writing to briefly follow up on my application for the Senior Full-Stack Engineer position (Ref #842), submitted on October 4. I remain very enthusiastic about the prospect of joining Skillora AI and contributing to your real-time learning platforms.\n\nPlease let me know if you require any additional materials or references as you evaluate candidates.\n\nThank you again for your time and consideration.\n\nWarm regards,\nMarcus Sterling`
            }
          ],
          commonMistakes: [
            'Using generic copy-paste emails where the company name is wrong or left as "[Insert Company]".',
            'Listing duties ("responsible for writing code") instead of accomplishments ("reduced latency by 42%").',
            'Writing a 1,000-word autobiography in the email body.'
          ],
          proTip: 'Always name your resume file professionally: `Firstname_Lastname_Resume_2026.pdf`.'
        }
      ],
      keyTakeaways: [
        'Include the exact role title and reference number in the subject line.',
        'Focus on quantified achievements rather than passive responsibilities.',
        'Keep the email body to 3 concise, impactful paragraphs.'
      ],
      practiceExercises: [
        {
          title: 'Job Application Crafting Exercise',
          instructions: 'Select a target job description and write a tailored 3-paragraph application email highlighting 2 quantified achievements.'
        }
      ]
    },
    questions: [
      {
        id: 3,
        topic: "Job Application Emails",
        question: "Which of the following bullet points represents the strongest evidence of value in an application email?",
        options: [
          "I was responsible for marketing tasks every day.",
          "I worked on marketing with some coworkers.",
          "Increased enterprise trial-to-paid conversion by 34% across 12,000 users in 6 months through data-driven onboarding emails.",
          "I like marketing very much."
        ],
        correctAnswer: 2,
        explanation: "Quantifying the outcome ('34% increase', '12,000 users', '6 months') provides concrete, verifiable proof of professional competence."
      }
    ]
  },
  {
    id: 'eew-int-04',
    orderIndex: 4,
    title: '16. Cover Letter Emails',
    description: 'Learn the distinction between attached cover letters and email-body cover letters. Master hooks, storytelling, tailoring to company values, and eliminating clichés.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'An email cover letter must strike an immediate chord. Unlike printed letters, digital cover letters require rapid engagement, narrative momentum, and explicit alignment with the hiring team’s core objectives.',
      objectives: [
        'Determine when to use an in-body cover letter versus an attached formal PDF',
        'Hook the reader in sentence one by articulating genuine company connection',
        'Eliminate tired clichés ("I am a hard worker", "out-of-the-box thinker")',
        'Align your personal career narrative with the organization\'s mission'
      ],
      sections: [
        {
          title: 'Eliminating Clichés & Constructing Compelling Hooks',
          content: 'Avoid cliché openers like "I am writing to apply for the position advertised on your website." Instead, hook the reader with insight: "Having followed Skillora\'s recent launch of AI adaptive learning paths, I was inspired by your vision of accessible education..."',
          explanation: 'Demonstrating that you researched the company sets you apart from 95% of candidates who send automated generic blasts.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Cliché Replacement Guide',
              code: `Cliché: I am a dynamic self-starter and out-of-the-box thinker.\nPowerful: In my previous role, I independently pioneered an automated triage pipeline that saved 15 engineering hours weekly.\n\nCliché: I have excellent communication skills.\nPowerful: I have facilitated cross-functional alignment across 4 international engineering teams spanning 3 time zones.\n\nCliché: I am a perfectionist.\nPowerful: I implement automated CI/CD test suites that maintain a 99.98% production defect-free release record.`
            },
            {
              language: 'markdown',
              title: 'Example 2: Tailored In-Body Cover Letter',
              code: `Subject: Senior Product Manager Application - Leila Chen\n\nDear Mr. Thornton,\n\nWhen Skillora AI announced its multi-modal interactive assessments last month, I immediately recognized the immense engineering and pedagogical innovation behind the platform. As a Senior Product Manager with seven years scaling SaaS learning tools, I would love to bring my user-centric product framework to your core team.\n\nAt LearnSphere, I led a product squad of 12 engineers and designers to launch our enterprise analytics dashboard. By interviewing over 80 enterprise L&D directors, we built customized reporting workflows that generated $1.8M in new ARR within the first two quarters of release.\n\nI admire Skillora's commitment to real-time skill mastery, and I am excited about the opportunity to expand your enterprise product offerings. My resume is attached for your review, and I welcome the chance to speak with your team.\n\nWarm regards,\nLeila Chen\nlinkedin.com/in/leila-chen | +1 (555) 456-7890`
            },
            {
              language: 'markdown',
              title: 'Example 3: Career Pivot Cover Letter',
              code: `Subject: Application: Technical Project Manager - Carlos Rivera\n\nDear Ms. Gomez,\n\nWith ten years of experience managing complex architectural construction projects with budgets exceeding $15M, I have developed deep expertise in risk mitigation, sprint scheduling, and cross-discipline stakeholder management. I am now channeling these agile coordination capabilities into technology project management at Skillora Global.\n\nManaging complex civil projects taught me that successful delivery hinges on transparent communication and rigorous dependency tracking. I have recently achieved my PMP and Scrum Master certifications, and I am eager to apply this rigorous execution mindset to your software engineering sprints.\n\nThank you for considering my application. I have attached my resume and certification credentials.\n\nSincerely,\nCarlos Rivera`
            }
          ],
          commonMistakes: [
            'Focusing on what the company can do for you rather than what value you deliver to them.',
            'Writing a generic letter that could be sent to 50 different competitors without changing a word.',
            'Repeating your resume line-for-line instead of telling the story behind the milestones.'
          ],
          proTip: 'Mention a specific recent product launch, blog post, or initiative from the company to prove you did your homework.'
        }
      ],
      keyTakeaways: [
        'Replace generic buzzwords with concrete examples of past execution.',
        'Frame your story around the specific problems the hiring team needs to solve.',
        'Show authentic alignment with the organization’s mission.'
      ],
      practiceExercises: [
        {
          title: 'Cliché Elimination Lab',
          instructions: 'Identify 5 clichés in a provided sample cover letter and replace each with a quantified accomplishment narrative.'
        }
      ]
    },
    questions: [
      {
        id: 4,
        topic: "Cover Letter Emails",
        question: "Why should you avoid phrases like 'I am a dynamic self-starter who thinks outside the box'?",
        options: [
          "Because recruiters prefer short words only",
          "Because they are overused clichés that communicate zero specific evidence of your actual competence",
          "Because 'box' is an unprofessional word",
          "Because computers cannot read metaphors"
        ],
        correctAnswer: 1,
        explanation: "Vague buzzwords provide no verifiable data; replacing them with concrete examples of past achievements proves your value."
      }
    ]
  },
  {
    id: 'eew-int-05',
    orderIndex: 5,
    title: '17. Interview and Follow-Up Emails',
    description: 'Navigate the complete post-interview communication lifecycle: interview confirmations, post-interview gratitude notes, status inquiries, offer negotiations, and polite offer rejections.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'The interview process does not end when you log off Zoom. Thoughtful, strategically timed follow-up emails demonstrate executive presence, emotional intelligence, and enduring enthusiasm for the role.',
      objectives: [
        'Confirm interview details and clarify panel schedules in advance',
        'Draft personalized post-interview thank-you notes referencing specific discussion points',
        'Inquire about decision timelines diplomatically after the stated response window',
        'Professionally accept or decline job offers while maintaining industry networks'
      ],
      sections: [
        {
          title: 'The Post-Interview Communication Timeline',
          content: 'Within 24 Hours: Send a personalized thank-you note to each interviewer.\nIf No Response After Stated Date: Wait 2-3 business days past their deadline, then send a polite status inquiry.\nUpon Offer: Acknowledge receipt within 24 hours and request 2-3 days to review terms.',
          explanation: 'Consistent professionalism at every milestone reassures hiring teams of your reliable communication habits.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: High-Impact Post-Interview Thank-You',
              code: `Subject: Thank You: Product Strategy Interview - Marcus Sterling\n\nDear Dr. Vance,\n\nThank you for taking the time to speak with me yesterday regarding the Lead Architect position at Skillora AI. I thoroughly enjoyed our discussion regarding the architectural challenges of real-time multi-tenant data synchronization.\n\nOur conversation further reinforced my enthusiasm for joining your engineering group. In particular, your insight on using event-driven WebSockets for collaborative learning sessions resonated with my recent work scaling Redis Pub/Sub channels at NexaTech.\n\nPlease feel free to contact me if you need any further architectural samples or references. I look forward to hearing about next steps in the hiring process.\n\nWarm regards,\nMarcus Sterling\n+1 (555) 345-6789`
            },
            {
              language: 'markdown',
              title: 'Example 2: Diplomatic Decision Status Follow-Up',
              code: `Subject: Status Inquiry: Senior Full-Stack Engineer Position - Marcus Sterling\n\nDear Ms. Albright,\n\nI hope you are having a wonderful week.\n\nI am writing to briefly check in regarding the status of the Senior Full-Stack Engineer position. During our interview on October 12, you mentioned that your team anticipated finalizing decisions by the end of last week.\n\nI remain very enthusiastic about the opportunity to join Skillora AI and contribute to your engineering milestones. Please let me know if there are any additional details or references I can provide.\n\nThank you again for your time and guidance.\n\nBest regards,\nMarcus Sterling`
            },
            {
              language: 'markdown',
              title: 'Example 3: Professional Job Offer Acceptance',
              code: `Subject: Formal Offer Acceptance: Senior Full-Stack Engineer - Marcus Sterling\n\nDear Ms. Albright,\n\nI am delighted to formally accept your offer for the Senior Full-Stack Engineer position at Skillora AI. I am thrilled about the opportunity to collaborate with Dr. Vance and the entire engineering department.\n\nAs outlined in the offer letter, I confirm my acceptance of the following terms:\n- Title: Senior Full-Stack Engineer\n- Start Date: Monday, November 16, 2026\n- Compensation: $145,000 USD Annual Base Salary + Standard Benefits Package\n\nI have signed and attached the completed employment agreement and tax documentation. Please let me know if there are any pre-onboarding materials I should review prior to my start date.\n\nThank you once again for this incredible opportunity.\n\nWarm regards,\nMarcus Sterling`
            }
          ],
          commonMistakes: [
            'Sending the identical copy-pasted thank you note to 5 different interviewers on the same panel.',
            'Following up 3 times in 48 hours (gives an impression of impatience and anxiety).',
            'Ghosting a company when declining an offer instead of sending a courteous note.'
          ],
          proTip: 'Take quick notes immediately after every interview so you can reference an exact topic or question in your thank-you email.'
        }
      ],
      keyTakeaways: [
        'Send tailored thank-you notes within 24 hours of each interview.',
        'Reference specific technical or cultural discussion points.',
        'Always confirm formal terms in writing when accepting a job offer.'
      ],
      practiceExercises: [
        {
          title: 'Post-Interview Scenario Workshop',
          instructions: 'Draft a post-interview thank you email and a 1-week status check-in email based on a simulated interview scenario.'
        }
      ]
    },
    questions: [
      {
        id: 5,
        topic: "Interview and Follow-Up Emails",
        question: "When sending thank-you notes to three different interviewers on the same hiring panel, what is the best practice?",
        options: [
          "Send one group email to all three at once with the subject 'Thanks guys'",
          "Send three identical emails using the same generic template",
          "Send three separate personalized emails, referencing a unique discussion point from each individual conversation",
          "Do not send any email because it annoys interviewers"
        ],
        correctAnswer: 2,
        explanation: "Personalizing each email with a unique discussion topic shows deep attentiveness and respect for each interviewer's individual perspective."
      }
    ]
  },
  {
    id: 'eew-int-06',
    orderIndex: 6,
    title: '18. Business Inquiry Emails',
    description: 'Master external B2B commercial inquiries: requesting product specifications, enterprise pricing quotations, bulk discounts, delivery timelines, and partnership feasibility.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Commercial inquiry emails establish new B2B supplier and partner relationships. Clear inquiries with detailed operational requirements ensure you receive rapid, accurate pricing and proposal responses.',
      objectives: [
        'Structure comprehensive commercial requests for quotations (RFQ)',
        'Specify procurement volume, service-level agreements (SLA), and delivery constraints',
        'Ask pointed questions regarding enterprise licensing and compliance',
        'Establish firm timeline expectations for vendor proposal submissions'
      ],
      sections: [
        {
          title: 'Structuring High-Response Commercial Inquiries',
          content: 'A B2B inquiry must provide background on your organization, declare specific technical/volume requirements, list numbered queries, and define proposal deadlines.',
          explanation: 'Suppliers prioritize serious corporate buyers who provide concrete operational parameters.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Enterprise Software License Inquiry',
              code: `Subject: Quotation Request: Enterprise AI Learning Platform - 500 Seats (Skillora AI)\n\nDear Enterprise Sales Team,\n\nI am writing on behalf of Skillora Global, an international educational technology enterprise with 850 employees. We are currently evaluating cloud infrastructure solutions to host our new interactive coding laboratory environments.\n\nWe are requesting a formal quotation and feature breakdown for an initial deployment of 500 concurrent developer workspaces. Specifically, we would appreciate information regarding:\n\n1. Enterprise Pricing: Annual volume licensing rates for 500 seats with tiered pricing for future expansion.\n2. Security & Compliance: SOC2 Type II and GDPR compliance certifications.\n3. API Integration: SSO (Okta/SAML) support and REST API rate limits.\n4. Support & SLAs: Standard response time SLAs for critical severity incidents.\n\nWe aim to finalize vendor selections by November 15. Could you please share your standard enterprise proposal by Wednesday, October 28?\n\nThank you for your assistance. We look forward to your response.\n\nBest regards,\nNathan Cole\nDirector of Technology Procurement | Skillora Global\nnathan.c@skillora.ai | +1 (555) 678-1234`
            },
            {
              language: 'markdown',
              title: 'Example 2: Physical Hardware / Bulk Supply Inquiry',
              code: `Subject: Bulk Pricing & Availability Inquiry: Custom Ergonomic Desks (Ref: #SK-802)\n\nDear Sales Division,\n\nOur facilities management team is currently outfitting our new corporate headquarters in Austin, Texas. We are interested in procuring 120 units of your Dual-Motor Adjustable Standing Desk (Model: ErgoPro X2, Matte Black finish).\n\nCould you please provide details on:\n- Tiered bulk discount pricing for 120 units\n- Freight shipping costs and delivery lead time to Austin, TX (ZIP 78701)\n- Standard commercial warranty terms\n\nThank you for your prompt response.\n\nSincerely,\nRachel Miller\nFacilities Coordinator | Skillora AI`
            },
            {
              language: 'markdown',
              title: 'Example 3: Partnership / Integration Feasibility Inquiry',
              code: `Subject: Partnership Inquiry: Skillora AI & CodeVerify LMS Integration\n\nDear Partnerships Team,\n\nI am reaching out from Skillora AI. Our platform provides automated real-time coding assessments to over 100,000 engineering students globally.\n\nWe have received numerous requests from joint institutional customers to enable seamless gradebook synchronization between Skillora and CodeVerify LMS. We would love to explore a technical partnership to build an official LTI 1.3 integration.\n\nWould you be open to a 20-minute introductory call next week to discuss mutual integration benefits?\n\nWarm regards,\nJordan Patel\nHead of Ecosystem Partnerships | Skillora AI`
            }
          ],
          commonMistakes: [
            'Sending vague inquiries like "Send me prices for your software" without mentioning user counts.',
            'Forgetting to mention procurement deadlines or timeline constraints.',
            'Omitting your corporate email address and company domain.'
          ],
          proTip: 'Number your questions (1, 2, 3) in inquiry emails. Vendors will reply with corresponding numbered answers, ensuring no question is skipped.'
        }
      ],
      keyTakeaways: [
        'Provide organizational context and specific volume estimates.',
        'Use numbered questions for pricing, compliance, and SLA terms.',
        'State clear proposal submission deadlines.'
      ],
      practiceExercises: [
        {
          title: 'Commercial Inquiry Drafting Lab',
          instructions: 'Draft a formal B2B request for proposal for 250 enterprise laptop workstations including specs, bulk discounts, and warranty terms.'
        }
      ]
    },
    questions: [
      {
        id: 6,
        topic: "Business Inquiry Emails",
        question: "Why should you use a numbered list (1, 2, 3) when asking multiple questions in a vendor inquiry email?",
        options: [
          "It forces the vendor to answer each point systematically without overlooking questions",
          "Email software cannot format bullet points",
          "It makes the email twice as long",
          "Vendors charge less money when questions are numbered"
        ],
        correctAnswer: 0,
        explanation: "Numbered questions establish a clear, structured framework that allows the vendor to respond point-by-point, eliminating skipped questions."
      }
    ]
  },
  {
    id: 'eew-int-07',
    orderIndex: 7,
    title: '19. Customer-Service Emails',
    description: 'Learn industry-standard customer support email frameworks: de-escalating customer frustration, demonstrating empathy, explaining delays, delivering solutions, and creating brand advocates.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Customer support emails represent the front line of brand trust. How you respond to service disruptions, billing questions, and system glitches dictates whether a frustrated user becomes a vocal critic or a loyal champion.',
      objectives: [
        'Master the LAST Framework (Listen, Apologize, Solve, Thank)',
        'Craft authentic, non-defensive apologies that validate customer frustration',
        'Deliver clear, step-by-step technical troubleshooting instructions',
        'Turn service recovery into long-term customer loyalty'
      ],
      sections: [
        {
          title: 'The LAST Customer Recovery Framework',
          content: 'L - Listen/Acknowledge: State understanding of the specific issue.\nA - Apologize: Offer a genuine, empathetic apology without making excuses.\nS - Solve: Present the immediate solution and preventative steps.\nT - Thank: Express gratitude for the customer\'s patience and feedback.',
          explanation: 'Empathetic, decisive support communications reduce churn and de-escalate emotional friction instantly.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Resolving a Critical Billing Overcharge',
              code: `Subject: Refund Confirmation & Sincere Apologies Regarding Invoice #4920\n\nDear Mr. Harrison,\n\nThank you for bringing the billing discrepancy on Invoice #4920 to our attention yesterday.\n\nI sincerely apologize for the frustration this overcharge caused. I have investigated your account and confirmed that our automated billing system incorrectly applied an enterprise add-on charge of $120 following your recent workspace upgrade.\n\nAction Taken:\n1. We have issued a full refund of $120.00 directly to your card ending in 4102. Please allow 2-3 business days for your banking institution to post the credit.\n2. We have updated your billing profile to ensure correct subscription tier rates apply going forward.\n3. As a courtesy for the inconvenience, we have credited your account with one month of complimentary platform access.\n\nPlease find your updated zero-balance statement attached. If you have any further questions, I am personally at your service.\n\nThank you for your continued partnership with Skillora AI.\n\nWarm regards,\nClara Oswald\nSenior Customer Success Lead | Skillora AI\nclara.o@skillora.ai`
            },
            {
              language: 'markdown',
              title: 'Example 2: Explaining a System Outage Empathetically',
              code: `Subject: Update: Skillora AI Assessment Engine Access Restored\n\nDear Professor Sterling,\n\nThank you for reaching out regarding the unexpected error your students encountered during yesterday's midterm assessment.\n\nI truly understand how stressful disruptions during active examination sessions are, and I want to apologize directly for the inconvenience this caused your department. Our database cluster experienced an intermittent connection failover between 14:15 and 14:45 UTC, which prevented session tokens from validating.\n\nResolution & Next Steps:\n- Our engineering team deployed a database patch at 15:00 UTC, and all assessment grading engines are operating normally.\n- We have reset the examination attempt counters for all 45 affected students in your course so they can complete the remaining questions without penalty.\n\nPlease let me know if any individual student requires further assistance. Thank you for your patience and understanding.\n\nSincerely,\nCustomer Support Operations Team`
            },
            {
              language: 'markdown',
              title: 'Example 3: De-escalating an Angry Client',
              code: `Subject: Personal Follow-Up on Your Account Migration - Skillora AI\n\nDear Ms. Vance,\n\nI received your note regarding the data migration delays on your enterprise portal. You are entirely right to be frustrated—this transition has taken longer than the 24-hour timeline we promised, and that falls short of our standards.\n\nI have personally taken ownership of your migration ticket. I am coordinating directly with our Principal Infrastructure Engineer to finalize your custom data fields today by 4:00 PM EST.\n\nI will send you a progress update at 2:00 PM EST, and will remain on standby to verify the dashboard with you once live.\n\nThank you for your candid feedback and patience while we resolve this.\n\nWarm regards,\nArthur Pendelton\nHead of Customer Experience | Skillora AI`
            }
          ],
          commonMistakes: [
            'Blaming other departments or third-party vendors ("Our IT team messed up").',
            'Using robotic boilerplate text that fails to address the customer\'s specific emotional state.',
            'Promising unrealistic resolution times that lead to second-round disappointments.'
          ],
          proTip: 'Use the customer’s name, acknowledge their specific problem, and take personal ownership ("I will handle this personally").'
        }
      ],
      keyTakeaways: [
        'Apply the LAST framework: Listen, Apologize, Solve, Thank.',
        'Take personal ownership without passing blame to colleagues.',
        'Follow up after resolution to confirm customer satisfaction.'
      ],
      practiceExercises: [
        {
          title: 'Customer Complaint De-escalation Lab',
          instructions: 'Draft a complete customer service response to a furious client whose account was accidentally suspended during a critical marketing campaign.'
        }
      ]
    },
    questions: [
      {
        id: 7,
        topic: "Customer-Service Emails",
        question: "When responding to a customer whose account was incorrectly billed, what is the best opening approach?",
        options: [
          "Explain that the customer probably didn't read the terms of service carefully",
          "Thank them for alerting you, offer a sincere empathetic apology, and take immediate ownership of the resolution",
          "Ignore the email and hope the bank handles the refund automatically",
          "Send a link to the FAQ page without writing any text"
        ],
        correctAnswer: 1,
        explanation: "Thanking the customer, apologizing sincerely, and taking immediate ownership validates their experience and starts the de-escalation process."
      }
    ]
  },
  {
    id: 'eew-int-08',
    orderIndex: 8,
    title: '20. Complaint and Escalation Emails',
    description: 'Learn how to write firm, objective, highly effective complaint and escalation emails when vendors, services, or internal departments fail to meet commitments.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Writing a complaint or escalation email is a delicate leadership skill. A well-constructed escalation avoids emotional outbursts, anchors its case in verifiable facts, articulates clear business impact, and demands actionable executive remediation.',
      objectives: [
        'Master the 4-part escalation framework: Facts, Impact, Contractual Reference, Remedy',
        'Maintain a firm, professional tone without resorting to threats or emotional language',
        'Set specific deadlines for executive response and corrective action plans',
        'Know when and how to loop in executive leadership (CC discipline)'
      ],
      sections: [
        {
          title: 'The 4-Part Executive Escalation Framework',
          content: '1. Summary of Facts: Objective chronological timeline of missed milestones.\n2. Business Impact: Quantifiable cost, operational downtime, or client risks incurred.\n3. Contract / SLA Benchmark: Reference to specific agreed-upon clauses.\n4. Required Remedy & Deadline: Explicit corrective actions required within a defined timeframe.',
          explanation: 'Emotional emails are easily dismissed as subjective rants; factual, impact-driven escalations trigger immediate executive intervention.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: High-Level Vendor Service Escalation',
              code: `Subject: [Urgent Escalation] Breach of SLA: Cloud Server Uptime - October 2026 (Contract #CS-9082)\n\nDear Mr. Montgomery,\n\nI am writing to formally escalate a critical service reliability issue regarding our enterprise hosting contract (#CS-9082). Over the past 14 days, Skillora AI has experienced three unannounced production outages totaling 4.2 hours of downtime.\n\nChronology of Incidents:\n- Oct 4: 1.5 hours unplanned downtime during peak EU business hours\n- Oct 9: 1.2 hours database failover failure\n- Oct 16: 1.5 hours network gateway outage\n\nBusiness Impact:\nThese repeated outages directly disrupted 45,000 active enterprise learners and represent a direct breach of Section 4.2 of our Master Services Agreement, which guarantees 99.95% monthly availability.\n\nRequired Action Plan:\n1. Submission of a comprehensive Root Cause Analysis (RCA) by Thursday, Oct 22 at 5:00 PM EST.\n2. Implementation of redundant gateway failover mechanisms by Oct 28.\n3. Application of contractual SLA downtime credits to our October invoice.\n\nWe value our multi-year relationship with CloudScale Systems, but we require immediate executive assurance that these reliability failures will be permanently resolved.\n\nSincerely,\nElena Rostova\nVice President of Engineering | Skillora AI\nelena.r@skillora.ai`
            },
            {
              language: 'markdown',
              title: 'Example 2: Internal Cross-Functional Escalation',
              code: `Subject: Escalation: Delay in Security Compliance Sign-off for Project Aurora\n\nDear Marcus,\n\nI am reaching out to request your urgent assistance in unblocking the security compliance review for Project Aurora. The compliance documentation was submitted on October 2, with an agreed 5-day review SLA.\n\nAs of today, October 16, the review remains pending. This delay now poses a direct risk to our contractual client launch scheduled for November 1.\n\nCould we please convene a brief 15-minute sync tomorrow morning to review open compliance items and confirm a sign-off timeline?\n\nThank you for your partnership in unblocking this release.\n\nBest regards,\nDavid Zhao\nDirector of Infrastructure`
            },
            {
              language: 'markdown',
              title: 'Example 3: Commercial Damaged Goods Complaint',
              code: `Subject: Formal Complaint & Replacement Request: Damaged Hardware Shipment (PO #98421)\n\nDear Logistics Management,\n\nWe received shipment PO #98421 containing 40 enterprise server blades this morning. Upon inspection, 8 of the 40 units sustained severe chassis damage due to improper crate packing.\n\nAttached Documentation:\n- High-resolution photographs of damaged packaging and crushed chassis\n- Delivery courier signed Bill of Lading with damage notations\n\nRequired Resolution:\nPlease dispatch 8 expedited replacement units by tomorrow afternoon and arrange collection of the damaged equipment at your expense.\n\nThank you for your prompt resolution.\n\nSincerely,\nNathan Cole\nProcurement Manager`
            }
          ],
          commonMistakes: [
            'Using emotional insults, all-caps, or dramatic threats that derail legal Standing.',
            'Failing to provide documentation (photos, ticket numbers, dates, contract sections).',
            'Failing to specify the exact remedy required.'
          ],
          proTip: 'Always stick to verifiable facts: what was promised, what was delivered, what is the gap, and what is required by when.'
        }
      ],
      keyTakeaways: [
        'Structure escalations around Facts, Impact, Contractual Terms, and Remedy.',
        'Maintain impeccable emotional control; let documented facts apply the pressure.',
        'Attach photographs, logs, timestamps, and contract references.'
      ],
      practiceExercises: [
        {
          title: 'Escalation Letter Workshop',
          instructions: 'Draft a formal vendor escalation email for a 3-week software delivery delay that cost your company $25,000 in overtime labor.'
        }
      ]
    },
    questions: [
      {
        id: 8,
        topic: "Complaint and Escalation Emails",
        question: "What makes a vendor escalation email effective and legally sound?",
        options: [
          "Using aggressive threats and insults in all capital letters",
          "Grounding the issue in documented facts, citing specific contractual SLAs, articulating business impact, and defining concrete remedies with deadlines",
          "Refusing to state what you want and asking them to guess",
          "Sending the email to every employee in both companies"
        ],
        correctAnswer: 1,
        explanation: "Objective evidence, contract references, business impact, and specific remedy deadlines command executive respect and prompt remediation."
      }
    ]
  },
  {
    id: 'eew-int-09',
    orderIndex: 9,
    title: '21. Meeting and Scheduling Emails',
    description: 'Learn the complete scheduling workflow: sending meeting invitations, proposing multiple time windows, time-zone etiquette, crafting bulleted agendas, rescheduling gracefully, and cancellations.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Scheduling friction wastes countless hours in modern organizations. Mastering concise, unambiguous meeting communications eliminates endless "when are you free?" back-and-forth emails and ensures attendees arrive prepared.',
      objectives: [
        'Propose multi-slot meeting times across domestic and international time zones',
        'Write structured meeting agendas with time allocations and required prep work',
        'Reschedule or cancel meetings courteously with clear justifications',
        'Include all vital digital assets (video links, dial-ins, prep documents) in the invitation'
      ],
      sections: [
        {
          title: 'The Frictionless Scheduling Formula',
          content: 'When requesting a meeting, always: 1) State the purpose and duration (e.g., 30 mins), 2) Propose 2-3 specific dates and times with time zones, 3) Provide a calendar booking link if available, 4) Outline the agenda.',
          explanation: 'Giving recipients concrete options reduces scheduling friction to a single reply.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Multi-Time-Zone Meeting Invitation',
              code: `Subject: Meeting Request: Q4 Partnership Roadmap (30 Mins)\n\nDear Ms. Kensington,\n\nI hope this email finds you well.\n\nFollowing our discussion at the EdTech Summit, I would love to schedule a 30-minute video conference next week to explore our proposed API integration and co-marketing roadmap.\n\nProposed Times (US Eastern / UK GMT):\n- Option 1: Tuesday, October 20 at 10:00 AM EST (3:00 PM GMT)\n- Option 2: Wednesday, October 21 at 11:30 AM EST (4:30 PM GMT)\n- Option 3: Thursday, October 22 at 9:00 AM EST (2:00 PM GMT)\n\nAlternatively, please feel free to select any slot that fits your schedule via my calendar link: https://cal.skillora.ai/jordan-patel\n\nAgenda:\n1. API Integration Scope (15 mins)\n2. Co-marketing timeline (10 mins)\n3. Next steps & action items (5 mins)\n\nI look forward to speaking with you.\n\nWarm regards,\nJordan Patel\nHead of Partnerships | Skillora AI`
            },
            {
              language: 'markdown',
              title: 'Example 2: Rescheduling with Courteous Options',
              code: `Subject: Rescheduling Request: Marketing Strategy Sync (was: Tomorrow 10 AM)\n\nHi Sarah,\n\nPlease accept my apologies, but an unavoidable client executive briefing has been scheduled during our planned sync tomorrow at 10:00 AM EST.\n\nCould we move our session to one of the following times?\n- Tomorrow (Wednesday) at 2:00 PM EST\n- Thursday at 11:00 AM EST\n- Friday at 9:30 AM EST\n\nI apologize for any disruption to your calendar and appreciate your flexibility.\n\nBest regards,\nElena`
            },
            {
              language: 'markdown',
              title: 'Example 3: Polite Cancellation with Next Steps',
              code: `Subject: Cancellation: Bi-Weekly Backlog Review - Friday, Oct 23\n\nHello Team,\n\nBecause all sprint deliverables for Milestone 3 have already been finalized and approved asynchronously in Jira, we are cancelling this Friday's Backlog Review meeting to give everyone dedicated focus time.\n\nNext Steps:\nPlease review the asynchronous sprint board notes by Monday at 10 AM. Our next scheduled live sync will be Friday, November 6.\n\nHave a great weekend,\nDavid Zhao`
            }
          ],
          commonMistakes: [
            'Saying "Let\'s meet sometime next week" without offering any specific times or dates.',
            'Forgetting to specify the time zone (causing 1-hour or 5-hour missed meetings).',
            'Sending calendar invites without any agenda or context in the description.'
          ],
          proTip: 'Always include the meeting link directly in the body of the email and inside the calendar invite description.'
        }
      ],
      keyTakeaways: [
        'Offer 2-3 specific time windows with clearly labeled time zones.',
        'Include a structured, time-stamped agenda for every meeting over 15 minutes.',
        'Provide calendar links as a secondary convenience.'
      ],
      practiceExercises: [
        {
          title: 'Scheduling Mastery Lab',
          instructions: 'Draft an email inviting an executive in Tokyo and a manager in London to a 45-minute sync, calculating appropriate global time overlaps.'
        }
      ]
    },
    questions: [
      {
        id: 9,
        topic: "Meeting and Scheduling Emails",
        question: "When proposing meeting times to an external client in a different time zone, what is the most courteous and effective method?",
        options: [
          "Offer 2-3 specific dates and times with both your time zone and the client's time zone clearly stated",
          "Demand that they call you whenever your phone rings",
          "Ask them 'When are you free?' without proposing any options",
          "Schedule a meeting at midnight their time without asking"
        ],
        correctAnswer: 0,
        explanation: "Proposing specific times with dual time-zone conversions minimizes mental math and scheduling back-and-forth for the client."
      }
    ]
  },
  {
    id: 'eew-int-10',
    orderIndex: 10,
    title: '22. Reminder and Follow-Up Emails',
    description: 'Master the psychology of gentle, effective follow-ups: milestone reminders, deadline warnings, invoice payment nudges, and post-meeting action item summaries.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'People are busy, and emails get buried. Following up effectively without sounding impatient, irritating, or desperate is a critical professional competency.',
      objectives: [
        'Master the 3-tier follow-up escalation cadence: Gentle, Firm, Urgent',
        'Craft non-intrusive nudges that make it easy for recipients to take action',
        'Send structured post-meeting action item summaries that enforce accountability',
        'Follow up on overdue commercial invoices professionally'
      ],
      sections: [
        {
          title: 'The 3-Tier Follow-Up Framework',
          content: 'Tier 1 (Gentle Nudge - 3-5 days after original note): "Bringing this to the top of your inbox..."\nTier 2 (Firm Reminder - 1-2 days before deadline): "Checking in as our Friday deadline approaches..."\nTier 3 (Urgent / Past Due): "Urgent action required on overdue approval..."',
          explanation: 'Gradually escalating urgency ensures you maintain courtesy while securing critical deliverables on time.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Gentle Document Approval Nudge',
              code: `Subject: Gentle Follow-Up: Marketing Agreement Draft Approval\n\nHi Liam,\n\nI hope you are having a productive week.\n\nI wanted to gently follow up on the Marketing Agreement draft sent on Tuesday. We are hoping to finalize vendor onboarding by Friday.\n\nCould you please review the attached 2-page document and let me know if you have any questions or requested edits?\n\nThank you for your time and assistance.\n\nBest regards,\nElena`
            },
            {
              language: 'markdown',
              title: 'Example 2: Overdue Invoice Reminder (14 Days Past Due)',
              code: `Subject: Reminder: Invoice #1092 Past Due (Skillora AI Consulting Services)\n\nDear Accounts Payable Team,\n\nI hope this email finds you well.\n\nAccording to our financial records, Invoice #1092 for $6,200.00 USD, issued on September 15 with Net 30 terms, is now 14 days past due.\n\nSummary of Account:\n- Invoice Number: #1092\n- Amount Due: $6,200.00 USD\n- Original Due Date: October 15, 2026\n\nI have attached a duplicate copy of the invoice along with our wire transfer banking instructions. Could you please confirm when this payment is scheduled for disbursement?\n\nIf you have already processed this remittance, please disregard this note and accept our thanks.\n\nSincerely,\nBeatrice Clarke\nFinance & Accounts Manager | Skillora AI`
            },
            {
              language: 'markdown',
              title: 'Example 3: Post-Meeting Action Item Summary',
              code: `Subject: [Summary & Action Items] Q4 Product Roadmap Alignment Sync - Oct 14\n\nHi Team,\n\nThank you for participating in today's roadmap alignment session. Here is the summary of agreed-upon decisions and action items:\n\nKey Decisions:\n- Approved UI redesign release date for November 15.\n- Allocated 2 additional engineers to the mobile authentication sprint.\n\nAction Items & Owners:\n1. Marcus: Finalize GraphQL schema specifications by Friday, Oct 16.\n2. Leila: Complete user testing prototype interviews by Tuesday, Oct 20.\n3. David: Provision staging Kubernetes clusters by Wednesday, Oct 21.\n\nNext Check-in: Monday morning standup.\n\nBest regards,\nSarah Jenkins`
            }
          ],
          commonMistakes: [
            'Following up within 2 hours of sending the original email.',
            'Forwarding the previous email with only the passive-aggressive text: "?" or "Thoughts?"',
            'Failing to attach the document being referenced in the reminder.'
          ],
          proTip: 'Always re-attach the document or link in your follow-up email. Never make the recipient search through their inbox for the original file.'
        }
      ],
      keyTakeaways: [
        'Match follow-up urgency to the realistic timeline of the task.',
        'Always re-attach the relevant file or invoice in your reminder.',
        'Post-meeting summaries enforce accountability with named owners and dates.'
      ],
      practiceExercises: [
        {
          title: 'Follow-Up Drafting Workshop',
          instructions: 'Draft a Tier 1 gentle nudge, a Tier 2 deadline reminder, and a post-meeting action item summary.'
        }
      ]
    },
    questions: [
      {
        id: 10,
        topic: "Reminder and Follow-Up Emails",
        question: "When sending a follow-up email about a document sent previously, what should you always do?",
        options: [
          "Demand that the recipient explain why they were slow",
          "Re-attach the document for their convenience so they do not have to search for it",
          "Send 10 identical follow-ups in a row",
          "Change the font color to bright yellow"
        ],
        correctAnswer: 1,
        explanation: "Re-attaching the document removes friction and allows the recipient to review and respond immediately without hunting for old emails."
      }
    ]
  },
  {
    id: 'eew-int-11',
    orderIndex: 11,
    title: '23. Persuasive and Sales Emails',
    description: 'Master ethical, high-converting B2B sales outreach and internal persuasion: crafting irresistible value propositions, pain-point targeting, social proof, and low-friction CTAs.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Persuasive writing is not about aggressive manipulation; it is about empathy and problem-solving. By understanding your recipient\'s operational pain points and clearly articulating quantifiable value, you can inspire action and build partnerships.',
      objectives: [
        'Apply the PAS Framework (Problem, Agitate, Solve) to business communications',
        'Craft compelling value propositions with concrete ROI metrics',
        'Avoid spam trigger phrases and aggressive sales gimmicks',
        'Design low-friction, high-conversion calls to action'
      ],
      sections: [
        {
          title: 'The Problem-Agitate-Solve (PAS) Framework',
          content: 'Problem: Identify an acute operational inefficiency the recipient faces.\nAgitate: Quantify the cost, delay, or risk of leaving the problem unaddressed.\nSolve: Present your solution with evidence and a low-commitment next step.',
          explanation: 'Aligning your proposal with the recipient\'s existing priorities creates immediate relevance.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: B2B Enterprise Cold Outreach',
              code: `Subject: Streamlining Developer Onboarding at Acme Corp\n\nDear Mr. Henderson,\n\nI noticed that Acme Corp recently expanded its engineering organization by hiring 40 new full-stack developers. Congratulations on this exciting growth phase.\n\nScaling an engineering team rapidly often creates onboarding bottlenecks—senior engineers spend up to 15 hours weekly configuring sandbox environments and grading code reviews instead of shipping core features.\n\nSkillora AI provides automated interactive sandboxes and instant code evaluation. We recently helped NexaTech reduce junior developer ramp-up time from 6 weeks to 12 days while freeing up 250 senior engineering hours per month.\n\nWould you be open to a brief 15-minute conversation this Thursday at 10 AM EST to see how we can accelerate Acme's developer onboarding?\n\nBest regards,\nJulian Hayes\nEnterprise Solutions Director | Skillora AI\njulian.h@skillora.ai`
            },
            {
              language: 'markdown',
              title: 'Example 2: Internal Persuasion for New Software Budget',
              code: `Subject: Proposal: Implementing Automated Testing Suite for Mobile App\n\nDear Executive Team,\n\nOver the past two quarters, manual regression testing has delayed our bi-weekly mobile releases by an average of 4.5 days per sprint, resulting in $38,000 in estimated overtime engineering costs.\n\nBy adopting the TestCloud automated testing framework ($12,000 annual license), our QA squad can execute 1,200 device test runs in under 20 minutes.\n\nExpected ROI:\n- Release cycle reduction: From 4.5 days to 2 hours\n- Net Annual Cost Savings: $26,000 USD\n- Defect Escape Rate: Projected 60% reduction\n\nI have attached the full technical vendor evaluation. I request approval to initiate a 30-day proof-of-concept trial.\n\nSincerely,\nDavid Zhao\nDirector of Infrastructure`
            },
            {
              language: 'markdown',
              title: 'Example 3: Low-Friction Call to Action (CTA) Examples',
              code: `High Friction (Fails often):\n- Can we schedule a 2-hour software demonstration tomorrow?\n- Please sign this $50,000 contract right now.\n\nLow Friction (High conversion):\n- Would you be open to a 10-minute introductory call this week?\n- Would it make sense for me to share a 2-minute video walkthrough?\n- If this is not a priority right now, who on your team oversees developer tooling?`
            }
          ],
          commonMistakes: [
            'Talking 90% about your own company features rather than the client\'s specific problems.',
            'Using clickbait spam subject lines ("RE: YOUR ACCOUNT IS SUSPENDED").',
            'Demanding huge time commitments in the first interaction.'
          ],
          proTip: 'Keep initial sales outreach emails under 125 words. Respect the prospect’s time and focus on sparking curiosity.'
        }
      ],
      keyTakeaways: [
        'Lead with the prospect\'s pain point rather than your product features.',
        'Provide quantifiable proof and case study metrics.',
        'Use low-friction calls to action (10-15 minute syncs or video summaries).'
      ],
      practiceExercises: [
        {
          title: 'Persuasive Email Pitch Lab',
          instructions: 'Draft a 100-word B2B sales outreach email using the PAS framework, targeting an enterprise Chief Information Officer.'
        }
      ]
    },
    questions: [
      {
        id: 11,
        topic: "Persuasive and Sales Emails",
        question: "In professional B2B outreach, which call to action (CTA) generates the highest positive response rate?",
        options: [
          "Please wire $10,000 to our account immediately",
          "Would you be open to a brief 10-minute introductory conversation this Thursday?",
          "You must buy our product right now or regret it",
          "Sign this contract before reading it"
        ],
        correctAnswer: 1,
        explanation: "A low-friction, 10-minute exploratory conversation lowers the psychological barrier to reply and starts a collaborative relationship."
      }
    ]
  },
  {
    id: 'eew-int-12',
    orderIndex: 12,
    title: '24. Internal Workplace Communication',
    description: 'Master internal company communication: downward task delegation, horizontal peer collaboration, upward executive briefings, and delivering diplomatic constructive feedback.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Internal workplace communication creates team culture, speeds up execution, and prevents operational silos. Knowing how to communicate up, down, and across the organizational chart ensures high alignment.',
      objectives: [
        'Communicate effectively across 3 organizational vectors: Upward, Lateral, and Downward',
        'Delegate tasks with unambiguous deliverables, resources, and deadlines',
        'Request leadership sign-offs using structured decision briefing formats',
        'Deliver peer feedback constructively without triggering defensiveness'
      ],
      sections: [
        {
          title: 'The 3 Vectors of Workplace Communication',
          content: 'Upward (to Executives): Focus on bottom-line impact, risks, recommendations, and decisions needed.\nLateral (to Peers): Collaborative, transparent, empathetic, focused on mutual deliverables.\nDownward (to Direct Reports): Clear context, explicit success metrics, resources, and supportive guidance.',
          explanation: 'Adapting your communication style to the organizational vector ensures effective collaboration across all levels.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Downward Task Delegation',
              code: `Subject: Task Assignment: User Analytics Dashboard Wireframes - Due Friday 3 PM\n\nHi Maya,\n\nAs discussed in our morning sprint planning, I would like you to take ownership of designing the User Analytics Dashboard wireframes for Project Orion.\n\nKey Deliverables:\n1. Low-fidelity wireframes in Figma covering 3 core views (Overview, Retention, Export)\n2. Interactive prototype demonstrating filter dropdown interactions\n\nResources & Constraints:\n- Brand UI Kit: https://figma.com/file/brand-kit\n- Target Persona: Enterprise L&D Directors\n- Deadline: Friday, October 23 at 3:00 PM EST\n\nPlease let me know by tomorrow afternoon if you need any technical clarifications.\n\nBest regards,\nCarlos Rivera\nLead Product Designer`
            },
            {
              language: 'markdown',
              title: 'Example 2: Lateral Peer Collaboration Request',
              code: `Subject: Collaboration: API Payload Alignment for Mobile Checkout\n\nHi Liam,\n\nOur frontend team is preparing to integrate the new mobile cart checkout endpoints next sprint. \n\nTo ensure our state management schemas match your GraphQL resolvers, could we spend 20 minutes on Wednesday reviewing the line item mutation payload?\n\nDraft Schema Doc: https://notion.so/skillora/cart-schema\n\nPlease let me know if Wednesday at 2 PM works for your calendar.\n\nCheers,\nMarcus`
            },
            {
              language: 'markdown',
              title: 'Example 3: Diplomatic Peer Feedback',
              code: `Subject: Feedback on Q3 Marketing Report Draft\n\nHi Leila,\n\nThank you for sharing the draft of the Q3 Marketing Report. The visual layout and conversion funnel charts look fantastic.\n\nI have one small recommendation for slide 6: adding the year-over-year percentage comparison alongside the raw lead counts will help the executive team appreciate our 40% growth trajectory immediately.\n\nLet me know if you would like me to pull those historical 2025 numbers for you.\n\nBest regards,\nSarah`
            }
          ],
          commonMistakes: [
            'Delegating tasks without specifying deadlines or success criteria.',
            'Sending raw, unsummarized technical logs to non-technical executives.',
            'Giving critical feedback publicly on large multi-recipient CC chains.'
          ],
          proTip: 'Praise publicly; deliver sensitive feedback privately in 1-on-1 communications.'
        }
      ],
      keyTakeaways: [
        'Match your communication to the organizational vector (Upward, Lateral, Downward).',
        'Delegation requires defining the outcome, resources, and deadline.',
        'Deliver constructive feedback with supportive, actionable suggestions.'
      ],
      practiceExercises: [
        {
          title: 'Internal Vector Communication Lab',
          instructions: 'Draft an upward executive decision request, a lateral peer data request, and a downward delegation task email.'
        }
      ]
    },
    questions: [
      {
        id: 12,
        topic: "Internal Workplace Communication",
        question: "When delivering constructive feedback on a teammate's project draft, what is the best practice?",
        options: [
          "CC the entire company and publicly criticize their work",
          "Send a private note acknowledging positive elements first, followed by specific, actionable recommendations with an offer to help",
          "Tell them everything is perfect even if it contains critical errors",
          "Delete their files secretly without telling them"
        ],
        correctAnswer: 1,
        explanation: "Private, balanced, actionable feedback preserves morale and enables rapid iterative improvement."
      }
    ]
  },
  {
    id: 'eew-int-13',
    orderIndex: 13,
    title: '25. Email Formatting and Readability',
    description: 'Master visual layout: whitespace ratios, bolding strategies, bullet lists, typography standards, mobile responsiveness, and accessible hyperlink formatting.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Formatting is the visual architecture of your thoughts. An email with excellent content will be ignored if presented as a dense wall of text. Visual hierarchy guides the reader\'s eye effortlessly to critical decisions and deadlines.',
      objectives: [
        'Master the "Bionic Reading" bolding technique to highlight key phrases',
        'Format descriptive hyperlinks instead of pasting raw 100-character URLs',
        'Optimize font size, line spacing, and paragraph chunking for mobile viewports',
        'Use horizontal dividers and callout boxes for multi-section executive reports'
      ],
      sections: [
        {
          title: 'The Principles of Visual Hierarchy in Email',
          content: '1. Paragraph Length: Maximum 3 sentences per paragraph.\n2. Bolding: Bold the core action phrase, date, or decision item (do not bold entire paragraphs).\n3. Lists: Use bullet points for unordered items, numbered lists for sequential steps.\n4. Hyperlinks: Embed links in descriptive text ("Review the Q3 Financial Model") rather than pasting raw URLs.',
          explanation: 'Over 60% of emails are opened on smartphones. Clean formatting ensures instant comprehension on small screens.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Before and After Formatting Optimization',
              code: `Before Formatting (Unreadable block of text):\nHi team we are going to launch the new website on Friday at 3pm and we need everyone to be ready to test their features also make sure you have checked the staging server and if there are bugs report them in Jira by Thursday noon here is the link https://jira.skillora.ai/projects/web/boards/84209184029184 and please let me know if you have any questions.\n\nAfter Formatting (Clean, Scannable Visual Hierarchy):\nHi Team,\n\nWe are on track to launch the new website this **Friday, Oct 23, at 3:00 PM EST**.\n\n**Action Items for Release Readiness:**\n- **Staging Verification:** Verify your assigned features on the [Staging Server](https://staging.skillora.ai).\n- **Bug Reporting:** Log all blockers in the [Jira Release Board](https://jira.skillora.ai) by **Thursday at 12:00 PM EST**.\n- **Sign-off:** Lead engineers must submit final approval by Thursday 5:00 PM.\n\nPlease let me know if you encounter any blockers.\n\nBest regards,\nElena Rostova`
            },
            {
              language: 'markdown',
              title: 'Example 2: Descriptive Hyperlink Standards',
              code: `Poor (Pasting raw URLs):\nCheck this link https://drive.google.com/file/d/1A8z09f8a09f8a098fa098f/view?usp=sharing for the file.\n\nPoor (Click here):\nClick [here](https://drive.google.com/...) to see the report.\n\nProfessional (Descriptive anchor text):\nPlease review the [Skillora Q3 Market Analysis Report](https://drive.google.com/...) before our Friday meeting.`
            },
            {
              language: 'markdown',
              title: 'Example 3: Mobile Accessibility Best Practices',
              code: `- Use standard system fonts (Inter, Arial, Calibri) at 14px to 16px body size.\n- Maintain high contrast: Dark charcoal text (#1E293B) on clean white/light background.\n- Avoid embedding vital information inside images that might be blocked by email clients.`
            }
          ],
          commonMistakes: [
            'Using 5 different font colors, highlights, and sizes (looks amateur and chaotic).',
            'Writing "Click here" for links instead of using accessible, descriptive anchor text.',
            'Bolding almost every word in the email, which destroys visual emphasis.'
          ],
          proTip: 'If everything is bold, nothing is bold. Limit bolding to 2-3 key phrases or deadlines per email.'
        }
      ],
      keyTakeaways: [
        'Chunk text into short, scannable 2-3 sentence paragraphs.',
        'Use descriptive anchor text for hyperlinks instead of raw URLs.',
        'Bold only the most critical action items and deadlines.'
      ],
      practiceExercises: [
        {
          title: 'Visual Hierarchy Reconstruction Lab',
          instructions: 'Take a dense 150-word unformatted email block and apply paragraphs, bolding, bullet points, and descriptive links.'
        }
      ]
    },
    questions: [
      {
        id: 13,
        topic: "Email Formatting and Readability",
        question: "Which of the following represents the most professional and accessible way to include a hyperlink to a project roadmap?",
        options: [
          "https://notion.so/skillora/roadmap/84920491029481029481029481029",
          "Click here",
          "Please review the [Skillora 2026 Product Roadmap](https://notion.so/skillora/roadmap) for detailed milestone dates.",
          "LINK LINK LINK"
        ],
        correctAnswer: 2,
        explanation: "'Please review the [Skillora 2026 Product Roadmap](...) ...' uses clear, accessible, descriptive anchor text that tells the reader exactly what document they are opening."
      }
    ]
  },
  {
    id: 'eew-int-14',
    orderIndex: 14,
    title: '26. Managing Multiple Email Requests & Action Items',
    description: 'Master complex multi-stakeholder emails: structuring multi-question requests, assigning named task owners, establishing RACI accountability, and tracking action items.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Complex business projects involve multiple concurrent decisions and deliverables. Learning how to organize multi-item queries and delegate distinct actions to different recipients in a single message prevents chaos and missed deadlines.',
      objectives: [
        'Structure complex multi-point requests using numbered matrices',
        'Assign explicit named owners for every action item in multi-recipient threads',
        'Prevent "diffusion of responsibility" where everyone assumes someone else will act',
        'Design executive summary tables for rapid multi-stakeholder decisions'
      ],
      sections: [
        {
          title: 'Preventing Diffusion of Responsibility',
          content: 'When an email addressed to 5 people says "Can someone check this?", no one does. To ensure accountability: 1) Address specific action items to named individuals using bold tags (**@Marcus**, **@Leila**), 2) Assign explicit deadlines to each item.',
          explanation: 'Named accountability combined with concrete deadlines increases task completion rates by over 70%.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Multi-Recipient Action Assignment',
              code: `Subject: Action Items: Website Redesign Pre-Launch Checklist (Due Thursday 5 PM)\n\nHi Team,\n\nTo ensure a seamless production deployment on Friday, please complete your respective pre-launch checklist items:\n\n**Action Items by Owner:**\n1. **@Marcus (Backend):** Execute database indexing script and verify Redis cache hit rates. **[Due: Thursday 12:00 PM]**\n2. **@Leila (UX):** Complete end-to-end checkout validation across iOS Safari and Chrome. **[Due: Thursday 3:00 PM]**\n3. **@David (DevOps):** Configure SSL certificates and verify DNS failover TTL. **[Due: Thursday 5:00 PM]**\n4. **@Sarah (Content):** Audit legal privacy policy links and footer copyright strings. **[Due: Thursday 5:00 PM]**\n\nPlease reply directly to this thread once your item is verified.\n\nBest regards,\nElena Rostova`
            },
            {
              language: 'markdown',
              title: 'Example 2: Numbered Multi-Query to an External Vendor',
              code: `Subject: Technical Questions Regarding Enterprise SSO Integration - Skillora AI\n\nDear CloudScale Solutions Team,\n\nWe are finalizing our architectural integration with your cloud gateway. Could you please provide clarification on the following 4 technical queries?\n\n1. **SAML 2.0 Metadata:** Where can we download your production IdP metadata XML file?\n2. **Session Lifespan:** What is the default expiration timeout for JWT bearer tokens?\n3. **Rate Limiting:** What is the maximum allowed requests-per-minute for the \`/v2/users/sync\` endpoint?\n4. **Sandbox Access:** Can our engineering squad obtain 3 additional staging developer credentials?\n\nReceiving your responses by Wednesday will keep our sprint on schedule. Thank you for your support.\n\nSincerely,\nNathan Cole`
            },
            {
              language: 'markdown',
              title: 'Example 3: Decision Request Matrix for Executives',
              code: `Subject: Decision Required: Office Lease Extension Options - Austin HQ\n\nDear Executive Committee,\n\nOur current office lease in Austin expires on December 31. We require a decision on our lease renewal strategy by Friday, Oct 30.\n\n**Summary of Available Options:**\n- **Option A (3-Year Renewal):** $28/sq ft, includes $50k tenant improvement allowance. (Recommended)\n- **Option B (1-Year Extension):** $34/sq ft, zero tenant improvement allowance.\n- **Option C (Relocation to Tech Ridge):** $24/sq ft, estimated $120k moving and cabling overhead.\n\n**Recommendation:** Option A provides the optimal balance of financial predictability and facility continuity.\n\nPlease reply with your approval or feedback.\n\nBest regards,\nRachel Miller`
            }
          ],
          commonMistakes: [
            'Sending an email to 10 people with vague requests and no assigned names.',
            'Lumping 6 complex questions into an unnumbered, unstructured paragraph.',
            'Forgetting to specify the deadline for each separate action item.'
          ],
          proTip: 'Tag individual names with bold text (**@Name**) at the start of each bullet point to draw their attention immediately.'
        }
      ],
      keyTakeaways: [
        'Assign named owners to every action item to prevent diffusion of responsibility.',
        'Use numbered questions when querying external vendors or clients.',
        'Use decision matrices to present executive options with clear recommendations.'
      ],
      practiceExercises: [
        {
          title: 'Action Item Matrix Workshop',
          instructions: 'Draft a comprehensive project milestone email assigning 5 distinct tasks to 5 named team members with individual deadlines.'
        }
      ]
    },
    questions: [
      {
        id: 14,
        topic: "Managing Multiple Email Requests",
        question: "Why is it critical to explicitly name individual owners (e.g. '@Marcus: Complete database indexing') in multi-recipient task emails?",
        options: [
          "To avoid diffusion of responsibility where team members assume someone else will do the task",
          "Because email servers cannot send messages to more than one person",
          "To make the email harder to read",
          "Because assigning names is legally required by internet law"
        ],
        correctAnswer: 0,
        explanation: "Explicit named assignment eliminates ambiguity, establishes personal ownership, and ensures accountability across multi-person teams."
      }
    ]
  },
  {
    id: 'eew-int-p1',
    orderIndex: 15,
    title: 'Intermediate Practical Project: Commercial & Workplace Email Portfolio',
    description: 'Complete an advanced 7-scenario professional workplace email portfolio: 1) Job Application, 2) Interview Follow-up, 3) Customer Complaint Resolution, 4) B2B Business Inquiry, 5) Meeting Invitation with Agenda, 6) Overdue Payment Reminder, and 7) Persuasive B2B Sales Outreach.',
    duration: '3 hours',
    xpReward: 450,
    isCompleted: false,
    status: 'locked',
    isProject: true,
    type: 'project',
    requiresQuiz: false,
    projectDetails: {
      title: 'Intermediate Practical Project: Commercial & Workplace Email Portfolio',
      overview: 'You are stepping into the role of Senior Operations Manager at Skillora Global. You are responsible for managing complex internal and external communications across recruiting, customer support, enterprise procurement, client de-escalation, and B2B partnerships.',
      deliverables: [
        {
          id: 'del-int-01',
          title: 'Deliverable 1: Targeted Job Application Email with Quantified Evidence',
          description: 'Compose a 3-paragraph job application email for a Senior Product Operations Manager role, highlighting 2 quantified career accomplishments with attached resume reference.',
          checklist: [
            'Specific, targeted subject line with role title and reference number',
            'Strong opening hook mentioning company mission and source',
            'Two quantified metrics showcasing leadership impact',
            'Professional closing and full multi-line signature'
          ]
        },
        {
          id: 'del-int-02',
          title: 'Deliverable 2: Post-Interview Gratitude & Discussion Deep-Dive',
          description: 'Draft a personalized thank-you email to an executive interviewer within 24 hours of an interview, referencing a specific technical discussion on scaling educational platforms.',
          checklist: [
            'Warm, professional subject line referencing interview and role',
            'Sincere gratitude for the interviewer\'s time and insights',
            'Direct reference to a specific topic discussed during the call',
            'Reiteration of enthusiasm and availability for next steps'
          ]
        },
        {
          id: 'del-int-03',
          title: 'Deliverable 3: Empathetic Customer Complaint Resolution (LAST Model)',
          description: 'Write an empathetic customer support recovery email resolving a high-stakes enterprise billing and data migration failure, applying the LAST framework.',
          checklist: [
            'Empathetic, non-defensive apology acknowledging specific customer pain',
            'Clear step-by-step explanation of root cause and immediate remedy',
            'Account credit or courtesy resolution to restore goodwill',
            'Personal contact availability for follow-up'
          ]
        },
        {
          id: 'del-int-04',
          title: 'Deliverable 4: B2B Procurement Request for Quotation (RFQ)',
          description: 'Compose an enterprise procurement inquiry to a cloud vendor requesting pricing, SLA terms, and compliance for 1,000 corporate seats with numbered queries.',
          checklist: [
            'Structured subject line with seat count and procurement tag',
            'Brief organizational background and deployment scope',
            'Four numbered questions covering pricing, security, SLA, and timelines',
            'Specific proposal submission deadline'
          ]
        },
        {
          id: 'del-int-05',
          title: 'Deliverable 5: Multi-Time-Zone Meeting Invitation with Agenda',
          description: 'Draft an invitation for a 30-minute cross-border partner sync across US Eastern and London GMT, proposing 3 specific time slots and a bulleted agenda.',
          checklist: [
            'Clear subject line with meeting topic and duration',
            'Three specific date/time options with dual time zone conversions',
            'Bulleted 3-point agenda with time allocations',
            'Embedded video link and calendar booking alternative'
          ]
        },
        {
          id: 'del-int-06',
          title: 'Deliverable 6: Firm 14-Day Overdue Payment Reminder',
          description: 'Draft a firm, diplomatic second reminder for an overdue $8,500 consulting invoice that is 14 days past Net 30 terms, including re-attached files.',
          checklist: [
            'Clear, objective subject line referencing invoice number and past due status',
            'Summary table of invoice number, amount, original due date, and days past due',
            'Re-attached invoice and wire payment instructions',
            'Courteous request for confirmation of disbursement schedule'
          ]
        },
        {
          id: 'del-int-07',
          title: 'Deliverable 7: High-Converting Persuasive B2B Sales Outreach',
          description: 'Write a concise 120-word B2B cold outreach email using the Problem-Agitate-Solve (PAS) framework, ending with a low-friction 10-minute call CTA.',
          checklist: [
            'Personalized, non-spammy subject line',
            'Acute operational problem identification with case study evidence',
            'Quantifiable ROI metric achieved for a similar enterprise client',
            'Low-friction call to action'
          ]
        },
        {
          id: 'del-int-08',
          title: 'Deliverable 8: Cross-Functional RACI Project Delegation Brief',
          description: 'Draft a project kickoff delegation email assigning roles and milestones across Engineering, Product, and Design using the RACI framework.',
          checklist: [
            'Structured subject line with project name and kickoff tag',
            'Explicit RACI matrix mapping key responsibilities',
            'Clear sprint timeline with weekly milestone review checkpoints',
            'Low-friction blocker escalation protocol'
          ]
        },
        {
          id: 'del-int-09',
          title: 'Deliverable 9: Diplomatic Salary & Compensation Negotiation Email',
          description: 'Compose a professional, value-grounded counter-offer email requesting a 10% base salary adjustment or performance bonus based on regional market compensation data.',
          checklist: [
            'Warm, appreciative opening reiterating strong enthusiasm for the role and team',
            'Data-grounded justification citing industry benchmarks and specialized skills',
            'Polite, flexible counter-proposal with negotiable alternatives',
            'Professional sign-off preserving mutual goodwill'
          ]
        },
        {
          id: 'del-int-10',
          title: 'Deliverable 10: Client Scope Boundary & Timeline Negotiation',
          description: 'Write an email diplomatically declining an uncontracted urgent client request while presenting an alternative delivery schedule and change order option.',
          checklist: [
            'Appreciative opening acknowledging the importance of the requested feature',
            'Objective explanation of existing sprint capacity and launch deadline constraints',
            'Structured proposal presenting a Phase 2 change order or timeline trade-off',
            'Collaborative closing seeking alignment'
          ]
        }
      ],
      submissionGuidelines: 'Draft all 10 deliverables in clean Markdown with complete email metadata headers (To, Subject, Salutation, Body, Sign-off, Signature).',
      evaluationRubric: [
        {
          criteria: 'Strategic Purpose & Scenario Alignment',
          advanced: 'All 10 emails flawlessly execute their specific business objective using industry-standard frameworks (PAS, LAST, RFQ, RACI).',
          proficient: 'All 10 emails complete with minor structural or context gaps.',
          needsWork: 'Incomplete emails or generic responses failing to address specific scenario requirements.'
        },
        {
          criteria: 'Tone, Diplomacy & Persuasion',
          advanced: 'Masterful tone calibration across high-stakes complaints, firm financial reminders, and high-impact sales pitches.',
          proficient: 'Consistently polite with occasional minor stiffness or over-verbosity.',
          needsWork: 'Aggressive, passive-aggressive, or overly casual tone.'
        },
        {
          criteria: 'Formatting, Scannability & Grammar',
          advanced: 'Flawless visual hierarchy, bullet lists, bold action anchors, embedded links, and zero grammatical errors.',
          proficient: 'Clean formatting with 1-2 minor spacing or punctuation inconsistencies.',
          needsWork: 'Dense unformatted text blocks or frequent grammar/typo errors.'
        }
      ]
    }
  },
  {
    id: 'eew-int-assessment',
    orderIndex: 16,
    title: 'Intermediate Final Assessment (30 MCQs)',
    description: 'Formal 30-question multiple-choice assessment testing all Level 2 concepts. Passing score: 25/30 (83.3%).',
    duration: '45 mins',
    xpReward: 400,
    isCompleted: false,
    status: 'locked',
    isFinalAssessment: true,
    type: 'assessment',
    requiresQuiz: true,
    totalQuestions: 30,
    passingScore: 25,
    questions: ENGLISH_EMAIL_WRITING_INTERMEDIATE_ASSESSMENT
  }
];
