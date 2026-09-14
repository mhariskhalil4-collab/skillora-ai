import { Task, QuizQuestion } from '../../types/roadmap.types';

export const ENGLISH_EMAIL_WRITING_BEGINNER_ASSESSMENT: QuizQuestion[] = [
  {
    "id": 1,
    "topic": "Email Structure & Fields",
    "question": "When sending a project update email to your team lead and keeping your project manager quietly informed without other recipients seeing their email address, which recipient field must you use?",
    "options": [
      "BCC (Blind Carbon Copy)",
      "CC (Carbon Copy)",
      "To field",
      "Reply-To header"
    ],
    "correctAnswer": 0,
    "explanation": "BCC (Blind Carbon Copy) conceals the recipient's email address from everyone else on the email thread, ensuring privacy and preventing unnecessary reply-all notifications."
  },
  {
    "id": 2,
    "topic": "Effective Subject Lines",
    "question": "Which of the following subject lines is the most professional, specific, and actionable for a weekly sales report submission?",
    "options": [
      "Hey check this out!",
      "Weekly Sales Report - Q3 Week 4 [Action Required: Review by Friday 5 PM]",
      "Important files inside please open",
      "Sales update info for team members"
    ],
    "correctAnswer": 1,
    "explanation": "An effective subject line identifies the exact document (Weekly Sales Report - Q3 Week 4), the required action (Review), and the clear deadline (Friday 5 PM)."
  },
  {
    "id": 3,
    "topic": "Greetings & Salutations",
    "question": "When writing an email to a senior executive or external client whose name you know (e.g., Dr. Eleanor Vance), what is the most appropriate professional greeting?",
    "options": [
      "Hey Eleanor,",
      "What's up Dr. Vance,",
      "Dear Dr. Vance,",
      "To Whom It May Concern,"
    ],
    "correctAnswer": 2,
    "explanation": "\"Dear Dr. Vance,\" demonstrates formal respect by combining the traditional salutation 'Dear' with the recipient's professional title and surname."
  },
  {
    "id": 4,
    "topic": "Professional Openings",
    "question": "Which sentence serves as the strongest and most courteous opening for an email following up on a client consultation meeting?",
    "options": [
      "Why haven't you replied to my meeting yesterday?",
      "I am writing this because I was bored.",
      "Just thought I'd send some stuff we talked about.",
      "Thank you for taking the time to meet yesterday to discuss the marketing campaign expansion."
    ],
    "correctAnswer": 3,
    "explanation": "Thanking the recipient for their time and explicitly mentioning the meeting topic establishes immediate context, gratitude, and professional rapport."
  },
  {
    "id": 5,
    "topic": "Polite Requests",
    "question": "How can you transform the demanding sentence 'Send me the invoice now' into a polite, professional workplace request?",
    "options": [
      "Could you please share the updated invoice at your earliest convenience?",
      "You have to send me the invoice immediately.",
      "Give me the invoice or else.",
      "I want the invoice on my desk right away."
    ],
    "correctAnswer": 0,
    "explanation": "Using modal auxiliary verbs like 'Could you please' and time phrases like 'at your earliest convenience' softens the request while maintaining a clear call to action."
  },
  {
    "id": 6,
    "topic": "Grammar & Subject-Verb Agreement",
    "question": "Which of the following sentences exhibits correct subject-verb agreement for a workplace status email?",
    "options": [
      "The list of approved vendors are attached to this message.",
      "The list of approved vendors is attached to this message.",
      "The list of approved vendors were being attached.",
      "The list of approved vendors have been attached."
    ],
    "correctAnswer": 1,
    "explanation": "The singular subject 'The list' agrees with the singular verb 'is', despite the intervening plural prepositional phrase 'of approved vendors'."
  },
  {
    "id": 7,
    "topic": "Formal vs Informal Style",
    "question": "Which phrase is considered inappropriate in a formal business communication to an external auditor?",
    "options": [
      "We appreciate your prompt assistance with this audit.",
      "Please find enclosed the requested financial statements.",
      "FYI, gotta run but gonna send you the numbers ASAP!",
      "Should you require additional documentation, please let us know."
    ],
    "correctAnswer": 2,
    "explanation": "Informal slang and contractions such as 'FYI', 'gotta', 'gonna', and exclamation marks are too casual for formal regulatory or audit communications."
  },
  {
    "id": 8,
    "topic": "Email Attachments",
    "question": "What is the standard professional practice when attaching documents to an email?",
    "options": [
      "Attach files with names like 'final_final_v2_new.pdf' without referencing them in the email body.",
      "Send the email first and then send the attachments in a separate blank email without context.",
      "Assume the recipient will search their computer for missing files.",
      "Explicitly mention the attached file in the text (e.g., 'Please find attached...') and ensure files have descriptive, standardized names."
    ],
    "correctAnswer": 3,
    "explanation": "Always state in the email body that an attachment is included (preventing accidental missing files) and name the file cleanly (e.g., 'Skillora_Project_Proposal_2026.pdf')."
  },
  {
    "id": 9,
    "topic": "Proofreading & Pre-Send Checklist",
    "question": "Which step should always be performed as the final action immediately before clicking 'Send'?",
    "options": [
      "Verifying recipient email addresses, attachment presence, correct names, and reading the text aloud for tone.",
      "Changing all font colors to bright green.",
      "Adding 10 exclamation marks to the subject line.",
      "Deleting the entire signature line."
    ],
    "correctAnswer": 0,
    "explanation": "A pre-send audit catches incorrect auto-completed email addresses, omitted attachments, spelling errors, and harsh tonal nuances."
  },
  {
    "id": 10,
    "topic": "Professional Sign-Offs",
    "question": "Which sign-off is best suited for formal and semi-formal business correspondence?",
    "options": [
      "Later alligator,",
      "Yours sincerely / Best regards / Kind regards,",
      "TTYL,",
      "Peace out,"
    ],
    "correctAnswer": 1,
    "explanation": "'Best regards', 'Kind regards', and 'Yours sincerely' are globally recognized standards of professional courtesy in commercial and workplace correspondence."
  },
  {
    "id": 11,
    "topic": "Capitalization & Punctuation",
    "question": "Which sentence demonstrates flawless punctuation and capitalization in an email context?",
    "options": [
      "dear mr smith i hope you are well please send the file?",
      "DEAR MR SMITH, I HOPE YOU ARE WELL!",
      "Dear Mr. Smith, I hope this email finds you well. Please find the quarterly budget attached.",
      "dear mr. Smith, i hope this email finds you well please find the budget attached."
    ],
    "correctAnswer": 2,
    "explanation": "Salutations begin with capital letters, titles take periods (Mr.), sentences start with capitals and end with periods, and clauses are properly separated."
  },
  {
    "id": 12,
    "topic": "Meeting Confirmation Emails",
    "question": "When sending a meeting confirmation email, what essential details must always be included?",
    "options": [
      "Only the phrase 'See you soon' without any time or date.",
      "Your personal grocery list and hobbies.",
      "A 50-page summary of unrelated corporate policies.",
      "Date, start/end time (with time zone), video call link or physical location, and meeting objective/agenda."
    ],
    "correctAnswer": 3,
    "explanation": "To eliminate scheduling confusion, confirmation emails must state the explicit date, time with time zone (e.g., EST / GMT), agenda, and meeting link."
  },
  {
    "id": 13,
    "topic": "Professional Apologies",
    "question": "Which statement represents a professional, accountable workplace apology for a delayed report delivery?",
    "options": [
      "Please accept my sincere apologies for the delay in delivering the report. I have resolved the issue and attached the complete analysis.",
      "It wasn't my fault, the server was slow so you'll just have to wait.",
      "Why are you asking me about this report again?",
      "Sorry sorry sorry! My bad!"
    ],
    "correctAnswer": 0,
    "explanation": "A professional apology acknowledges the issue directly, takes ownership, offers a sincere apology, and immediately presents the completed deliverable."
  },
  {
    "id": 14,
    "topic": "Short Workplace Updates",
    "question": "What is the recommended technique for keeping daily or weekly status update emails readable and scannable?",
    "options": [
      "Writing one unbroken 800-word paragraph in all capital letters.",
      "Using structured bullet points with clear bold headers (e.g., Completed, In Progress, Blockers).",
      "Sending audio voice notes instead of written text.",
      "Leaving the email body empty and expecting colleagues to guess your progress."
    ],
    "correctAnswer": 1,
    "explanation": "Bullet points with bold categorization allow busy managers and team members to rapidly digest progress, milestones, and blockers in seconds."
  },
  {
    "id": 15,
    "topic": "Professional Email Vocabulary",
    "question": "Which verb replacement elevates the informal sentence 'I will look into the bug' to a higher standard of business English?",
    "options": [
      "I will mess around with the bug.",
      "I am gonna poke at the problem.",
      "I will investigate the issue and provide an update by 3 PM.",
      "I will do some random things."
    ],
    "correctAnswer": 2,
    "explanation": "'Investigate' is a precise, professional action verb that conveys systematic competence and analytical rigor."
  },
  {
    "id": 16,
    "topic": "Email Etiquette & Tone",
    "question": "Why is typing an entire email in ALL CAPS considered a serious email etiquette violation?",
    "options": [
      "Because it takes up too much server bandwidth.",
      "Because keyboards cannot type uppercase characters properly.",
      "Because email clients automatically delete capitalized letters.",
      "Because ALL CAPS is perceived in written communication as shouting and aggressive, making it unprofessional."
    ],
    "correctAnswer": 3,
    "explanation": "All-capitalized text is universally interpreted in digital communication as shouting, anger, or urgency without nuance, eroding professional credibility."
  },
  {
    "id": 17,
    "topic": "Clear Call to Action",
    "question": "Where should the primary Call to Action (CTA) or requested action be positioned in a short business email?",
    "options": [
      "Clearly articulated near the closing or highlighted in a standalone line with a defined deadline.",
      "Buried in the middle of a lengthy 20-line paragraph without formatting.",
      "In a hidden postscript (P.S.) that is easy to overlook.",
      "Only in the subject line, omitting it from the body entirely."
    ],
    "correctAnswer": 0,
    "explanation": "Placing the CTA on a dedicated line near the end of the email or highlighting it with bold text ensures the recipient knows exactly what action is required and by when."
  },
  {
    "id": 18,
    "topic": "Clarification Inquiries",
    "question": "When you receive an ambiguous email and need more details from your supervisor, which phrasing is most courteous?",
    "options": [
      "Your email makes zero sense, explain it better.",
      "Could you please clarify whether the deadline applies to the initial draft or the final client presentation?",
      "I didn't read your email because it was confusing.",
      "What do you even want from me?"
    ],
    "correctAnswer": 1,
    "explanation": "Framing the question around specific options ('initial draft vs final presentation') demonstrates that you have engaged with the topic while politely seeking clarification."
  },
  {
    "id": 19,
    "topic": "CC Discipline",
    "question": "When should you add a colleague to the CC (Carbon Copy) line?",
    "options": [
      "Whenever you want to publicly humiliate them in front of the entire company.",
      "On every single personal email you write to your family.",
      "Only when they need visibility on the discussion for awareness, but are not required to take direct action.",
      "To automatically forward spam newsletters to their inbox."
    ],
    "correctAnswer": 2,
    "explanation": "The CC field is designated for individuals who need contextual awareness and informational visibility, whereas direct action items belong to the 'To' recipient."
  },
  {
    "id": 20,
    "topic": "Email Signature Standards",
    "question": "What core elements comprise a professional workplace email signature?",
    "options": [
      "Only a single initial without any contact information or company affiliation.",
      "Ten animated GIFs and a 500-word personal philosophy essay.",
      "A blurry screenshot of a social media meme.",
      "Full Name, Job Title, Organization/Department, Contact Information (Phone/Website), and optional LinkedIn profile link."
    ],
    "correctAnswer": 3,
    "explanation": "A clean signature provides recipient certainty about your identity, role, corporate affiliation, and convenient alternative communication channels."
  }
];

