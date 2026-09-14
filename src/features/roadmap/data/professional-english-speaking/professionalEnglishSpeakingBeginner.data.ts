import { Task, QuizQuestion } from '../../types/roadmap.types';

export const PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Confidence & Professional Speaking',
    question: 'When speaking in a professional workplace environment, what is the primary objective of your communication?',
    options: [
      'Delivering your message clearly, politely, and purposefully so the listener understands and can take action',
      'Using as many complex idioms and rare vocabulary words as possible to impress colleagues',
      'Speaking as rapidly as possible to finish the conversation quickly',
      'Repeating memorized textbook scripts without making eye contact'
    ],
    correctAnswer: 0,
    explanation: 'Professional speaking prioritizes clarity, active listening, courteous tone, and purposeful message delivery over rapid speech or unnecessary complexity.'
  },
  {
    id: 2,
    topic: 'Sentence Structure & Grammar',
    question: 'Which of the following sentences follows the natural Subject + Verb + Object structure for reporting a completed workplace task?',
    options: [
      'Yesterday the report submitted I with accuracy.',
      'I submitted the quarterly revenue report to the finance director this morning.',
      'Submitted was by me the quarterly revenue report.',
      'The quarterly report to director I did submit.'
    ],
    correctAnswer: 1,
    explanation: 'In English, direct spoken statements follow the Subject (\'I\') + Verb (\'submitted\') + Object (\'the quarterly revenue report\') + Adverbial details pattern.'
  },
  {
    id: 3,
    topic: 'Professional Greetings',
    question: 'What is the most appropriate greeting when meeting an external executive or VIP client for the first time in an office setting?',
    options: [
      'Hey buddy, what\'s going on with you?',
      'Yo, good to see ya in our building!',
      'Good morning, Mr. Vance. It is a pleasure to meet you.',
      'What\'s up? You look busy today.'
    ],
    correctAnswer: 2,
    explanation: '\'Good morning, [Title + Surname]. It is a pleasure to meet you\' is the standard polite, formal greeting for initial corporate and executive interactions.'
  },
  {
    id: 4,
    topic: 'Self-Introductions',
    question: 'When delivering a 30-second elevator self-introduction to a prospective employer or networking contact, which sequence is most effective?',
    options: [
      'Your childhood hobbies, your favorite sports teams, and your favorite foods',
      'Your salary history, personal complaints about your previous company, and your vacation plans',
      'A list of 20 programming languages you have read about online without context',
      'Your name, your current role/specialization, your key impact/strength, and why you are excited to connect'
    ],
    correctAnswer: 3,
    explanation: 'A concise professional pitch clearly identifies who you are, what you specialize in, the value you bring, and your connection goal.'
  },
  {
    id: 5,
    topic: 'Asking Clarifying Questions',
    question: 'If you did not hear or understand an instruction given by your manager during a team huddle, what is the most professional way to ask for repetition?',
    options: [
      'Could you please repeat the last deadline, Sarah? I want to make sure I noted it accurately.',
      'What? You are speaking too quietly.',
      'Huh? I wasn\'t listening to that part.',
      'Say that again right now.'
    ],
    correctAnswer: 0,
    explanation: 'Using modal phrases like \'Could you please repeat...\' followed by a constructive reason (\'I want to make sure I noted it accurately\') maintains respect and accountability.'
  },
  {
    id: 6,
    topic: 'Workplace Conversations',
    question: 'How should you professionally transition from a casual hallway greeting into a brief discussion about an urgent project dependency?',
    options: [
      'Stop walking, I have a big problem with your work.',
      'Hi Julian, do you have two minutes? I\'d like to quickly align on the client asset delivery before noon.',
      'Hey, you forgot everything we agreed on yesterday!',
      'Why are you taking a break when the project is due?'
    ],
    correctAnswer: 1,
    explanation: 'Asking for permission (\'Do you have two minutes?\') and framing the topic with urgency and alignment is courteous and productive.'
  },
  {
    id: 7,
    topic: 'Polite Requests',
    question: 'Which of the following phrases is the most polite and professional way to request document approval from a senior stakeholder?',
    options: [
      'Sign this document right now because I need it.',
      'You must approve this file before 5 PM today.',
      'Would you mind reviewing and approving this proposal when you have a moment today?',
      'If you don\'t approve this, the project will fail.'
    ],
    correctAnswer: 2,
    explanation: '\'Would you mind [verb-ing]...\' softens the request into a respectful inquiry while acknowledging the stakeholder\'s schedule.'
  },
  {
    id: 8,
    topic: 'Pronunciation & Word Stress',
    question: 'In English, shifting the stress from the first syllable to the second syllable in the word \'PROJECT\' changes its function from:',
    options: [
      'A past tense verb into a future tense adjective',
      'A question into an exclamation mark',
      'A plural noun into an adverb',
      'A noun (PRO-ject: a planned task) into a verb (pro-JECT: to estimate or cast forward)'
    ],
    correctAnswer: 3,
    explanation: 'Two-syllable noun/verb pairs in English place stress on the first syllable for nouns (\'PRO-ject\', \'RE-cord\') and on the second syllable for verbs (\'pro-JECT\', \'re-CORD\').'
  },
  {
    id: 9,
    topic: 'Time & Scheduling',
    question: 'If you need to reschedule a client sync from Tuesday to Thursday due to an unavoidable conflict, what is the best phrase to use?',
    options: [
      'Due to an unexpected scheduling conflict on Tuesday, would Thursday at 2:00 PM EST work for our sync instead?',
      'I am canceling our sync because something else came up on Tuesday.',
      'You will have to meet me on Thursday instead of Tuesday.',
      'Tuesday is bad. Let\'s talk whenever next week.'
    ],
    correctAnswer: 0,
    explanation: 'State the reason diplomatically and proactively offer an exact alternative time and date to make rescheduling seamless for the client.'
  },
  {
    id: 10,
    topic: 'Giving Updates & Explanations',
    question: 'When explaining a minor project delay to your team lead, which structure creates the highest level of professional trust?',
    options: [
      'Blaming a junior teammate and asking the manager to fix it for you',
      'Stating the current status, the root cause objectively, the corrective action being taken, and the revised completion time',
      'Ignoring the deadline until the manager asks where the work is',
      'Sending an emoji with no explanation'
    ],
    correctAnswer: 1,
    explanation: 'Effective updates communicate objective reality, ownership, remediation steps, and clear revised timelines.'
  },
  {
    id: 11,
    topic: 'Small Talk & Professional Rapport',
    question: 'Which of the following is considered a safe, engaging, and professional topic for small talk before a business meeting begins?',
    options: [
      'Personal political arguments and contentious election debates',
      'Intrusive personal inquiries regarding marital status or personal income',
      'Asking about recent industry conference takeaways, travel experiences, or local weather',
      'Sharing confidential gossip about colleagues in other departments'
    ],
    correctAnswer: 2,
    explanation: 'Safe small-talk topics build positive rapport without creating discomfort or risking professional boundary violations.'
  },
  {
    id: 12,
    topic: 'Confidence & Fluency',
    question: 'What is the recommended speaking strategy when you encounter a temporary pause or need 3 seconds to organize your thoughts during an interview?',
    options: [
      'Panic and speak incoherently without stopping',
      'Say \'um, uh, like, you know\' 15 times in rapid succession',
      'Remain completely silent with your eyes closed for two minutes',
      'Use a calm bridging phrase like \'That is an insightful question. Let me structure my thoughts on that,\' while breathing steadily'
    ],
    correctAnswer: 3,
    explanation: 'Bridging phrases give your brain processing time while projecting composed executive presence.'
  },
  {
    id: 13,
    topic: 'Declining Requests Politely',
    question: 'If a colleague asks you to take on extra work that you cannot accommodate due to an existing high-priority deadline, how should you respond?',
    options: [
      'I would love to help, but I am committed to delivering the Q3 audit report by 5 PM. Could I review your draft tomorrow morning instead?',
      'No way, that is not in my job description.',
      'Sure! (and then miss both deadlines without telling anyone).',
      'Why are you always asking me to do your job?'
    ],
    correctAnswer: 0,
    explanation: 'The polite decline structure acknowledges the request, explains current capacity constraints honestly, and offers a workable alternative.'
  },
  {
    id: 14,
    topic: 'Spoken Numbers & Clarifications',
    question: 'When verbally sharing a numerical figure such as a phone number, budget figure, or meeting ID over a video call, what is the best practice for clarity?',
    options: [
      'Mumble all 10 digits as one unbroken sound',
      'Chunk the digits into groups of 3 or 4, speak at a measured pace, and confirm by having the listener repeat or verify',
      'Speak at maximum volume to overpower any microphone static',
      'Only spell numbers backward'
    ],
    correctAnswer: 1,
    explanation: 'Chunking numbers (e.g. 555 - 019 - 2834) and pacing enables human working memory to accurately transcribe spoken data.'
  },
  {
    id: 15,
    topic: 'Professional Introductions',
    question: 'When introducing your team member Maya to a visiting client, what is the most polished spoken introduction?',
    options: [
      'This is Maya, she works here somewhere.',
      'Maya, talk to this client.',
      'Mr. Sterling, I would like to introduce Maya Lin, our Lead Solutions Architect who will be directing your technical migration.',
      'Hey client, meet Maya.'
    ],
    correctAnswer: 2,
    explanation: 'A formal introduction addresses the senior/client party first, states the colleague\'s full name, and contextualizes their role and value.'
  },
  {
    id: 16,
    topic: 'WH Questions in Speaking',
    question: 'Which question format is grammatically correct and naturally polite when inquiring about project ownership in a cross-functional sync?',
    options: [
      'Who leading mobile redesign is this sprint?',
      'Who does leads the mobile redesign sprint?',
      'Whom is lead the redesign?',
      'Who is leading the mobile user onboarding redesign for this sprint?'
    ],
    correctAnswer: 3,
    explanation: 'Subject WH questions (\'Who is leading...\') maintain standard auxiliary and continuous verb alignment for current initiatives.'
  },
  {
    id: 17,
    topic: 'Intonation & Question Types',
    question: 'In standard spoken English, what is the typical intonation pattern for a Yes/No question versus an open-ended WH question?',
    options: [
      'Yes/No questions typically have a rising intonation at the end, while WH questions typically have a falling intonation',
      'Both types always end in a monotonic flat tone with zero variation',
      'Yes/No questions always drop sharply, while WH questions scream loudly at the end',
      'Intonation has no impact on spoken English comprehension'
    ],
    correctAnswer: 0,
    explanation: 'Yes/No questions (\'Are you available tomorrow? ↗\') naturally rise at the end, while WH questions (\'When is the presentation? ↘\') typically fall on the final stressed syllable.'
  },
  {
    id: 18,
    topic: 'Polite Closings in Spoken Meetings',
    question: 'What is the most courteous way to end a one-on-one conversation when you must leave for your next scheduled commitment?',
    options: [
      'I have to run right now, bye.',
      'Thank you for your time today, David. I have a hard stop for a client call, but let\'s pick this up on Thursday.',
      'I am tired of talking about this.',
      'Stop talking, my timer went off.'
    ],
    correctAnswer: 1,
    explanation: 'Expressing gratitude, noting the hard stop gently, and reaffirming the next touchpoint concludes the interaction professionally.'
  },
  {
    id: 19,
    topic: 'Describing Work Experience',
    question: 'Which phrase best demonstrates professional ownership when describing past career contributions during an interview?',
    options: [
      'They made me do some tasks that were boring.',
      'I was just sitting in the office every day.',
      'In my previous role, I spearheaded the customer onboarding workflow, reducing account setup time by 35%.',
      'My boss did all the work and I watched.'
    ],
    correctAnswer: 2,
    explanation: 'Action verbs (\'spearheaded\', \'directed\', \'optimized\') coupled with quantifiable outcomes convey competence and leadership.'
  },
  {
    id: 20,
    topic: 'Active Listening & Acknowledgment',
    question: 'Which vocal tokens and verbal cues demonstrate active, respectful listening during a colleague\'s presentation without interrupting their flow?',
    options: [
      'Loudly coughing and checking your watch every 10 seconds',
      'Looking at your smartphone screen while sighing',
      'Interrupting after every single sentence to share a personal story',
      'Nodding attentively and offering brief verbal acknowledgments like \'I see,\' \'Understood,\' and \'That makes sense\''
    ],
    correctAnswer: 3,
    explanation: 'Positive micro-cues and concise backchanneling confirm engagement and encourage collaborative dialogue.'
  }
];

