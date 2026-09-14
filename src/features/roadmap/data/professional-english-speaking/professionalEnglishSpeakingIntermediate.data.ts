import { Task, QuizQuestion } from '../../types/roadmap.types';

export const PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Connecting Ideas & Discourse Markers',
    question: 'Which spoken transition phrase best introduces a contrasting viewpoint while maintaining professional diplomacy in a team discussion?',
    options: [
      'On the other hand, while that approach offers speed, we should also consider long-term maintenance costs.',
      'You are completely wrong about the timeline.',
      'That idea makes zero sense to anyone here.',
      'Whatever, let\'s just do my plan instead.'
    ],
    correctAnswer: 0,
    explanation: '\'On the other hand, while [X], we should also consider [Y]\' acknowledges the previous point\'s merit while smoothly presenting an alternative consideration.'
  },
  {
    id: 2,
    topic: 'Business Collocations',
    question: 'Which verb-noun collocation is standard professional English when discussing project constraints and agreements?',
    options: [
      'Make a deadline and take an agreement',
      'Meet a deadline and reach an agreement',
      'Do a deadline and find an agreement',
      'Win a deadline and catch an agreement'
    ],
    correctAnswer: 1,
    explanation: 'Standard English business collocations include \'meet a deadline\', \'reach an agreement\', \'conduct an audit\', and \'mitigate a risk\'.'
  },
  {
    id: 3,
    topic: 'Meeting Management & Interruption',
    question: 'What is the most respectful and effective way to interject with urgent context during a fast-paced virtual meeting?',
    options: [
      'Mute the speaker and start talking over them',
      'Yell into the microphone until everyone stops talking',
      'May I quickly add a point of clarification regarding the European data compliance before we move to the next slide?',
      'Stop talking, you don\'t know what happened yesterday.'
    ],
    correctAnswer: 2,
    explanation: '\'May I quickly add a point of clarification regarding [topic]...\' requests permission politely while stating the specific value of the interjection.'
  },
  {
    id: 4,
    topic: 'Expressing Nuanced Opinions',
    question: 'Which phrase is the most professional way to propose an alternative strategy without sounding dismissive of the current proposal?',
    options: [
      'The current plan is totally foolish.',
      'Nobody in their right mind would approve this.',
      'I am the only one who knows the right answer here.',
      'From my perspective, one viable alternative worth exploring is piloting the feature with a small test cohort first.'
    ],
    correctAnswer: 3,
    explanation: 'Framing opinions with \'From my perspective, one viable alternative worth exploring is...\' encourages constructive evaluation.'
  },
  {
    id: 5,
    topic: 'Diplomatic Disagreement',
    question: 'When you partially agree with a colleague\'s proposal but have concerns regarding engineering bandwidth, how should you express your stance?',
    options: [
      'I see your point regarding user acquisition; however, I am concerned that our current sprint capacity cannot accommodate both features simultaneously.',
      'I refuse to work on that feature.',
      'Your idea is bad and will fail.',
      'Yes, we will do everything (and then miss the release date).'
    ],
    correctAnswer: 0,
    explanation: 'Partial agreement (\'I see your point regarding [X]; however, I am concerned about [Y]\') validates the colleague while raising practical operational limits.'
  },
  {
    id: 6,
    topic: 'Problem Explanation & Solutions',
    question: 'What structure should you use when presenting a technical bug or operational issue to cross-functional stakeholders?',
    options: [
      'Blame the client\'s internet connection and request an immediate contract termination',
      'State the symptom, explain the root cause and business impact, and propose two actionable solution paths with timelines',
      'Send an unformatted error stack trace without speaking',
      'Tell the team that nothing can be done to fix the issue'
    ],
    correctAnswer: 1,
    explanation: 'Effective problem-solving communication presents: Symptom -> Root Cause -> Business Impact -> Proposed Solutions.'
  },
  {
    id: 7,
    topic: 'Customer Service & De-escalation',
    question: 'When an enterprise client is upset about a service disruption, what is the best empathetic verbal response?',
    options: [
      'Calm down, servers crash all the time.',
      'It\'s not our fault, AWS had an outage.',
      'I completely understand how critical this uptime is for your billing cycle, Mr. Henderson. Let me explain the immediate steps our engineering team is taking to restore full functionality.',
      'You should have purchased our premium tier if you wanted zero downtime.'
    ],
    correctAnswer: 2,
    explanation: 'Empathizing with the customer\'s business impact followed by taking immediate ownership of the resolution restores trust.'
  },
  {
    id: 8,
    topic: 'Behavioral Job Interview (STAR Method)',
    question: 'In the STAR framework for answering behavioral interview questions, what do the letters stand for?',
    options: [
      'Strategy, Timing, Attitude, Review',
      'Speaking, Tone, Accent, Rhythm',
      'Salary, Title, Authority, Responsibility',
      'Situation, Task, Action, Result'
    ],
    correctAnswer: 3,
    explanation: 'The STAR framework structures behavioral answers logically: Situation (Context), Task (Challenge), Action (Your specific contribution), Result (Quantifiable outcome).'
  },
  {
    id: 9,
    topic: 'Telephone & Video-Call Audio Protocols',
    question: 'If you experience an audio glitch or cannot hear a participant during a video conference, what should you say?',
    options: [
      'Pardon me, David. Your audio cut out for a few seconds. Would you mind repeating the last requirement regarding user roles?',
      'Your microphone is broken, buy a new headset.',
      'I am leaving this call because your internet is terrible.',
      'Say it again louder!'
    ],
    correctAnswer: 0,
    explanation: 'Politely alerting the speaker to the technical drop and identifying the specific missing point saves time and avoids embarrassment.'
  },
  {
    id: 10,
    topic: 'Presenting Information & Signposting',
    question: 'Which signposting phrase helps an audience follow a presentation as you transition from revenue figures to product roadmap initiatives?',
    options: [
      'Look at this new slide now.',
      'Now that we have reviewed our Q3 revenue milestones, let us turn our attention to our Q4 product roadmap initiatives.',
      'I am done with the boring numbers, let\'s talk about something else.',
      'Forget what I just said, here is the next topic.'
    ],
    correctAnswer: 1,
    explanation: 'Signposting phrases create clear verbal bridges between sections, summarizing where the audience has been and introducing where the presentation is heading.'
  },
  {
    id: 11,
    topic: 'Networking & Relationship Building',
    question: 'What is the most effective spoken follow-up when meeting a potential collaborator or hiring manager at a professional summit?',
    options: [
      'Give me a job right now.',
      'Can you lend me ten thousand dollars for my startup?',
      'It was a pleasure discussing AI automation with you, Dr. Zhang. May I connect with you on LinkedIn to share that case study we talked about?',
      'I forgot your name already, but add me.'
    ],
    correctAnswer: 2,
    explanation: 'Referencing a specific conversation topic and proposing a clear, value-added digital connection reinforces professional relationships.'
  },
  {
    id: 12,
    topic: 'Negotiation & Conditional Language',
    question: 'Which conditional sentence pattern is commonly used in business negotiations to trade concessions without giving away value for free?',
    options: [
      'We will give you everything for free.',
      'Take our offer or we cancel the contract.',
      'We don\'t care about your budget constraints.',
      'If you can commit to an annual multi-year contract, we would be willing to provide a fifteen percent volume discount on licensing fees.'
    ],
    correctAnswer: 3,
    explanation: '\'If you can [concession X], we would be willing to [concession Y]\' creates a mutually beneficial win-win negotiation trade.'
  },
  {
    id: 13,
    topic: 'Constructive Feedback Frameworks',
    question: 'When delivering constructive feedback to a direct report using the SBI (Situation-Behavior-Impact) model, what is the best opening?',
    options: [
      'During yesterday\'s client presentation (Situation), when you interrupted the client\'s question (Behavior), it caused them to feel unheard (Impact). In the future, let\'s allow them to finish before addressing the point.',
      'You are a terrible presenter and everyone noticed.',
      'Why do you always ruin client meetings?',
      'Everything you did yesterday was wrong.'
    ],
    correctAnswer: 0,
    explanation: 'The Situation-Behavior-Impact model separates objective observations from personal judgments, focusing on actionable behavioral improvements.'
  },
  {
    id: 14,
    topic: 'Receiving Feedback Non-Defensively',
    question: 'How should you respond verbally when a manager offers critical feedback on a recent project deliverable?',
    options: [
      'It wasn\'t my fault, the whole team did a bad job.',
      'Thank you for the constructive feedback, Marcus. Could you give a specific example of how you would recommend structuring the executive summary?',
      'I know more about this topic than you do.',
      'I quit.'
    ],
    correctAnswer: 1,
    explanation: 'Acknowledging feedback with gratitude and asking clarifying questions demonstrates emotional maturity and a growth mindset.'
  },
  {
    id: 15,
    topic: 'Describing Charts & Data Verbally',
    question: 'Which phrase accurately and professionally describes a sharp upward trend on a quarterly performance graph?',
    options: [
      'The line went up like crazy.',
      'The chart looks pretty cool right here.',
      'As illustrated in the bar chart, active user engagement surged by forty-two percent following the mobile app redesign in August.',
      'Numbers are bigger now than before.'
    ],
    correctAnswer: 2,
    explanation: 'Precise financial and data vocabulary (\'surged by 42%\', \'peaked at\', \'stabilized\') conveys executive analytical rigor.'
  },
  {
    id: 16,
    topic: 'Managing Meeting Agendas',
    question: 'What is the most diplomatic phrase a meeting facilitator can use when a discussion is running off-topic?',
    options: [
      'Shut up, we don\'t care about that.',
      'That is completely stupid, stop talking.',
      'You are wasting everyone\'s time.',
      'That is a valuable point, Priya. In the interest of time, let us table that for our dedicated parking lot and return to our core agenda item on Q3 budgeting.'
    ],
    correctAnswer: 3,
    explanation: '\'Let us table that for our parking lot and return to our core agenda item...\' protects the schedule without devaluing the participant\'s contribution.'
  },
  {
    id: 17,
    topic: 'Handling Customer Complaints',
    question: 'Which phrase represents the most professional first step in de-escalating an angry customer on a support line?',
    options: [
      'I understand your frustration with the delivery delay, and I sincerely apologize for the inconvenience this caused. Let me pull up your account immediately to resolve this.',
      'Stop yelling or I will hang up the phone right now.',
      'The delivery company is at fault, don\'t complain to me.',
      'There is nothing I can do about your package.'
    ],
    correctAnswer: 0,
    explanation: 'Validating the customer\'s feelings, offering a sincere corporate apology, and transitioning to active problem solving diffuses tension.'
  },
  {
    id: 18,
    topic: 'Salary & Compensation Discussions',
    question: 'When asked about your salary expectations during a preliminary screening interview, what is the best strategic response?',
    options: [
      'I want one million dollars or I won\'t work.',
      'Based on my research of market benchmarks for Senior Cloud Engineers in this region and my track record in Kubernetes migrations, I am targeting a compensation range between $130,000 and $145,000.',
      'Whatever you give me is fine, I don\'t care.',
      'I will not answer that question under any circumstances.'
    ],
    correctAnswer: 1,
    explanation: 'Grounding compensation requests in market research, specific skills, and a reasonable target range projects market awareness and confidence.'
  },
  {
    id: 19,
    topic: 'Call Transfers & Hold Etiquette',
    question: 'What is the proper verbal etiquette before placing a client on hold or transferring their call to another department?',
    options: [
      'Hold on. (and click hold immediately without waiting for an answer)',
      'I don\'t know how to do this, calling someone else.',
      'May I place you on a brief two-minute hold while I consult with our tier-two billing specialist? I will remain on the line to brief them on your issue.',
      'Call back tomorrow when someone else is working.'
    ],
    correctAnswer: 2,
    explanation: 'Asking permission, estimating the hold duration, explaining the reason, and promising a warm transfer ensures a stellar customer experience.'
  },
  {
    id: 20,
    topic: 'Overcoming Common Speech Fillers',
    question: 'What is the best technique to eliminate excessive spoken fillers like \'like\', \'um\', \'you know\', and \'literally\' during high-stakes presentations?',
    options: [
      'Speak even faster so fillers cannot be heard',
      'Drink five energy drinks before taking the stage',
      'Read a memorized transcript with robotic speed',
      'Embrace the silent pause: when you need to think, close your mouth, breathe gently through your nose, and speak only when your thought is formed'
    ],
    correctAnswer: 3,
    explanation: 'Intentional silent pauses project gravitas and composure while giving your vocal apparatus time to articulate clear thoughts.'
  },
  {
    id: 21,
    topic: 'Handling Q&A Objections in Presentations',
    question: 'When an audience member asks a challenging or skeptical question after your presentation, how should you begin your reply?',
    options: [
      'Thank you for raising that valid concern regarding operational scaling. Let me address how our failover architecture mitigates that exact risk.',
      'Why are you trying to ruin my presentation?',
      'That question proves you weren\'t paying attention.',
      'I will ignore that comment.'
    ],
    correctAnswer: 0,
    explanation: 'Thanking the skeptic for the question and reframing the objection as a valid operational consideration establishes leadership presence.'
  },
  {
    id: 22,
    topic: 'Summarizing Action Items in Meetings',
    question: 'How should a team lead verbally summarize deliverables at the end of a sprint planning meeting?',
    options: [
      'Everyone knows what to do, meeting over.',
      'To recap our agreed action items: Carlos owns the auth API due Wednesday, Maya finalizes the UI mocks by Thursday, and I will submit the staging build on Friday.',
      'Whoever wants to do work can pick a ticket.',
      'Let\'s meet again tomorrow to discuss who does what.'
    ],
    correctAnswer: 1,
    explanation: 'A crisp verbal summary stating Who, What, and When ensures complete alignment and eliminates task ambiguity.'
  },
  {
    id: 23,
    topic: 'Diplomatic Disagreement with Management',
    question: 'If your manager suggests a deadline that you believe will compromise software code quality, what is the best verbal approach?',
    options: [
      'You don\'t understand engineering, that deadline is impossible.',
      'I will just write broken code so we hit the date.',
      'I appreciate the push to launch early; however, skipping automated regression testing increases our risk of critical checkout bugs. Could we release the core MVP on Tuesday and follow with the secondary analytics module on Friday?',
      'No.'
    ],
    correctAnswer: 2,
    explanation: 'Highlighting business risk rather than personal complaints and proposing a staged rollout provides a pragmatic solution for leadership.'
  },
  {
    id: 24,
    topic: 'Engaging Passive Participants in Meetings',
    question: 'What is the most inclusive way to invite an introverted or quiet teammate to share their expertise during a group brainstorming session?',
    options: [
      'Hey why haven\'t you said anything? Say something right now!',
      'You look bored, wake up.',
      'If you don\'t speak, I will mark you absent.',
      'Leo, since you have extensive experience with database caching, we would love to get your thoughts on this architecture approach when you are ready.'
    ],
    correctAnswer: 3,
    explanation: 'Inviting participation by referencing their specific expertise in a non-threatening manner creates psychological safety.'
  },
  {
    id: 25,
    topic: 'Explaining Trade-Offs & Compromises',
    question: 'Which phrase best articulates an engineering or business trade-off between speed and customization?',
    options: [
      'Opting for an off-the-shelf SaaS solution will allow us to launch in four weeks, whereas building a custom in-house engine will provide complete flexibility but requires four months of development.',
      'Custom builds are always the best and SaaS is terrible.',
      'We will do both in two days.',
      'I refuse to build anything custom.'
    ],
    correctAnswer: 0,
    explanation: 'Objective comparison framing (\'Opting for [Option A] gives [Benefit A/Constraint A], whereas [Option B] provides [Benefit B/Constraint B]\') supports informed decision making.'
  },
  {
    id: 26,
    topic: 'Professional Telephone Etiquette',
    question: 'When answering an incoming corporate call for your department, what is the standard professional verbal greeting?',
    options: [
      'Yeah? Who is this?',
      'Good morning, Skillora AI Customer Success. This is Julian speaking. How may I assist you today?',
      'Talk to me.',
      'Hold on, I am eating lunch.'
    ],
    correctAnswer: 1,
    explanation: 'A professional phone greeting includes: Time of day salutation + Company/Department name + Your name + Courteous offer of assistance.'
  },
  {
    id: 27,
    topic: 'Networking Follow-Up Timeframes',
    question: 'When concluding an insightful networking conversation, what verbal commitment establishes the strongest foundation for ongoing dialogue?',
    options: [
      'Maybe I will message you next year.',
      'Don\'t contact me unless you have money.',
      'I really enjoyed our discussion on serverless scalability, Sandra. I will send you an email tomorrow morning with that benchmarking article we discussed.',
      'Bye.'
    ],
    correctAnswer: 2,
    explanation: 'Committing to a specific, value-added follow-up action within 24 hours cements the professional relationship.'
  },
  {
    id: 28,
    topic: 'Tone & Vocal Variety',
    question: 'Why is vocal modulation (varying pitch, pace, and volume) important during business presentations?',
    options: [
      'To scare the audience into staying awake',
      'It allows you to speak without breathing',
      'It has no impact whatsoever on comprehension',
      'It emphasizes key insights, maintains audience engagement, and conveys emotional conviction'
    ],
    correctAnswer: 3,
    explanation: 'Monotone delivery induces cognitive fatigue, while dynamic vocal modulation directs listener focus to critical data and strategic priorities.'
  },
  {
    id: 29,
    topic: 'Job Interview Weakness Questions',
    question: 'How should you professionally address the interview question: "What is your biggest weakness?"',
    options: [
      'State a genuine area for development, demonstrate self-awareness, and explain the concrete systems or habits you actively use to improve it.',
      'Claim that you are a perfectionist who works 24 hours a day with zero flaws.',
      'List 10 critical technical skills that you do not know and refuse to learn.',
      'Tell the interviewer that you have no weaknesses.'
    ],
    correctAnswer: 0,
    explanation: 'Authentic self-awareness coupled with active, measurable self-improvement strategies turns a weakness question into a demonstration of growth.'
  },
  {
    id: 30,
    topic: 'Ending Virtual Meetings On Time',
    question: 'What is the most courteous and effective phrase to conclude a virtual meeting right at the scheduled end time?',
    options: [
      'Disconnect now.',
      'We have reached the top of the hour. Thank you everyone for your active participation today. I will circulate our agreed action items by 3 PM. Have a productive afternoon!',
      'I am sick of this meeting.',
      'Leave immediately.'
    ],
    correctAnswer: 1,
    explanation: 'Acknowledging the time boundary, thanking participants, reaffirming next steps, and offering a positive closing wish concludes meetings professionally.'
  }
];