export const ENGLISH_EMAIL_WRITING_BEGINNER_TASKS: Task[] = [
  {
    id: 'eew-beg-01',
    orderIndex: 1,
    title: '1. Introduction to English Email Writing',
    description: 'Master the fundamental principles of modern email communication, understanding when to email, core etiquette rules, digital professionalism, and how to avoid common introductory pitfalls.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'in_progress',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Email remains the universal standard for corporate, academic, and business communication worldwide. Writing effective emails requires clarity, empathy, brevity, and an acute understanding of audience expectations.',
      objectives: [
        'Understand the core purpose and strategic function of workplace emails',
        'Identify appropriate situations for email versus instant messaging or phone calls',
        'Master the fundamental rules of email etiquette and digital politeness',
        'Recognize and prevent common beginner mistakes that damage professional credibility'
      ],
      sections: [
        {
          title: 'The Purpose of Email in Modern Workplaces',
          content: 'Email is an asynchronous, documented medium of communication. Unlike chat messages, emails serve as formal records of agreements, instructions, decisions, and business proposals. Every email you send creates an impression of your professionalism, attention to detail, and organizational clarity.',
          explanation: 'Asynchronous communication means the recipient is not required to respond instantaneously. Because emails are preserved in corporate archives, precision in language and tone is paramount.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Initial Professional Inquiry',
              code: `Subject: Inquiry Regarding Academic Internship Program - Summer 2026\n\nDear Professor Higgins,\n\nI hope this email finds you well.\n\nI am writing to inquire about undergraduate research assistant opportunities in the Natural Language Processing laboratory for the upcoming Summer 2026 term. I have completed Advanced Computational Linguistics with a 3.9 GPA and am eager to contribute to your semantic parsing projects.\n\nCould you please let me know if you are currently accepting student applications?\n\nThank you for your time and consideration.\n\nSincerely,\nMarcus Vance\nB.S. Computer Science Candidate | Skillora University\nmarcus.vance@university.edu | +1 (555) 019-2834`
            },
            {
              language: 'markdown',
              title: 'Example 2: Clear Internal Task Update',
              code: `Subject: Project Orion - Phase 1 Documentation Complete\n\nHi Sarah,\n\nI hope you are having a productive week.\n\nI have completed the technical documentation draft for Phase 1 of Project Orion. The draft is now available in the shared repository for team review.\n\nNext Steps:\n- Team feedback deadline: Thursday, October 15 at 4:00 PM EST\n- Review meeting: Friday, October 16 at 10:00 AM EST\n\nPlease let me know if you encounter any access issues.\n\nBest regards,\nElena Rostova\nLead Technical Writer | Skillora AI\nelena.r@skillora.ai`
            },
            {
              language: 'markdown',
              title: 'Example 3: Courteous Information Request',
              code: `Subject: Request for Q3 Brand Asset Guidelines - Skillora AI Rebrand\n\nDear Creative Team,\n\nI am currently finalizing the client presentation for next Tuesday's marketing symposium. \n\nCould you please share the approved high-resolution vector logos and primary color palette guidelines? Having these assets by tomorrow afternoon will allow us to align the slide deck with the new corporate identity.\n\nThank you for your continuous support.\n\nWarm regards,\nJulian Hayes\nMarketing Coordinator | Skillora Global\njulian.h@skillora.ai`
            }
          ],
          commonMistakes: [
            'Treating emails like casual WhatsApp text messages with emojis, unpunctuated sentences, and abbreviations.',
            'Sending emails when a quick 2-minute phone call or instant message would resolve an urgent crisis faster.',
            'Leaving the subject line blank or writing generic one-word subjects like "Hi" or "Help".'
          ],
          proTip: 'Before writing an email, ask yourself: What is the single goal of this message? What specific action do I want the recipient to take?'
        }
      ],
      keyTakeaways: [
        'Email is a permanent, professional record representing your organizational acumen.',
        'Choose email for formal updates, detailed instructions, and documented requests.',
        'Structure your message with clear greetings, focused bodies, and unambiguous next steps.'
      ],
      practiceExercises: [
        {
          title: 'Email Purpose Identification Practice',
          instructions: 'Review 3 workplace scenarios and determine whether Email, Slack/Teams Chat, or a Phone Call is the appropriate communication channel.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: "Email Communication Basics",
        question: "In which scenario is an email the most appropriate communication channel?",
        options: [
          "Documenting agreed-upon project deliverables and deadlines after a client meeting",
          "Asking a desk neighbor if they want a cup of coffee right now",
          "Reporting a live server fire requiring instant emergency attention in 10 seconds",
          "Sending an informal one-word greeting to a close friend"
        ],
        correctAnswer: 0,
        explanation: "Emails provide a written, searchable, timestamped paper trail ideal for documenting formal agreements, project milestones, and client directives."
      }
    ]
  },
  {
    id: 'eew-beg-02',
    orderIndex: 2,
    title: '2. Basic Email Structure',
    description: 'Deconstruct the 10 structural components of a professional email: To, CC, BCC, Subject Line, Salutation, Opening, Body Paragraphs, Call to Action, Sign-off, and Professional Signature block.',
    duration: '50 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Every professional email follows a structured anatomy. Mastering this hierarchy guarantees that your emails are scannable, courteous, organized, and effortlessly understandable for readers.',
      objectives: [
        'Distinguish the functional differences between To, CC, and BCC fields',
        'Learn the exact placement of salutations, opening lines, and core body paragraphs',
        'Format sign-offs and multi-line corporate signatures with standard contact data',
        'Ensure visual hierarchy and paragraph spacing maximize readability'
      ],
      sections: [
        {
          title: 'The Anatomy of a Complete Email',
          content: 'A standard email contains metadata headers (To, CC, BCC, Subject) followed by the message body (Greeting, Context, Detailed Points, Call to Action, Complimentary Close, and Signature). Omitting any of these components weakens message clarity.',
          explanation: 'The recipient first scans the Subject and Sender, reads the Greeting, digests the first two lines for intent, and looks at the closing for required action items.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Full Email Anatomy Breakdown',
              code: `To: arthur.pendleton@acme-corp.com\nCC: beatrice.clarke@skillora.ai\nBCC: records-archive@skillora.ai\nSubject: Invoice #1084 Payment Confirmation - Skillora AI Consulting\n\nDear Mr. Pendleton,\n\nI hope this email finds you well.\n\nWe have received your electronic payment of $4,500 for Invoice #1084 covering the August software development sprint. The official receipt has been generated and logged into our billing portal.\n\nSummary of Account:\n- Invoice ID: #1084\n- Amount Paid: $4,500.00 USD\n- Remaining Balance: $0.00\n\nPlease find the PDF receipt attached for your accounting records. If you require any additional tax forms, please let us know.\n\nThank you for your prompt payment.\n\nSincerely,\nBeatrice Clarke\nFinance & Accounts Manager | Skillora AI\nbeatrice.c@skillora.ai | +1 (555) 234-5678`
            },
            {
              language: 'markdown',
              title: 'Example 2: Multi-Recipient Internal Communication',
              code: `To: dev-team@skillora.ai\nCC: engineering-lead@skillora.ai\nSubject: Scheduled API Maintenance - Saturday, Nov 14 (02:00 - 04:00 UTC)\n\nHello Team,\n\nPlease be advised that our primary database cluster will undergo routine security patching this Saturday, November 14, between 02:00 and 04:00 UTC.\n\nExpected Impact:\n- Staging environments will be offline for 30 minutes.\n- Production services will experience brief read-only failover.\n\nAction Required:\nPlease ensure all open pull requests and deployment pipelines are paused by Friday at 18:00 UTC.\n\nThank you for your cooperation.\n\nBest regards,\nDevOps Infrastructure Team\ndevops@skillora.ai`
            },
            {
              language: 'markdown',
              title: 'Example 3: Student Academic Advisory Email',
              code: `To: academic-advising@university.edu\nSubject: Course Prerequisite Waiver Request - MATH 302 (Student ID: #98421)\n\nDear Advising Committee,\n\nI hope you are having a pleasant week.\n\nMy name is Chloe Bennett (Student ID: #98421), a junior majoring in Data Science. I am writing to formally request a prerequisite waiver for MATH 302: Linear Algebra II for the upcoming Spring semester.\n\nI completed Advanced Applied Matrix Theory (MATH 290) at Stanford Summer Institute with an 'A' grade, which covers all required introductory linear algebra topics. I have attached my official transcript and course syllabus for your evaluation.\n\nCould you please advise if this transfer credit qualifies for the waiver?\n\nThank you for your time and assistance.\n\nWarm regards,\nChloe Bennett\nData Science Undergraduate | Skillora University\nchloe.b@university.edu`
            }
          ],
          commonMistakes: [
            'Putting actionable recipients in CC rather than the To field.',
            'Forgetting a blank line between greeting, paragraphs, and sign-off, resulting in a dense wall of text.',
            'Omitting a signature line with alternative contact info.'
          ],
          proTip: 'Use BCC when sending an announcement to 50 external clients so you do not expose their private email addresses to each other.'
        }
      ],
      keyTakeaways: [
        'To field is for direct decision-makers; CC is for visibility; BCC is for privacy/archives.',
        'Always maintain clean paragraph breaks between email sections.',
        'A comprehensive signature establishes identity, title, and contact methods.'
      ],
      practiceExercises: [
        {
          title: 'Email Anatomy Reordering Exercise',
          instructions: 'Arrange a scrambled email into the correct 7-part sequence: Subject, Salutation, Opening, Body, Call to Action, Sign-off, Signature.'
        }
      ]
    },
    questions: [
      {
        id: 2,
        topic: "Basic Email Structure",
        question: "What is the primary role of the 'CC' (Carbon Copy) field in email writing?",
        options: [
          "To assign primary task ownership to someone who must take urgent action",
          "To secretly forward the email without the sender knowing",
          "To keep secondary stakeholders informed for situational awareness without requiring action",
          "To format the font color of the subject line"
        ],
        correctAnswer: 2,
        explanation: "The CC field keeps team members informed for visibility, whereas the To field specifies the individual responsible for taking action."
      }
    ]
  },
  {
    id: 'eew-beg-03',
    orderIndex: 3,
    title: '3. Writing Effective Subject Lines',
    description: 'Learn the principles of high-converting, professional subject lines. Study formulas for action-oriented, informational, urgent, and meeting subject lines while eliminating vague subjects.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'The subject line is the gatekeeper of your email. A well-crafted subject line informs the recipient of the topic, urgency, and expected action before they even open the message.',
      objectives: [
        'Write concise, descriptive, and actionable subject lines (6 to 10 words)',
        'Incorporate status tags such as [Action Required], [Urgent], [FYI], and [Update]',
        'Distinguish between weak, ambiguous subject lines and strong, clear ones',
        'Avoid clickbait, misleading words, and spam trigger phrases'
      ],
      sections: [
        {
          title: 'Formulas for Clear Subject Lines',
          content: 'Effective subject lines answer three questions: What is this about? Who is it regarding? What action or deadline is attached? Use the standard formula: [Category/Project] + Topic + [Action/Date].',
          explanation: 'Busy executives receive over 100 emails daily. Subject lines like "Quick Question" get ignored, whereas "[Approval Needed] Q4 Budget Draft - Due Oct 12" gets handled immediately.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Action-Oriented Subject Lines',
              code: `Weak: Document\nStrong: [Action Required] Review Marketing Agreement Draft - Due Friday 5 PM\n\nWeak: Question about meeting\nStrong: Rescheduling Request: Product Sync Meeting to Thursday 2 PM EST\n\nWeak: Job\nStrong: Application: Senior React Developer - Marcus Sterling (Ref: #8491)`
            },
            {
              language: 'markdown',
              title: 'Example 2: Informational and Status Updates',
              code: `Weak: Stuff we talked about\nStrong: [Summary & Next Steps] Client Onboarding Workshop - Oct 10\n\nWeak: Server info\nStrong: [System Notice] Scheduled Maintenance Window - Sunday 02:00 UTC\n\nWeak: Invoice\nStrong: Invoice #9201 Paid - Skillora AI Annual Subscription`
            },
            {
              language: 'markdown',
              title: 'Example 3: Urgent Yet Courteous Subject Lines',
              code: `Weak: URGENT READ NOW PLEASE!!!\nStrong: [Urgent: 2 Hr Deadline] Security Certificate Renewal Approval Needed\n\nWeak: Problem with account\nStrong: Action Needed: Verify Billing Contact for Enterprise Workspace\n\nWeak: Hello\nStrong: Inquiry: Custom Enterprise Licensing for 500 Seats - Acme Corp`
            }
          ],
          commonMistakes: [
            'Using vague single words like "Hey", "Update", "Files", or "Important".',
            'Writing the entire message in the subject line without putting text in the body.',
            'Using deceptive urgency markers when the matter is low priority.'
          ],
          proTip: 'Keep subject lines between 40 and 60 characters so they are fully readable on mobile smartphone screens.'
        }
      ],
      keyTakeaways: [
        'A good subject line summarizes the context, urgency, and next step.',
        'Use brackets for clear categorizations like [Action Required] or [Update].',
        'Never send an email with an empty or misleading subject line.'
      ],
      practiceExercises: [
        {
          title: 'Subject Line Transformation Workshop',
          instructions: 'Rewrite 5 weak subject lines into professional, action-oriented subject lines including project tags and deadlines.'
        }
      ]
    },
    questions: [
      {
        id: 3,
        topic: "Writing Effective Subject Lines",
        question: "Which subject line is most likely to be opened and prioritized by a busy manager?",
        options: [
          "Hey check this out when you have a sec",
          "Quick question about that thing",
          "Important stuff",
          "[Action Required] Q3 Financial Forecast Review - Due Today 4 PM"
        ],
        correctAnswer: 3,
        explanation: "The tag '[Action Required]', specific topic 'Q3 Financial Forecast Review', and clear deadline 'Due Today 4 PM' give the manager complete clarity."
      }
    ]
  },
  {
    id: 'eew-beg-04',
    orderIndex: 4,
    title: '4. Greetings and Salutations',
    description: 'Master formal, semi-formal, and informal greetings. Learn how to address individuals, groups, hiring managers, professors, and executives with grammatical precision and cultural etiquette.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Your greeting sets the emotional temperature and level of respect for the entire interaction. Selecting the correct salutation requires evaluating your relationship with the recipient and the context of the message.',
      objectives: [
        'Select the appropriate salutation across formal, semi-formal, and collaborative contexts',
        'Correctly use titles such as Dr., Prof., Ms., Mr., and professional designations',
        'Know when to use "Dear Hiring Manager" versus "To Whom It May Concern"',
        'Avoid overly casual or outdated salutations'
      ],
      sections: [
        {
          title: 'The Hierarchy of Salutations',
          content: 'Salutations range from highly formal (Dear Dr. Adams,) to semi-formal (Hello Sarah,) to collaborative (Hi Team,). Always match or slightly exceed the recipient’s level of formality until a closer relationship is established.',
          explanation: 'When in doubt, start with greater formality. It is always better to be slightly too formal than prematurely casual.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Formal External & Academic Salutations',
              code: `Formal Executive / Client:\nDear Mr. Henderson,\nDear Ms. Albright,\nDear Dr. Thorne,\n\nFormal Unnamed Recipient (Job Application):\nDear Hiring Manager,\nDear Search Committee,\nDear Admissions Officer,\n\nNote: Avoid 'Dear Sir or Madam' or 'To Whom It May Concern' unless no specific department or title is discoverable.`
            },
            {
              language: 'markdown',
              title: 'Example 2: Semi-Formal Workplace Salutations',
              code: `Colleague / Established Partner:\nHello David,\nHello Clara,\nGood morning team,\nGood afternoon Ms. Gomez,\n\nGroup Communications:\nDear Marketing Team,\nHello Project Orion Contributors,\nHi Everyone,`
            },
            {
              language: 'markdown',
              title: 'Example 3: Everyday Collaborative Greetings',
              code: `Direct Teammates / Daily Collaborators:\nHi Alex,\nHi Maya,\nGood morning all,\n\nPhrases to Avoid in Professional Emails:\n- Hey buddy,\n- Sup?\n- Dearest Friend,\n- Yo,\n- To Whomsoever it may concern (outdated/clunky)`
            }
          ],
          commonMistakes: [
            'Misspelling the recipient’s name (always double check spelling against their signature or website).',
            'Assuming gender or marital status incorrectly (use "Ms." for women in business rather than "Miss" or "Mrs.").',
            'Using "Hey" on first-time contact with prospective employers or high-value clients.'
          ],
          proTip: 'In English business writing, "Ms." (pronounced "Miz") is the standard polite title for all women regardless of marital status.'
        }
      ],
      keyTakeaways: [
        'Use "Dear [Title] [Last Name]" for formal inquiries and external stakeholders.',
        'Use "Dear Hiring Manager" when addressing an anonymous recruitment committee.',
        'Always double-check recipient name spelling before sending.'
      ],
      practiceExercises: [
        {
          title: 'Salutation Matching Quiz',
          instructions: 'Match 6 recipient profiles (CEO, University Professor, New Client, Daily Teammate, Hiring Committee, Customer Support) with their optimal greetings.'
        }
      ]
    },
    questions: [
      {
        id: 4,
        topic: "Greetings and Salutations",
        question: "When applying for a job where the job posting does not name the specific recruiter, which greeting is most professional?",
        options: [
          "Dear Hiring Manager,",
          "Hey guys,",
          "What's up HR team,",
          "Dear Sir or Madam,"
        ],
        correctAnswer: 0,
        explanation: "'Dear Hiring Manager,' is modern, gender-neutral, respectful, and specifically targeted to the recruitment team."
      }
    ]
  },
  {
    id: 'eew-beg-05',
    orderIndex: 5,
    title: '5. Opening and Closing Emails',
    description: 'Learn dynamic opening lines that state purpose immediately with polite rapport, and craft strong closing statements, calls to action, and professional sign-offs.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'The opening sentence reveals why you are writing, while the closing sentence defines what happens next. Mastering these bookends ensures your email leaves an impression of purposefulness and polish.',
      objectives: [
        'Write purposeful opening lines that explain the reason for writing in the first sentence',
        'Express genuine gratitude and acknowledge prior correspondence politely',
        'Craft clear calls to action (CTAs) that specify deliverables and deadlines',
        'Choose the appropriate complimentary close (sign-off) for every business context'
      ],
      sections: [
        {
          title: 'Opening Sentences and Stating Purpose',
          content: 'Avoid spending three paragraphs on small talk. After a brief polite greeting ("I hope you are having a productive week"), immediately state your core reason for writing using active verbs: "I am writing to request...", "I am pleased to share...", "I am reaching out regarding...".',
          explanation: 'Clear openings respect the reader’s time and prevent misunderstandings.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Professional Opening Lines',
              code: `Stating Purpose Directly:\n- I am writing to follow up on our discussion regarding the Q4 budget.\n- I am reaching out to request your approval for the updated project timeline.\n- Thank you for your insightful feedback during yesterday's design critique.\n- I hope this email finds you well after the holiday weekend.`
            },
            {
              language: 'markdown',
              title: 'Example 2: Strong Closing Sentences',
              code: `Clear Next Steps & Calls to Action:\n- Could you please confirm your availability for a 15-minute call this Thursday?\n- Please review the attached contract and share any revisions by Friday at 3 PM.\n- Should you have any questions or require additional details, please do not hesitate to contact me.\n- I look forward to hearing your thoughts on this proposal.`
            },
            {
              language: 'markdown',
              title: 'Example 3: Standard Professional Sign-offs',
              code: `Formal / Business Standard:\n- Sincerely,\n- Best regards,\n- Kind regards,\n- Respectfully,\n\nCollaborative / Semi-Formal:\n- Warm regards,\n- With appreciation,\n- Many thanks,\n\nAvoid in Formal Work:\n- Cheers, (too casual for formal clients)\n- Later,\n- Thx!`
            }
          ],
          commonMistakes: [
            'Using passive, timid openings like "I just wanted to see if maybe you could possibly..."',
            'Ending emails abruptly without a call to action or closing courtesy.',
            'Using "Sincerely" when writing to a close daily peer (too stiff) or "Cheers" to a court judge (too casual).'
          ],
          proTip: 'A simple "Thank you for your assistance" or "I look forward to our collaboration" reinforces goodwill right before your signature.'
        }
      ],
      keyTakeaways: [
        'State your reason for writing within the first two sentences.',
        'End with an explicit call to action or a clear next-step expectation.',
        'Sign-offs should reflect your relationship: "Sincerely" (formal), "Best regards" (standard), "Warm regards" (friendly).'
      ],
      practiceExercises: [
        {
          title: 'Openings and Closings Toolkit',
          instructions: 'Draft 3 opening lines and 3 closing calls to action for: 1) Client inquiry, 2) Meeting rescheduling, 3) Document approval.'
        }
      ]
    },
    questions: [
      {
        id: 5,
        topic: "Opening and Closing Emails",
        question: "Which of the following represents the most direct and courteous opening for a budget approval email?",
        options: [
          "Hey I need money.",
          "I am writing to formally request your approval for the Q3 departmental software budget.",
          "Why haven't you funded our team yet?",
          "Here is some stuff about numbers."
        ],
        correctAnswer: 1,
        explanation: "'I am writing to formally request your approval for the Q3 departmental software budget' immediately establishes purpose, topic, and required action."
      }
    ]
  },
  {
    id: 'eew-beg-06',
    orderIndex: 6,
    title: '6. Basic Email Grammar',
    description: 'Eliminate grammar errors that damage workplace credibility. Focus on subject-verb agreement, verb tenses, articles (a, an, the), prepositions of time/place, capitalization, and punctuation.',
    duration: '50 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Grammar is not about pedantry; it is about clarity and credibility. Grammatical errors create ambiguity, slow down decision-making, and cause readers to question your professional diligence.',
      objectives: [
        'Master subject-verb agreement with collective nouns and compound subjects',
        'Use appropriate business verb tenses (Present Perfect vs Past Simple)',
        'Accurately apply prepositions of time and date (at, on, in, by)',
        'Standardize capitalization for job titles, days, months, and product names'
      ],
      sections: [
        {
          title: 'Essential Rules of Business Email Grammar',
          content: 'Pay close attention to prepositions of time: we meet AT 3:00 PM, ON Tuesday, IN October, BY Friday (deadline). Use the present perfect ("I have attached the report") when referring to an action connected to the present, and past simple ("I sent the report yesterday") for finished past time.',
          explanation: 'Errors in prepositions and articles frequently distract international colleagues and create scheduling mix-ups.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Subject-Verb Agreement in Business Contexts',
              code: `Incorrect: The team of developers are ready for deployment.\nCorrect: The team of developers is ready for deployment. (Singular collective subject 'team')\n\nIncorrect: Each of the candidates have submitted their portfolio.\nCorrect: Each of the candidates has submitted their portfolio. ('Each' is singular)`
            },
            {
              language: 'markdown',
              title: 'Example 2: Prepositions of Time & Deadlines',
              code: `Incorrect: The meeting is in 2:00 PM on October.\nCorrect: The meeting is at 2:00 PM in October.\n\nIncorrect: Please submit the files until Friday 5 PM.\nCorrect: Please submit the files by Friday at 5:00 PM. ('By' indicates deadline)`
            },
            {
              language: 'markdown',
              title: 'Example 3: Present Perfect vs Past Simple',
              code: `Past Simple (Specific finished time):\n- I spoke with the client yesterday regarding the contract changes.\n- We launched the website last Tuesday.\n\nPresent Perfect (Connection to present / unstated time):\n- I have updated the spreadsheet with the latest metrics.\n- Have you reviewed the preliminary findings yet?`
            }
          ],
          commonMistakes: [
            'Confusing "by" (deadline: on or before) with "until" (continuous action continuing up to a time).',
            'Forgetting commas after introductory prepositional phrases ("After reviewing the files, we noticed...").',
            'Misusing apostrophes in plurals (writing "KPI\'s" instead of "KPIs").'
          ],
          proTip: 'Read your email backwards sentence-by-sentence during proofreading. This isolates individual grammar structures from overall narrative flow.'
        }
      ],
      keyTakeaways: [
        'Singular collective nouns (team, committee, company) take singular verbs in standard business English.',
        'Use "by" for deadlines and "at" for specific clock times.',
        'Maintain tense consistency throughout your narrative.'
      ],
      practiceExercises: [
        {
          title: 'Grammar Error Correction Challenge',
          instructions: 'Identify and correct 8 grammar errors in a simulated 150-word workplace status email.'
        }
      ]
    },
    questions: [
      {
        id: 6,
        topic: "Basic Email Grammar",
        question: "Which sentence correctly expresses a strict submission deadline?",
        options: [
          "Please send me the report until Friday at 5 PM.",
          "Please send me the report on Friday until 5 PM.",
          "Please send me the report by Friday at 5:00 PM.",
          "Please send me the report in Friday 5 PM."
        ],
        correctAnswer: 2,
        explanation: "'By Friday at 5:00 PM' correctly uses 'by' to denote the deadline (no later than) and 'at' for the specific time."
      }
    ]
  },
  {
    id: 'eew-beg-07',
    orderIndex: 7,
    title: '7. Polite Requests and Questions',
    description: 'Transform blunt, demanding requests into persuasive, courteous workplace inquiries using modal verbs (Could, Would), conditional phrasing, and indirect questioning techniques.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Direct imperatives ("Give me the data") sound abrasive and aggressive in English business culture. Using polite modal framing allows you to ask for assistance and resources effectively while building strong cross-functional relationships.',
      objectives: [
        'Master polite modal phrases: "Could you please...", "Would you mind...", "Would it be possible to..."',
        'Learn the difference between direct and indirect professional questions',
        'Ask for clarification and assistance without sounding incompetent or accusatory',
        'Express urgency without sacrificing politeness'
      ],
      sections: [
        {
          title: 'The Spectrum of Politeness in Requests',
          content: 'English politeness relies heavily on modal verbs and hypothetical phrasing to soften requests. Instead of saying "I want you to do X", professional writers use "Would it be possible for you to look over X?" or "I would appreciate your guidance on X".',
          explanation: 'Softening language is not weakness; it is diplomatic courtesy that encourages voluntary cooperation and high responsiveness.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Transforming Direct to Polite Requests',
              code: `Direct / Blunt: Send me the presentation slides now.\nPolite: Could you please share the presentation slides when you have a moment?\n\nDirect / Demanding: Tell me what this number means.\nPolite: Could you please help clarify how the Q2 customer acquisition cost was calculated?\n\nDirect: I need your signature today.\nPolite: We would greatly appreciate it if you could sign and return the document by 5 PM today.`
            },
            {
              language: 'markdown',
              title: 'Example 2: Asking for Clarification Professionally',
              code: `Subject: Clarification on Scope for User Research Study - Project Aurora\n\nDear Marcus,\n\nThank you for sharing the updated roadmap this morning.\n\nTo ensure our team designs the test interviews accurately, could you please clarify whether we should focus solely on enterprise administrators or also include standard end-users in the first cohort?\n\nHaving this confirmation will help us recruit the appropriate participant profiles by Wednesday.\n\nThank you for your guidance.\n\nBest regards,\nLeila Chen\nSenior UX Researcher`
            },
            {
              language: 'markdown',
              title: 'Example 3: Inquiring with Conditional Phrasing',
              code: `- Would you mind checking if the updated sandbox credentials are active?\n- Would it be possible to schedule a brief 10-minute sync tomorrow morning?\n- If your schedule permits, I would be grateful for your feedback on the attached draft.\n- If possible, could we move our sync back by 30 minutes?`
            }
          ],
          commonMistakes: [
            'Using "Kindly do this" repeatedly (in many English regions, "Kindly" can sound condescending or patronizing).',
            'Omitting the reason why you need the request (providing context increases compliance by over 30%).',
            'Demanding instant responses without offering reasonable lead time.'
          ],
          proTip: 'Pair your request with a reason: "Could you please send the data by noon so that I can finalize the executive slide deck?"'
        }
      ],
      keyTakeaways: [
        'Use "Could you please..." and "Would you be able to..." for polite action requests.',
        'Always provide the "why" behind your deadline to build mutual understanding.',
        'Avoid imperative commands in standard peer and client communications.'
      ],
      practiceExercises: [
        {
          title: 'Politeness Transformation Lab',
          instructions: 'Convert 5 blunt sentences into professional, diplomatic workplace requests using varied modal verbs.'
        }
      ]
    },
    questions: [
      {
        id: 7,
        topic: "Polite Requests and Questions",
        question: "Which of the following phrases is the most polite and professional way to ask a busy coworker for help?",
        options: [
          "You must help me right now.",
          "I need you to do my work.",
          "If your schedule permits, I would greatly appreciate your guidance on the financial model.",
          "Do this whenever, I don't care."
        ],
        correctAnswer: 2,
        explanation: "'If your schedule permits, I would greatly appreciate your guidance...' acknowledges their busy workload while politely seeking their expertise."
      }
    ]
  },
  {
    id: 'eew-beg-08',
    orderIndex: 8,
    title: '8. Formal and Informal Email Style',
    description: 'Master the tone continuum from formal external communications to semi-formal cross-functional emails to informal peer updates. Learn which vocabulary and syntactic choices define each register.',
    duration: '50 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'One of the most crucial skills in business writing is calibrating tone to your audience. Using overly formal language with close coworkers feels cold and robotic, while being overly casual with executives or clients undermines credibility.',
      objectives: [
        'Analyze audience and context to select formal, semi-formal, or informal registers',
        'Learn precise formal vocabulary equivalents for common informal words',
        'Understand when contractions (e.g., "don\'t", "we\'ll") are appropriate or inappropriate',
        'Identify phrases and idioms that do not translate well across international teams'
      ],
      sections: [
        {
          title: 'Vocabulary & Style Comparison Table',
          content: 'Formal English uses complete words, Latinate verbs, passive diplomacy, and full sentences without contractions. Semi-formal English is conversational yet polished. Informal English uses phrasal verbs, idioms, and contractions.',
          explanation: 'Matching your client’s or manager’s register builds subconscious rapport and establishes effortless communication alignment.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Word Choice Equivalents',
              code: `Informal -> Semi-Formal -> Formal\n\nAsk for -> Request -> Solicit / Formally request\nGet -> Receive / Obtain -> Acquire / Procure\nTell -> Let you know -> Inform / Notify\nHelp -> Assist -> Facilitate / Provide assistance\nTalk about -> Discuss -> Deliberate / Confer\nFix -> Solve / Repair -> Rectify / Resolve\nCheck -> Look over -> Verify / Inspect\nSorry -> Apologies -> We sincerely apologize`
            },
            {
              language: 'markdown',
              title: 'Example 2: Same Scenario in Formal vs Semi-Formal',
              code: `Formal (To Board Member / External Auditor):\nDear Mr. Sterling,\n\nWe would like to inform you that the annual audit documentation has been compiled and verified by our compliance division. Should you require further clarification regarding the foreign asset valuations, please do not hesitate to contact our office.\n\nSincerely,\nExecutive Office\n\nSemi-Formal (To Internal Department Head):\nHello Marcus,\n\nJust letting you know that the annual audit documents are ready and verified. Please let me know if you need any extra details on the foreign asset numbers before tomorrow's meeting.\n\nBest regards,\nSarah`
            },
            {
              language: 'markdown',
              title: 'Example 3: Phrases to Avoid in Formal Writing',
              code: `- "Gotta run!" (Too casual)\n- "No worries at all!" (Better: "You are very welcome" or "It is my pleasure")\n- "ASAP" (Better: "at your earliest convenience" or "by end of day")\n- "Stuff / Things" (Better: "assets", "materials", "documents", "deliverables")`
            }
          ],
          commonMistakes: [
            'Using slang and emojis in legal, financial, or formal recruitment emails.',
            'Being so stiff and archaic with daily peers that you sound like an 18th-century letter writer.',
            'Switching registers randomly within the same email.'
          ],
          proTip: 'When writing to a new client for the first time, start formal. Once they reply informally (e.g., "Hi Jane, thanks!"), you can comfortably shift to a semi-formal tone.'
        }
      ],
      keyTakeaways: [
        'Formal style: no contractions, precise Latinate vocabulary, full salutations and sign-offs.',
        'Semi-formal style: friendly, direct, professional vocabulary with conversational flow.',
        'Always adapt to the organizational culture and seniority of your recipient.'
      ],
      practiceExercises: [
        {
          title: 'Tone Shift Rewriting Workshop',
          instructions: 'Rewrite a casual 80-word email from a freelancer to a corporate client into a polished, formal business communication.'
        }
      ]
    },
    questions: [
      {
        id: 8,
        topic: "Formal and Informal Email Style",
        question: "Which of the following phrases represents the most formal way to state that you have sent requested documents?",
        options: [
          "Here is the stuff you asked for!",
          "Please find attached the financial statements requested during our audit consultation.",
          "I just dropped the files in your inbox, enjoy!",
          "Check out the docs ASAP."
        ],
        correctAnswer: 1,
        explanation: "'Please find attached the financial statements requested during our audit consultation' uses formal vocabulary ('financial statements', 'consultation') without casual contractions."
      }
    ]
  },
  {
    id: 'eew-beg-09',
    orderIndex: 9,
    title: '9. Writing Short Workplace Emails',
    description: 'Master fast, high-impact everyday workplace emails: meeting confirmations, project updates, quick requests, reminders, thank-you notes, and brief apologies.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Over 70% of workplace emails are short, day-to-day messages under 100 words. Writing them quickly and clearly saves hours of organizational time while keeping projects moving forward smoothly.',
      objectives: [
        'Draft concise 3-sentence meeting confirmations with dates, times, and agendas',
        'Write brief, effective thank-you notes after professional favors or collaborations',
        'Compose clear reminders without sounding impatient or aggressive',
        'Deliver concise status updates that highlight accomplishments and next steps'
      ],
      sections: [
        {
          title: 'Templates for Short Workplace Communications',
          content: 'Short emails should follow the 3-part rule: 1) Context / Purpose, 2) Core Details / Attachment / Time, 3) Call to Action / Next Step. Eliminate unnecessary filler words.',
          explanation: 'Busy coworkers appreciate emails that can be read in under 15 seconds.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Meeting Confirmation Template',
              code: `Subject: Confirmation: Project Sync - Tomorrow at 10:00 AM EST\n\nHi Liam,\n\nThanks for connecting earlier today. This email confirms our project kickoff meeting for tomorrow, Wednesday, Oct 14, at 10:00 AM EST via Zoom.\n\nMeeting Details:\n- Zoom Link: https://zoom.us/j/984210984\n- Agenda: Review sprint backlog & assign user stories\n\nPlease let me know if you need to adjust the time.\n\nBest regards,\nElena`
            },
            {
              language: 'markdown',
              title: 'Example 2: Post-Assistance Thank You Note',
              code: `Subject: Thank you for your assistance with the onboarding workshop\n\nDear Maya,\n\nI wanted to express my sincere appreciation for stepping in to co-host yesterday's new hire engineering workshop. Your walkthrough of our deployment pipeline was clear and received excellent feedback from the attendees.\n\nThank you again for your time and teamwork.\n\nWarm regards,\nJordan Patel\nTechnical Training Lead | Skillora AI`
            },
            {
              language: 'markdown',
              title: 'Example 3: Brief Status Update',
              code: `Subject: Status Update: Mobile App UI Redesign - Milestone 2 Complete\n\nHi Team,\n\nQuick update on the Mobile UI Redesign:\n- Completed: High-fidelity Figma wireframes for onboarding and checkout flows.\n- In Progress: User testing sessions scheduled for Thursday.\n- Blockers: None at this time.\n\nPrototype Link: https://figma.com/file/sample-prototype\n\nBest regards,\nCarlos Rivera`
            }
          ],
          commonMistakes: [
            'Forgetting the video link or physical room number in meeting confirmations.',
            'Writing 500 words when 50 words would convey the update more effectively.',
            'Sending vague thank-yous that do not mention what specific help was appreciated.'
          ],
          proTip: 'In status emails, use bullet points with bold keywords: "Completed:", "In Progress:", "Next Steps:".'
        }
      ],
      keyTakeaways: [
        'Keep short workplace emails focused on a single actionable objective.',
        'Always include specific times, dates, and links in scheduling messages.',
        'Specific praise in thank-you emails builds enduring professional goodwill.'
      ],
      practiceExercises: [
        {
          title: 'Speed Drafting Lab',
          instructions: 'Draft three complete short workplace emails (Meeting confirmation, quick status update, post-meeting thank you) in under 10 minutes.'
        }
      ]
    },
    questions: [
      {
        id: 9,
        topic: "Writing Short Workplace Emails",
        question: "What is the most effective way to structure a 50-word status update email to your manager?",
        options: [
          "A single long sentence with lots of commas and no bullet points",
          "Bullet points with bold category tags: Completed, In Progress, and Blockers",
          "A poem about how hard you worked today",
          "A blank message with an attachment titled 'notes.txt'"
        ],
        correctAnswer: 1,
        explanation: "Bullet points with bold category tags (Completed, In Progress, Blockers) allow a manager to assess status within 5 seconds."
      }
    ]
  },
  {
    id: 'eew-beg-10',
    orderIndex: 10,
    title: '10. Email Attachments and References',
    description: 'Learn best practices for handling email attachments: professional file naming conventions, referencing attached materials in text, handling multiple files, and referencing previous email threads.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Sending attachments requires care. Large uncompressed files, missing attachments, and confusing file names cause delays and frustrate recipients. Learn the established industry standards for document sharing.',
      objectives: [
        'Reference attached documents cleanly within the email body',
        'Apply standardized, professional file-naming conventions (Project_DocType_Date_v1.0.pdf)',
        'Reference past emails and conversations clearly using contextual anchors',
        'Know how to apologize and rectify an accidentally omitted attachment'
      ],
      sections: [
        {
          title: 'Referencing Attachments and File Standards',
          content: 'Always mention that an attachment is included in the body of the email. Standard phrases include: "Please find attached...", "I have attached the requested...", "As requested, the updated budget is attached below for your review." Never send a file without contextual explanation.',
          explanation: 'Mentioning the attachment helps email client safety filters and alerts the recipient if the attachment failed to upload.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Professional Attachment References',
              code: `Standard Attachment Phrases:\n- Please find attached the audited balance sheet for Q3 (Skillora_Q3_BalanceSheet_2026.pdf).\n- I have attached our formal service agreement for your review and signature.\n- Attached below, you will find the revised architectural schematics reflecting our discussion.\n\nFile Naming Best Practices:\nGood: Skillora_Product_Requirements_v2.1_2026-10-12.pdf\nPoor: doc123.pdf, final_draft_new_v3(1).pdf, presentation.pptx`
            },
            {
              language: 'markdown',
              title: 'Example 2: Rectifying an Accidental Missing Attachment',
              code: `Subject: [Attachment Included] Updated Project Scope - Skillora AI Rebrand\n\nDear Team,\n\nPlease accept my apologies—I realized I omitted the attachment from my previous email.\n\nI have now attached the complete Project Scope Document (Skillora_Rebrand_Scope_v1.0.pdf) for your review. Please disregard the earlier message.\n\nThank you for your understanding.\n\nBest regards,\nNathan Cole\nProject Lead`
            },
            {
              language: 'markdown',
              title: 'Example 3: Referencing Past Discussions and Threads',
              code: `Referencing Past Context:\n- As discussed in our quarterly review on Tuesday, here are the updated hiring targets...\n- Further to our telephone conversation earlier this morning, I am writing to confirm...\n- Referring back to your email dated September 28 regarding software licenses...`
            }
          ],
          commonMistakes: [
            'Clicking send without attaching the file (always attach files before writing the message body).',
            'Sending 15 individual attachments instead of bundling them in a zip file or cloud link.',
            'Using vague file names that force the recipient to open each file to see what it is.'
          ],
          proTip: 'Adopt a consistent file naming structure: [Client/Project]_[DocumentType]_[Date/Version].[ext]. Example: `Acme_ConsultingAgreement_2026-10-15_v1.pdf`.'
        }
      ],
      keyTakeaways: [
        'Always explicitly state in the body that a file is attached.',
        'Use standardized, clear file names containing document type, version, and date.',
        'Use professional anchor phrases when referencing past meetings or emails.'
      ],
      practiceExercises: [
        {
          title: 'Attachment Professionalization Exercise',
          instructions: 'Rename 5 poorly titled files and write accompanying email reference sentences for each.'
        }
      ]
    },
    questions: [
      {
        id: 10,
        topic: "Email Attachments and References",
        question: "Which of the following file names represents the highest standard of professional naming for a client proposal?",
        options: [
          "final_proposal_final_v2_new.pdf",
          "proposal.pdf",
          "AcmeCorp_EnterpriseSecurity_Proposal_v2_2026-10-15.pdf",
          "Document(1).pdf"
        ],
        correctAnswer: 2,
        explanation: "'AcmeCorp_EnterpriseSecurity_Proposal_v2_2026-10-15.pdf' identifies the client, the specific project, the version number, and the exact date."
      }
    ]
  },
  {
    id: 'eew-beg-11',
    orderIndex: 11,
    title: '11. Proofreading and Editing Emails',
    description: 'Learn systematic proofreading routines before clicking send. Review the 7-step pre-send checklist covering spelling, names, tone, links, attachments, and recipient security.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Once an email is sent, it cannot be unread. Establishing a disciplined 30-second pre-send proofreading habit protects your reputation, prevents embarrassing errors, and ensures pristine communication.',
      objectives: [
        'Implement the 7-point pre-send verification checklist',
        'Identify auto-complete recipient traps (sending to the wrong "John")',
        'Detect tone misunderstandings before they cause interpersonal friction',
        'Verify hyperlinks, formatting consistency, and attachment integrity'
      ],
      sections: [
        {
          title: 'The 7-Step Pre-Send Checklist',
          content: 'Step 1: Recipient Verification (Check To and CC addresses).\nStep 2: Name Accuracy (Ensure the greeting spells the recipient’s name correctly).\nStep 3: Subject Line Audit (Specific, relevant, and updated).\nStep 4: Attachments Check (Files are attached and correctly named).\nStep 5: Clarity & Tone (Read the message from the recipient’s perspective).\nStep 6: Links & Dates (Click test links; verify day/date combinations).\nStep 7: Signature & Formatting (Clean font, no broken code tags).',
          explanation: 'A disciplined checklist eliminates 99% of workplace email mishaps.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Before and After Proofreading Audit',
              code: `Before Proofreading (Full of errors):\nSubj: hi\nhey dr smith! here is the files we talked about last wedsneday. hope its good let me know if u have any issues thx!!\n\nAfter Proofreading (Polished & Professional):\nSubject: Research Data Files - NLP Sentiment Analysis (Meeting Follow-Up)\n\nDear Dr. Smith,\n\nI hope this email finds you well.\n\nAs discussed during our meeting last Wednesday, I have attached the cleaned research data files for the NLP sentiment analysis project (NLP_SentimentData_Oct2026.csv).\n\nPlease let me know if you would like me to adjust any of the data parameters.\n\nThank you for your guidance.\n\nSincerely,\nMarcus Vance\nResearch Assistant | Skillora University`
            },
            {
              language: 'markdown',
              title: 'Example 2: Day and Date Verification',
              code: `Common Error: "Let's meet on Tuesday, October 14th" (when Oct 14 is actually a Wednesday).\nAlways check your calendar to confirm that the day of the week matches the calendar date.`
            },
            {
              language: 'markdown',
              title: 'Example 3: Checking Tone & Emotional Temperature',
              code: `Angry Draft: Why did you ignore my message from yesterday? Answer me now.\n\nCalibrated Professional Follow-Up: \nHi Robert, I wanted to follow up on my note from yesterday regarding the client invoice approval. Could you please let me know if you need any additional figures before signing off?`
            }
          ],
          commonMistakes: [
            'Typing recipient addresses first (type recipient addresses last to prevent accidental premature sending).',
            'Relying solely on automated spellcheckers which miss correct words in wrong contexts (e.g., "from" vs "form", "there" vs "their").',
            'Sending emails while angry or frustrated.'
          ],
          proTip: 'Add the recipient email address as the very last step right before clicking send. This prevents you from accidentally sending an unfinished draft.'
        }
      ],
      keyTakeaways: [
        'Always execute the 7-step pre-send checklist before hitting send.',
        'Enter recipient addresses last to avoid accidental early dispatches.',
        'Verify that days of the week match their corresponding calendar dates.'
      ],
      practiceExercises: [
        {
          title: 'Email Bug Hunt Exercise',
          instructions: 'Audit a sample email containing 6 hidden errors (wrong name, broken date, missing attachment reference, typos) and produce a clean version.'
        }
      ]
    },
    questions: [
      {
        id: 11,
        topic: "Proofreading and Editing Emails",
        question: "Why is it best practice to enter the recipient's email address as the final step when composing a message?",
        options: [
          "Because email servers crash if you type the address first",
          "To prevent accidentally sending an incomplete, unedited draft before it is ready",
          "Because email clients require you to type at least 1,000 words first",
          "To hide your email address from your own computer"
        ],
        correctAnswer: 1,
        explanation: "Entering the recipient's address last provides a fail-safe against accidental key combinations (like Cmd/Ctrl + Enter) dispatching an incomplete draft."
      }
    ]
  },
  {
    id: 'eew-beg-12',
    orderIndex: 12,
    title: '12. Professional Email Vocabulary & Sentence Patterns',
    description: 'Expand your repertoire of high-frequency business verbs, transition markers, formal collocations, and diplomatic sentence patterns to elevate your writing style.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Building a strong vocabulary of professional collocations and connective phrases allows you to express nuanced ideas with precision, elegance, and confidence.',
      objectives: [
        'Master 25 high-frequency business verbs (facilitate, collaborate, streamline, coordinate, clarify)',
        'Use logical transition words to structure arguments (furthermore, consequently, however, in addition)',
        'Incorporate professional collocations (at your earliest convenience, mutual benefit, take the initiative)',
        'Avoid repetitive vocabulary across multi-paragraph messages'
      ],
      sections: [
        {
          title: 'High-Impact Business Vocabulary & Collocations',
          content: 'Enhance your emails by replacing weak, generic verbs with precise professional equivalents: instead of "make easier", use "facilitate" or "streamline"; instead of "talk to", use "consult with" or "liaise with".',
          explanation: 'Using standard business collocations signals linguistic competence and professional maturity.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: High-Frequency Business Collocations',
              code: `- "At your earliest convenience" (Polite request for timely reply)\n- "For your reference / For your perusal" (Introducing attachments)\n- "In accordance with your instructions" (Confirming compliance)\n- "Mutual benefit / Collaborative effort" (Partnerships)\n- "Expedite the process" (Speeding up delivery)\n- "Keep you apprised of progress" (Promising regular updates)`
            },
            {
              language: 'markdown',
              title: 'Example 2: Transition Words in Business Writing',
              code: `Adding Information:\n- Furthermore, we have expanded our regional server capacity...\n- In addition to the budget approval, we require...\n\nShowing Contrast / Polite Nuance:\n- However, due to scheduled maintenance, access will be limited...\n- While we understand the urgency, our compliance team must first...\n\nIndicating Result / Consequence:\n- Consequently, the product launch will proceed as planned...\n- As a result of these optimizations, load times decreased by 40%...`
            },
            {
              language: 'markdown',
              title: 'Example 3: Elevating Sentence Patterns',
              code: `Basic: We want to work with you because it helps both of us.\nElevated: We look forward to establishing a collaborative partnership of mutual benefit.\n\nBasic: I will tell you when things happen.\nElevated: I will keep you apprised of all project developments as milestones are reached.`
            }
          ],
          commonMistakes: [
            'Overusing complicated jargon that obscures simple meaning (aim for clarity over pretension).',
            'Using "Kindly" as a synonym for "Please" in every sentence.',
            'Misusing transition words (e.g., using "Therefore" when there is no causal relationship).'
          ],
          proTip: 'Plain English combined with precise verbs is always more powerful than convoluted pseudo-academic jargon.'
        }
      ],
      keyTakeaways: [
        'Use precise action verbs to describe business activities.',
        'Employ transition words (furthermore, however, consequently) to create logical paragraph flow.',
        'Strive for clarity and natural elegance rather than pompous jargon.'
      ],
      practiceExercises: [
        {
          title: 'Vocabulary Enhancement Lab',
          instructions: 'Upgrade 10 basic sentences by substituting generic verbs with high-impact professional collocations.'
        }
      ]
    },
    questions: [
      {
        id: 12,
        topic: "Professional Email Vocabulary",
        question: "Which of the following sentences best uses a professional collocation to request an update when the recipient has time?",
        options: [
          "Send me news ASAP whenever you feel like it.",
          "Please share your feedback at your earliest convenience.",
          "Give me the news on your earliest comfort.",
          "Hurry up with the info."
        ],
        correctAnswer: 1,
        explanation: "'Please share your feedback at your earliest convenience' is a standard professional collocation that is polite, respectful, and clear."
      }
    ]
  },
  {
    id: 'eew-beg-p1',
    orderIndex: 13,
    title: 'Beginner Practical Project: Complete Workplace Email Portfolio',
    description: 'Draft a comprehensive 5-part beginner workplace email portfolio: 1) Professional Request, 2) Meeting Confirmation, 3) Accountable Apology, 4) Document Attachment Reference, and 5) Thoughtful Thank-You Email.',
    duration: '2 hours',
    xpReward: 350,
    isCompleted: false,
    status: 'locked',
    isProject: true,
    type: 'project',
    requiresQuiz: false,
    projectDetails: {
      title: 'Beginner Practical Project: Complete Workplace Email Portfolio',
      overview: 'You are working as an Associate Operations Specialist at Skillora Global. Your supervisor has assigned you to manage 10 distinct real-world communication scenarios. You must write complete, polished, professionally structured emails adhering to all Level 1 standards.',
      deliverables: [
        {
          id: 'del-beg-01',
          title: 'Deliverable 1: Professional Information & Asset Request Email',
          description: 'Compose an email to the IT Infrastructure Director requesting VPN and staging server credentials for a newly hired contractor, with justification and a clear deadline.',
          checklist: [
            'Clear, action-oriented subject line with [Request] tag',
            'Formal salutation addressing the director by name',
            'Context explaining the new contractor role and project assignment',
            'Polite modal request with specific access permissions',
            'Concrete deadline and courteous sign-off with full signature'
          ]
        },
        {
          id: 'del-beg-02',
          title: 'Deliverable 2: Meeting Confirmation with Detailed Agenda',
          description: 'Write an email confirming a quarterly review meeting with an external marketing agency, including date, time with time zone, video call link, and a 3-point bulleted agenda.',
          checklist: [
            'Informational subject line with date and meeting title',
            'Courteous opening thanking the agency for their availability',
            'Explicit meeting date, start/end time, and time zone',
            'Bulleted 3-point agenda outlining discussion topics',
            'Call to action asking for any additional agenda items'
          ]
        },
        {
          id: 'del-beg-03',
          title: 'Deliverable 3: Accountable Workplace Apology & Resolution',
          description: 'Draft a professional apology email to your team lead regarding a 4-hour delay in submitting the weekly analytics report due to unexpected data pipeline reconciliation, with resolution and delivery.',
          checklist: [
            'Sincere, direct acknowledgment of the delay without making defensive excuses',
            'Explanation of the root cause and steps taken to rectify the data',
            'Confirmation that the complete report is now finalized and attached',
            'Preventative measures implemented to avoid future delays'
          ]
        },
        {
          id: 'del-beg-04',
          title: 'Deliverable 4: Multi-Document Attachment Reference Email',
          description: 'Compose an email delivering two critical project documents (Vendor Comparison Matrix and Cost-Benefit Analysis) to the finance committee with standardized file names and executive summaries.',
          checklist: [
            'Descriptive subject line referencing the specific project and attachments',
            'Explicit reference in the body highlighting both attached files',
            'Two-sentence executive summary of key findings in the documents',
            'Clear request for approval or feedback by a specific date'
          ]
        },
        {
          id: 'del-beg-05',
          title: 'Deliverable 5: Thoughtful Post-Collaboration Thank-You Note',
          description: 'Write an appreciative thank-you email to a senior cross-functional colleague who provided weekend support to resolve a critical client onboarding bug.',
          checklist: [
            'Warm yet professional subject line expressing appreciation',
            'Specific mention of the colleague\'s contribution and impact on client satisfaction',
            'Expression of eagerness to reciprocate and collaborate on future initiatives',
            'Polite complimentary close'
          ]
        },
        {
          id: 'del-beg-06',
          title: 'Deliverable 6: Clear Clarification Inquiry on Ambiguous Task Specs',
          description: 'Draft a polite, structured email to a product manager seeking clarification on conflicting feature requirements in a sprint specification document.',
          checklist: [
            'Focused subject line referencing project ticket and feature name',
            'Courteous acknowledgment of the overall product roadmap',
            'Numbered comparison highlighting the two conflicting requirements',
            'Specific request for guidance before development commences'
          ]
        },
        {
          id: 'del-beg-07',
          title: 'Deliverable 7: Weekly Team Status & Progress Briefing',
          description: 'Compose a scannable weekly status email to your engineering manager utilizing bold category headers (Completed, In Progress, Blockers, Next Week Objectives).',
          checklist: [
            'Standardized subject line with week number and project name',
            'Structured bullet points categorized under clear bold headings',
            'Explicit mention of any operational blockers requiring managerial unblocking',
            'Concise writing with zero fluff'
          ]
        },
        {
          id: 'del-beg-08',
          title: 'Deliverable 8: Professional Out-of-Office (OOO) Auto-Responder',
          description: 'Create a comprehensive out-of-office automated email response for annual leave, detailing absence dates, response expectations, and emergency escalation contacts.',
          checklist: [
            'Exact return date and time zone',
            'Clear statement regarding limited or no email access during the period',
            'Designated emergency backup contacts with names, roles, and email addresses',
            'Professional tone suitable for internal colleagues and external clients'
          ]
        },
        {
          id: 'del-beg-09',
          title: 'Deliverable 9: Courteous Introduction to a New Client Stakeholder',
          description: 'Draft an introductory email to a newly assigned client account manager welcoming them, introducing your role, and proposing an introductory 15-minute sync.',
          checklist: [
            'Welcoming, enthusiastic yet professional subject line',
            'Brief overview of your role on the account and ongoing initiatives',
            'Warm expression of looking forward to working together',
            'Specific proposal for a short introductory video call'
          ]
        },
        {
          id: 'del-beg-10',
          title: 'Deliverable 10: Diplomatic Request for Deadline Extension',
          description: 'Write a proactive, diplomatic email requesting a 48-hour deadline extension on a design sprint deliverable due to delayed user testing feedback.',
          checklist: [
            'Actionable subject line with [Extension Request] tag',
            'Early, proactive communication before the original deadline passes',
            'Objective business rationale explaining the dependency on user testing data',
            'Firm commitment to the new revised delivery date and time'
          ]
        }
      ],
      submissionGuidelines: 'Draft all 10 emails with complete To, Subject, Greeting, Body, Sign-off, and Signature sections in clean Markdown format.',
      evaluationRubric: [
        {
          criteria: 'Structural Completeness & Formatting',
          advanced: 'All 10 emails feature flawless anatomy, appropriate spacing, bullet points, and complete multi-line signatures.',
          proficient: 'All 10 emails structured well with minor signature or spacing inconsistencies.',
          needsWork: 'Missing sections, improper formatting, or incomplete email headers.'
        },
        {
          criteria: 'Tone Calibration & Etiquette',
          advanced: 'Perfect balance of formal and semi-formal registers; modal verbs used masterfully; zero aggressive phrasing.',
          proficient: 'Polite tone maintained throughout with occasional minor stiffness or over-casualness.',
          needsWork: 'Blunt, demanding language or inappropriate informal slang.'
        },
        {
          criteria: 'Grammar, Punctuation & Precision',
          advanced: 'Flawless grammar, zero spelling errors, impeccable prepositions of time, and professional vocabulary.',
          proficient: '1-2 minor typos that do not impede clarity or comprehension.',
          needsWork: 'Multiple grammar, capitalization, or punctuation errors.'
        }
      ]
    }
  },
  {
    id: 'eew-beg-assessment',
    orderIndex: 14,
    title: 'Beginner Final Assessment (20 MCQs)',
    description: 'Formal 20-question multiple-choice assessment testing all Level 1 concepts. Passing score: 15/20 (75%).',
    duration: '30 mins',
    xpReward: 300,
    isCompleted: false,
    status: 'locked',
    isFinalAssessment: true,
    type: 'assessment',
    requiresQuiz: true,
    totalQuestions: 20,
    passingScore: 15,
    questions: ENGLISH_EMAIL_WRITING_BEGINNER_ASSESSMENT
  }
];