export const PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS: Task[] = [
  {
    id: 'pes-beg-01',
    orderIndex: 1,
    title: '1. Introduction to Professional English Speaking',
    description: 'Establish core professional speaking habits: cultivating executive confidence, speaking with purpose, overcoming conversational anxiety, and mastering basic workplace interaction rules.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'in_progress',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Professional English speaking is not about having a native accent or using complicated vocabulary; it is about communicating your ideas with clarity, calm confidence, respect, and actionable purpose in every workplace scenario.',
      objectives: [
        'Understand the distinction between conversational fluency and professional clarity',
        'Overcome common speaking fears through breath control and steady pacing',
        'Learn the foundational rules of professional workplace verbal etiquette',
        'Build a consistent 15-minute daily spoken English practice habit'
      ],
      sections: [
        {
          title: 'Confidence, Clarity, and Purpose in Spoken English',
          content: 'In professional settings, listeners value clarity and conciseness above all else. When you speak slowly, articulate your key words, and state your point directly, your listeners perceive you as credible, prepared, and composed.',
          explanation: 'Many non-native speakers rush their words because of nervousness. Slowing down your speaking rate by 15-20% immediately improves comprehension and gives you time to choose accurate vocabulary.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Self-Introduction at Team Standup',
              code: `Alex (Team Lead): "Everyone, please give a warm welcome to our newest software engineer, Daniel."\n\nDaniel: "Good morning, everyone. Thank you, Alex. I am Daniel Reyes, and I am joining the frontend team as a UI engineer. Over the past four years, I have specialized in building accessible React web applications. I am really looking forward to collaborating with all of you on Project Apollo."\n\nAlex: "Fantastic to have you on board, Daniel. Let's get you set up with your development environment right after standup."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: First-Day Workplace Greeting with Colleague',
              code: `Daniel: "Excuse me, hi! Are you Sarah from the product design team?"\n\nSarah: "Yes, I am! You must be Daniel. Welcome to Skillora AI!"\n\nDaniel: "Thank you, Sarah. It is great to finally meet you in person. Alex mentioned that we will be working closely on the new dashboard components."\n\nSarah: "Absolutely! I have the Figma design library ready for you. Let me know once you settle in, and we can grab a quick coffee to review the user journey."\n\nDaniel: "That sounds wonderful. I appreciate the warm welcome."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: First Client Call Introduction',
              code: `Daniel: "Good afternoon, Mr. Harrison. My name is Daniel Reyes, and I am the lead frontend developer assigned to your e-commerce platform upgrade."\n\nMr. Harrison: "Hello Daniel. Glad to connect. We are eager to see the initial prototype."\n\nDaniel: "I am delighted to meet you. Today, my objective is to walk you through the checkout flow and ensure all your business requirements are addressed. Shall we begin with the cart preview?"\n\nMr. Harrison: "Sounds like a solid plan. Lead the way."`
            }
          ],
          commonMistakes: [
            'Apologizing excessively for your English before starting a conversation (e.g., "Sorry for my bad English"). Instead, speak with calm composure.',
            'Speaking at high speed to hide pronunciation uncertainty, which leads to mumbled consonant endings.',
            'Using overly informal slang (e.g., "Yo what\'s up dude") with managers, clients, or unfamiliar colleagues.'
          ],
          proTip: 'Never apologize for learning a second or third language. Pause, breathe deeply from your diaphragm, and enunciate your ending consonants clearly.'
        }
      ],
      keyTakeaways: [
        'Clarity and purpose outweigh speed and native-like perfection in international business English.',
        'Slowing down your speaking pace boosts your perceived confidence and listening comprehension.',
        'Introduce yourself with your full name, role, core focus, and a positive statement of collaboration.'
      ],
      practiceExercises: [
        {
          title: '30-Second Mirror Introduction Drill',
          instructions: 'Stand in front of a mirror or open your webcam. Speak your 3-sentence self-introduction aloud 3 times, maintaining steady eye contact and pausing between sentences.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Professional Speaking Foundations',
        question: 'When introducing yourself to a new team, what is the best practice for establishing credibility and rapport?',
        options: [
          'State your name, your specific role, your relevant background focus, and your enthusiasm to collaborate with the team',
          'Apologize immediately for your accent and avoid speaking further',
          'Speak as fast as possible without pausing for breath',
          'List personal complaints about your former employer'
        ],
        correctAnswer: 0,
        explanation: 'A structured, positive self-introduction builds immediate professional trust and open channels for team collaboration.'
      }
    ]
  },
  {
    id: 'pes-beg-02',
    orderIndex: 2,
    title: '2. Basic Sentence Patterns for Speaking',
    description: 'Master core spoken English grammatical architectures: SVO patterns, positive/negative assertions, questions, short answers, and sentence expansion techniques.',
    duration: '50 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Fluency begins with mastering predictable sentence blueprints. By internalizing Subject-Verb-Object (SVO) frameworks and time markers, you can construct clear, grammatically sound spoken thoughts on the spot without translating from your native language.',
      objectives: [
        'Construct fluid Subject + Verb + Object spoken sentences effortlessly',
        'Express past actions, current progress, and future plans accurately',
        'Formulate natural positive, negative, and interrogative sentences',
        'Expand basic 3-word sentences into rich, professional workplace statements'
      ],
      sections: [
        {
          title: 'Sentence Expansion & Tense Blueprinting',
          content: 'Professional conversations frequently require shifting between what you did (Past Simple), what you are doing right now (Present Continuous), and what you will do next (Future with Will / Going to). Expanding your core idea with \'Where\', \'When\', and \'Why\' adds necessary context.',
          explanation: 'Start with the kernel (Subject + Verb): \'I prepared the slides.\' Expand with context: \'I prepared the slides (What) in Google Slides (Where) yesterday evening (When) for tomorrow\'s client pitch (Why).\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Describing Daily Work Routines',
              code: `Marcus: "Elena, what does your typical morning look like in customer success?"\n\nElena: "Usually, I start my day at 8:30 AM. First, I review urgent client support tickets. Then, I respond to customer inquiries and coordinate bug reports with the engineering team."\n\nMarcus: "How many tickets do you typically resolve each day?"\n\nElena: "On average, I resolve between fifteen and twenty client issues before noon."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Reporting Completed Work & Current Progress',
              code: `Supervisor (David): "Hi Carlos, where do we stand on the monthly data audit?"\n\nCarlos: "I completed the raw data extraction yesterday afternoon. Currently, I am analyzing the discrepancies in the sales figures. I will finalize the summary report by 3:00 PM today."\n\nDavid: "Excellent. Are you encountering any blockers?"\n\nCarlos: "No blockers at the moment. Everything is proceeding according to schedule."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Discussing Future Commitments & Plans',
              code: `Jessica: "Are you attending the cybersecurity workshop on Thursday?"\n\nLiam: "Yes, I am planning to attend the morning session. I will leave the office around 9:00 AM, participate in the threat modeling lab, and return by 1:30 PM."\n\nJessica: "Great! Could you take notes on the new two-factor authentication protocol?"\n\nLiam: "Certainly. I will share a bulleted summary with the department on Friday."`
            }
          ],
          commonMistakes: [
            'Mixing past and present tenses in the same spoken sentence (e.g., "Yesterday I go to the meeting and discuss"). Use "Yesterday I went to the meeting and discussed".',
            'Dropping the auxiliary verb in continuous sentences (e.g., "I working on the task"). Use "I am working on the task".',
            'Answering simple Yes/No questions with just a blunt "Yes" or "No". Instead, say "Yes, I did" or "Certainly, I can assist with that."'
          ],
          proTip: 'Practice the \'Kernel + 3 Ws\' method: Speak the subject and verb, then add What, When, and Why in a smooth rhythm.'
        }
      ],
      keyTakeaways: [
        'Master the Subject + Verb + Object order to keep spoken ideas clear and cohesive.',
        'Use precise time prepositions: \'at\' for exact times (at 3:00 PM), \'on\' for days (on Thursday), and \'in\' for months/years (in October).',
        'Add professional polish by giving complete, courteous short answers rather than one-word responses.'
      ],
      practiceExercises: [
        {
          title: 'Sentence Expansion Ladder Drill',
          instructions: 'Take the base sentence "I wrote the code." Expand it aloud 4 times by adding when, why, with whom, and the business impact.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Sentence Expansion',
        question: 'Which of the following spoken sentences demonstrates the most complete, grammatically accurate expansion of a work update?',
        options: [
          'I finished yesterday.',
          'I finalized the API documentation yesterday afternoon in Notion so the mobile team can begin frontend integration on Monday.',
          'Yesterday the API documentation finished by me in Notion.',
          'Finishing API docs yesterday for team integration.'
        ],
        correctAnswer: 1,
        explanation: 'Option B provides a complete Subject-Verb-Object core with clear time, tool, and business purpose expansion.'
      }
    ]
  },
  {
    id: 'pes-beg-03',
    orderIndex: 3,
    title: '3. Professional Greetings and Introductions',
    description: 'Navigate formal, semi-formal, and informal greeting registers, introduce clients, colleagues, and managers, and close initial interactions gracefully.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'First impressions in the workplace are formed in the first 15 seconds of verbal contact. Mastering appropriate greeting levels and seamless introductions builds instant rapport and signals social intelligence.',
      objectives: [
        'Differentiate between formal, semi-formal, and informal greeting registers',
        'Introduce yourself and third parties with appropriate status and context',
        'Greet executives, VIP clients, and cross-functional peers with confidence',
        'Conclude first-time conversations politely with clear next steps'
      ],
      sections: [
        {
          title: 'The Greeting Hierarchy & Introduction Etiquette',
          content: 'The formality of your greeting depends on the relationship, the setting, and corporate culture. With executives and external clients, begin with formal salutations. With everyday teammates, semi-formal greetings create an energetic, friendly atmosphere.',
          explanation: 'When introducing two people of different seniority or client status, always address the higher-status or client party first: \'Mr. Davis (Client), I would like to introduce you to Maya Lin (Our Engineer).\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Executive Office Introduction',
              code: `Receptionist: "Good morning, Dr. Aris. Mr. Thornton is expecting you in Conference Room B."\n\nDr. Aris: "Thank you very much. Good morning."\n\nMr. Thornton: "Good morning, Dr. Aris! It is an absolute pleasure to meet you. Thank you for flying in for our quarterly board review."\n\nDr. Aris: "The pleasure is mine, Mr. Thornton. Thank you for the warm reception."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Introducing a Colleague to an External Partner',
              code: `Rachel: "Hello Keith, welcome to our headquarters. Before we start our strategy review, I would like to introduce you to Omar Farooq, our Senior Data Architect."\n\nKeith: "Nice to meet you, Omar. I have heard great things about your machine learning pipelines."\n\nOmar: "Pleased to meet you, Keith. I look forward to walking you through our predictive modeling architecture today."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Networking Event Introduction & Polite Exit',
              code: `Hannah: "Hello! Mind if I join you at this table?"\n\nVikram: "Not at all! Please, have a seat. I am Vikram, Product Manager at CloudScale."\n\nHannah: "Delighted to meet you, Vikram. I am Hannah, UX Lead at Skillora AI."\n\nVikram: "Fascinating! How are you enjoying the conference keynote so far?"\n\n[After a 3-minute discussion]\nHannah: "Vikram, it has been wonderful speaking with you. I see my colleague waving from the lobby, so I must excuse myself. May I exchange business cards or connect with you on LinkedIn?"\n\nVikram: "Absolutely, Hannah. Here is my card. Let's stay in touch!"`
            }
          ],
          commonMistakes: [
            'Using overly stiff, archaic phrases like "How do you do?" with contemporary tech colleagues where "Good morning" or "Great to meet you" is standard.',
            'Forgetting to introduce a silent colleague standing beside you during a group greeting.',
            'Abruptly walking away from a conversation without a polite closing bridge phrase.'
          ],
          proTip: 'When meeting someone for the first time, repeat their name naturally in your reply: "It is a pleasure to meet you, Keith." This reinforces memory and conveys respect.'
        }
      ],
      keyTakeaways: [
        'Calibrate greeting formality based on your audience: formal for clients/executives, semi-formal for team peers.',
        'Address the client or senior stakeholder first when introducing colleagues.',
        'Always end conversations with a polite exit bridge: mention a time constraint, express appreciation, and propose a follow-up.'
      ],
      practiceExercises: [
        {
          title: 'Third-Party Introduction Role-Play',
          instructions: 'Practice introducing your software engineering teammate to a prospective client CEO using their names, titles, and a shared project topic.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Introduction Etiquette',
        question: 'When introducing your junior analyst Kevin to a visiting enterprise client, Mrs. Sterling, how should you structure the verbal introduction?',
        options: [
          'Mrs. Sterling, I would like you to meet Kevin Patel, our Business Intelligence Analyst who prepared today\'s market forecast.',
          'Kevin, this is Mrs. Sterling. Talk to her.',
          'Hey everyone, look at Kevin and Mrs. Sterling.',
          'Mrs. Sterling, Kevin is here because I told him to come.'
        ],
        correctAnswer: 0,
        explanation: 'Option A addresses the client first, provides the colleague\'s full name, states their professional title, and gives relevant project context.'
      }
    ]
  },
  {
    id: 'pes-beg-04',
    orderIndex: 4,
    title: '4. Talking About Yourself and Your Work',
    description: 'Craft and deliver compelling 30-second elevator pitches, 60-second professional overviews, and articulate your skills, responsibilities, and career trajectory.',
    duration: '50 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Whether at job interviews, cross-departmental kickoffs, or professional networking summits, being able to speak about your background and core value concisely without rambling is an essential career superpower.',
      objectives: [
        'Structure a punchy 30-second elevator pitch using the Present-Past-Future model',
        'Deliver a comprehensive 60-second professional introduction for meetings and interviews',
        'Articulate technical skills, daily responsibilities, and key achievements with impactful verbs',
        'Express professional strengths and aspirations with authentic confidence'
      ],
      sections: [
        {
          title: 'The Present-Past-Future Pitch Framework',
          content: 'A winning self-introduction answers three unspoken questions: 1. Who are you right now? (Present), 2. What relevant experience brought you here? (Past), and 3. What value are you looking to create next? (Future).',
          explanation: 'Avoid reciting your entire CV chronologically. Focus only on the 2-3 most relevant milestones that directly matter to your current listener.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: 30-Second Elevator Pitch at a Tech Meetup',
              code: `Investor: "Hi there! What kind of projects are you building?"\n\nTariq: "Hi! I am Tariq Mansoor. Currently, I am a Full-Stack Cloud Engineer specializing in serverless backend systems and high-scale APIs. Over the past three years, I have built cloud infrastructure that handles over two million transactions daily. Right now, I am passionate about integrating AI automation into enterprise developer workflows."\n\nInvestor: "Impressive! We are actively funding developer tooling startups. Here is my contact info."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: 60-Second Job Interview "Tell Me About Yourself"',
              code: `Interviewer: "To start off, could you please tell us a little bit about yourself and your professional journey?"\n\nNadia: "Certainly! I have been working as a Technical Project Manager for the past five years, primarily focusing on fintech mobile apps. In my previous role at Apex Pay, I led a cross-functional squad of twelve engineers and designers, successfully launching our peer-to-peer payments app two weeks ahead of schedule. My core strength lies in agile sprint facilitation and translating complex stakeholder requirements into actionable engineering roadmaps. I am excited about this opportunity at Skillora AI because of your mission to revolutionize AI-assisted learning at global scale."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Department All-Hands New Hire Spotlight',
              code: `Emcee: "Next up, let's hear from our new Content Operations Specialist, Chloe!"\n\nChloe: "Hello everyone! I am thrilled to be here. My background is in digital media curation and instructional design. For the last three years, I managed bilingual educational libraries across North America and Europe. Here at Skillora, my responsibility is to ensure our course materials are engaging, accurate, and accessible to learners worldwide. Outside of work, I am an avid marathon runner. I look forward to collaborating with all of you!"`
            }
          ],
          commonMistakes: [
            'Starting with personal life details like birth city or childhood memories instead of professional background.',
            'Listing job titles without mentioning quantifiable achievements or areas of passion.',
            'Speaking without pauses, making it hard for the interviewer or peer to absorb key information.'
          ],
          proTip: 'Record your 60-second pitch on your phone. Listen back: Did you pause between thoughts? Were your action verbs punchy? Time yourself to stay within 55-65 seconds.'
        }
      ],
      keyTakeaways: [
        'Use the Present-Past-Future model: Current Role -> Relevant Track Record -> Future Goal / Enthusiasm.',
        'Use strong active verbs: \'spearheaded\', \'engineered\', \'facilitated\', \'optimized\', \'managed\'.',
        'Keep pitches conversational, crisp, and focused on value creation.'
      ],
      practiceExercises: [
        {
          title: 'Voice Memo 60-Second Self-Pitch Test',
          instructions: 'Record your 60-second pitch on a smartphone voice memo app. Check your timing, clarity, and ensure you include Present, Past, and Future elements.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Self-Introduction Framework',
        question: 'What are the three core components of the Present-Past-Future self-introduction framework?',
        options: [
          'Where you were born, what games you play, and what food you dislike',
          'Your current role & core focus, your relevant track record & achievements, and your future goals or enthusiasm for the current opportunity',
          'Your previous salary, your manager\'s mistakes, and your retirement age',
          'A list of all 15 schools you attended since age five'
        ],
        correctAnswer: 1,
        explanation: 'Option B accurately defines the professional Present-Past-Future structure that interviewers and networkers look for.'
      }
    ]
  },
  {
    id: 'pes-beg-05',
    orderIndex: 5,
    title: '5. Asking and Answering Questions',
    description: 'Master WH questions, Yes/No queries, strategic follow-ups, clarifying questions, asking for repetition courteously, and delivering complete spoken responses.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Questions are the primary engine of business collaboration. Asking clear, polite questions uncovers crucial project requirements, prevents misunderstandings, and demonstrates intellectual curiosity.',
      objectives: [
        'Formulate accurate open-ended (WH) and closed (Yes/No) workplace questions',
        'Ask strategic follow-up questions that deepen understanding',
        'Use polite phrasing when asking colleagues or managers for clarification',
        'Deliver complete, context-rich answers without rambling'
      ],
      sections: [
        {
          title: 'The Art of Workplace Inquiries',
          content: 'Closed questions (\'Are we ready?\') confirm facts, while open-ended questions (\'How should we approach this architecture?\') invite detailed analysis. Combining an open question with a polite modal opener softens directness while extracting high-value insight.',
          explanation: 'When asking for clarification, avoid sounding accusatory. Instead of \'You didn\'t explain the budget,\' say: \'Could you clarify the budget allocation for this quarter?\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Project Scope Clarification with Product Manager',
              code: `Developer (Sam): "Hi Priya, I have a quick clarifying question regarding the user authentication user story."\n\nPriya: "Sure Sam, go ahead. What's on your mind?"\n\nSam: "Should we support social login via Google and GitHub in this sprint, or is that slated for Phase 2?"\n\nPriya: "Good catch! For this sprint, let's stick exclusively to email and password authentication. We will introduce social providers in the subsequent release."\n\nSam: "Understood. That keeps our sprint scope well within capacity. Thank you!"`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Client Discovery Q&A',
              code: `Consultant (Maria): "Could you tell us a bit more about how your team currently tracks inventory discrepancies?"\n\nClient (Mr. Gomez): "Currently, we use a manual spreadsheet updated at the end of each shift."\n\nMaria: "I see. And what is the biggest challenge your team experiences with that manual process?"\n\nMr. Gomez: "Data entry delays. It often takes 24 hours before warehouse managers notice inventory shortages."\n\nMaria: "That makes complete sense. An automated barcode scanning integration would eliminate that 24-hour lag immediately."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Behavioral Interview Follow-Up',
              code: `Candidate (Leo): "...and that is how we resolved the database indexing bottleneck."\n\nInterviewer: "That sounds like a solid technical solution. How did you communicate the temporary downtime to your active users?"\n\nLeo: "We broadcasted an in-app banner notification 48 hours in advance, scheduled the maintenance window at 2:00 AM UTC during peak low-traffic hours, and maintained a live status page update throughout the deployment."\n\nInterviewer: "Excellent proactive communication."`
            }
          ],
          commonMistakes: [
            'Using aggressive-sounding questions like "Why did you do that?" instead of constructive alternatives like "Could you walk me through the reasoning behind this decision?"',
            'Pretending to understand instructions when you are confused, leading to costly errors later.',
            'Answering with a bare "Yes" without adding the necessary status details.'
          ],
          proTip: 'Use the 3-Step Clarification Formula: 1. Confirm what you heard, 2. State your specific question, 3. Explain how the answer helps you proceed.'
        }
      ],
      keyTakeaways: [
        'Use WH questions (What, Where, When, Who, Why, How) for gathering rich insights.',
        'Soften direct inquiries using polite modals: \'Could you clarify...\', \'May I ask...\', \'Would you mind explaining...\'',
        'Answer questions directly with the core fact first, followed by supporting detail.'
      ],
      practiceExercises: [
        {
          title: 'Polite Clarification Role-Play',
          instructions: 'Practice asking 3 different polite clarification questions to a manager who gave you a vague assignment deadline.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Clarification Techniques',
        question: 'Which question is the most polite and constructive way to seek clarification on a project requirement?',
        options: [
          'Why are your instructions so confusing?',
          'Could you please clarify the target audience for this feature so I can align the UI design accordingly?',
          'I don\'t get it. Do it yourself.',
          'What did you say just now?'
        ],
        correctAnswer: 1,
        explanation: 'Option B uses polite phrasing (\'Could you please clarify...\') and provides the professional rationale for why the clarification is required.'
      }
    ]
  },
  {
    id: 'pes-beg-06',
    orderIndex: 6,
    title: '6. Everyday Workplace Conversations',
    description: 'Engage in natural desk check-ins, coordinate task handoffs, ask teammates for assistance, provide quick progress syncs, and end conversations courteously.',
    duration: '50 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Daily informal interactions with colleagues grease the wheels of teamwork. Learning how to initiate quick syncs, request support without being intrusive, and coordinate handoffs builds collaborative goodwill.',
      objectives: [
        'Initiate workplace conversations respectfully by checking the other person\'s availability',
        'Request assistance from busy teammates with courtesy and specific task framing',
        'Execute smooth task and shift handoffs verbally',
        'End impromptu desk and hallway conversations politely'
      ],
      sections: [
        {
          title: 'Respectful Workplace Interaction Frameworks',
          content: 'Before launching into a work topic at a colleague\'s desk or on an impromptu call, always check their cognitive bandwidth: \'Hi Maya, do you have two minutes, or are you in the middle of deep work?\' This small courtesy prevents frustration and ensures full attention.',
          explanation: 'When asking for help, specify how much time you need: \'Do you have five minutes to look over this error log with me?\' People are far more likely to agree to a bounded time request.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Desk Check-In & Requesting Quick Help',
              code: `Julian: "Hi Fatima, do you have a quick minute, or are you heads-down on the sprint demo?"\n\nFatima: "I have a few minutes! What's going on, Julian?"\n\nJulian: "I am running into a CORS authorization error on the user settings endpoint. Could you take a quick look at my headers configuration?"\n\nFatima: "Sure! Let's look at your config file. Ah, look right here—you need to include the bearer token in the authorization header."\n\nJulian: "That was it! Thank you so much, Fatima. I really appreciate your time."\n\nFatima: "Anytime! Glad we caught it quickly."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Coordinating a Feature Handoff',
              code: `Frontend Dev (Lucas): "Hi Maya, I have pushed the responsive checkout UI to the staging branch."\n\nQA Engineer (Maya): "Awesome! Are all unit tests passing locally?"\n\nLucas: "Yes, all thirty-two tests passed. The test credentials and staging URL are documented in ticket PROJ-402."\n\nMaya: "Perfect. I will start regression testing right after lunch and log any UI edge cases in Jira."\n\nLucas: "Sounds great. Ping me if you notice anything unexpected."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Polite Departure from Impromptu Conversation',
              code: `Ethan: "...and that is how we configured the continuous integration pipeline."\n\nZoe: "That is super interesting, Ethan! I would love to hear more about the caching strategy, but I have a client kickoff meeting starting in five minutes in Room 302."\n\nEthan: "Of course! Good luck with the kickoff. Let's continue this over lunch tomorrow."\n\nZoe: "Deal! Talk to you tomorrow."`
            }
          ],
          commonMistakes: [
            'Dumping a complex problem on a teammate without checking if they are busy or on a deadline.',
            'Leaving a task handoff ambiguous without confirming who owns the next action item.',
            'Trapping colleagues in lengthy conversations when they have clearly indicated a time constraint.'
          ],
          proTip: 'Always summarize the action item at the end of a quick sync: "Great, so you will review the PR, and I will update the staging database."'
        }
      ],
      keyTakeaways: [
        'Always check availability before asking for help: \'Do you have 2 minutes?\'',
        'State the exact problem concisely and specify the expected time required.',
        'Confirm next steps explicitly before ending any collaborative sync.'
      ],
      practiceExercises: [
        {
          title: '5-Minute Help Request Drill',
          instructions: 'Practice asking a senior teammate for 5 minutes of help on a bug report. State the context, the exact blocker, and what you have already tried.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Workplace Interaction Protocol',
        question: 'What is the most professional way to approach a colleague\'s desk when you need their input on a task?',
        options: [
          'Start talking loudly immediately regardless of what is on their screen',
          'Hi Maya, do you have two minutes, or are you in the middle of something urgent right now?',
          'Hey! Why aren\'t you answering my Slack messages?',
          'Tap their keyboard to get their attention'
        ],
        correctAnswer: 1,
        explanation: 'Option B politely checks the colleague\'s availability and respects their current focus.'
      }
    ]
  },
  {
    id: 'pes-beg-07',
    orderIndex: 7,
    title: '7. Polite Requests and Responses',
    description: 'Master modal auxiliary structures (Could, Would, May), softeners, diplomatic refusals, and constructive alternative offerings.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Politeness in English is not merely about saying \'please\' and \'thank you\'; it involves modulating your grammatical tone with modal verbs and conditional phrases to show respect for the listener\'s autonomy.',
      objectives: [
        'Transform direct demands into polished professional requests',
        'Use modal verbs: Can you, Could you, Would you, Would you mind, Would it be possible',
        'Accept requests enthusiastically and professionally',
        'Decline requests diplomatically while providing constructive alternatives'
      ],
      sections: [
        {
          title: 'The Politeness Gradient & Modal Softening',
          content: 'Direct imperatives like \'Send me the file\' sound harsh and bossy in English workplace culture. By using modal phrases, you transform commands into courteous collaborative requests.',
          explanation: 'Comparison: Direct (Impolite): \'Give me feedback today.\' -> Polished: \'Would it be possible for you to share your feedback by the end of the day?\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Requesting Time & Document Review',
              code: `Analyst (Kiran): "Hi Brenda, I hope your morning is going well."\n\nBrenda: "Good morning, Kiran. How can I help?"\n\nKiran: "I have prepared the draft proposal for the new client onboarding portal. Would you have twenty minutes this afternoon to review the key milestones with me?"\n\nBrenda: "Certainly! I have an opening at 3:30 PM. Let's review it together then."\n\nKiran: "Thank you so much Brenda, I will send a calendar invite right away."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Declining a Request Diplomatically with Alternative',
              code: `Colleague (Tyler): "Hi Sandra, could you take over my client demo on Wednesday afternoon? I have a dentist appointment."\n\nSandra: "I would really like to help you out Tyler, but I am leading our quarterly vendor negotiation all Wednesday afternoon. However, could Mark or Alyssa step in? If needed, I can brief whoever covers for you on Tuesday."\n\nTyler: "I completely understand Sandra. That negotiation is critical. I will check in with Alyssa. Thanks for offering the briefing!"`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Requesting Managerial Approval for Budget Expenditure',
              code: `Team Lead (Oscar): "Good afternoon, Mr. Gallagher. Do you have a quick moment to discuss software licensing?"\n\nMr. Gallagher: "Yes Oscar, what do you need?"\n\nOscar: "Our design team has outgrown the free Figma tier. Would it be possible to approve an enterprise subscription for our four designers? It would allow us to collaborate on interactive prototypes seamlessly."\n\nMr. Gallagher: "That makes sense. Send over the cost breakdown, and I will sign off on it before end of day."`
            }
          ],
          commonMistakes: [
            'Using "Must" or "You have to" with colleagues or managers (e.g., "You have to approve this"). Instead, use "Could you please approve this?"',
            'Saying a flat "No, I won\'t do that" when declining. Always provide a brief reason and alternative.',
            'Responding to "Would you mind helping me?" with "Yes" when you mean "No, I don\'t mind (I am happy to help)".'
          ],
          proTip: 'Remember the "Would you mind" rule: Answering "Not at all, I\'d be glad to!" means you are happy to help.'
        }
      ],
      keyTakeaways: [
        'Use \'Could you...\', \'Would you mind...\', or \'Would it be possible to...\' to elevate your professional tone.',
        'When saying no, follow the 3-part formula: Gratitude/Desire -> Honest Constraint -> Workable Alternative.',
        'Acknowledge requests with positive energy: \'Certainly!\', \'I would be happy to help\', \'Consider it done.\''
      ],
      practiceExercises: [
        {
          title: 'Polite Refusal Construction Drill',
          instructions: 'Practice declining 3 different workplace requests (taking an extra shift, attending an optional meeting, doing someone else\'s report) using the 3-part polite refusal framework.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Modal Politeness',
        question: 'Which of the following requests is the most polite and appropriate when asking a senior manager for a budget sign-off?',
        options: [
          'You need to sign this budget right away.',
          'Would it be possible for you to review and sign off on the design budget when you have a moment today?',
          'Sign this document because I asked.',
          'Give me money for the design team now.'
        ],
        correctAnswer: 1,
        explanation: 'Option B uses conditional modal phrasing (\'Would it be possible for you to...\') which respects authority while stating a clear request.'
      }
    ]
  },
  {
    id: 'pes-beg-08',
    orderIndex: 8,
    title: '8. Basic Pronunciation and Clear Speech',
    description: 'Master English syllable stress, sentence rhythm, connected speech, challenging workplace consonants, and verbal dictation of numbers, emails, and URLs.',
    duration: '55 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Clear pronunciation is not about erasing your accent; it is about mastering word stress, articulating final consonants, and managing English speech rhythm so your listeners understand your ideas without cognitive strain.',
      objectives: [
        'Identify and apply primary syllable stress in common workplace vocabulary',
        'Articulate crucial final consonant sounds (-t, -d, -s, -ed, -ing) crisply',
        'Dictate professional contact details (email addresses, websites, phone numbers, codes) accurately',
        'Distinguish between commonly confused minimal pairs in business settings'
      ],
      sections: [
        {
          title: 'Word Stress, Rhythm, and Phonetic Precision',
          content: 'English is a stress-timed language. In multi-syllable words, one syllable is pronounced louder, longer, and higher in pitch. Stressing the wrong syllable can confuse native and non-native listeners alike.',
          explanation: 'Notice the difference in stress: ana-LY-sis (noun) vs. AN-a-lyze (verb); stra-TE-gic (adjective) vs. STRA-te-gy (noun); pre-sen-TA-tion (noun) vs. PRE-sent (noun).',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Dictating Email Addresses & URLs Over the Phone',
              code: `Support Agent: "Could you please confirm the email address associated with your enterprise account?"\n\nCustomer: "Sure. It is alex.m.torres@skillora.ai."\n\nSupport Agent: "Let me read that back to make sure I got it right: that is a-l-e-x dot m dot t-o-r-r-e-s at skillora dot a-i. Is that correct?"\n\nCustomer: "That is exactly right. Torres with double 'r'."\n\nSupport Agent: "Perfect, thank you Alex."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Clarifying Dates, Numbers, and Alphanumeric Codes',
              code: `Logistics Manager (Ben): "What was the shipment tracking ID for the Singapore hardware order?"\n\nAssistant (Lina): "The tracking code is S-G, as in Sierra Golf, dash 4-0-9-8, dash B, as in Bravo."\n\nBen: "Got it: SG-4098-B. And what is the confirmed delivery date?"\n\nLina: "It is scheduled for Tuesday, November fourteenth at two-thirty PM EST (14:30)."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Practicing Syllable Stress in Strategy Presentations',
              code: `Presenter (Carla): "Our primary objective today is to evaluate our Q3 de-VE-lop-ment stra-TE-gy."\n\nColleague (Mark): "Could you emphasize the difference between our short-term tac-tics and our long-term stra-te-gic roadmap?"\n\nCarla: "Certainly. Tac-ti-cal-ly, we are fixing bugs; stra-TE-gi-cal-ly, we are migrating to microservices."\n\nMark: "Clear distinction. Thank you Carla."`
            }
          ],
          commonMistakes: [
            'Dropping final consonant sounds (e.g., saying "firs" instead of "first", or "produc" instead of "product").',
            'Confusing the pronunciation of numbers like "thirteen" (stress on -TEEN) and "thirty" (stress on THIR-).',
            'Pronouncing every word with equal robotic stress instead of stressing the main content words (nouns, main verbs, adjectives).'
          ],
          proTip: 'To ensure accuracy when spelling over audio calls, use the standard phonetic alphabet: A as in Alpha, B as in Bravo, C as in Charlie, D as in Delta.'
        }
      ],
      keyTakeaways: [
        'Stress the correct syllable in corporate words: stra-TE-gic, ana-LY-sis, tech-NO-lo-gy.',
        'Enunciate final consonants (-t, -d, -k, -s) so past tense verbs and plurals are distinctly audible.',
        'Use NATO phonetic clarifications when spelling critical names, emails, and license keys over the phone.'
      ],
      practiceExercises: [
        {
          title: 'Phonetic Dictation Read-Aloud Drill',
          instructions: 'Read aloud 5 complex email addresses and 5 alphanumeric product codes using phonetic alphabet clarification.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Word Stress & Clarity',
        question: 'Which syllable carries the primary stress in the word \'ANALYSIS\'?',
        options: [
          'First syllable (AN-a-ly-sis)',
          'Second syllable (a-NAL-y-sis)',
          'Third syllable (an-a-LY-sis)',
          'Fourth syllable (an-a-ly-SIS)'
        ],
        correctAnswer: 1,
        explanation: 'In the noun \'analysis\', primary stress falls on the second syllable: /əˈnæl.ə.sɪs/ (a-NAL-y-sis).'
      }
    ]
  },
  {
    id: 'pes-beg-09',
    orderIndex: 9,
    title: '9. Talking About Time, Dates, and Schedules',
    description: 'Confidently discuss deadlines, calendar appointments, time zones, recurring syncs, availability windows, and rescheduling protocols.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Time management and scheduling discussions occur constantly in international business. Precise spoken command of prepositions of time, time zone offsets, and rescheduling etiquette prevents missed meetings and operational chaos.',
      objectives: [
        'State dates, times, and deadlines using correct prepositions (at, on, in, by)',
        'Express personal availability windows clearly during meeting planning',
        'Navigate international time zone differences (EST, PST, UTC, GMT, SGT)',
        'Propose and confirm schedule changes diplomatically'
      ],
      sections: [
        {
          title: 'Time Expressions & Scheduling Syntax',
          content: 'Mastering time prepositions is critical: Use \'AT\' for exact times (at 2:00 PM), \'ON\' for specific days and dates (on Monday, on October 15th), \'IN\' for months and durations (in November, in two weeks), and \'BY\' for deadlines (by Friday at 5 PM).',
          explanation: '\'By Friday\' means on or before Friday. If a task is due \'by 5:00 PM\', submitting at 5:01 PM is late.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Scheduling a Cross-Time Zone Sync',
              code: `Dev Lead (Devon): "Hi Haruto, we need to schedule a 30-minute sprint refinement session between our San Francisco and Tokyo teams."\n\nHaruto: "Sounds good Devon. What time window works best on your end?"\n\nDevon: "How does 5:00 PM Pacific Standard Time on Wednesday sound? That should be 9:00 AM Thursday morning in Tokyo."\n\nHaruto: "9:00 AM Thursday JST is perfect for our team. I will put it on the calendar and send the Zoom link."\n\nDevon: "Awesome! Talk to you Thursday morning your time."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Proposing a Deadline Adjustment Proactively',
              code: `Project Manager (Lydia): "Hi Marco, are we still on track to deliver the security audit by Friday at noon?"\n\nMarco: "Hi Lydia, thank you for checking in. Our third-party penetration tester experienced a one-day delay. Would it be acceptable to push the final submission to Monday morning at 10:00 AM?"\n\nLydia: "As long as the executive team has the findings before our Tuesday afternoon review, Monday morning works fine."\n\nMarco: "Much appreciated, Lydia. I will have the complete report in your inbox by 9:30 AM Monday."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Checking Availability in a Group Setting',
              code: `Team Lead (Kylie): "We need to schedule a post-mortem review for the staging outage. Who has open availability tomorrow afternoon?"\n\nLiam: "I am free between 2:00 PM and 4:00 PM."\n\nSarah: "I have a client call until 2:30, but I am wide open from 2:30 PM onwards."\n\nKylie: "Great! Let's lock in 2:45 PM to 3:30 PM. I will send invites now."`
            }
          ],
          commonMistakes: [
            'Using "at" with days (e.g., "See you at Monday"). Always use "on Monday".',
            'Forgetting to mention the time zone when scheduling with remote international colleagues.',
            'Waiting until 5 minutes after a deadline to announce that you need more time.'
          ],
          proTip: 'When scheduling with international peers, always state both your local time and their local time to avoid 12-hour confusion.'
        }
      ],
      keyTakeaways: [
        'Use \'at\' for specific times, \'on\' for days/dates, \'in\' for time spans/months, and \'by\' for strict deadlines.',
        'Always specify the time zone (e.g., EST, UTC) for virtual meetings.',
        'Proactively communicate schedule changes well before the deadline arrives.'
      ],
      practiceExercises: [
        {
          title: 'Time Zone Conversion & Scheduling Drill',
          instructions: 'Practice proposing a 45-minute meeting to a colleague in London (GMT) while you are in New York (EST), offering two alternative slots.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Prepositions of Time',
        question: 'Which sentence correctly uses English prepositions of time for scheduling a workplace meeting?',
        options: [
          'Let\'s meet in 3:00 PM at Thursday.',
          'Let\'s meet at 3:00 PM on Thursday in Conference Room A.',
          'Let\'s meet on 3:00 PM by Thursday.',
          'Let\'s meet by 3:00 PM to Thursday.'
        ],
        correctAnswer: 1,
        explanation: 'Option B correctly uses \'at\' for the specific time (3:00 PM) and \'on\' for the day of the week (Thursday).'
      }
    ]
  },
  {
    id: 'pes-beg-10',
    orderIndex: 10,
    title: '10. Giving Simple Updates and Explanations',
    description: 'Structure clear project status updates, articulate cause-and-effect relationships with transition connectors, explain delays, and outline concrete next steps.',
    duration: '50 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Giving concise, logical updates is the hallmark of an effective team player. Learning to structure your spoken updates using the \'Done - Doing - Blockers\' formula ensures your managers and peers understand your progress immediately.',
      objectives: [
        'Deliver a structured 90-second status update at agile standups and team syncs',
        'Use cause-and-effect conjunctions (because, therefore, as a result, so) effectively',
        'Explain technical delays and operational blockers objectively',
        'Outline concrete next action items with accountable ownership'
      ],
      sections: [
        {
          title: 'The 3-Part Status Update Formula',
          content: 'A high-impact spoken update consists of three components: 1. Completed Items (What did you finish?), 2. Active Focus (What are you executing today?), and 3. Blockers & Dependencies (What risks or help do you need?).',
          explanation: 'Using transition words like \'Consequently\' or \'As a result\' connects facts logically. Example: \'The third-party API was down; therefore, we shifted our focus to local database optimization.\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Daily Engineering Standup Update',
              code: `Scrum Master: "Good morning team! Let's go around the room. Mateo, you're up first."\n\nMateo: "Good morning. Yesterday, I completed the password reset endpoint and pushed the code for peer review. Today, I am working on the user profile image upload feature. Currently, I have no blockers, and I expect to have the image upload PR ready by end of day."\n\nScrum Master: "Awesome progress, Mateo. Thank you."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Explaining a Critical Delay Objectively',
              code: `VP of Operations: "Pooja, why was the vendor contract rollout delayed by two days?"\n\nPooja: "Thank you for asking. During the final compliance scan, legal discovered an outdated data privacy clause. Because compliance is mandatory for our European rollout, we paused the signing to update the language. The revised contract was reviewed this morning, and we are on track to execute the agreement by 4:00 PM today."\n\nVP: "Good catch by the legal team. Thanks for handling it proactively."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: One-on-One Status Briefing with Manager',
              code: `Manager (Claire): "Hi Jason, how are things going with the onboarding redesign?"\n\nJason: "Overall, we are in great shape. We have completed user testing for the first three screens with positive feedback. However, users struggled with step four. As a result, we are simplifying the form fields today to reduce drop-off."\n\nClaire: "Smart pivot. Let me know if you need design assistance."\n\nJason: "Will do, Claire."`
            }
          ],
          commonMistakes: [
            'Giving rambling, 5-minute explanations filled with irrelevant granular trivia during quick standups.',
            'Hiding blockers until the deadline has already passed.',
            'Using emotional language (e.g., "The API is terrible and everything is broken") instead of objective technical facts.'
          ],
          proTip: 'Keep your daily standup update strictly under 60-90 seconds. Focus only on items that impact your teammates.'
        }
      ],
      keyTakeaways: [
        'Structure daily updates: What I completed -> What I am doing -> Any blockers.',
        'Use logical connectors: \'Because\', \'Therefore\', \'As a result\', \'Consequently\'.',
        'State problems objectively accompanied by your proposed remediation plan.'
      ],
      practiceExercises: [
        {
          title: '60-Second Standup Simulation Drill',
          instructions: 'Practice delivering a 60-second standup update covering one completed task, one current task, and one dependency blocker.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Status Update Structure',
        question: 'What is the most effective 3-part structure for a daily workplace standup update?',
        options: [
          'What movies you watched, what you had for breakfast, and your weekend plans',
          'Completed work since last sync, current active priorities, and any blockers or dependencies',
          'A list of complaints about other departments, excuses for delays, and salary requests',
          'A 10-minute speech detailing every single line of code written'
        ],
        correctAnswer: 1,
        explanation: 'Option B represents the universal agile standup standard: Completed -> In Progress -> Blockers.'
      }
    ]
  },
  {
    id: 'pes-beg-11',
    orderIndex: 11,
    title: '11. Small Talk and Professional Social Conversation',
    description: 'Master safe small talk topics (weather, travel, industry events, hobbies), cultivate active curiosity, avoid controversial subjects, and exit naturally.',
    duration: '45 mins',
    xpReward: 100,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Small talk is the social glue of the business world. Engaging in light, pleasant conversation before meetings or at networking events builds human connection, trust, and professional warmth.',
      objectives: [
        'Identify universally safe, engaging small talk topics for global business contexts',
        'Ask open-ended follow-up questions that keep conversations flowing effortlessly',
        'Recognize and steer clear of taboo, controversial, or overly personal topics',
        'Transition seamlessly from small talk into formal business agenda items'
      ],
      sections: [
        {
          title: 'Safe Topics & The Ping-Pong Conversation Rule',
          content: 'A great conversationalist treats small talk like a friendly game of ping-pong. You answer a question, add a brief engaging detail, and hit the ball back to the other person by asking a related question.',
          explanation: 'Safe topics include: Weekend plans, local city recommendations, travel, weather, conference speakers, technology trends, and hobbies. Avoid: Politics, religion, personal finances, and office gossip.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Coffee Machine / Hallway Small Talk',
              code: `Colleague (Amir): "Good morning Maya! How was your weekend?"\n\nMaya: "It was wonderful, thank you! I went hiking in the national park with a few friends—the weather was perfect. How about you? Did you manage to catch the soccer match?"\n\nAmir: "I did! It went into extra time, which was thrilling. Glad you got some fresh air!"\n\nMaya: "Definitely recharged my batteries for the week."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Pre-Meeting Virtual Icebreaker',
              code: `Client (Mr. Bradley): "Hello everyone, looks like we are just waiting for two more attendees to join."\n\nAccount Exec (Nina): "Good morning Mr. Bradley. Are you joining us from your Chicago office today?"\n\nMr. Bradley: "Yes, indeed. We just had our first snowfall of the season here."\n\nNina: "Oh wow! That always looks beautiful, though I imagine traffic was interesting this morning!"\n\nMr. Bradley: "Haha, you can say that again! Luckily I work from home on Mondays."\n\nNina: "That is great. Looks like our full team has joined, so let's dive into the agenda."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Conference Networking Reception',
              code: `Attendee (Soren): "Hi! That was a really thought-provoking session on cloud security, wasn't it?"\n\nLeila: "It truly was! I particularly appreciated the speaker's breakdown of zero-trust architecture. Are you implementing zero-trust at your company?"\n\nSoren: "We are currently in the planning stages. By the way, I am Soren from Nordic Tech."\n\nLeila: "Great to meet you Soren, I am Leila from Skillora AI."`
            }
          ],
          commonMistakes: [
            'Giving one-word answers (e.g., "How was your weekend?" -> "Good.") which kills the conversation.',
            'Dominating the entire conversation by talking about yourself for 10 minutes without asking questions.',
            'Asking intrusive personal questions regarding relationship status, age, or personal wealth.'
          ],
          proTip: 'Use the \'Answer + Add-on + Ask\' formula: Answer the question, Add a 1-sentence interesting detail, and Ask the other person for their perspective.'
        }
      ],
      keyTakeaways: [
        'Follow the \'Answer + Add-on + Ask\' formula to keep small talk dynamic and reciprocal.',
        'Stick to safe topics: weekend activities, travel, food, weather, conference topics, and hobbies.',
        'Transition naturally to business: \'Looks like we are all here, shall we dive into the agenda?\''
      ],
      practiceExercises: [
        {
          title: 'Ping-Pong Small Talk Drill',
          instructions: 'Practice answering 3 common small talk questions (weekend plans, travel, weather) using the Answer + Add-on + Ask framework.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Small Talk Formula',
        question: 'What is the \'Answer + Add-on + Ask\' formula for professional small talk?',
        options: [
          'Ignore the question, complain about work, and walk away',
          'Answer briefly, add a relevant interesting detail, and ask the other person a related question to maintain conversational balance',
          'Answer with a single word and remain silent',
          'Argue about politics immediately'
        ],
        correctAnswer: 1,
        explanation: 'Option B accurately defines the reciprocal formula that keeps professional social dialogue warm and balanced.'
      }
    ]
  },
  {
    id: 'pes-beg-project',
    orderIndex: 12,
    title: '12. Beginner Speaking Project: Professional Workplace Speaking Starter Kit',
    description: 'Execute a comprehensive 10-deliverable capstone project simulating essential daily workplace speaking scenarios: self-introductions, greetings, help requests, scheduling, updates, and small talk.',
    duration: '90 mins',
    xpReward: 350,
    isCompleted: false,
    status: 'locked',
    isProject: true,
    type: 'project',
    projectDetails: {
      title: 'Professional Workplace Speaking Starter Kit',
      overview: 'This capstone project requires you to demonstrate spoken fluency across 10 realistic workplace communication scenarios. You will apply all structural blueprints, polite modal verbs, pronunciation clarity, and active listening strategies mastered in Level 1.',
      deliverables: [
        {
          id: 'del-pes-beg-01',
          title: 'Deliverable 1: 60-Second Professional Self-Introduction Pitch',
          description: 'Record or present a polished 60-second self-introduction utilizing the Present-Past-Future model (Current Role, Key Achievements/Skills, and Professional Aspirations).',
          checklist: [
            'Clear statement of full name and current role',
            '2-3 sentences highlighting relevant background, skills, or quantifiable achievements',
            'Strong statement expressing enthusiasm for future collaboration',
            'Steady speaking pace between 55 and 65 seconds'
          ]
        },
        {
          id: 'del-pes-beg-02',
          title: 'Deliverable 2: First-Day Office Greeting & Colleague Introduction Role-Play',
          description: 'Deliver a spoken dialogue introducing yourself to a new team member, establishing common project ground, and setting up an informal coffee sync.',
          checklist: [
            'Warm, professional greeting register',
            'Active acknowledgment of the colleague\'s role and project alignment',
            'Courteous invitation to an informal sync',
            'Crisp pronunciation of names and roles'
          ]
        },
        {
          id: 'del-pes-beg-03',
          title: 'Deliverable 3: Polite Request for Technical Assistance & Resource Support',
          description: 'Formulate and speak a courteous assistance request to a senior engineer using modal softeners (\'Could you...\', \'Would you mind...\') and bounded time framing.',
          checklist: [
            'Check colleague availability before speaking',
            'State the specific blocker concisely',
            'Request a bounded time window (e.g. 5-10 minutes)',
            'Express genuine appreciation for their time'
          ]
        },
        {
          id: 'del-pes-beg-04',
          title: 'Deliverable 4: Cross-Time Zone Meeting Scheduling & Availability Confirmation',
          description: 'Deliver a verbal proposal to schedule a virtual 30-minute sync between teams in different time zones (e.g. New York EST and London GMT).',
          checklist: [
            'Specify the exact meeting objective and duration',
            'Propose two distinct alternative time slots',
            'State both local and remote time zone offsets accurately',
            'Confirm calendar invite and video link logistics'
          ]
        },
        {
          id: 'del-pes-beg-05',
          title: 'Deliverable 5: 90-Second Agile Standup Status & Progress Briefing',
          description: 'Deliver a concise daily standup update following the Done-Doing-Blockers structure with clear cause-and-effect transitions.',
          checklist: [
            'Completed task description with outcome',
            'Current active task and expected completion timeline',
            'Clear statement of dependencies or lack of blockers',
            'Delivered within 60-90 seconds without rambling'
          ]
        },
        {
          id: 'del-pes-beg-06',
          title: 'Deliverable 6: Professional Small-Talk Dialogue at an Industry Conference',
          description: 'Simulate a 2-minute networking small-talk conversation using the \'Answer + Add-on + Ask\' ping-pong rule on a safe topic (keynote feedback, industry trends).',
          checklist: [
            'Safe, engaging conversation starter',
            'Application of Answer + Add-on + Ask formula',
            'Active listening acknowledgments (\'That makes sense\', \'Fascinating\')',
            'Graceful exit transition with contact exchange'
          ]
        },
        {
          id: 'del-pes-beg-07',
          title: 'Deliverable 7: Polite Task Clarification & Requirement Q&A Drill',
          description: 'Deliver a spoken dialogue seeking clarification from a product manager on an ambiguous user story requirement.',
          checklist: [
            'Respectful opening without accusatory tone',
            'Specific comparison of ambiguous requirements',
            'Clear statement of why clarification prevents rework',
            'Confirm understanding once clarification is provided'
          ]
        },
        {
          id: 'del-pes-beg-08',
          title: 'Deliverable 8: Proactive Deadline Rescheduling & Adjustment Conversation',
          description: 'Deliver a verbal request to adjust a project milestone deadline by 48 hours due to a technical dependency delay.',
          checklist: [
            'Proactive notification well before the original deadline',
            'Objective explanation of the root cause',
            'Firm, realistic revised delivery commitment',
            'Offer to share intermediate progress'
          ]
        },
        {
          id: 'del-pes-beg-09',
          title: 'Deliverable 9: Phonetic Clarity, Alphanumeric Dictation & Word Stress Read-Aloud',
          description: 'Record a spoken dictation reading aloud 5 complex corporate email addresses, 5 software license keys, and 5 multi-syllable strategy words with proper syllable stress.',
          checklist: [
            'Flawless NATO phonetic alphabet clarification where needed',
            'Correct syllable stress on strategy, analysis, and development',
            'Clear pronunciation of numbers 13-19 vs 30-90',
            'Distinct enunciation of final consonant clusters'
          ]
        },
        {
          id: 'del-pes-beg-10',
          title: 'Deliverable 10: Comprehensive Daily Workplace Speaking Simulation',
          description: 'Execute a full 5-minute simulated workplace day scenario combining greeting, standup update, desk check-in, polite refusal of extra work, and end-of-day sign-off.',
          checklist: [
            'Seamless navigation across formal and semi-formal registers',
            'Effective application of polite refusal 3-part framework',
            'Clear vocal pacing and breath control',
            'Professional confidence and executive presence'
          ]
        }
      ],
      submissionGuidelines: 'Submit audio recordings or detailed spoken response scripts for all 10 deliverables, validating pronunciation, grammar, and tone against the rubric.',
      evaluationRubric: [
        {
          criteria: 'Vocal Clarity, Pronunciation & Pacing',
          advanced: 'Speech is paced evenly with crisp final consonants, accurate syllable stress, and zero distracting fillers.',
          proficient: 'Clear and understandable speech with minor syllable stress inconsistencies.',
          needsWork: 'Rushed speech, dropped ending consonants, or unclear mumbled words.'
        },
        {
          criteria: 'Grammar & Sentence Blueprints',
          advanced: 'Flawless Subject-Verb-Object structures, accurate time prepositions, and fluid tense transitions.',
          proficient: 'Accurate sentence patterns with 1-2 minor preposition or article slips.',
          needsWork: 'Frequent tense mixing or incomplete sentence fragments.'
        },
        {
          criteria: 'Professional Politeness & Tone Calibration',
          advanced: 'Masterful use of modal verbs, softeners, courteous acknowledgments, and graceful transitions.',
          proficient: 'Polite and appropriate tone with occasional minor directness.',
          needsWork: 'Blunt, demanding language or inappropriate casual slang.'
        }
      ]
    }
  },
  {
    id: 'pes-beg-assessment',
    orderIndex: 13,
    title: 'Beginner Final Assessment (20 MCQs)',
    description: 'Formal 20-question multiple-choice assessment testing all Level 1 speaking concepts. Passing score: 15/20 (75%).',
    duration: '30 mins',
    xpReward: 300,
    isCompleted: false,
    status: 'locked',
    isFinalAssessment: true,
    type: 'assessment',
    requiresQuiz: true,
    totalQuestions: 20,
    passingScore: 15,
    questions: PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_ASSESSMENT
  }
];