export const PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS: Task[] = [
  {
    id: 'pes-int-01',
    orderIndex: 1,
    title: '13. Building Longer and More Natural Sentences',
    description: 'Learn to link complex business concepts fluidly using subordinate conjunctions, discourse markers, relative clauses, and multi-clause sentence architectures.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Intermediate spoken fluency requires moving beyond short, choppy sentences. By utilizing transitional connectors, relative clauses, and contrastive discourse markers, your speech flows logically and captivates senior stakeholders.',
      objectives: [
        'Connect spoken thoughts with transitional discourse markers (However, Furthermore, Consequently, In addition)',
        'Use relative clauses (which, that, who, where) to embed technical context naturally',
        'Express cause, condition, and contrast in cohesive multi-sentence paragraphs',
        'Eliminate abrupt pauses by utilizing smooth verbal thought-bridging phrases'
      ],
      sections: [
        {
          title: 'Sentence Linking & Advanced Discourse Connectors',
          content: 'Instead of speaking three disconnected sentences ("We tested the app. It had bugs. We delayed the launch."), combine them into an executive narrative: "Although our initial beta testing revealed several authentication bugs, we resolved the critical security vulnerabilities; consequently, our launch is now scheduled for Thursday morning."',
          explanation: 'Discourse markers signal the logical relationship between ideas: \'Furthermore\' adds evidence; \'Nevertheless\' introduces a surprising contrast; \'As a result\' establishes direct causality.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Presenting a Technical Migration Strategy',
              code: `Architect (Tariq): "Good morning team. Today, I want to present our migration to containerized microservices."\n\nDirector (Brenda): "What makes this the right timing for our infrastructure?"\n\nTariq: "While our legacy monolithic architecture served us well during our initial growth phase, our current transaction volume has tripled; as a result, our database query latencies are impacting checkout conversion. By transitioning to distributed microservices, we will not only isolate failure points, but we will also enable our feature teams to deploy independently without risking platform downtime."\n\nBrenda: "That is a well-reasoned architectural justification, Tariq."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Comparing Vendor Proposals in a Strategy Review',
              code: `Procurement Lead (Elena): "We evaluated both CloudScale and ApexHosting for our disaster recovery site."\n\nCFO (Marcus): "How do their terms compare in terms of SLA and pricing?"\n\nElena: "On the one hand, CloudScale offers a 99.99% uptime guarantee with twenty-four-seven dedicated phone support; however, their annual licensing cost is twenty percent above our allocated budget. On the other hand, ApexHosting matches our budget constraints perfectly, although their incident response SLA is capped at two hours. Therefore, I recommend negotiating a custom tier with CloudScale before finalizing our vendor selection."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Explaining Multi-Step Data Processing Workflows',
              code: `Data Engineer (Siddharth): "Let me walk you through how our ETL pipeline processes incoming user analytics."\n\nProduct Lead (Rachel): "Walk us through the pipeline from ingestion to reporting."\n\nSiddharth: "Initially, raw telemetry events are streamed into Kafka topics, where they undergo automated schema validation. Subsequently, our Spark batch processing workers clean and deduplicate the payload, which is then loaded directly into BigQuery. Finally, our automated dbt models refresh our Looker dashboards every thirty minutes, ensuring our executive team has real-time operational visibility."\n\nRachel: "Clear and comprehensive overview, Siddharth."`
            }
          ],
          commonMistakes: [
            'Overusing "and then... and then... and then..." to connect thoughts. Replace with "subsequently", "following that", or "as a consequence".',
            'Creating sentences that are so long that you run out of breath and forget your original point.',
            'Using "on the contrary" when you simply mean "on the other hand".'
          ],
          proTip: 'Practice the \'Although [Challenge], [Action Taken]; Consequently, [Positive Result]\' narrative formula for high-impact workplace updates.'
        }
      ],
      keyTakeaways: [
        'Use connectors like \'Although\', \'Furthermore\', \'Consequently\', and \'In addition\' to construct executive-level spoken paragraphs.',
        'Sequence processes logically: Initially -> Subsequently -> Following that -> Ultimately.',
        'Maintain vocal breath control by pausing briefly at natural punctuation boundaries.'
      ],
      practiceExercises: [
        {
          title: '3-Sentence Synthesis Drill',
          instructions: 'Take 3 separate technical facts about your workspace and synthesize them aloud into one fluid, cohesive multi-clause sentence using \'Although\' and \'Consequently\'.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Complex Sentence Construction',
        question: 'Which spoken sentence demonstrates the most fluid and professional multi-clause synthesis of a project status?',
        options: [
          'Although our beta testing revealed two minor edge-case bugs, our engineering squad patched them overnight; consequently, our staging release remains on schedule for Friday.',
          'We tested and it was broken and then we fixed it and then it is okay now.',
          'Bugs happened yesterday so Friday release is maybe good.',
          'Testing was done, bugs were there, we did code, Friday is the day.'
        ],
        correctAnswer: 0,
        explanation: 'Option A uses \'Although\' for context and \'consequently\' for logical outcome, creating an executive-grade narrative.'
      }
    ]
  },
  {
    id: 'pes-int-02',
    orderIndex: 2,
    title: '14. Professional Vocabulary and Collocations',
    description: 'Master high-frequency business collocations, executive verbs, industry terminology, and eliminate direct translation patterns from your native language.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Sounding professional in English is heavily dependent on collocations—words that naturally occur together in business contexts. Saying "meet a deadline" sounds authentic, whereas "make a deadline" or "do a deadline" sounds unnatural.',
      objectives: [
        'Master 30+ essential business verb-noun collocations (conduct an audit, mitigate risks, drive growth)',
        'Replace weak verbs (do, make, get) with precise action verbs (execute, formulate, acquire)',
        'Avoid common false friends and direct native-language translation errors',
        'Incorporate high-impact project management and technical terminology naturally'
      ],
      sections: [
        {
          title: 'Essential Business Collocations & Precision Verbs',
          content: 'Professional speakers use established collocations: We \'streamline processes\', \'allocate resources\', \'address concerns\', \'exceed expectations\', and \'foster collaboration\'. Using these phrases elevates your spoken English to executive standards.',
          explanation: 'Notice how weak words transform into powerful collocations: \'Do a meeting\' -> \'Convene / Facilitate a meeting\'; \'Fix a risk\' -> \'Mitigate a risk\'; \'Give money\' -> \'Allocate capital / budget\'.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Sprint Retrospective Performance Review',
              code: `Scrum Lead (Daria): "Let us evaluate how our sprint execution aligned with our quarterly goals."\n\nEngineer (Felix): "During the last two weeks, our squad successfully streamlined our continuous deployment pipeline, which allowed us to accelerate release cycles by twenty-five percent. Furthermore, we mitigated the latency risks on our database cluster before they could impact end users."\n\nDaria: "Excellent work, Felix. That directly drives operational efficiency across the department."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Executive Budget Allocation Meeting',
              code: `VP of Product (Nate): "We need to allocate our Q4 engineering budget across our three core initiatives."\n\nFinance Director (Sonia): "Where do you see the greatest return on investment?"\n\nNate: "I strongly recommend allocating forty percent of our capital to expanding our automated QA testing infrastructure. By doing so, we will curtail technical debt, minimize production regressions, and ensure our new billing engine scales seamlessly."\n\nSonia: "I agree with your strategic assessment, Nate. Let us finalize the budget allocation."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Client Risk Assessment Briefing',
              code: `Consultant (Aaliyah): "Good afternoon, Mr. Sterling. Today we are presenting our risk assessment for your cloud migration."\n\nMr. Sterling: "What is your primary finding regarding data security?"\n\nAaliyah: "Our compliance audit identified potential vulnerabilities during legacy data export; however, by implementing end-to-end envelope encryption and strict role-based access controls, we can fully mitigate those security exposures without compromising project velocity."\n\nMr. Sterling: "Very reassuring. Proceed with the implementation plan."`
            }
          ],
          commonMistakes: [
            'Saying "make an experiment" instead of "conduct an experiment / run a test".',
            'Saying "take a decision" instead of the standard English collocation "make a decision" or "reach a decision".',
            'Using "explain me" instead of "explain to me" or "walk me through".'
          ],
          proTip: 'Group collocations by business topic (Risk: identify, assess, mitigate, eliminate; Meetings: schedule, convene, facilitate, adjourn).'
        }
      ],
      keyTakeaways: [
        'Use established verb-noun collocations: mitigate risks, streamline workflows, allocate resources, meet deadlines.',
        'Replace generic verbs with high-impact vocabulary: formulate, spearhead, optimize, implement.',
        'Avoid literal translation from native language structures by internalizing natural English phrase pairs.'
      ],
      practiceExercises: [
        {
          title: 'Collocation Rapid-Fire Drill',
          instructions: 'Practice speaking 5 business sentences using the collocations: "mitigate risk", "allocate resources", "streamline operations", "meet deadlines", and "reach consensus".'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Business Collocations',
        question: 'Which sentence correctly utilizes standard corporate English verb-noun collocations?',
        options: [
          'We must do a decision to make the risks smaller.',
          'We must make a decision to mitigate project risks and streamline our deployment workflow.',
          'We must take a decision to win the risks and fix the workflow.',
          'We must catch a decision to do smaller risks.'
        ],
        correctAnswer: 1,
        explanation: 'Option B correctly uses \'make a decision\', \'mitigate project risks\', and \'streamline our deployment workflow\'.'
      }
    ]
  },
  {
    id: 'pes-int-03',
    orderIndex: 3,
    title: '15. Participating in Meetings',
    description: 'Lead agendas, contribute opinions, agree and disagree politely, ask for clarification, manage polite interruptions, summarize decisions, and close meetings.',
    duration: '55 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Meetings are where strategic decisions are made and professional visibility is earned. Mastering meeting phrases allows you to contribute your expertise confidently without feeling overshadowed.',
      objectives: [
        'Open and set the stage for meetings with clear objectives and agendas',
        'Contribute meaningful opinions and build on colleagues\' points seamlessly',
        'Execute respectful, diplomatic verbal interruptions when vital context is needed',
        'Summarize agreed action items and assign ownership before adjourning'
      ],
      sections: [
        {
          title: 'Meeting Phases & Conversational Control',
          content: 'A successful meeting navigates through 4 phases: 1. Opening & Objective Setting, 2. Collaborative Exploration & Debate, 3. Synthesis & Consensus Building, and 4. Action Item Assignment & Closing.',
          explanation: 'To interject respectfully, use bridging phrases: \'If I could jump in here for a moment...\' or \'Building on what Sarah just mentioned, I would also highlight...\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Facilitating the Meeting Opening & Agenda',
              code: `Facilitator (Omar): "Good morning everyone. Thank you for joining promptly. The objective of today's 45-minute sync is to evaluate our Q4 product roadmap priorities and finalize our feature release timeline. On our agenda, we have three items: first, user authentication updates; second, the mobile payment gateway integration; and third, resource allocation for load testing. Before we dive into item one, does anyone have additions to the agenda?"\n\nTeam: "Looks solid, Omar. Let's get started."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Respectful Interruption & Clarification',
              code: `Presenter (Dan): "...and so we plan to migrate all active customer databases to the new cluster on Friday night at 8 PM."\n\nLead Architect (Lina): "Pardon the interruption Dan, but if I could quickly interject—Friday at 8 PM coincides with our highest transaction volume for our Australian client base. Would it be feasible to push the maintenance window to Sunday at 2:00 AM UTC instead?"\n\nDan: "That is a critical insight, Lina. Thank you for catching that. Let us adjust the deployment schedule accordingly."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Summarizing Decisions & Adjourning',
              code: `Facilitator (Omar): "We have had a very productive discussion today. To summarize our agreed decisions: First, we are proceeding with the Stripe payment gateway integration. Second, Lina will oversee the revised Sunday deployment window. Third, Dan will circulate the updated staging credentials by tomorrow at noon. If there are no further comments, let us adjourn today's meeting. Thank you all for your time!"`
            }
          ],
          commonMistakes: [
            'Remaining completely silent throughout an entire meeting even when you have valuable domain insight.',
            'Speaking without raising your hand or using polite interjection phrases in virtual meetings.',
            'Adjourning a meeting without clarifying who owns each deliverable and what the exact deadlines are.'
          ],
          proTip: 'If you are naturally quiet in group meetings, prepare 2 specific talking points or questions before the call starts so you can contribute early in the first 10 minutes.'
        }
      ],
      keyTakeaways: [
        'Open meetings with a clear objective: \'The purpose of today\'s meeting is to...\'',
        'Use respectful interjections: \'If I could quickly add a point of clarification...\'',
        'Close with accountable action summaries: \'To recap our deliverables: [Person] owns [Task] by [Date].\''
      ],
      practiceExercises: [
        {
          title: 'Meeting Facilitation Simulation',
          instructions: 'Practice delivering the opening 90 seconds of a cross-functional meeting: welcome attendees, state the objective, outline 3 agenda items, and invite input.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Meeting Facilitation',
        question: 'What is the most effective way for a meeting leader to conclude a decision-making sync?',
        options: [
          'Say goodbye abruptly and close the video call immediately',
          'Recap key decisions, assign clear owners and deadlines for all action items, and thank participants before adjourning',
          'Ask everyone to stay for another two hours without an agenda',
          'Complain about how long the discussion took'
        ],
        correctAnswer: 1,
        explanation: 'Option B ensures accountability, clarity of deliverables, and professional closure.'
      }
    ]
  },
  {
    id: 'pes-int-04',
    orderIndex: 4,
    title: '16. Expressing Opinions and Suggestions',
    description: 'Learn to pitch suggestions persuasively using consultative frameworks, support viewpoints with data, and respond constructively to alternative perspectives.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Sharing ideas in professional settings requires calibrating your conviction. Being too aggressive alienates colleagues, while being too timid causes your suggestions to be ignored. Finding the right balance makes your voice influential.',
      objectives: [
        'Express strong, medium, and tentative opinions with appropriate phrasing',
        'Support recommendations using the \'Claim - Evidence - Impact\' framework',
        'Pitch proactive suggestions using collaborative consultative language',
        'Acknowledge and validate contrasting viewpoints respectfully'
      ],
      sections: [
        {
          title: 'The Conviction Spectrum & Claim-Evidence-Impact',
          content: 'Vary your opinion phrasing based on certainty: Tentative: \'One option worth exploring might be...\'; Balanced: \'From my perspective, the most pragmatic solution is...\'; Strong: \'I am firmly convinced that prioritizing security compliance is our single highest imperative.\'',
          explanation: 'Always back a claim with evidence: Claim: \'We should migrate to automated testing.\' -> Evidence: \'Manual QA currently consumes forty engineering hours weekly.\' -> Impact: \'Automation will cut release testing to fifteen minutes and prevent regressions.\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Proposing a New Developer Tooling Workflow',
              code: `Senior Dev (Javier): "Our team is spending nearly an hour on local environment setup for new microservices."\n\nEngineering Lead (Kendra): "What do you propose we do about it, Javier?"\n\nJavier: "I suggest we adopt Docker-based development containers. Based on my prototype last week, containerizing the local stack reduced onboarding setup time from four hours to under ten minutes. By standardizing this across the squad, we can eliminate configuration drift entirely."\n\nKendra: "That is a compelling efficiency gain. Let us pilot it with the frontend squad."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Recommending a Marketing Strategy Shift',
              code: `VP of Growth: "Our paid search acquisition costs have risen by twenty percent this quarter."\n\nGrowth Marketer (Tanya): "In my opinion, we should reallocate thirty percent of our paid search budget into organic educational webinars and developer tutorials. Our recent developer workshops generated three times higher customer lifetime value at half the acquisition cost. Therefore, shifting towards content-led acquisition will safeguard our margins."\n\nVP: "I appreciate the data-backed rationale. Let\'s review the channel allocation model."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Responding Constructively to Alternative Ideas',
              code: `Colleague (Ben): "Why don\'t we just rewrite the entire application in Go instead of refactoring our TypeScript backend?"\n\nTech Lead (Amara): "I can certainly understand the appeal of Go\'s concurrency performance, Ben. However, rewriting the entire platform would require a six-month feature freeze that our business commitments cannot absorb. Alternatively, what if we extract our two highest-load data ingestion pipelines into lightweight Go microservices while keeping the core REST API in TypeScript?"\n\nBen: "That is a very pragmatic compromise. I support that."`
            }
          ],
          commonMistakes: [
            'Using overly dogmatic phrases like "You must do this" or "This is the only right way" which sparks defensive resistance.',
            'Stating an opinion without providing any supporting data, metrics, or concrete examples.',
            'Disregarding a teammate\'s suggestion without acknowledging its merits first.'
          ],
          proTip: 'Use the \'Yes, and...\' improv technique: Acknowledge the colleague\'s valid goal before steering the conversation toward your proposed implementation.'
        }
      ],
      keyTakeaways: [
        'Calibrate your opinion strength: Tentative, Balanced, or Strong.',
        'Always support suggestions with the Claim -> Evidence -> Business Impact structure.',
        'Use collaborative phrasing: \'One potential approach worth exploring is...\', \'What if we considered...\''
      ],
      practiceExercises: [
        {
          title: 'Claim-Evidence-Impact Pitch Drill',
          instructions: 'Practice delivering a 60-second recommendation to your manager proposing a process improvement using the Claim -> Evidence -> Impact framework.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Constructive Recommendations',
        question: 'Which spoken recommendation demonstrates the complete Claim-Evidence-Impact structure?',
        options: [
          'We should change everything because I don\'t like our current tool.',
          'I recommend implementing automated code linting; currently, manual code style reviews consume 5 hours per sprint, and automation will eliminate formatting debates while accelerating PR approval times.',
          'Linting is cool and other companies do it.',
          'You have to install this software right now.'
        ],
        correctAnswer: 1,
        explanation: 'Option B presents a clear Claim (implement automated linting), Evidence (5 hours spent per sprint), and Impact (accelerated PR approvals).'
      }
    ]
  },
  {
    id: 'pes-int-05',
    orderIndex: 5,
    title: '17. Agreeing and Disagreeing Professionally',
    description: 'Master diplomatic disagreement, strong agreement, respectful corrections, partial consensus, and defusing heated technical debates.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'High-performing teams engage in vigorous intellectual debate. The key to professional success is knowing how to challenge ideas vigorously while maintaining deep interpersonal respect and psychological safety.',
      objectives: [
        'Express total and partial agreement with executive polish',
        'Challenge ideas and assumptions diplomatically using softening phrases',
        'Correct factual inaccuracies without humiliating colleagues',
        'Navigate technical debates using objective criteria rather than emotional arguments'
      ],
      sections: [
        {
          title: 'Diplomatic Disagreement & The Respectful Correction Framework',
          content: 'Never attack the person; focus exclusively on the idea, the data, or the technical constraint. Instead of \'You are wrong about the server cost,\' say: \'According to the latest AWS pricing calculator, the egress bandwidth costs will actually be higher than our initial projection.\'',
          explanation: 'The 3-Step Diplomatic Disagreement Blueprint: 1. Validate the positive intent or core logic, 2. Introduce the constraint or counter-perspective with \'However\' or \'At the same time\', 3. Propose a collaborative path forward.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Total & Strong Agreement in a Strategy Meeting',
              code: `VP of Design: "We must ensure our mobile app adheres strictly to WCAG 2.1 AA accessibility guidelines before our global launch."\n\nLead Engineer (Soren): "I could not agree more. Building in accessibility from the foundational design system will not only protect us from compliance liabilities, but it will also broaden our reach to millions of users. Our squad is fully committed to prioritizing this in sprint one."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Diplomatic Disagreement on Feature Timelines',
              code: `Product Manager (Kylie): "Let us bundle the multi-currency payment checkout into this Friday's release."\n\nPrincipal Engineer (Marcus): "I completely understand the eagerness to unlock international sales before the holiday weekend, Kylie; however, our payment webhook error-handling has not completed comprehensive automated stress testing. Releasing on Friday without load verification risks checkout failures during peak traffic. Could we launch the domestic enhancements on Friday, and roll out multi-currency next Tuesday following a full weekend staging soak?"\n\nKylie: "That is a very sensible risk mitigation approach, Marcus. Let us stick to that schedule."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Respectful Factual Correction in a Technical Review',
              code: `Junior Dev (Leo): "...and since PostgreSQL doesn't support JSON indexing, we should use MongoDB."\n\nSenior Architect (Maya): "If I could offer a quick technical clarification on that point, Leo—PostgreSQL actually provides robust JSONB indexing via GIN indexes, which delivers exceptional document querying performance while preserving relational ACID transactions. Let me share the documentation link after our review."\n\nLeo: "Oh, I was not aware of JSONB GIN indexes in Postgres! Thank you for clarifying that Maya."`
            }
          ],
          commonMistakes: [
            'Using abrasive phrases like "That makes no sense" or "You don\'t know what you\'re talking about".',
            'Agreeing verbally in a meeting to avoid conflict, and then complaining privately behind closed doors.',
            'Taking technical disagreements personally instead of treating them as collaborative problem-solving.'
          ],
          proTip: 'Replace "I disagree" with "I have a slightly different perspective on that based on the recent load test results."'
        }
      ],
      keyTakeaways: [
        'Disagree with ideas, never people: \'I see the logic; however, the data suggests...\'',
        'Use the 3-step formula: Validate Intent -> State Constraint -> Propose Alternative.',
        'Offer factual corrections constructively with documentation support.'
      ],
      practiceExercises: [
        {
          title: 'Diplomatic Disagreement Role-Play',
          instructions: 'Practice diplomatically disagreeing with a manager who wants to release software on a Friday afternoon without testing.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Diplomatic Disagreement',
        question: 'Which of the following phrases represents the most diplomatic way to challenge an unrealistic project release date?',
        options: [
          'That deadline is completely ridiculous and impossible.',
          'I see the business importance of launching before the trade show; however, our load testing requires 72 hours of soak time. To safeguard stability, could we release the core MVP on Thursday and the analytics module next week?',
          'I won\'t work on this project anymore.',
          'Fine, we will do it (and let the servers crash).'
        ],
        correctAnswer: 1,
        explanation: 'Option B acknowledges the business objective, identifies the technical constraint objectively, and provides a workable compromise.'
      }
    ]
  },
  {
    id: 'pes-int-06',
    orderIndex: 6,
    title: '18. Explaining Problems and Giving Solutions',
    description: 'Structure incident post-mortems, communicate technical bottlenecks, explain business impacts to non-technical leaders, and escalate issues constructively.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'When crisis strikes or technical bugs emerge, leaders judge professionals by how they communicate under pressure. Clear, calm problem-solution articulation turns obstacles into demonstrations of competence.',
      objectives: [
        'Communicate incidents using the \'Situation - Root Cause - Impact - Remediation\' structure',
        'Translate complex technical bottlenecks into clear business language for non-technical executives',
        'Present multiple solution options accompanied by pros, cons, and timelines',
        'Escalate urgent blockers to leadership with actionable decision requests'
      ],
      sections: [
        {
          title: 'The 4-Stage Incident Communication Framework',
          content: 'When reporting an issue to stakeholders, structure your verbal briefing around 4 stages: 1. The Incident (What happened?), 2. The Root Cause (Why did it happen?), 3. The Impact (Who is affected and to what degree?), and 4. The Remediation & Prevention (How are we resolving it now, and how will we prevent recurrence?).',
          explanation: 'Avoid getting bogged down in low-level code syntax when briefing executives. Focus on business impact (revenue, users, uptime) and the concrete resolution ETA.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Executive Incident Briefing During Live Outage',
              code: `VP of Operations: "What is the status of our payment processing gateway, Priya?"\n\nIncident Commander (Priya): "At 9:15 AM EST, our payment gateway began returning 504 gateway timeout errors, impacting approximately twelve percent of checkout attempts. The root cause was an unannounced TLS certificate rotation by our upstream payment vendor. Our team has rolled back the connection pool to the secondary backup endpoint. As of 9:38 AM, transactions are processing normally, and our engineers are conducting end-to-end verification. We will share a full post-mortem by 2 PM."\n\nVP: "Excellent crisis management, Priya. Thank you for the swift mitigation."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Proposing Solution Trade-Offs for a Database Bottleneck',
              code: `Tech Lead (Carlos): "Our search query latency has degraded during peak hours as our catalog exceeded one million SKUs."\n\nProduct Director: "What are our options to remediate this before Black Friday?"\n\nCarlos: "We have two viable paths. Option A is vertical scaling—upgrading our current RDS instance memory. This requires thirty minutes of planned downtime tonight and increases our monthly cloud spend by fifteen percent, but resolves latency immediately. Option B is implementing an Elasticsearch caching cluster. This provides permanent scalability and advanced fuzzy search, but requires two weeks of development. I recommend executing Option A tonight to safeguard Black Friday, followed by building Option B in Q1."\n\nProduct Director: "Solid strategic approach. Let us approve Option A for tonight."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Escalating an Urgent Blocker to Management',
              code: `Team Lead (Fatima): "Hi Sarah, I need to escalate a critical blocker regarding the mobile app release."\n\nEngineering Director (Sarah): "Go ahead Fatima. What do we need?"\n\nFatima: "Apple App Store review rejected our build due to a missing privacy disclosure on third-party analytics. To meet our marketing launch on Thursday, we need legal to sign off on our updated privacy manifest within the next three hours. Could you assist in prioritizing this with the legal department?"\n\nSarah: "I am calling the head of legal right now. Let's get this unblocked."`
            }
          ],
          commonMistakes: [
            'Hiding an outage or delay hoping nobody notices until it blows up into a major catastrophe.',
            'Presenting a problem without having thought through at least one viable solution or next step.',
            'Overwhelming non-technical business leaders with incomprehensible kernel error logs.'
          ],
          proTip: 'Always lead with the punchline: State whether the incident is currently active or contained in the very first sentence.'
        }
      ],
      keyTakeaways: [
        'Use the 4-stage formula: Incident -> Root Cause -> Business Impact -> Remediation & Prevention.',
        'Frame multiple solutions with clear trade-offs: cost, speed, scalability, and risks.',
        'When escalating, state exactly what decision, resource, or approval you need from leadership.'
      ],
      practiceExercises: [
        {
          title: 'Incident Briefing Simulation Drill',
          instructions: 'Practice delivering a 90-second executive briefing on a simulated cloud server outage covering the incident, root cause, user impact, and resolution timeline.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Problem & Solution Articulation',
        question: 'What is the most executive-ready way to report a technical problem to leadership?',
        options: [
          'Panic and blame the vendor on a group chat',
          'Clearly state the incident, the root cause, the business/user impact, the immediate remediation steps taken, and the permanent prevention roadmap',
          'Pretend the issue does not exist and wait for customer complaints',
          'Send a 500-line stack trace to the CEO without any explanation'
        ],
        correctAnswer: 1,
        explanation: 'Option B delivers a structured, accountable briefing covering incident, cause, impact, remediation, and prevention.'
      }
    ]
  },
  {
    id: 'pes-int-07',
    orderIndex: 7,
    title: '19. Customer-Service Speaking',
    description: 'Master empathetic customer communication, active listening, de-escalating upset clients, delivering apologies with accountability, and closing support calls.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Customer service interactions test vocal empathy, patience, and problem-solving agility. Mastering professional de-escalation turns frustrated users into loyal brand advocates.',
      objectives: [
        'Execute the HEAR model (Hear, Empathize, Acknowledge, Resolve) on customer calls',
        'De-escalate angry or distressed clients using calm vocal tone and empathetic phrasing',
        'Deliver sincere corporate apologies without accepting unreasonable liability',
        'Guide customers through technical troubleshooting steps with clarity and patience'
      ],
      sections: [
        {
          title: 'The HEAR De-escalation Model & Vocal Empathy',
          content: 'When dealing with frustrated clients, remember the HEAR framework: 1. Hear (Listen without interrupting), 2. Empathize (Validate their emotional frustration), 3. Acknowledge (Confirm the specific business disruption), and 4. Resolve (Take immediate, transparent action).',
          explanation: 'Never tell an angry customer to \'calm down\'—this consistently escalates anger. Instead, say: \'I completely understand why this billing error is frustrating, and I am taking personal ownership of resolving it for you right now.\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Handling a Frustrated Enterprise Customer',
              code: `Customer (Mr. Vance): "I have been trying to export our compliance data for four hours, and your system keeps crashing! Our audit is tomorrow morning!"\n\nSupport Lead (Elena): "I completely understand how stressful this is with your audit tomorrow morning, Mr. Vance. I sincerely apologize for the disruption this export failure has caused. Let us resolve this together right now. I have opened your account telemetry on my monitor. Could you confirm if you are attempting a CSV or JSON export?"\n\nMr. Vance: "We are trying to export the five-hundred-gigabyte CSV dataset."\n\nElena: "Thank you. The web portal times out on files over one hundred gigabytes. What I will do right now is generate a direct secure S3 download link for your full archive and email it to you within twenty minutes. Would that resolve the issue for your audit team?"\n\nMr. Vance: "Yes! That would save our audit. Thank you Elena."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Guiding a Non-Technical User Through Troubleshooting',
              code: `Customer (Brenda): "I am completely locked out of my portal and I don\'t understand why!"\n\nAgent (Marcus): "I am here to help you get back in, Brenda. Let\'s walk through this step by step. On your login screen, do you see a small blue link that says \'Sign in with Enterprise SSO\' below the password field?"\n\nBrenda: "Yes, I see it right now."\n\nMarcus: "Wonderful. Please click that link and enter your corporate company email. That will redirect you through your organization\'s Okta security portal."\n\nBrenda: "Oh, it just asked for my mobile prompt and now I am in! Thank you so much for your patience."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Professional Support Call Closing',
              code: `Agent (Elena): "I have applied a fifty-dollar service credit to your account and emailed you the direct data download link. Is there anything else I can assist you with today, Mr. Vance?"\n\nMr. Vance: "No, that covers everything. You have been extraordinarily helpful."\n\nElena: "It was my absolute pleasure. Thank you for choosing Skillora AI, and best of luck with your audit tomorrow! Have a wonderful rest of your day."`
            }
          ],
          commonMistakes: [
            'Arguing with an upset customer or blaming another department for their problem.',
            'Interrupting the customer while they are venting their initial frustration.',
            'Making false promises you cannot keep just to get the customer off the phone.'
          ],
          proTip: 'Match the customer\'s pace initially to establish connection, then deliberately lower your volume and slow your cadence to guide them into a calmer emotional state.'
        }
      ],
      keyTakeaways: [
        'Apply the HEAR framework: Hear -> Empathize -> Acknowledge -> Resolve.',
        'Never say \'calm down\'; validate their frustration and offer immediate ownership.',
        'Close calls with gratitude, confirmation of resolution, and positive warmth.'
      ],
      practiceExercises: [
        {
          title: 'Customer De-escalation Role-Play',
          instructions: 'Practice de-escalating an angry customer whose subscription was incorrectly billed twice, applying vocal empathy and immediate corrective action.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Customer Service De-escalation',
        question: 'When an angry customer calls regarding an unexpected service outage, what is the best first verbal response?',
        options: [
          'Tell them to calm down and stop yelling',
          'Hang up immediately because they are angry',
          'I completely understand how frustrating this disruption is for your business operations, and I am taking personal ownership of resolving this issue for you right now.',
          'Tell them that outages are normal and they should read the terms of service'
        ],
        correctAnswer: 2,
        explanation: 'Option C validates their business frustration, shows empathy, and takes personal accountability for driving the resolution.'
      }
    ]
  },
  {
    id: 'pes-int-08',
    orderIndex: 8,
    title: '20. Job Interview Speaking',
    description: 'Master the STAR method for behavioral questions, articulate strengths and weaknesses authentically, explain career pivots, and ask strategic interviewer questions.',
    duration: '55 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Job interviews are high-stakes verbal evaluations of your competence, culture add, and executive presence. Mastering structured frameworks like STAR ensures you deliver compelling, quantifiable answers without rambling.',
      objectives: [
        'Deliver structured behavioral answers using the STAR method (Situation, Task, Action, Result)',
        'Answer \'Tell me about yourself\' and \'What is your greatest weakness?\' with authenticity and polish',
        'Articulate career milestones, technical achievements, and leadership contributions with quantifiable impact',
        'Ask strategic, high-value questions at the conclusion of the interview'
      ],
      sections: [
        {
          title: 'The STAR Behavioral Framework & Strategic Interviewing',
          content: 'Behavioral questions ("Tell me about a time when...") test how you handle real-world challenges. Follow the STAR format: Situation (15% of time), Task (15%), Action (50% - focus on what YOU did), and Result (20% - quantifiable metrics and lessons learned).',
          explanation: 'When discussing weaknesses, choose a real development area, show self-awareness, and detail the concrete systems you use to manage and improve it.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: STAR Response to "Tell Me About a Time You Handled a Crisis"',
              code: `Interviewer: "Could you describe a situation where a critical system failed under your watch and how you handled it?"\n\nCandidate (Nadia): "Certainly. (Situation) In my previous role at CloudPay, our payment gateway crashed during the Black Friday peak, affecting over twenty thousand transactions per minute. (Task) As the on-call Lead Site Reliability Engineer, my responsibility was to restore transaction flow immediately and diagnose the root cause without corrupting ledger state. (Action) I immediately declared a P1 incident, directed our traffic router to our warm backup gateway in Dublin, and coordinated a live debugging channel with four senior engineers. Upon isolating a deadlocked database mutex, I authored a hotfix patch and deployed it under our emergency change policy. (Result) We restored full transaction throughput within fourteen minutes, salvaged over three million dollars in transactions, and subsequently redesigned our connection pool architecture with automated failover, resulting in zero downtime for the subsequent three years."\n\nInterviewer: "That is an exemplary demonstration of technical leadership under pressure."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Answering "What Is Your Greatest Weakness?"',
              code: `Interviewer: "What would you say is an area of growth or your biggest professional weakness?"\n\nCandidate (Tariq): "In the past, I had a tendency to take on too many tasks independently rather than delegating early, which occasionally created bottlenecks during tight sprint deadlines. Recognizing this, over the past eighteen months, I have actively implemented Jira capacity planning frameworks and mentored two junior engineers to take ownership of sub-modules. By learning to delegate effectively and conduct weekly capacity reviews, our team velocity increased by twenty percent, and I can now focus on high-leverage architectural strategy."\n\nInterviewer: "Great self-awareness and measurable progress."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Asking Strategic Questions to the Interviewer',
              code: `Interviewer: "We have five minutes left. What questions do you have for us?"\n\nCandidate (Nadia): "Thank you! I have two questions. First, what are the primary engineering challenges this squad must overcome in the next six months to hit its ARR targets? And second, how does the leadership team foster continuous learning and technical mentorship as the engineering department scales?"\n\nInterviewer: "Those are two fantastic, thoughtful questions. Let\'s discuss our scaling roadmap..."`
            }
          ],
          commonMistakes: [
            'Using "We" for the entire answer without explaining your specific individual contribution.',
            'Rambling on the Situation/Context for 3 minutes and leaving only 20 seconds for the Action and Result.',
            'Saying "I have no questions for you" at the end of an interview, which signals disinterest.'
          ],
          proTip: 'Keep your STAR answers between 90 and 120 seconds. Spend the majority of your time detailing your specific Actions and quantifiable Results.'
        }
      ],
      keyTakeaways: [
        'Structure behavioral answers: Situation -> Task -> Action (50%) -> Result (metrics).',
        'Frame weaknesses with genuine self-awareness and active corrective systems.',
        'Always ask strategic questions about team challenges, engineering culture, and business goals.'
      ],
      practiceExercises: [
        {
          title: 'STAR Interview Recording Drill',
          instructions: 'Record your 2-minute STAR answer to the prompt: "Tell me about a time you had to resolve a disagreement with a colleague on a technical decision."'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'STAR Method',
        question: 'Which section of the STAR framework should receive the largest proportion (approximately 50%) of your spoken interview answer?',
        options: [
          'Situation (the background context)',
          'Task (the problem description)',
          'Action (the specific steps, leadership, and technical solutions you executed)',
          'Salary (your compensation requirements)'
        ],
        correctAnswer: 2,
        explanation: 'Interviewers evaluate your personal capabilities; therefore, the Action component—what you specifically did—deserves ~50% of your time.'
      }
    ]
  },
  {
    id: 'pes-int-09',
    orderIndex: 9,
    title: '21. Telephone and Video-Call English',
    description: 'Master remote communication conventions: audio checks, call transfers, handling latency and packet loss, virtual screen-sharing commentary, and call wrap-ups.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Remote collaboration relies heavily on video conferencing and telephone calls. Navigating audio checks, screen-sharing commentary, and network disruptions smoothly projects digital professionalism.',
      objectives: [
        'Conduct crisp audio/video checks and introduce attendees on virtual calls',
        'Handle audio lag, background noise, and packet drop gracefully',
        'Narrate screen-sharing demonstrations with verbal signposting',
        'Execute professional telephone transfers and message taking'
      ],
      sections: [
        {
          title: 'Virtual Meeting Etiquette & Screen Narratives',
          content: 'When presenting your screen on Zoom, Teams, or Google Meet, narrate your actions smoothly: \'I am now sharing my screen; please let me know when you can see the architecture diagram.\' This keeps participants informed while visuals buffer.',
          explanation: 'If technical glitches occur, remain completely calm: \'Looks like we have a slight audio delay on my connection. I will disable my video feed to preserve bandwidth while I share these slides.\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Meeting Kickoff & Screen Share Verification',
              code: `Host (Maya): "Good afternoon everyone. Can everyone hear me clearly?"\n\nParticipants: "Loud and clear, Maya."\n\nMaya: "Wonderful. I am going to share my desktop now to walk through the sprint burn-down chart. Could someone please confirm once my screen is visible?"\n\nJulian: "Yes, we can see the slide deck now, Maya."\n\nMaya: "Fantastic. Let us zoom in on our velocity metrics for week three."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Managing Audio Glitches & Connection Drops',
              code: `Presenter (David): "...and so our quarterly... [Audio cuts out for 4 seconds] ...migration."\n\nColleague (Sarah): "Pardon me David, your audio broke up for about five seconds during that last point. Could you please repeat what you said regarding the migration timeline?"\n\nDavid: "Apologies for that glitch! Let me switch to my backup wired headset. Can you hear me better now?"\n\nSarah: "Much better, crystal clear. Please continue."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Professional Phone Call Transfer & Message Taking',
              code: `Receptionist (Leo): "Good morning, Skillora AI. This is Leo. How may I direct your call?"\n\nCaller (Ms. Chen): "Hello, may I speak with Mr. Arthur Pendelton in enterprise partnerships?"\n\nLeo: "Let me check his availability. May I ask who is calling, please?"\n\nCaller: "This is Mei Chen from Tokyo Tech Solutions."\n\nLeo: "Thank you Ms. Chen. Mr. Pendelton is currently on another line. Would you like me to transfer you to his voicemail, or may I take a message and have him return your call this afternoon?"\n\nMs. Chen: "Please take a message. My number is 555-019-8342."\n\nLeo: "I have that noted, Ms. Chen. I will deliver the message immediately."`
            }
          ],
          commonMistakes: [
            'Forgetting you are on mute and speaking for two minutes before realizing nobody can hear you.',
            'Sharing your entire personal desktop with private browser tabs instead of sharing only the specific application window.',
            'Shouting into the microphone when someone else has an audio issue.'
          ],
          proTip: 'Always use a polite verification phrase before diving into slides: "Could someone give me a quick thumbs up once you see my screen?"'
        }
      ],
      keyTakeaways: [
        'Verify audio and visual visibility before launching into presentations.',
        'Handle audio drops calmly with precise repetition requests.',
        'Follow proper telephone hold, transfer, and message-taking protocols.'
      ],
      practiceExercises: [
        {
          title: 'Screen Share & Audio Glitch Recovery Drill',
          instructions: 'Practice narrating a screen share transition and responding to a simulated audio glitch while maintaining composure.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Remote Meeting Etiquette',
        question: 'What is the most professional verbal protocol when initiating a screen share during a client video call?',
        options: [
          'Say nothing and assume everyone can see your screen',
          'I am sharing my screen now. Could someone please give me a quick confirmation once the architecture slide is visible to everyone?',
          'Why can\'t you see my screen yet?',
          'Look at my computer screen right now.'
        ],
        correctAnswer: 1,
        explanation: 'Option B politely announces the screen share action and verifies visual confirmation before proceeding.'
      }
    ]
  },
  {
    id: 'pes-int-10',
    orderIndex: 10,
    title: '22. Presenting Information Clearly',
    description: 'Master presentation openings, structural signposting, data visualization descriptions, rhetorical emphasis, and Q&A management.',
    duration: '55 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Delivering a presentation is not about reading bullet points off a slide; it is about guiding your audience on an intellectual journey with clear structure, vocal emphasis, and compelling data storytelling.',
      objectives: [
        'Deliver high-impact presentation openings that hook audience attention',
        'Use signposting phrases to guide listeners through complex multi-part presentations',
        'Describe financial charts, graphs, and technical schematics with verbal precision',
        'Facilitate and manage interactive audience Q&A sessions professionally'
      ],
      sections: [
        {
          title: 'Presentation Structure & Data Articulation',
          content: 'A world-class presentation follows the 3-part rule: 1. Tell them what you are going to tell them (Introduction & Roadmap), 2. Tell them (Body with Signposting & Data), and 3. Tell them what you told them (Summary & Call to Action).',
          explanation: 'When explaining charts, use descriptive trend verbs: \'soared\', \'stabilized\', \'dipped\', \'plateaued\', \'outperformed\', \'doubled\'. Always highlight the business insight behind the number.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Presentation Opening & Executive Hook',
              code: `Presenter (Carla): "Good morning executives and colleagues. Over the past six months, our customer onboarding drop-off rate reached an all-time high of thirty-four percent. Today, I am thrilled to present our redesigned self-service onboarding engine—a platform built to slash drop-off by half while accelerating time-to-value for enterprise users. In the next fifteen minutes, I will cover three areas: first, our user research findings; second, our live interactive prototype; and third, our projected revenue impact for Q4."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Describing Performance Trends on a Chart',
              code: `Presenter (Carla): "If you look at the line graph on slide seven, notice the blue trajectory representing our active daily users. Following the deployment of our real-time notification engine in September, daily active engagement surged by forty-two percent, reaching a record peak of one point two million users in October. Meanwhile, churn plummeted to zero point eight percent, proving that proactive user nudges directly drive retention."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Facilitating the Presentation Q&A Session',
              code: `Presenter (Carla): "That concludes our walkthrough of the new onboarding engine. In summary, this platform reduces friction, scales to millions of users, and protects our bottom line. I would now like to open the floor for any questions or feedback you may have."\n\nExecutive: "Carla, what is the implementation timeline for our European data center?"\n\nCarla: "Thank you for that question, Mr. Sterling. Our European deployment is scheduled for Phase 2 in early November..."`
            }
          ],
          commonMistakes: [
            'Turning your back to the audience and reading text directly from the slides word-for-word.',
            'Speaking in a monotone voice without changing pitch or rhythm to emphasize key data points.',
            'Ending abruptly with "Yeah, that\'s it" instead of a powerful summary and call to action.'
          ],
          proTip: 'Never say "Sorry, the text on this slide is too small to read." If it is too small to read, remove it from the slide!'
        }
      ],
      keyTakeaways: [
        'Hook your audience in the first 30 seconds by stating the core problem and your proposed solution.',
        'Use signposting language: \'Turning now to...\', \'This brings us to our second point...\', \'To illustrate this with data...\'',
        'Close with conviction: summarize the 3 main takeaways and invite questions.'
      ],
      practiceExercises: [
        {
          title: '3-Minute Presentation Delivery Drill',
          instructions: 'Deliver a 3-minute presentation on a technical or business topic including an introduction, one data graph description, a summary, and a Q&A opening.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Presentation Signposting',
        question: 'Which phrase is the most effective verbal signpost when transitioning from problem analysis to your proposed solution during a formal presentation?',
        options: [
          'Now that we have thoroughly examined the root causes of our customer churn, let us turn our attention to our three-part product solution.',
          'That slide is over, look at this other slide now.',
          'Forget about the problem, here is some other stuff.',
          'I am tired of talking about churn.'
        ],
        correctAnswer: 0,
        explanation: 'Option A bridges the previous topic with the upcoming solution smoothly and professionally.'
      }
    ]
  },
  {
    id: 'pes-int-11',
    orderIndex: 11,
    title: '23. Networking and Professional Introductions',
    description: 'Master high-impact networking conversations, elevator pitches, asking insightful questions, exchanging contact information, and following up.',
    duration: '45 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Networking is not about collecting business cards; it is about building meaningful professional relationships based on mutual curiosity, shared goals, and reciprocal value exchange.',
      objectives: [
        'Approach individuals and groups at networking conferences with confidence',
        'Deliver a conversational, engaging overview of your work without sounding scripted',
        'Ask consultative questions that uncover mutual collaboration opportunities',
        'Execute a graceful conversation close and establish digital follow-up commitments'
      ],
      sections: [
        {
          title: 'The 4-Step Networking Conversation Architecture',
          content: 'A great networking interaction follows 4 steps: 1. Approach & Icebreaker, 2. Value Pitch & Context Sharing, 3. Mutual Exploration & Questions, and 4. Graceful Exit with Follow-Up Commitment.',
          explanation: 'When approaching a group of two or three people standing in a circle, look for an open \'V\' shape. Make eye contact, smile, and say: \'Hello! Mind if I join in on this conversation?\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Approaching a Group at an AI Summit',
              code: `Attendee (Chloe): "Excuse me, hi! Mind if I join your circle? I caught you discussing vector embeddings and couldn't resist."\n\nParticipant (Raj): "Please, jump right in! I am Raj from VectorLabs, and this is Sandra from DataFlow."\n\nChloe: "Pleased to meet you both! I am Chloe, Machine Learning Engineer at Skillora AI. We are currently benchmarking vector database retrieval latencies for our automated tutoring engine."\n\nSandra: "Fascinating! Which vector database are you testing right now?"`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Finding Common Ground & Uncovering Synergy',
              code: `Chloe: "We are currently evaluating Pinecone and Milvus. Have you experienced challenges with multi-tenant filtering in your production setups?"\n\nRaj: "Absolutely! We actually wrote an open-source proxy to handle hybrid keyword and semantic filtering for multi-tenant isolation."\n\nChloe: "That sounds like the exact architectural pattern we have been researching. I would love to explore how your team tackled that caching layer."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Exchanging Contact Info & Graceful Exit',
              code: `Chloe: "Raj and Sandra, this has been an incredibly insightful chat, but I see my session speaker approaching the stage. May I scan your badge or connect on LinkedIn so we can continue this discussion?"\n\nRaj: "Definitely! Here is my QR code on LinkedIn."\n\nChloe: "Connected! I will send you a message on Monday with our benchmark notes. Enjoy the rest of the summit!"\n\nRaj: "You too, Chloe! Great meeting you."`
            }
          ],
          commonMistakes: [
            'Immediately trying to sell your product or ask for a job within the first 60 seconds of meeting someone.',
            'Holding someone hostage in a 20-minute conversation when they clearly want to circulate the room.',
            'Never following up after collecting contact details.'
          ],
          proTip: 'Send your LinkedIn connection request within 24 hours while the memory of your conversation is fresh, mentioning a specific topic you discussed.'
        }
      ],
      keyTakeaways: [
        'Approach conversations with genuine curiosity and a desire to add value.',
        'Exchange contact info smoothly: \'May I connect with you on LinkedIn?\'',
        'Always follow up within 24 hours referencing your conversation topic.'
      ],
      practiceExercises: [
        {
          title: 'Networking Conversation Simulation Drill',
          instructions: 'Practice simulating a complete 2-minute networking interaction: approach, self-intro, 2 curious questions, contact exchange, and exit.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Professional Networking',
        question: 'What is the most effective and respectful way to conclude a networking interaction at a conference?',
        options: [
          'Walk away without saying anything when the other person looks away',
          'It has been a pleasure speaking with you, David. I must head into the keynote session, but may I connect with you on LinkedIn to continue our discussion on cloud architecture?',
          'Give me your phone number right now',
          'You should talk to me forever'
        ],
        correctAnswer: 1,
        explanation: 'Option B expresses appreciation, provides a courteous exit reason, and establishes a clear professional follow-up channel.'
      }
    ]
  },
  {
    id: 'pes-int-12',
    orderIndex: 12,
    title: '24. Negotiating and Making Requests',
    description: 'Master commercial negotiations, scope adjustments, conditional bargaining, trading concessions, handling objections, and verbally confirming agreements.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Negotiation is a collaborative problem-solving dialogue aimed at reaching a mutually beneficial agreement. Mastering conditional language and diplomatic firmness ensures you protect your interests while preserving business relationships.',
      objectives: [
        'Use conditional \'If-Then\' frameworks to trade value rather than giving concessions away for free',
        'Handle client pricing and timeline objections diplomatically',
        'Anchor proposals with confidence and articulate underlying business value',
        'Verbally confirm agreed terms and document next contractual steps'
      ],
      sections: [
        {
          title: 'Conditional Bargaining & Win-Win Negotiation Blueprints',
          content: 'The golden rule of negotiation is: Never give a concession without getting something of equal or greater value in return. Use conditional phrasing: \'If you can commit to a two-year agreement, we would be happy to include dedicated technical onboarding at no additional charge.\'',
          explanation: 'When clients push for lower prices, avoid discounting blindly. Instead, adjust scope: \'To accommodate that budget target, we can deliver the core web platform in Phase 1 and defer the mobile native app to Phase 2.\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Contract Licensing Negotiation',
              code: `Client (Mr. Thorne): "Your enterprise quote of $80,000 is approximately fifteen percent higher than our allocated budget for this fiscal quarter."\n\nSales Director (Julian): "I understand budget constraints are top of mind, Mr. Thorne. If your executive committee can commit to signing by the end of this month and agreeing to a two-year term, we can adjust the annual licensing fee to $68,000, bringing it fully within your budget parameters."\n\nMr. Thorne: "If you can include twenty-four-seven priority SLA support at that rate, we have a deal."\n\nJulian: "We can certainly agree to priority SLA support on a two-year commitment. I will update the master service agreement and send it over for execution."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Scope Adjustment Negotiation with Product Manager',
              code: `Product Manager (Kylie): "We really need to add real-time voice translation into this sprint's release."\n\nTech Lead (Daria): "Adding real-time voice translation will require an estimated eighty engineering hours. If this feature is our top priority, which of the two existing roadmap items—automated invoicing or customer analytics—would you like us to push to the next sprint to free up capacity?"\n\nKylie: "Let us defer automated invoicing to sprint four. Real-time voice translation takes precedence."\n\nDaria: "Understood. That keeps our sprint capacity balanced."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Verbal Confirmation of Negotiated Terms',
              code: `Lead Negotiator (Julian): "To ensure we are completely aligned before our legal teams draft the final paperwork: We have agreed on a 24-month SaaS enterprise tier at $68,000 annually, including priority 24/7 SLA support and a kick-off date of November first. Is that an accurate summary of our agreement?"\n\nClient (Mr. Thorne): "That captures our agreement perfectly, Julian. Thank you for your flexibility."`
            }
          ],
          commonMistakes: [
            'Immediately caving in to price cuts without asking for any reciprocal commitment or scope reduction.',
            'Using hostile, defensive language when a client objects to your rates or timelines.',
            'Leaving negotiated terms unconfirmed verbally before ending the meeting.'
          ],
          proTip: 'Always summarize agreed points at the conclusion of every negotiation to ensure both parties share an identical understanding before lawyers draft paperwork.'
        }
      ],
      keyTakeaways: [
        'Trade concessions conditionally: \'If you can [X], then we can offer [Y].\'',
        'When budgets decrease, reduce scope rather than devaluing your work.',
        'Always summarize agreed points verbally before concluding the conversation.'
      ],
      practiceExercises: [
        {
          title: 'Conditional Negotiation Role-Play',
          instructions: 'Practice negotiating with a client who asks for a 20% discount, offering the discount only in exchange for an annual upfront payment and a case study testimonial.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Negotiation Strategy',
        question: 'What is the most professional response when a client demands a 20% price reduction on a fixed-scope project?',
        options: [
          'Say yes immediately and do the work for less money',
          'Tell the client they are cheap and hang up',
          'To accommodate that reduced budget, we would be happy to adjust our project scope by delivering the core MVP in Phase 1 and deferring secondary modules to Phase 2.',
          'Threaten to sue the client'
        ],
        correctAnswer: 2,
        explanation: 'Option C protects your pricing integrity by tying budget reductions to corresponding scope adjustments.'
      }
    ]
  },
  {
    id: 'pes-int-13',
    orderIndex: 13,
    title: '25. Giving Feedback and Receiving Feedback',
    description: 'Master the SBI (Situation-Behavior-Impact) model, deliver constructive and corrective feedback, solicit input proactively, and process criticism with emotional maturity.',
    duration: '50 mins',
    xpReward: 120,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Feedback is the ultimate catalyst for career development. Giving feedback that inspires improvement and receiving critical feedback with emotional poise are distinguishing characteristics of senior leaders.',
      objectives: [
        'Deliver actionable constructive feedback using the SBI (Situation, Behavior, Impact) model',
        'Praise colleagues with specific, impactful positive feedback',
        'Solicit feedback proactively from managers and peers',
        'Process critical feedback without defensiveness and co-create improvement plans'
      ],
      sections: [
        {
          title: 'The SBI Feedback Model & Growth Mindset Protocols',
          content: 'Effective feedback separates facts from emotional interpretations. Use the SBI model: 1. Situation (Anchor to specific time/place), 2. Behavior (Describe observable action without judgment), and 3. Impact (Explain the effect on the team, client, or outcome).',
          explanation: 'When receiving feedback, resist the urge to make immediate excuses. Take a breath, say \'Thank you for sharing that perspective,\' and ask clarifying questions to understand how to improve.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Delivering Constructive Feedback to a Colleague',
              code: `Manager (Brenda): "Hi Tyler, do you have ten minutes for a quick one-on-one sync?"\n\nTyler: "Sure Brenda, what\'s on your mind?"\n\nBrenda: "I want to share some feedback regarding yesterday\'s client presentation (Situation). When the client asked about security compliance, you interrupted them before they finished their question (Behavior). As a result, the client appeared visibly frustrated and felt their security concerns were dismissed (Impact). In the future, I recommend pausing completely until the client finishes speaking before providing our response. How did you view that moment?"\n\nTyler: "I appreciate you pointing that out, Brenda. I was eager to reassure them, but I see how interrupting made them feel unheard. I will make sure to practice active listening in our next sync."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Receiving Critical Feedback Non-Defensively',
              code: `Director (Omar): "Kylie, your executive summary on the data audit was a bit too technical for our C-suite stakeholders."\n\nKylie: "Thank you for the constructive feedback, Omar. Could you highlight which specific sections felt overly dense so I can calibrate the language for senior leadership in future reports?"\n\nOmar: "Focus more on the financial risk implications rather than the SQL database indexing algorithms."\n\nKylie: "That makes complete sense. I will revise the summary today with an executive financial focus."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Delivering High-Impact Positive Praise',
              code: `Team Lead (Daria): "Mateo, I want to recognize your work during the database outage this morning. Your calm communication in the war room and your rapid hotfix deployment kept everyone focused and resolved the incident fifteen minutes ahead of SLA. Your leadership made a huge difference to the entire team."\n\nMateo: "Thank you so much Daria! That really means a lot to me."`
            }
          ],
          commonMistakes: [
            'Using the outdated "Feedback Sandwich" (insincere compliment -> criticism -> compliment) which dilutes the message.',
            'Giving vague feedback like "Good job" or "Be better" without actionable behavioral specifics.',
            'Becoming defensive, argumentative, or sulking when receiving constructive feedback.'
          ],
          proTip: 'Always end a feedback conversation with a shared agreement on future actions: "So what are our agreed next steps for next week?"'
        }
      ],
      keyTakeaways: [
        'Structure feedback using Situation -> Behavior -> Impact (SBI).',
        'Receive feedback with curiosity: \'Thank you for the feedback. Could you give an example?\'',
        'Make praise specific, timely, and focused on effort and impact.'
      ],
      practiceExercises: [
        {
          title: 'SBI Feedback Delivery Drill',
          instructions: 'Practice delivering constructive feedback to a teammate who arrived 15 minutes late to a client meeting using the Situation-Behavior-Impact model.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'SBI Feedback Framework',
        question: 'What does the SBI model for delivering constructive workplace feedback stand for?',
        options: [
          'Strategy, Budget, Implementation',
          'Situation, Behavior, Impact',
          'Speaking, Breathing, Intonation',
          'Salary, Benefits, Insurance'
        ],
        correctAnswer: 1,
        explanation: 'The SBI model stands for Situation (Context), Behavior (Observable action), and Impact (Resulting outcome).'
      }
    ]
  },
  {
    id: 'pes-int-project',
    orderIndex: 14,
    title: '26. Intermediate Speaking Project: Cross-Functional Workplace & Client Speaking Playbook',
    description: 'Execute a comprehensive 10-deliverable capstone project demonstrating mastery of meetings, job interviews, customer service, presentations, negotiations, and feedback.',
    duration: '100 mins',
    xpReward: 400,
    isCompleted: false,
    status: 'locked',
    isProject: true,
    type: 'project',
    projectDetails: {
      title: 'Cross-Functional Workplace & Client Speaking Playbook',
      overview: 'This comprehensive intermediate capstone project evaluates your spoken communication across 10 demanding professional scenarios. You will demonstrate advanced discourse linking, business collocations, diplomatic disagreement, executive presentation delivery, and commercial negotiation.',
      deliverables: [
        {
          id: 'del-pes-int-01',
          title: 'Deliverable 1: Complete Behavioral Job Interview Simulation (STAR Method)',
          description: 'Deliver a structured, spoken response to the interview question: "Tell me about a time you led a challenging project under tight deadlines," executing all 4 STAR components with quantifiable outcomes.',
          checklist: [
            'Situation: Concise context and background (15% duration)',
            'Task: Core challenge and personal responsibility (15% duration)',
            'Action: Specific individual leadership and technical steps (50% duration)',
            'Result: Quantifiable metrics, business impact, and key takeaways (20% duration)'
          ]
        },
        {
          id: 'del-pes-int-02',
          title: 'Deliverable 2: 3-Minute Executive Presentation with Data Visuals',
          description: 'Deliver a polished 3-minute presentation pitching a process automation project, featuring an introduction hook, trend graph description, signposting transitions, and summary.',
          checklist: [
            'Compelling 30-second opening hook stating problem and solution',
            'Precise verbal description of a data graph (trends, peaks, percentages)',
            'Seamless signposting between sections',
            'Strong summary and invitation to Q&A'
          ]
        },
        {
          id: 'del-pes-int-03',
          title: 'Deliverable 3: De-escalating an Upset Customer Support Simulation',
          description: 'Simulate a telephone customer service de-escalation for an enterprise client experiencing an unexpected service outage using the HEAR framework.',
          checklist: [
            'Active listening without interruption',
            'Vocal empathy and validation of business impact',
            'Sincere corporate apology with personal ownership',
            'Clear step-by-step remediation plan with immediate timeline'
          ]
        },
        {
          id: 'del-pes-int-04',
          title: 'Deliverable 4: Meeting Facilitation, Interruption & Action Summary',
          description: 'Demonstrate meeting facilitation skills by opening a sprint refinement session, managing a polite interjection, and summarizing action items with accountable owners.',
          checklist: [
            'Clear objective setting and agenda walkthrough',
            'Diplomatic interjection with \'May I add a point of clarification...\'',
            'Concise table/parking-lot redirection for off-topic points',
            'Comprehensive recap of who, what, and when'
          ]
        },
        {
          id: 'del-pes-int-05',
          title: 'Deliverable 5: Commercial Contract & Scope Negotiation Dialogue',
          description: 'Deliver a spoken commercial negotiation dialogue responding to a client\'s 20% discount request using conditional bargaining and scope adjustments.',
          checklist: [
            'Application of conditional \'If-Then\' trading language',
            'Scope adjustment alternatives to protect profit margin',
            'Professional firmness without defensiveness',
            'Verbal confirmation of agreed terms'
          ]
        },
        {
          id: 'del-pes-int-06',
          title: 'Deliverable 6: Constructive Feedback Delivery (SBI Model)',
          description: 'Deliver constructive feedback to a peer regarding missed deadlines using the Situation-Behavior-Impact model, followed by co-creating an improvement plan.',
          checklist: [
            'Objective Situation anchor (time, place, project)',
            'Non-judgmental Behavior description',
            'Clear business and team Impact explanation',
            'Collaborative agreement on future action items'
          ]
        },
        {
          id: 'del-pes-int-07',
          title: 'Deliverable 7: Conference Networking Conversation & Follow-Up',
          description: 'Simulate a complete 2-minute networking interaction at an industry conference: approach, value pitch, 2 consultative questions, contact exchange, and follow-up plan.',
          checklist: [
            'Polite approach and conversational icebreaker',
            'Crisp 30-second value proposition overview',
            'Active listening and reciprocal questioning',
            'Smooth LinkedIn/contact exchange and 24-hour follow-up commitment'
          ]
        },
        {
          id: 'del-pes-int-08',
          title: 'Deliverable 8: Diplomatic Disagreement with Senior Leadership',
          description: 'Deliver a spoken diplomatic disagreement to an executive who proposed launching software without security penetration testing, offering a phased alternative.',
          checklist: [
            'Validation of executive intent and business urgency',
            'Objective risk explanation (compliance, data liabilities)',
            'Pragmatic phased rollout compromise',
            'Professional tone maintaining psychological safety'
          ]
        },
        {
          id: 'del-pes-int-09',
          title: 'Deliverable 9: Remote Video-Call Screen-Sharing Demonstration',
          description: 'Deliver a spoken demonstration narrating a live dashboard walkthrough on a video call, including audio check, screen transition, and recovery from a simulated audio glitch.',
          checklist: [
            'Audio and video visibility confirmation',
            'Smooth verbal narration of screen-sharing actions',
            'Composed recovery from a simulated audio drop',
            'Clear signposting to key UI metrics'
          ]
        },
        {
          id: 'del-pes-int-10',
          title: 'Deliverable 10: High-Impact Elevator Pitch for a Career Pivot',
          description: 'Deliver a 60-second self-introduction explaining your transition into a new specialized domain (e.g. into AI, Cloud, or Leadership), connecting past strengths to future value.',
          checklist: [
            'Present role and specialized focus',
            'Past transferable skills and quantifiable track record',
            'Future strategic goals and alignment with target opportunity',
            'Paced delivery within 55-65 seconds'
          ]
        }
      ],
      submissionGuidelines: 'Submit spoken audio recordings or comprehensive spoken transcripts for all 10 deliverables, evaluating your performance against the rubric.',
      evaluationRubric: [
        {
          criteria: 'Executive Presence, Pacing & Vocal Variety',
          advanced: 'Speech exhibits dynamic vocal modulation, zero disruptive fillers, deliberate pausing, and authoritative composure.',
          proficient: 'Clear, steady pacing with good vocal variety and minor occasional hesitation.',
          needsWork: 'Monotone delivery, rushed cadence, or frequent verbal fillers (um, like, you know).'
        },
        {
          criteria: 'Discourse Cohesion & Business Collocations',
          advanced: 'Masterful use of complex transition connectors, established business collocations, and logical paragraph structures.',
          proficient: 'Good sentence linking and accurate vocabulary with 1-2 minor collocation slips.',
          needsWork: 'Choppy short sentences, repetitive connectors, or direct native-language translation errors.'
        },
        {
          criteria: 'Strategic Diplomacy & Framework Execution',
          advanced: 'Flawless execution of STAR, SBI, HEAR, and conditional negotiation frameworks with exceptional interpersonal tact.',
          proficient: 'Frameworks applied correctly with minor structural inconsistencies.',
          needsWork: 'Missing framework components, blunt confrontational phrasing, or lack of actionable resolutions.'
        }
      ]
    }
  },
  {
    id: 'pes-int-assessment',
    orderIndex: 15,
    title: 'Intermediate Final Assessment (30 MCQs)',
    description: 'Formal 30-question multiple-choice assessment testing all Level 2 speaking concepts. Passing score: 25/30 (83.3%).',
    duration: '45 mins',
    xpReward: 400,
    isCompleted: false,
    status: 'locked',
    isFinalAssessment: true,
    type: 'assessment',
    requiresQuiz: true,
    totalQuestions: 30,
    passingScore: 25,
    questions: PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_ASSESSMENT
  }
];
