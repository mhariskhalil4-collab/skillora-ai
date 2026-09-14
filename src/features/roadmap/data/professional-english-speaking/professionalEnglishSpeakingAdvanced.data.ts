import { Task, QuizQuestion } from '../../types/roadmap.types';

export const PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Executive Communication & The BLUF Model',
    question: 'When briefing C-suite executives or Board members, what does the BLUF communication model mandate?',
    options: [
      'Bottom Line Up Front: Deliver the core recommendation, decision requirement, and financial impact in the opening 30 seconds before supporting data',
      'Begin Long Ultimate Finding: Speak for 45 minutes on historical background before mentioning the current problem',
      'Blame Leaders Under Fire: Direct all responsibility to other executive departments',
      'Breathe Loudly Until Finished: Never pause for questions during a presentation'
    ],
    correctAnswer: 0,
    explanation: 'The BLUF (Bottom Line Up Front) framework delivers the core insight and required decision immediately, respecting executive cognitive bandwidth.'
  },
  {
    id: 2,
    topic: 'Crisis Communication & Delivering Bad News',
    question: 'What is the most effective leadership framework when communicating a major security incident or severe project delay to external clients?',
    options: [
      'Deny that anything happened until a journalist writes an article about it',
      'The 4Rs: Regret (Sincere empathy), Responsibility (Accountability), Remedy (Immediate containment actions), and Reform (Long-term structural prevention)',
      'Blame junior software contractors and offer zero explanation',
      'Send a cryptic tweet with no details'
    ],
    correctAnswer: 1,
    explanation: 'The 4Rs framework (Regret, Responsibility, Remedy, Reform) restores institutional trust and demonstrates executive accountability.'
  },
  {
    id: 3,
    topic: 'Advanced Discourse Markers & Paraphrasing',
    question: 'Which spoken phrase demonstrates sophisticated self-correction and thought refinement without signaling panic?',
    options: [
      'Wait, I made a stupid mistake, ignore everything I said.',
      'I have no idea what I am saying right now.',
      'To put that more precisely, what our metrics indicate is that customer retention stabilized rather than grew exponentially.',
      'Forget it, let\'s skip this slide.'
    ],
    correctAnswer: 2,
    explanation: '\'To put that more precisely, [refinement]...\' refines your insight with poise, enhancing your credibility as a precise communicator.'
  },
  {
    id: 4,
    topic: 'Cross-Cultural Communication Nuances',
    question: 'When communicating across high-context cultures (e.g. Japan, South Korea) versus low-context cultures (e.g. US, Germany, Netherlands), what is a key verbal adaptation?',
    options: [
      'Always shout loudly when speaking to international partners',
      'Assume that everyone worldwide interprets direct criticism in the exact same manner',
      'Refuse to work with international teams altogether',
      'In high-context environments, use diplomatic indirect phrasing and preserve face; in low-context environments, communicate explicit, direct, and unambiguous action items'
    ],
    correctAnswer: 3,
    explanation: 'Adapting to high-context cultures requires subtlety, relational trust, and saving face, while low-context settings value explicit, direct clarity.'
  },
  {
    id: 5,
    topic: 'Consultative Sales & Needs Discovery',
    question: 'In consultative enterprise client discovery, which question type is most effective at uncovering high-value strategic pain points?',
    options: [
      'Open-ended diagnostic questions: "How does the current database latency impact your quarterly revenue targets and customer churn rates?"',
      'Yes/No questions: "Do you like our software?"',
      'Aggressive questions: "Why haven\'t you bought our product yet?"',
      'Irrelevant questions: "What is your favorite color?"'
    ],
    correctAnswer: 0,
    explanation: 'Diagnostic questions link operational symptoms directly to strategic business metrics, establishing high-value ROI.'
  },
  {
    id: 6,
    topic: 'Advanced Negotiation Anchoring',
    question: 'In high-stakes commercial negotiations, what is the strategic function of verbal anchoring?',
    options: [
      'Refusing to speak during the entire meeting',
      'Establishing a well-justified initial figure or term backed by data that sets the psychological baseline for all subsequent trades',
      'Insulting the opposing party\'s opening offer',
      'Immediately agreeing to the first counter-offer'
    ],
    correctAnswer: 1,
    explanation: 'A well-reasoned initial anchor shapes the cognitive range of the negotiation, pulling the ultimate agreement closer to your target.'
  },
  {
    id: 7,
    topic: 'Conflict Resolution & De-escalation',
    question: 'During a heated cross-functional debate between engineering and marketing, what is the best verbal intervention by a team leader?',
    options: [
      'Tell both teams to stop acting like children and walk out',
      'Pick one team and fire the other team immediately',
      'Let us pause for a moment. We all share the same objective of launching a secure, high-converting product. Let us separate the emotional frustration from our technical constraints and evaluate our two rollout options objectively.',
      'Scream louder than everyone else'
    ],
    correctAnswer: 2,
    explanation: 'Reframing around shared goals, validating frustration, and redirecting focus to objective criteria dissolves interpersonal conflict.'
  },
  {
    id: 8,
    topic: 'Business Storytelling & Narrative Arcs',
    question: 'What is the most compelling structure for delivering an executive business case study or strategic turnaround story?',
    options: [
      'Chronological list of 100 meetings with zero narrative tension',
      'A personal rant about previous managers',
      'A technical manual read aloud word-for-word',
      'The Hook -> The Context & Complication (The Challenge) -> The Turning Point (Strategic Intervention) -> The Resolution & Quantifiable Transformation'
    ],
    correctAnswer: 3,
    explanation: 'The classic narrative arc builds emotional engagement, highlights the strategic pivot, and reinforces the business impact.'
  },
  {
    id: 9,
    topic: 'Executive Vocal Presence & Pitch Control',
    question: 'What is the impact of \'uptalk\' (ending affirmative statements with a rising question intonation ↗) in executive boardrooms?',
    options: [
      'It diminishes perceived authority, making factual statements sound hesitant, uncertain, and seeking approval',
      'It makes you sound like a genius CEO',
      'It speeds up meeting completion by fifty percent',
      'It has zero effect on listener perception'
    ],
    correctAnswer: 0,
    explanation: 'Uptalk on statements signals insecurity; executive gravitas requires grounded falling intonation on key assertions.'
  },
  {
    id: 10,
    topic: 'Managing Hostile Q&A Objections',
    question: 'When a skeptical investor challenges your revenue projection with aggressive skepticism during a keynote, how should you respond?',
    options: [
      'Attack the investor\'s credentials publicly',
      'Acknowledge the rigorous scrutiny, reframe the underlying assumption calmly, and provide the sensitivity analysis data supporting your model',
      'Burst into tears and leave the auditorium',
      'Ignore the question and pretend you did not hear it'
    ],
    correctAnswer: 1,
    explanation: 'Maintaining emotional poise, welcoming scrutiny, and providing grounded sensitivity data demonstrates unshakable leadership.'
  },
  {
    id: 11,
    topic: 'Diplomatic Boundary Setting',
    question: 'How should an executive leader verbally communicate healthy professional boundaries when requested to take on an unfeasible project by the CEO?',
    options: [
      'I refuse to do any more work for this company.',
      'Sure, we can do it (and cause the team to burn out).',
      'To ensure we deliver our primary Q3 commitments with exceptional quality, our engineering squad cannot absorb this initiative without deprioritizing the mobile payments launch. Which of these two initiatives takes strategic precedence for the business?',
      'Why do you hate my team?'
    ],
    correctAnswer: 2,
    explanation: 'Framing capacity constraints around strategic trade-offs forces leadership to make deliberate prioritization decisions.'
  },
  {
    id: 12,
    topic: 'Strategic Rhetorical Devices',
    question: 'Which rhetorical device uses a series of three parallel words or phrases to create memorable, persuasive impact in a keynote speech?',
    options: [
      'Monosyllabic monotone',
      'Passive voice circumlocution',
      'Syllable stuttering',
      'Tricolon (The Rule of Three: e.g. "We must innovate boldly, execute flawlessly, and scale responsibly")'
    ],
    correctAnswer: 3,
    explanation: 'The tricolon (Rule of Three) creates rhythmic cadence, enhancing audience retention and emotional resonance.'
  },
  {
    id: 13,
    topic: 'Leading Virtual Town Halls & Global All-Hands',
    question: 'What is the most engaging verbal technique for an executive leading a 500-person global virtual town hall across multiple time zones?',
    options: [
      'Acknowledge regional time zones warmly, set an interactive cadence with chat polls, use signposted transitions, and address unscripted live employee questions with transparency',
      'Read a boring financial report for 60 minutes with webcam turned off',
      'Mute all employees and prohibit any questions',
      'Complain about how early in the morning the meeting is'
    ],
    correctAnswer: 0,
    explanation: 'Inclusive greetings, interactive pacing, and transparent live Q&A build organizational trust across distributed global teams.'
  },
  {
    id: 14,
    topic: 'Ethical Communication & Corporate Transparency',
    question: 'When asked by a journalist or client about an unreleased feature that has experienced a confidential technical setback, what is the most ethical and professional response?',
    options: [
      'Lie and claim the product is already fully functional',
      'We are committed to delivering enterprise-grade security and performance. While we are rigorously refining the architecture in private beta, we will announce our official release date as soon as validation benchmarks are complete.',
      'Disclose confidential trade secrets and source code to the public',
      'Insult the journalist'
    ],
    correctAnswer: 1,
    explanation: 'Balancing corporate confidentiality with honesty, focus on quality standards, and refusal to make false promises upholds business ethics.'
  },
  {
    id: 15,
    topic: 'Persuasive Problem-Solution Architecture',
    question: 'Which framework structures a high-stakes business pitch from initial pain point to ultimate action?',
    options: [
      'Talk about yourself for an hour without mentioning the client',
      'Offer discounts before explaining what the product does',
      'Monroe\'s Motivated Sequence: Attention -> Need (Pain) -> Satisfaction (Solution) -> Visualization (Future Value) -> Action (Next Step)',
      'Argue with the audience until they agree with you'
    ],
    correctAnswer: 2,
    explanation: 'Monroe\'s Motivated Sequence is the gold standard for persuasive speech: Attention -> Need -> Satisfaction -> Visualization -> Action.'
  },
  {
    id: 16,
    topic: 'Advanced Pronunciation & Sentence Rhythm',
    question: 'In spoken English, which categories of words receive natural sentence stress in high-impact speech?',
    options: [
      'Only prepositions and conjunctions (at, in, on, and, but)',
      'Only auxiliary verbs and articles (is, was, the, a)',
      'Every single syllable without distinction',
      'Content words that carry core meaning: Nouns, Main Verbs, Adjectives, and Negative Contractions (e.g. "We CANNOT DELAY the LAUNCH")'
    ],
    correctAnswer: 3,
    explanation: 'Stress-timing in English highlights content words carrying semantic weight while de-stressing structural function words.'
  },
  {
    id: 17,
    topic: 'Strategic Decision-Making Under Ambiguity',
    question: 'When presenting strategic recommendations amidst incomplete market data, how should you frame your conclusions to the Board?',
    options: [
      'Based on our sensitivity analysis and available market telemetry, we recommend pursuing Strategy A under the assumption that cloud adoption continues at fifteen percent, with a built-in pivot threshold at month three if market conditions shift.',
      'I am guessing Strategy A because I have a lucky feeling.',
      'We cannot make any decisions until we have one hundred percent perfect data ten years from now.',
      'Whatever the competitor does, we should do the opposite.'
    ],
    correctAnswer: 0,
    explanation: 'Senior leaders frame recommendations with explicit underlying assumptions, sensitivity models, and predefined pivot triggers.'
  },
  {
    id: 18,
    topic: 'Interest-Based Negotiation (Principled Negotiation)',
    question: 'What is the fundamental difference between positional bargaining and principled (interest-based) negotiation?',
    options: [
      'Positional bargaining involves screaming, while principled negotiation involves whispering',
      'Positional bargaining locks parties into rigid demands, whereas principled negotiation uncovers the underlying motivations, needs, and mutual interests to create value',
      'There is no difference between the two',
      'Principled negotiation always results in zero agreement'
    ],
    correctAnswer: 1,
    explanation: 'Interest-based negotiation focuses on underlying needs (interests) rather than stubborn stances (positions), unlocking creative win-win solutions.'
  },
  {
    id: 19,
    topic: 'Storytelling: Explaining Lessons from Failure',
    question: 'When sharing a major project failure during a leadership symposium, what narrative focus establishes the highest degree of respect?',
    options: [
      'Blaming the junior engineers and marketing team for the failure',
      'Pretending that the failure was actually an intentional success',
      'Taking full personal ownership, analyzing the systemic root cause transparently, and detailing the architectural safeguards instituted to ensure it never happens again',
      'Saying that failure doesn\'t matter'
    ],
    correctAnswer: 2,
    explanation: 'Vulnerability, radical ownership, and institutionalizing systemic prevention turns past failures into inspiring leadership lessons.'
  },
  {
    id: 20,
    topic: 'Voice Control & Reducing Monotone Delivery',
    question: 'How can a speaker effectively utilize the "Pitch Staircase" during an important keynote announcement?',
    options: [
      'Maintain an unbroken robotic pitch throughout the speech',
      'Shout the first word and whisper the last word',
      'Close their eyes and hum into the microphone',
      'Step up pitch on the introductory premise, elevate pitch at the climax of the idea, and resolve downward on the concluding takeaway to signal certainty'
    ],
    correctAnswer: 3,
    explanation: 'The pitch staircase guides listener emotional attention naturally across premise, climax, and definitive resolution.'
  },
  {
    id: 21,
    topic: 'De-escalating High-Stakes Interpersonal Disputes',
    question: 'When two department heads are locked in an impasse, what phrasing best unlocks collaborative dialogue?',
    options: [
      'Let us step back from our tactical disagreements and align on our overarching shared metric: delivering a seamless experience for our enterprise customers. How can both our teams collaborate to hit that milestone?',
      'You are both fired if you don\'t agree right now.',
      'Let us vote on who is the better department head.',
      'I will decide everything and you both have to obey.'
    ],
    correctAnswer: 0,
    explanation: 'Reframing from tactical turf wars to north-star customer outcomes unifies conflicting stakeholders.'
  },
  {
    id: 22,
    topic: 'Executive Summaries & Elevator Pitches to Venture Capitalists',
    question: 'What are the 4 essential elements of a 60-second VC pitch?',
    options: [
      'Your childhood story, your favorite books, your hobbies, and your pet\'s name',
      'The Massive Market Problem, Your Proprietary Solution & Moat, Your Quantifiable Traction & Revenue Growth, and Your Strategic Capital Ask',
      'A list of 50 competitors with no mention of your product',
      'A philosophical poem about the future of technology'
    ],
    correctAnswer: 1,
    explanation: 'Investors evaluate Problem Size, Solution Moat, Traction Metrics, and Capital Efficiency in rapid-fire pitches.'
  },
  {
    id: 23,
    topic: 'Cross-Cultural Meeting Facilitation',
    question: 'When facilitating a global video conference with participants from Japan, Brazil, Germany, and the United States, how should you ensure balanced participation?',
    options: [
      'Allow only the loudest native English speakers to speak for the entire hour',
      'Conduct the meeting in complete silence via text chat only',
      'Circulate the agenda and pre-read materials 24 hours in advance, explicitly invite input from quiet participants by name with advance notice, and allow processing time after complex questions',
      'Mute all non-native English speakers'
    ],
    correctAnswer: 2,
    explanation: 'Pre-reads and structured, culturally sensitive facilitation create an equitable environment for international contributors.'
  },
  {
    id: 24,
    topic: 'Handling Public Scrutiny & Media Inquiries',
    question: 'What is the "Bridging Technique" used in media interviews and crisis press conferences?',
    options: [
      'Refusing to answer any questions and walking out',
      'Building physical bridges over rivers',
      'Repeating the reporter\'s negative words word-for-word',
      'Acknowledging the question, using a verbal bridge (e.g. "What is critical to focus on is..."), and steering directly to your core strategic message'
    ],
    correctAnswer: 3,
    explanation: 'Bridging transitions seamlessly from hostile or speculative premises to proactive, truthful core messages.'
  },
  {
    id: 25,
    topic: 'Executive Presence: Posture, Breath, and Gravitas',
    question: 'How does physiological breath support directly impact spoken vocal quality and executive presence?',
    options: [
      'Diaphragmatic breathing lowers heart rate, eliminates vocal tremors, enriches vocal resonance, and provides sustained breath support for authoritative phrasing',
      'Breathing shallowly from the chest makes you sound powerful',
      'Holding your breath during sentences improves pronunciation',
      'Breathing has no connection to vocal pitch or tone'
    ],
    correctAnswer: 0,
    explanation: 'Deep diaphragmatic breathing relaxes vocal cords, creating resonant, steady, and commanding acoustic tone.'
  },
  {
    id: 26,
    topic: 'Communicating Organizational Restructuring',
    question: 'When communicating a departmental restructuring or strategy pivot to an all-hands audience, what tone is essential?',
    options: [
      'Celebratory and insensitive to those impacted',
      'Empathetic, clear, transparent about the strategic rationale, accountable for the transition, and focused on support systems for the team',
      'Angry and blaming external market forces entirely',
      'Mysterious with no explanation of who is impacted'
    ],
    correctAnswer: 1,
    explanation: 'Authentic empathy, clear business rationale, and robust support systems maintain organizational morale during transitions.'
  },
  {
    id: 27,
    topic: 'High-Ticket Enterprise Sales Closing',
    question: 'Which closing question is most consultative and non-pressuring when concluding a $500k enterprise software evaluation?',
    options: [
      'Sign this right now or the price doubles tomorrow!',
      'Are you going to buy or are you wasting my time?',
      'Based on our successful pilot results and the $1.2M projected cost savings, what would be the most logical next step for your leadership committee to finalize the rollout timeline?',
      'I need this deal for my commission.'
    ],
    correctAnswer: 2,
    explanation: 'Consultative closing anchors to demonstrated value and invites the customer to define the operational rollout pathway.'
  },
  {
    id: 28,
    topic: 'Handling Defensiveness in Performance Reviews',
    question: 'When an employee becomes defensive during an executive performance review, what is the best verbal de-escalation?',
    options: [
      'Fire them immediately on the spot',
      'Argue louder until they admit they were wrong',
      'Ignore their comments and read the script',
      'I hear your frustration, and I appreciate your passion for this project. Let us pause and look at the objective outcome data together so we can co-create a concrete support plan for next quarter.'
    ],
    correctAnswer: 3,
    explanation: 'Validating emotional state while steering back to objective data and collaborative coaching restores productive dialogue.'
  },
  {
    id: 29,
    topic: 'Strategic Metaphor in Business Storytelling',
    question: 'Why do visionary leaders employ strategic metaphors (e.g. "We are building the digital nervous system for logistics") in keynotes?',
    options: [
      'Metaphors translate abstract, complex technical architectures into intuitive, memorable mental models that inspire action',
      'Metaphors confuse the audience and hide technical incompetence',
      'Metaphors make speeches 10 times longer',
      'Metaphors are only for children\'s books'
    ],
    correctAnswer: 0,
    explanation: 'Strategic metaphors create vivid mental models, accelerating audience comprehension and emotional investment.'
  },
  {
    id: 30,
    topic: 'Diplomatic Boundary Setting with VIP Clients',
    question: 'How should an account director verbally respond to an enterprise client requesting out-of-scope custom engineering work for free?',
    options: [
      'We love doing free work for you anytime!',
      'We would be delighted to engineer those custom integrations for your platform, and I can prepare a supplementary Statement of Work detailing the timeline and investment for that tier.',
      'That request is completely unreasonable, go away.',
      'We will do it secretly without telling our company.'
    ],
    correctAnswer: 1,
    explanation: 'Affirming enthusiasm for solving their problem while connecting new scope to formal commercial agreements protects business boundaries.'
  },
  {
    id: 31,
    topic: 'Advanced Intonation: Contrastive Emphasis',
    question: 'How does shifting vocal stress in the sentence "I did not say HE stole the credentials" change the fundamental spoken meaning?',
    options: [
      'It has no effect on meaning at all',
      'It turns the statement into French',
      'Stressing "HE" implies that someone stole the credentials, but it was someone other than the person named',
      'It makes the sentence completely unintelligible'
    ],
    correctAnswer: 2,
    explanation: 'Contrastive stress in English shifts the underlying semantic focus of the entire sentence.'
  },
  {
    id: 32,
    topic: 'Responsible Communication in AI & Data Ethics',
    question: 'When presenting AI model accuracy and limitations to hospital executives, what is the ethical standard of communication?',
    options: [
      'Claim the AI model is 100% flawless with zero error rate',
      'Hide all edge-case failures to guarantee contract signing',
      'Tell the hospital that doctors are no longer needed',
      'Clearly present both accuracy benchmarks and known confidence boundary limits, emphasizing that the AI functions as an assistive diagnostic copilot subject to physician oversight'
    ],
    correctAnswer: 3,
    explanation: 'Ethical leadership demands absolute transparency regarding model limitations, confidence intervals, and human-in-the-loop oversight.'
  },
  {
    id: 33,
    topic: 'Speaking Under Extreme Time Constraints',
    question: 'If an investor cuts your 15-minute pitch down to 3 minutes due to an emergency, what should you do?',
    options: [
      'Deliver the 3-minute executive version: State the Massive Market Pain, your Proven Traction Metric, your Unfair Technical Advantage, and the Core Ask',
      'Speak five times faster to cram all 40 slides into 3 minutes',
      'Complain bitterly and cancel the meeting',
      'Spend the entire 3 minutes introducing your personal resume'
    ],
    correctAnswer: 0,
    explanation: 'Pivoting gracefully to an ultra-condensed core value pitch demonstrates composure, agility, and executive readiness.'
  },
  {
    id: 34,
    topic: 'Building Team Psychological Safety',
    question: 'Which verbal prompt by an engineering director best fosters psychological safety during an incident post-mortem?',
    options: [
      'Who broke the build? Step forward and take the blame.',
      'Our goal today is not to assign personal blame, but to understand our systemic failure points and fortify our automated testing safeguards so this failure becomes impossible in the future.',
      'Whoever caused this outage will lose their bonus.',
      'Mistakes are unacceptable on this team.'
    ],
    correctAnswer: 1,
    explanation: 'Blameless post-mortem framing encourages transparent root-cause analysis and systemic error prevention.'
  },
  {
    id: 35,
    topic: 'Managing Audience Attention in Keynotes',
    question: 'What vocal technique re-engages audience attention when energy dips during a long presentation?',
    options: [
      'Scream suddenly into the microphone',
      'Jump up and down on the stage',
      'Use a dramatic, intentional 3-second pause, lower your pitch, and deliver your most critical takeaway with deliberate emphasis',
      'Read from the slide deck in a monotone whisper'
    ],
    correctAnswer: 2,
    explanation: 'Sudden silence (the dramatic pause) immediately breaks auditory monotony, pulling every eye and ear back to the speaker.'
  },
  {
    id: 36,
    topic: 'Executive Alignment: The "Disagree and Commit" Principle',
    question: 'What does the leadership phrase "Disagree and Commit" mean in executive decision making?',
    options: [
      'Agree publicly but sabotage the project privately',
      'Argue indefinitely until everyone gives up',
      'Never disagree with the highest-paid person in the room',
      'Debate vigorously and share candid concerns during the evaluation phase, but once a leadership decision is finalized, fully commit 100% of your energy to its successful execution'
    ],
    correctAnswer: 3,
    explanation: 'Disagree and Commit encourages fearless debate followed by unified, wholehearted execution.'
  },
  {
    id: 37,
    topic: 'Mastering the Executive Elevator Pitch',
    question: 'What is the ideal pacing and delivery cadence for high-impact executive speech?',
    options: [
      '130 to 150 words per minute with rhythmic phrasing, crisp diction, and deliberate pauses at clause transitions',
      '300 words per minute without breathing',
      '50 words per minute with 10-second pauses after every single word',
      'Speaking as quietly as possible so people must lean in'
    ],
    correctAnswer: 0,
    explanation: 'A measured 130-150 WPM cadence allows complex ideas to register while conveying composure and confidence.'
  },
  {
    id: 38,
    topic: 'Cross-Cultural Humor and Idioms',
    question: 'Why should speakers exercise caution when using regional idioms and sports metaphors (e.g. "touch base", "ballpark figure", "sticky wicket") with international audiences?',
    options: [
      'Sports metaphors make you sound athletic',
      'Regional idioms and sports analogies often fail to translate across cultures, causing confusion, alienation, or misinterpretation of business requirements',
      'Idioms are illegal in corporate meetings',
      'International audiences always prefer baseball metaphors'
    ],
    correctAnswer: 1,
    explanation: 'Idioms and localized metaphors create cognitive friction; plain, precise international English ensures universal clarity.'
  },
  {
    id: 39,
    topic: 'Authentic Leadership & Vulnerability',
    question: 'How can an executive leader demonstrate authentic vulnerability while maintaining organizational confidence?',
    options: [
      'Complain that they are incompetent and don\'t know how to run the company',
      'Pretend to be an invincible superhero with no emotions',
      'Acknowledge genuine market uncertainties honestly, express confidence in the team\'s collective expertise, and clearly outline the strategic plan to navigate forward',
      'Hide in their office and refuse to speak to employees'
    ],
    correctAnswer: 2,
    explanation: 'Authentic leadership pairs honest acknowledgment of challenges with resolute confidence in the team\'s capacity to overcome them.'
  },
  {
    id: 40,
    topic: 'The Ultimate Capstone: Mastery of Spoken English',
    question: 'What is the ultimate hallmark of a Master-level professional English speaker?',
    options: [
      'Having a flawless native accent and using 50-letter words',
      'Speaking without pausing for 2 hours',
      'The ability to communicate complex ideas clearly, adapt tone seamlessly to any audience, listen empathetically, inspire teams, and drive ethical, high-impact business outcomes',
      'Memorizing an entire English dictionary'
    ],
    correctAnswer: 3,
    explanation: 'True mastery is defined by purposeful clarity, contextual adaptability, active empathy, and persuasive, ethical leadership.'
  }
];

export const PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS: Task[] = [
  {
    id: 'pes-adv-01',
    orderIndex: 1,
    title: '27. Advanced Fluency and Natural Conversation',
    description: 'Master instantaneous speech formulation, discourse markers, conversational repair, paraphrasing, eliminating pauses, and thinking directly in English.',
    duration: '55 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Advanced fluency is the ability to construct, refine, and deliver nuanced thoughts spontaneously without translating from your native language, using discourse markers and paraphrasing techniques that keep conversation flowing effortlessly.',
      objectives: [
        'Eliminate conversational lag by training direct conceptual thinking in English',
        'Master verbal discourse markers for smooth idea bridging and topic shifting',
        'Execute seamless conversational self-correction and paraphrasing with poise',
        'Replace hesitation fillers with deliberate, authoritative silent pauses'
      ],
      sections: [
        {
          title: 'Spontaneous Thought Formulation & Conversational Repair',
          content: 'At the advanced level, you do not translate words; you translate intent into structured English phrase templates. When you need to refine a thought, use executive repair phrases: "To put that in another perspective...", "What that means in concrete terms is...", or "To refine that point..."',
          explanation: 'Contrastive markers like "Be that as it may", "Notwithstanding the initial friction", and "Conversely" allow you to weave complex arguments without stumbling.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Spontaneous Thought Refinement in High-Level Strategy',
              code: `CEO: "How will our generative AI tutoring engine handle hallucinations during advanced mathematics lessons?"\n\nChief AI Scientist (Dr. Maya): "That is a pivotal challenge. While large language models are inherently probabilistic, we have engineered a dual-layer symbolic verification pipeline. To put that in concrete terms: the generative model drafts the pedagogical explanation, but our deterministic mathematical solver verifies every algebraic proof before it reaches the student's screen. Consequently, we achieve pedagogical warmth without compromising mathematical precision."\n\nCEO: "Brilliant architectural distinction, Maya."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Smooth Conversational Pivot During Panel Debate',
              code: `Panel Moderator: "Some critics argue that remote-first culture degrades company innovation. What is your perspective, Liam?"\n\nVP of People (Liam): "Be that as it may in poorly structured organizations, the data from high-performing distributed engineering teams tells a markedly different story. When organizations substitute unstructured office proximity with deliberate asynchronous documentation, innovation actually accelerates. Conversely, forcing rigid co-location often optimizes for visible presence rather than high-leverage intellectual output."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Graceful Self-Correction in Financial Analysis',
              code: `CFO (Elena): "Our customer acquisition cost increased by fifteen percent this quarter—or rather, to state that more accurately, acquisition costs rose in paid display channels while our organic referral acquisition costs plummeted by thirty percent. Taken in aggregate, our blended CAC actually improved by six percent year-over-year."\n\nBoard Member: "Thank you for the precise clarification, Elena."`
            }
          ],
          commonMistakes: [
            'Panicking when you misstate a number or word instead of calmly self-correcting with "or rather, to state that more accurately...".',
            'Filling every pause with "uhm, like, you know, actually" which erodes executive presence.',
            'Translating idioms literally from your native language that make no sense to international peers.'
          ],
          proTip: 'Practice the \'Stream of Thought Drill\': Pick any random business object in your room and speak about its market value, manufacturing lifecycle, and future utility for 2 minutes without stopping.'
        }
      ],
      keyTakeaways: [
        'Think directly in conceptual English phrase blueprints rather than word-by-word native translation.',
        'Use graceful self-correction phrases: \'or rather, to put that more accurately...\'',
        'Replace vocal fillers with confident 1-2 second silent pauses.'
      ],
      practiceExercises: [
        {
          title: '2-Minute Spontaneous Fluency Sprint',
          instructions: 'Speak aloud for 2 minutes on the strategic trade-offs of microservices vs. monolithic architectures without using any verbal fillers (um, like, uh).'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Advanced Fluency & Self-Correction',
        question: 'Which spoken phrase demonstrates the most executive poise when refining an initial statement during a Board presentation?',
        options: [
          'To state that with greater precision, our revenue growth stabilized in Q2 while our gross margins expanded by four hundred basis points.',
          'Oops I made a mistake sorry everyone.',
          'Wait disregard what I just said, I don\'t know the numbers.',
          'My slide is wrong so don\'t look at it.'
        ],
        correctAnswer: 0,
        explanation: 'Option A refines the insight with composure and analytical precision without diminishing credibility.'
      }
    ]
  },
  {
    id: 'pes-adv-02',
    orderIndex: 2,
    title: '28. Executive and Leadership Communication',
    description: 'Master communication with C-suite executives, Board of Directors briefings, communicating strategic priorities, executive summaries (BLUF), and risk-reward framing.',
    duration: '60 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Communicating with senior executives and Board members requires an entirely different verbal register. Executives have scarce time and high responsibility; they demand the bottom line first, followed by strategic trade-offs and decision requests.',
      objectives: [
        'Apply the BLUF (Bottom Line Up Front) model for all executive briefings',
        'Frame complex technical and operational topics in terms of financial ROI, risk mitigation, and strategic growth',
        'Deliver concise Board-level status reports and resource requests with conviction',
        'Handle high-pressure executive interruptions and challenging questions with poise'
      ],
      sections: [
        {
          title: 'The Executive BLUF Architecture & Risk-Reward Framing',
          content: 'Traditional communication starts with background context and builds toward a conclusion. Executive communication inverts this: 1. Bottom Line / Decision Required (What do you need and why?), 2. Strategic Rationale & Financial Impact (What is the ROI or risk?), and 3. Execution Roadmap & Mitigations.',
          explanation: 'When speaking to the C-suite, quantify everything: Translate \'Our server is faster\' into \'This caching layer reduces server compute costs by $180,000 annually and improves checkout conversion by 2.4%.\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: C-Suite BLUF Briefing on Infrastructure Investment',
              code: `Engineering Director (Tariq): "Good morning CEO and Executive Committee. (BLUF) We are requesting a $250,000 capital allocation today to migrate our primary database to distributed Spanner nodes. (Business Rationale) Currently, our transaction latency peaks at 800ms during European market opens, putting $4.2M in quarterly recurring billing at risk of SLA penalties. (Impact & ROI) Migrating to distributed Spanner will compress latency to under 45ms globally, guarantee 99.999% uptime, and pay for itself within four months through reduced incident overhead. (Decision Request) With your authorization today, our team will execute the staging migration over the upcoming holiday weekend with zero planned user downtime."\n\nCEO: "Crisp, compelling, and data-backed. Authorization approved, Tariq."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Board of Directors Risk Briefing',
              code: `Board Chair: "Tariq, what is our biggest operational exposure heading into international expansion?"\n\nTariq: "Our single highest operational exposure is European GDPR data residency compliance across our legacy analytics pipelines. If unaddressed, this could expose the organization to regulatory fines of up to four percent of global turnover. To eliminate this risk, we have ring-fenced all EU telemetry in Frankfurt and engaged Ernst & Young for an independent audit concluding next month. We project full compliance certification well ahead of our Q1 European launch."\n\nBoard Chair: "Excellent risk containment strategy."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Handling a Skeptical C-Suite Interruption',
              code: `CFO: "Tariq, why didn't our team anticipate this database scaling threshold six months ago?"\n\nTariq: "That is a fair and important question, Marcus. Six months ago, our growth model projected twenty percent month-over-month account expansion; however, our enterprise customer acquisition tripled that rate following the enterprise tier launch. While this accelerated growth placed unexpected load on legacy tables, our proposed distributed architecture permanently decouples database capacity from user volume."\n\nCFO: "Understood. The context makes complete sense."`
            }
          ],
          commonMistakes: [
            'Burying the core ask on slide 25 after 40 minutes of technical background.',
            'Speaking in low-level technical jargon that C-suite executives cannot map to revenue, cost, or risk.',
            'Becoming defensive or arguing when an executive asks a pointed, challenging financial question.'
          ],
          proTip: 'In the first 30 seconds of an executive briefing, state: The Ask, The Reason, and The Financial Impact.'
        }
      ],
      keyTakeaways: [
        'Lead with BLUF: Bottom Line Up Front -> Business Rationale -> Financial Impact -> Decision Ask.',
        'Translate technical metrics into financial outcomes: revenue protected, costs curtailed, risk mitigated.',
        'Address tough leadership questions directly without deflection or defensiveness.'
      ],
      practiceExercises: [
        {
          title: '90-Second C-Suite BLUF Pitch Drill',
          instructions: 'Practice delivering a 90-second executive briefing requesting a $100k budget allocation for security automation, following the BLUF framework.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Executive Communication',
        question: 'What is the primary structure of an executive BLUF (Bottom Line Up Front) verbal briefing?',
        options: [
          'State the required decision/ask and business impact in the first 30 seconds, followed by supporting rationale and execution roadmap',
          'Read 50 slides of background code logs before revealing the problem',
          'Ask the CEO to guess what the project cost is',
          'Complain about how hard engineering is'
        ],
        correctAnswer: 0,
        explanation: 'Option A defines the executive standard: deliver the bottom-line request and impact immediately.'
      }
    ]
  },
  {
    id: 'pes-adv-03',
    orderIndex: 3,
    title: '29. Diplomatic and Sensitive Conversations',
    description: 'Master delivering bad news, high-stakes organizational feedback, setting boundaries with senior leaders, addressing mistakes, and navigating high-tension dialogues.',
    duration: '55 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Leadership is tested during moments of friction, bad news, and sensitive organizational pivots. Mastering diplomatic firmness preserves trust, psychological safety, and executive respect even during painful conversations.',
      objectives: [
        'Deliver bad news and organizational restructuring notices with empathy and clarity',
        'Set firm, professional boundaries with senior stakeholders without being confrontational',
        'Take transparent ownership of high-impact organizational mistakes and present remediation',
        'De-escalate high-tension executive standoffs through principled negotiation language'
      ],
      sections: [
        {
          title: 'The 4Rs Bad News Framework & Diplomatic Boundary Setting',
          content: 'When delivering critical bad news (such as missed contractual milestones or service termination), apply the 4Rs: 1. Regret (Empathy and respect), 2. Responsibility (Clear ownership), 3. Remedy (Immediate containment), and 4. Reform (Systemic permanent prevention).',
          explanation: 'When setting boundaries with senior executives, use the \'Capacity Trade-Off\' formula: Never say a flat \'No\'; instead say: \'We can certainly prioritize [New Task X]; however, to maintain quality, which of our current commitments [Y or Z] should we defer?\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Delivering a Contractual Delay to an Enterprise Client',
              code: `VP of Client Success (Julian): "Good afternoon Mr. Henderson. I requested this call today to share a direct update regarding our enterprise single-sign-on integration. (Regret & Responsibility) During our final security penetration testing yesterday, our compliance team identified a vulnerability in third-party SAML token parsing. We take security integrity with the utmost seriousness, and we cannot in good conscience deploy this build to your production environment today. (Remedy) We have assigned our senior cryptography squad to patch the parser, and we are conducting re-testing over the weekend. (Reform) We will deliver the certified build to your staging environment on Tuesday at 9:00 AM EST, along with an independent third-party audit report confirming compliance."\n\nMr. Henderson: "While I am disappointed by the delay, I deeply appreciate your honesty and uncompromising focus on our data security. Tuesday morning works."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Setting Capacity Boundaries with the CEO',
              code: `CEO: "Julian, I need your team to build a custom real-time analytics dashboard for our investor summit in ten days."\n\nJulian: "I understand the tremendous strategic value of impressing investors at the summit, Marcus. Currently, our entire squad is committed to finalizing the SOC 2 compliance audit due next Friday. If we pivot to building the custom dashboard, we will miss our SOC 2 submission deadline, which delays our $2M enterprise sales pipeline. If you would like us to prioritize the investor dashboard, I am happy to do so provided we formally defer the SOC 2 audit to next quarter. Would you like to make that trade-off?"\n\nCEO: "Good pushback. The SOC 2 audit takes precedence. Let's keep your team focused on compliance."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Addressing a High-Impact Mistake With Transparency',
              code: `Lead Architect (Priya): "Good morning Sarah. I want to brief you directly on an incident that occurred during last night's database indexing. (Ownership) Due to an unvalidated migration script that I authored and approved, our staging database was locked for two hours. (Remedy) I rolled back the transaction, restored the database from our automated snapshot, and verified zero data corruption. (Prevention) To ensure this cannot recur, I have implemented an automated dry-run validation gate in our CI/CD pipeline that prohibits any migration script from executing without dual peer review."\n\nSarah: "Thank you for the prompt, transparent briefing and the permanent safeguard, Priya."`
            }
          ],
          commonMistakes: [
            'Hiding bad news until the last possible minute, turning a manageable issue into a catastrophic crisis.',
            'Agreeing to unfeasible executive demands and burning out your team while missing every deadline.',
            'Blaming junior subordinates for mistakes that occurred under your executive oversight.'
          ],
          proTip: 'Bad news does not improve with age. Deliver bad news early, directly, with complete ownership and a concrete remediation plan.'
        }
      ],
      keyTakeaways: [
        'Deliver bad news using the 4Rs: Regret -> Responsibility -> Remedy -> Reform.',
        'Set boundaries through strategic trade-offs rather than emotional resistance.',
        'Own mistakes with radical transparency and implement systemic architectural prevention.'
      ],
      practiceExercises: [
        {
          title: 'Bad News Delivery Role-Play',
          instructions: 'Practice delivering a 2-minute spoken briefing to an enterprise client explaining a 5-day delivery delay due to security compliance re-testing.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Diplomatic Boundary Setting',
        question: 'What is the most effective and professional way for an engineering leader to set boundaries when a CEO requests an unfeasible last-minute feature?',
        options: [
          'Say yes immediately and force the team to work 100-hour weeks until they quit',
          'We can certainly prioritize this new feature, Marcus; however, doing so will require deferring our SOC 2 compliance milestone to next quarter. Which of these two strategic objectives takes precedence for the business?',
          'Tell the CEO that they have no understanding of technology',
          'Ignore the CEO\'s email completely'
        ],
        correctAnswer: 1,
        explanation: 'Option B reframes the boundary around objective business trade-offs, enabling leadership to make a conscious strategic choice.'
      }
    ]
  },
  {
    id: 'pes-adv-04',
    orderIndex: 4,
    title: '30. Advanced Presentation Skills',
    description: 'Master keynote presentations, rhetorical devices (tricolon, antithesis), executive storytelling, data rhetoric, managing hostile audiences, and memorable conclusions.',
    duration: '60 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Great leaders are masters of the stage. Whether speaking at an international tech conference, an investor demo day, or a corporate all-hands, commanding attention requires rhetorical mastery, vocal dynamics, and compelling storytelling.',
      objectives: [
        'Construct powerful keynote openings that establish narrative tension and urgency',
        'Employ classical rhetorical devices: Tricolon (Rule of 3), Antithesis, and Anaphora',
        'Transform complex data tables into emotionally resonant visual stories',
        'Command the room during high-pressure Q&A sessions and hostile interrogations'
      ],
      sections: [
        {
          title: 'Rhetorical Devices & Data Storytelling',
          content: 'Memorable speeches utilize rhetorical structures: 1. Tricolon (The Rule of Three: "We must build boldly, scale securely, and lead ethically"), 2. Antithesis (Contrasting opposites: "We are not merely writing code; we are transforming how humanity learns"), and 3. Anaphora (Repeating opening phrases for emotional resonance).',
          explanation: 'Never present raw data without the human story behind it. Instead of "Retention increased 14%", say: "That fourteen percent increase represents twenty thousand educators who now save four hours every single week."',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Keynote Opening at Global AI Summit',
              code: `Keynote Speaker (Dr. Aris): "Every single day, over one billion knowledge workers sit down in front of a screen, paralyzed by information overload, overwhelmed by fragmented data, and drained by repetitive manual tasks. (The Complication) For the past three decades, enterprise software promised productivity; yet today, professionals spend sixty percent of their working hours managing tools rather than creating value. (The Vision) At Skillora AI, we believe there is a better way. Today, I am proud to unveil our Autonomous Learning Agent—a platform designed not to replace human intellect, but to amplify human creativity, unlock human potential, and democratize world-class expertise for everyone, everywhere."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Data Rhetoric & The Human Impact Story',
              code: `Presenter (Carla): "Look closely at this inflection curve on slide nine. In January, our platform processed ten thousand tutoring sessions monthly. Today, that number exceeds two point five million. But behind that two hundred and fifty-fold surge lies something far more profound: over seventy thousand first-generation university students who previously could not afford private tutoring are now mastering advanced computer science with ninety-two percent pass rates. That is not just metric growth; that is generational upward mobility."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Neutralizing a Hostile Keynote Q&A Challenge',
              code: `Audience Skeptic: "Your AI agent sounds like an overhyped toy that will fail in real enterprise workflows!"\n\nSpeaker (Dr. Aris): "Thank you for raising that skepticism. In an industry flooded with unverified marketing claims, healthy skepticism is not only understandable—it is essential. Let us look past the hype and examine our audited third-party benchmark data from Fortune 500 deployments: across four hundred thousand live enterprise tasks, our deterministic verification engine achieved a 99.8% precision rate. I welcome you to join our live interactive workshop in Room 204 where you can test our raw code against your hardest edge cases."`
            }
          ],
          commonMistakes: [
            'Speaking in a flat, unvarying monotone that puts audiences to sleep regardless of how great the slides are.',
            'Overloading slides with dense paragraphs of text and reading them verbatim.',
            'Becoming visibly flustered or argumentative when an audience member challenges your thesis.'
          ],
          proTip: 'Practice the \'Vocal Staircase\': Step your pitch up on the premise, hit the climax on your key metric, and resolve downward on your punchline.'
        }
      ],
      keyTakeaways: [
        'Use rhetorical devices: Tricolon (Rule of 3), Antithesis, and Strategic Metaphors.',
        'Connect every data chart to human impact and business transformation.',
        'Embrace skeptic questions as opportunities to showcase verified benchmark rigor.'
      ],
      practiceExercises: [
        {
          title: 'Keynote 3-Minute Delivery Drill',
          instructions: 'Deliver a 3-minute keynote pitch on an innovative technology using the Rule of 3 (Tricolon), a data visualization story, and an inspiring call to action.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Rhetorical Devices in Speaking',
        question: 'Which of the following spoken statements utilizes the classical rhetorical device of \'Tricolon\' (The Rule of Three)?',
        options: [
          'We must innovate boldly, execute flawlessly, and lead responsibly.',
          'We should do software.',
          'Code is good and fast.',
          'Technology changes every single day.'
        ],
        correctAnswer: 0,
        explanation: 'Option A presents three balanced, parallel rhythmic clauses (\'innovate boldly, execute flawlessly, and lead responsibly\'), creating a powerful tricolon.'
      }
    ]
  },
  {
    id: 'pes-adv-05',
    orderIndex: 5,
    title: '31. Persuasive Business Speaking',
    description: 'Master Monroe\'s Motivated Sequence, psychological framing, value propositions, overcoming stakeholder skepticism, and driving decisive executive action.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Persuasion is not about manipulation; it is the art of aligning your proposal with the deeply felt needs, values, and strategic goals of your audience so that agreement becomes the natural, logical choice.',
      objectives: [
        'Execute Monroe\'s Motivated Sequence (Attention -> Need -> Satisfaction -> Visualization -> Action)',
        'Analyze executive stakeholder psychology and tailor arguments to individual motivations',
        'Overcome entrenched organizational skepticism and resistance to change',
        'Deliver compelling, unambiguous verbal calls to action'
      ],
      sections: [
        {
          title: 'Monroe\'s Motivated Sequence & The Psychology of Influence',
          content: 'Monroe\'s 5-Stage Sequence: 1. Attention (Hook), 2. Need (Demonstrate the burning operational pain), 3. Satisfaction (Present your solution as the definitive answer), 4. Visualization (Paint a vivid picture of future ROI vs. the cost of inaction), and 5. Action (State the exact next step).',
          explanation: 'The Cost of Inaction (COI): People are twice as motivated to avoid loss as they are to seek gains. Always articulate what the company loses every month by delaying your proposal.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Persuading the Executive Committee to Adopt AI Tooling',
              code: `Head of Developer Experience (Nate): "(Attention) Every month we delay standardizing our AI developer tooling, our engineering department bleeds $140,000 in lost engineering velocity. (Need) Currently, our four hundred engineers spend twelve hours weekly on boilerplate scaffolding, context switching, and manual unit test generation. (Satisfaction) By deploying an enterprise-tier AI coding copilot across all squads, we automate repetitive boilerplate and accelerate PR reviews by forty percent. (Visualization) Imagine shipping our core product roadmap six weeks ahead of schedule while eliminating developer burnout and attrition. Conversely, maintaining the status quo leaves our velocity stagnant while competitors out-deploy us. (Action) All we require today is approval for a ninety-day pilot across fifty engineers to measure definitive velocity gains."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Overcoming Security Compliance Skepticism',
              code: `VP of Security (Kylie): "I am concerned that an AI copilot will leak proprietary intellectual property to public models."\n\nNate: "That is an essential security boundary, Kylie. That is precisely why our evaluation strictly disqualifies any vendor that trains on customer telemetry. Our selected enterprise tier features zero data retention, SOC 2 Type II compliance, VPC isolation, and end-to-end telemetry encryption. We will not write a single line of code until your cybersecurity team conducts independent penetration audits."\n\nKylie: "With VPC isolation and zero data retention, that satisfies our security charter."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Closing with a Clear Call to Action',
              code: `Nate: "To recap: the business need is undeniable, the security safeguards are airtight, and the ROI is transformative. Our next step is simple: authorize our ninety-day pilot agreement today, and we will present our initial velocity audit to this committee on November fifteenth. May we proceed with the pilot authorization?"\n\nCommittee: "Motion approved. Let us launch the pilot."`
            }
          ],
          commonMistakes: [
            'Pitching product features (technical bells and whistles) instead of business outcomes and financial benefits.',
            'Failing to mention the Cost of Inaction (what happens if we do nothing).',
            'Ending a pitch vaguely with "Let me know what you think" instead of asking for a concrete decision.'
          ],
          proTip: 'Always calculate the Cost of Inaction: "Doing nothing costs our business $50,000 every single month."'
        }
      ],
      keyTakeaways: [
        'Structure pitches with Monroe\'s 5 stages: Attention -> Need -> Satisfaction -> Visualization -> Action.',
        'Emphasize the Cost of Inaction to overcome organizational inertia.',
        'Close with a direct, unambiguous decision request: \'May we have your authorization to begin?\'',
      ],
      practiceExercises: [
        {
          title: 'Monroe\'s Sequence Pitch Drill',
          instructions: 'Practice delivering a 2-minute pitch to your leadership team proposing an automated testing initiative using all 5 stages of Monroe\'s Motivated Sequence.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Persuasion Frameworks',
        question: 'What are the 5 sequential stages of Monroe\'s Motivated Sequence for persuasive speaking?',
        options: [
          'Attention, Need, Satisfaction, Visualization, Action',
          'Argument, Shouting, Demanding, Insulting, Leaving',
          'Introduction, Code, Database, Testing, Deployment',
          'Salary, Bonus, Benefits, Vacation, Retirement'
        ],
        correctAnswer: 0,
        explanation: 'Monroe\'s Motivated Sequence follows: Attention -> Need -> Satisfaction -> Visualization -> Action.'
      }
    ]
  },
  {
    id: 'pes-adv-06',
    orderIndex: 6,
    title: '32. Sales and Client Communication',
    description: 'Master consultative client discovery, diagnostic questioning, commercial objection handling, enterprise pricing defense, and closing high-ticket agreements.',
    duration: '55 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'High-ticket B2B sales communication is consultative, not transactional. Top enterprise sellers act as trusted strategic advisors who diagnose deep operational pain and guide clients toward transformative solutions.',
      objectives: [
        'Conduct diagnostic client discovery sessions using open-ended strategic questioning',
        'Present tailored enterprise solutions that map directly to executive business priorities',
        'Defend premium pricing by anchoring to quantifiable return on investment (ROI)',
        'Close multi-stakeholder commercial conversations with consultative confidence'
      ],
      sections: [
        {
          title: 'The Consultative Diagnostic Blueprint & Value Selling',
          content: 'Amateur salespeople pitch features immediately; elite consultants diagnose first: 1. Uncover Pain ("What is the bottleneck?"), 2. Quantify Impact ("What does that latency cost in annual revenue?"), 3. Explore Consequences of Delay ("What happens if this isn\'t solved before Q4?"), and 4. Prescribe Solution.',
          explanation: 'When clients object to price ("You are 20% more expensive than competitor X"), defend value: "Competitor X provides a basic hosting wrapper; our platform includes guaranteed 99.999% SLA, SOC 2 compliance, and dedicated engineering migration support, which prevents $500k in potential downtime."',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Strategic Diagnostic Discovery with Enterprise CTO',
              code: `Sales Director (Julian): "Good morning Mr. Sterling. In our preliminary research, we noticed your e-commerce division expanded into twenty-two countries last quarter. How is your current checkout infrastructure handling cross-border currency conversion latencies during peak shopping hours?"\n\nCTO (Mr. Sterling): "To be candid, our legacy database is struggling. We are seeing checkout timeouts of up to four seconds during peak European flash sales, which spikes cart abandonment to nearly twenty-eight percent."\n\nJulian: "I see. If that four-second latency is driving twenty-eight percent cart abandonment across twenty-two countries, what does that translate to in lost annualized gross merchandise value?"\n\nMr. Sterling: "Conservatively, between four and six million dollars in lost sales annually."\n\nJulian: "That is a massive revenue bleed. If our distributed edge checkout engine can compress that latency to under one hundred milliseconds globally and recover seventy percent of those abandoned carts, would that justify an enterprise infrastructure upgrade?"\n\nMr. Sterling: "Without question. Show me how your edge routing works."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Defending Premium Pricing Against Competitors',
              code: `Procurement Director: "Julian, your $200,000 annual licensing quote is fifty thousand dollars higher than CloudBase."\n\nJulian: "I appreciate you conducting thorough competitive benchmarking. While CloudBase offers a lower entry license, their tier excludes automated multi-region failover and dedicated twenty-four-seven solutions engineering support. In the event of a cloud outage, their mean time to recovery is four hours. At your transaction volume, four hours of downtime costs over $800,000 in lost sales. Our $200k investment includes sub-second automated failover, guaranteeing zero downtime and complete revenue protection. Does that risk-mitigation difference align with your reliability requirements?"\n\nProcurement Director: "When framed against downtime risk, your tier is clearly the safer business investment."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: The Consultative Executive Close',
              code: `Julian: "We have verified our technical integration, confirmed compliance with your cybersecurity team, and demonstrated an estimated $3.8M net revenue upside in year one. To meet your Black Friday deployment window, our engineering team needs to begin staging provisioning next Monday. What is the most logical step for your executive committee to execute our master service agreement before Friday?"\n\nCTO: "I will sign the authorization document today and introduce you to our legal counsel to finalize the paperwork."`
            }
          ],
          commonMistakes: [
            'Pitching product features before understanding the client\'s specific business challenges.',
            'Apologizing for high prices or offering instant discounts without defending value.',
            'Failing to quantify the financial cost of the client\'s current operational problem.'
          ],
          proTip: 'Always link the cost of your product to the client\'s cost of their problem: If their problem costs $5M, a $200k solution is an incredible bargain.'
        }
      ],
      keyTakeaways: [
        'Diagnose before prescribing: Problem -> Quantified Impact -> Value Prescription.',
        'Defend premium pricing by contrasting long-term ROI against competitive downtime risks.',
        'Close consultatively by asking for the logical next implementation step.'
      ],
      practiceExercises: [
        {
          title: 'Diagnostic Sales Discovery Role-Play',
          instructions: 'Practice leading a 3-minute consultative discovery conversation with an enterprise CTO to uncover and quantify the financial impact of server latency.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Consultative Selling',
        question: 'When an enterprise client objects that your software quote is $50,000 more expensive than a low-cost competitor, what is the best verbal defense?',
        options: [
          'Immediately cut your price by $50,000 without explanation',
          'Insult the competitor\'s software',
          'Anchor your price to the client\'s downtime risk: explain how your automated failover and 99.999% SLA prevents $800k in potential downtime losses that the cheaper alternative cannot guarantee',
          'Hang up on the customer'
        ],
        correctAnswer: 2,
        explanation: 'Option C defends value by contrasting the premium investment against the catastrophic business risks of the cheaper alternative.'
      }
    ]
  },
  {
    id: 'pes-adv-07',
    orderIndex: 7,
    title: '33. Advanced Negotiation Speaking',
    description: 'Master interest-based negotiation (Principled Negotiation), anchoring, concessions trading, conditional clauses, handling pressure tactics, and contract closing.',
    duration: '60 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'High-stakes negotiations are not battles of dominance; they are collaborative problem-solving exercises. Mastering principled negotiation frameworks allows you to protect long-term value, expand the pie, and forge enduring commercial alliances.',
      objectives: [
        'Execute Principled Negotiation: Separate people from the problem and focus on underlying interests',
        'Establish and defend authoritative verbal anchors in pricing and scope negotiations',
        'Neutralize high-pressure negotiation tactics (good cop/bad cop, take-it-or-leave-it, artificial deadlines)',
        'Trade concessions conditionally with precision: Never give value without receiving value'
      ],
      sections: [
        {
          title: 'Principled Negotiation & Neutralizing Pressure Tactics',
          content: 'Principled Negotiation (Harvard Negotiation Project) rests on 4 pillars: 1. Separate the people from the problem, 2. Focus on interests, not positions, 3. Invent options for mutual gain, and 4. Insist on using objective criteria.',
          explanation: 'When facing aggressive pressure tactics (e.g. "Take this price today or we walk"), do not react emotionally. Pause calmly and say: "I understand that budget constraints are paramount. However, we cannot compromise on system stability. Let us examine what scope adjustments would bring this project within your budget parameters."',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Interest-Based Multi-Term Negotiation',
              code: `Enterprise Buyer (Elena): "We love your platform, but our Board has strictly capped our software budget at $150,000 for this year, whereas your quote is $180,000."\n\nLead Negotiator (Julian): "I understand that meeting your Board's fiscal cap is a non-negotiable constraint, Elena. Our underlying interest is ensuring our engineering team has the resources to provide dedicated onboarding and white-glove migration. What if we structure a multi-year agreement where Year 1 is billed at $150,000 to meet your Board cap, and Year 2 is adjusted to $210,000, while we include priority SLA support at no extra charge?"\n\nElena: "That solves our Year 1 budget cap while securing our long-term support. That is a brilliant solution. I will take this to the Board."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Neutralizing a "Take-It-Or-Leave-It" Pressure Tactic',
              code: `Aggressive Negotiator: "Our offer is $100,000 flat. Take it or leave it, and we need an answer by 5 PM today."\n\nJulian: "I respect that your team has tight timeline mandates. However, our organization makes decisions based on project success and delivery excellence rather than artificial deadlines. At $100,000, we cannot provide the level of infrastructure security your enterprise requires. If $100,000 is your hard ceiling, we can deliver the core data pipeline while deferring the real-time reporting module. Shall we explore that scope configuration, or would you prefer to revisit this in Q2 when additional budget is allocated?"\n\nAggressive Negotiator: "Let's look at the scope adjustment. We still want to launch this quarter."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Formal Contractual Verbal Confirmation',
              code: `Julian: "To ensure complete mutual alignment before our legal counsels draft the definitive Master Service Agreement: We have agreed on a 3-year enterprise commitment with Year 1 at $150k, Year 2 at $210k, and Year 3 at $210k, with 24/7 dedicated engineering SLA support and an October first deployment kick-off. Does this accurately reflect our mutual understanding?"\n\nElena: "Yes, that captures our terms with absolute precision."`
            }
          ],
          commonMistakes: [
            'Treating the other party as an adversary rather than a collaborative problem-solving partner.',
            'Accepting an ultimatum out of fear instead of calmly reframing around objective criteria and scope.',
            'Making concessions without attaching conditional requirements ("If you can... then we will...").'
          ],
          proTip: 'Silence is your most potent negotiation asset. After making a well-anchored proposal, stop speaking completely. The first person who speaks usually makes the next concession.'
        }
      ],
      keyTakeaways: [
        'Apply Principled Negotiation: Focus on underlying interests, not stubborn positions.',
        'Neutralize ultimatums with calm composure: Reframe around objective scope and timelines.',
        'Always trade value conditionally: \'If you commit to [X], we can agree to [Y].\''
      ],
      practiceExercises: [
        {
          title: 'High-Stakes Negotiation Simulation Drill',
          instructions: 'Practice negotiating a contract dispute where the client issues a "take-it-or-leave-it" price cut, neutralizing the pressure and offering a structured multi-year alternative.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Principled Negotiation',
        question: 'What is the core philosophy of principled (interest-based) negotiation as established by the Harvard Negotiation Project?',
        options: [
          'Separate the people from the problem, focus on underlying interests rather than rigid positions, and invent options for mutual win-win gain',
          'Deceive the other party until they surrender all profits',
          'Scream insults until the opposing party agrees to your demands',
          'Always accept whatever the client demands without question'
        ],
        correctAnswer: 0,
        explanation: 'Principled negotiation separates people from problems, explores shared interests, and generates creative mutual gain.'
      }
    ]
  },
  {
    id: 'pes-adv-08',
    orderIndex: 8,
    title: '34. Cross-Cultural Professional Communication',
    description: 'Master global intercultural communication: high vs. low context, direct vs. indirect feedback, saving face, hierarchical vs. egalitarian leadership, and global collaboration.',
    duration: '55 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'In a globalized economy, professional success requires navigating cross-cultural communication nuances. Understanding high vs. low context cultures, indirect communication styles, and hierarchy dynamics enables frictionless global collaboration.',
      objectives: [
        'Navigate high-context (indirect, relational) versus low-context (direct, explicit) communication styles',
        'Deliver feedback and critique across cultures while preserving psychological safety and saving face',
        'Facilitate international multi-time-zone virtual meetings with cultural empathy',
        'Avoid localized idioms, sports jargon, and cultural assumptions in global business'
      ],
      sections: [
        {
          title: 'Cultural Communication Dimensions & The Global Register',
          content: 'Low-context cultures (US, Germany, Netherlands) value direct, explicit clarity: "Yes" means yes, "No" means no. High-context cultures (Japan, South Korea, Middle East, Latin America) value relational harmony, subtle contextual cues, and saving face: Direct disagreement in public is considered deeply offensive.',
          explanation: 'In high-context cultures, a phrase like "That might be slightly difficult" usually means "No, that is impossible." A culturally intelligent leader listens for the subtle hesitation rather than forcing an uncomfortable public confrontation.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Cross-Cultural Meeting with Japanese Partners (High-Context)',
              code: `US Product Lead (Dan): "Can we launch the Tokyo deployment next Friday, Tanaka-san?"\n\nTokyo Director (Tanaka-san): "Ah... next Friday... that timeline may present certain internal operational challenges regarding server verification..."\n\nDan (Culturally Intelligent): "I completely understand, Tanaka-san. It sounds like next Friday would place unnecessary risk on quality verification. Would our team recommending a two-week buffer to allow your team thorough validation be a more supportive approach?"\n\nTanaka-san: "Yes, thank you very much Dan-san. That buffer would be extremely appreciated and ensure flawless quality."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Direct Feedback Calibration with Dutch & German Colleagues (Low-Context)',
              code: `German Lead Engineer (Hans): "Dan, this database indexing schema has three major performance flaws in lines 40 to 60 that will cause bottleneck latencies."\n\nDan: "Thank you for the direct technical review, Hans. Let us walk through lines 40 to 60 right now so we can refactor those queries immediately."\n\nHans: "Excellent. Let us optimize the join predicates."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Global All-Hands Cultural Inclusivity',
              code: `Facilitator (Leila): "Good morning, good afternoon, and good evening everyone across our San Francisco, London, Singapore, and Tokyo offices. To ensure our discussion is inclusive for all team members, we have shared our agenda slides in advance. After each section, we will pause for ninety seconds to allow everyone time to review notes and submit questions via both voice and chat."`
            }
          ],
          commonMistakes: [
            'Using localized American baseball idioms like "ballpark figure", "touch base", or "grand slam" with international teams who have no context.',
            'Directly criticizing an international colleague in front of their superiors in high-context cultures, causing catastrophic loss of face.',
            'Interpreting a colleague\'s quiet, respectful listening posture as a lack of technical knowledge or disengagement.'
          ],
          proTip: 'When collaborating globally, use International Business English: Plain, clear, precise language free from slang, idioms, and cultural colloquialisms.'
        }
      ],
      keyTakeaways: [
        'Adapt to cultural contexts: High-context requires diplomatic subtlety; low-context values direct explicitness.',
        'Never cause colleagues to lose face in public meetings.',
        'Use International Business English: Eliminate regional idioms and sports metaphors.'
      ],
      practiceExercises: [
        {
          title: 'Cross-Cultural Communication Calibration Drill',
          instructions: 'Practice delivering the same project delay update in two distinct styles: 1. Direct Low-Context (German/Dutch style), and 2. Diplomatic High-Context (Japanese/East Asian style).'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Cross-Cultural Communication',
        question: 'When collaborating with international partners from high-context cultures (such as Japan or South Korea), how should you interpret the response: "That timeline may present certain challenges"?',
        options: [
          'It means they will easily finish the project tomorrow with zero problems',
          'It is a polite, indirect diplomatic signal that the timeline is unfeasible and requires adjustment to save face and preserve harmony',
          'It means they are angry and quitting the project',
          'It means they want a hundred percent price discount'
        ],
        correctAnswer: 1,
        explanation: 'In high-context cultures, subtle hesitation phrases are polite, diplomatic ways of signaling that a request is unfeasible without causing embarrassment.'
      }
    ]
  },
  {
    id: 'pes-adv-09',
    orderIndex: 9,
    title: '35. Conflict Resolution and Difficult Conversations',
    description: 'Master interpersonal conflict de-escalation, active empathy, interest alignment, separating facts from emotions, and conducting restorative workplace dialogues.',
    duration: '55 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Workplace conflict is inevitable; destructive conflict is optional. High-performing leaders view conflict as an opportunity to uncover systemic flaws, deepen mutual understanding, and forge stronger alignment.',
      objectives: [
        'De-escalate emotionally charged interpersonal workplace conflicts with composed neutral language',
        'Apply the \'Observation vs. Interpretation\' technique to eliminate blame',
        'Facilitate restorative mediation sessions between conflicting team members',
        'Create concrete shared commitments and accountability frameworks following dispute resolution'
      ],
      sections: [
        {
          title: 'The 5-Step Restorative Conflict Resolution Framework',
          content: 'When mediating or participating in workplace conflict, follow the 5 steps: 1. Cool Down & Establish Safety, 2. State Objective Facts (Observations without judgment), 3. Validate Perspectives (Active Empathy), 4. Align on Shared North-Star Goals, and 5. Co-create Forward-Looking Action Protocols.',
          explanation: 'Use \'I\' statements rather than \'You\' accusations: Instead of \'You always drop the ball on QA testing,\' say: \'When builds are pushed to staging without automated test logs, I feel anxious about production stability because our team is accountable for customer uptime.\'',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Mediating a Feud Between Lead Developer & Product Manager',
              code: `Mediator (VP of Tech - Brenda): "Thank you both for sitting down with me today. It is clear that both of you care deeply about the success of Project Apollo. (Safety & Grounding) Let us step back from personal frustrations and focus on our shared goal: delivering a world-class, stable platform to our enterprise users. Mateo, could you share your technical concerns regarding the release date without interruption?"\n\nMateo (Dev Lead): "When five new user stories were added three days before code freeze, our engineering squad did not have sufficient time for regression testing, which caused high anxiety."\n\nBrenda: "Thank you Mateo. Kylie, from a product and customer perspective, could you share the context behind those additions?"\n\nKylie (PM): "Our two largest enterprise pilots explicitly required those features for their Q3 contract renewals. I should have communicated that dependency much earlier to the engineering squad."\n\nBrenda: "Now that we understand both the customer urgency and the engineering stability constraints, how can we establish a locked scope protocol for future sprint freezes?"`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Direct 1-on-1 Peer Conflict De-escalation',
              code: `Engineer A (Leo): "Fatima, I felt frustrated during yesterday's standup when my architecture proposal was dismissed before I could present the load testing data."\n\nEngineer B (Fatima): "I appreciate you bringing this to me directly, Leo. In yesterday's meeting, I was under intense pressure regarding our server costs, but that does not excuse cutting you off. I want to hear your load testing data. Could we grab coffee and review your benchmark slides together?"\n\nLeo: "Thank you Fatima, I really appreciate that. Let's review it this afternoon."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Formal Agreement on Shared Working Norms',
              code: `Brenda: "To confirm our agreed working protocol moving forward: Kylie will freeze all sprint scope 7 days prior to release, and any emergency customer additions will require mutual sign-off from both Kylie and Mateo with a corresponding scope swap. Does that protocol give both teams confidence?"\n\nMateo & Kylie: "Yes, that creates total transparency and stability."`
            }
          ],
          commonMistakes: [
            'Using absolute words like "You ALWAYS do this" or "You NEVER listen", which instantly triggers fierce defensiveness.',
            'Triangulating and gossiping with third-party colleagues instead of addressing the person directly.',
            'Leaving a conflict unresolved and allowing resentment to poison team culture.'
          ],
          proTip: 'Remember: In conflict, focus on the problem, not the person. Treat the other person as your collaborative partner in solving a shared operational challenge.'
        }
      ],
      keyTakeaways: [
        'Use the 5-step framework: Establish Safety -> State Facts -> Validate Feelings -> Align Goals -> Agree on Protocols.',
        'Use objective \'I\' statements instead of accusatory \'You\' attacks.',
        'Address conflicts early and directly before resentment metastasizes.'
      ],
      practiceExercises: [
        {
          title: 'Conflict De-escalation Role-Play',
          instructions: 'Practice de-escalating an interpersonal confrontation with a colleague who accused you of taking credit for their work, applying active listening and objective fact-finding.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Conflict Resolution',
        question: 'When resolving an interpersonal workplace dispute, which communication approach is most effective at de-escalating hostility?',
        options: [
          'Scream louder to assert dominance over the other person',
          'Use absolute words like "You always make mistakes and you never listen"',
          'State objective observations using "I" statements, validate the other party\'s perspective, align on shared business goals, and co-create forward-looking working protocols',
          'Send anonymous complaints to HR'
        ],
        correctAnswer: 2,
        explanation: 'Option C uses objective observations, emotional validation, shared goal alignment, and collaborative protocol co-creation.'
      }
    ]
  },
  {
    id: 'pes-adv-10',
    orderIndex: 10,
    title: '36. Advanced Telephone and Video Meetings',
    description: 'Lead high-stakes virtual town halls, global multi-region video summits, handle live technical catastrophes, and facilitate hybrid team alignment.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Executive leadership in distributed, global organizations requires mastery of digital presence. Leading multi-hundred-person virtual town halls, managing interactive video summits, and keeping remote audiences engaged demands exceptional vocal and technical orchestration.',
      objectives: [
        'Lead and orchestrate high-stakes global virtual all-hands meetings and webinars',
        'Manage live multi-speaker virtual transitions, spotlighting, and interactive chat moderation',
        'Recover with flawless executive composure from live broadcast technical crashes',
        'Synthesize live unscripted audience questions transparently during executive AMAs'
      ],
      sections: [
        {
          title: 'Virtual Town Hall Orchestration & Live Crisis Recovery',
          content: 'A high-impact virtual all-hands features tight pacing, visual dynamism, and interactive engagement. When technical failures occur (e.g. presenter slides crash or audio drops), an executive commander never panics; they narrate the bridge with calm humor and seamlessly transition to backup channels.',
          explanation: 'When hosting an Ask-Me-Anything (AMA) session, group incoming audience questions thematically: "We have several questions in the chat regarding our Q4 hiring roadmap. Let me address our headcount strategy holistically..."',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Global All-Hands Virtual Opening & Tone Setting',
              code: `Host / VP (Maya): "Good morning San Francisco, good afternoon London, and good evening Singapore and Tokyo! Welcome to our Q3 Global All-Hands. Today we are celebrating monumental team milestones, sharing our 2027 strategic vision, and hosting an open live AMA. Throughout our presentation, please submit your questions in the Slido panel—our leadership team will answer the top upvoted questions live during the second half of our hour. Let us kick off with our product transformation highlights!"`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Composed Recovery from Live Broadcast Crash',
              code: `Presenter (David): "...and so our new payment engine... [Slide deck crashes and screen turns black]"\n\nHost (Maya): "Looks like our presentation software decided to take an unscheduled coffee break! While David reloads the deck, let me share the headline metric: our payment engine processed forty million dollars in transactions during beta testing with zero downtime. David, are we back online?"\n\nDavid: "Back online with slides loaded! Thank you for the smooth cover, Maya."\n\nMaya: "The stage is yours!"`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Facilitating a Transparent Executive AMA Session',
              code: `Host (Maya): "We have an upvoted question from our engineering team in London: 'How will our AI automation initiatives impact engineering headcount next year?' CEO Marcus, over to you."\n\nCEO (Marcus): "I appreciate the transparency of that question. Let me be unambiguous: AI automation is not designed to reduce engineering headcount; it is designed to eliminate mundane toil so our existing engineering talent can build higher-value, innovative platforms. In fact, our Q1 hiring plan allocates twenty new senior engineering roles to accelerate our AI platform roadmap."`
            }
          ],
          commonMistakes: [
            'Allowing dead silence for 3 minutes when a technical glitch occurs instead of actively engaging the audience.',
            'Ignoring tough, upvoted employee questions during town halls, which destroys trust in leadership.',
            'Talking for 60 minutes in a monotone drone without any visual transitions or audience interaction.'
          ],
          proTip: 'Always have a "Co-Pilot" in virtual town halls: One leader speaks while the other manages the chat, monitors technical feeds, and queues upvoted questions.'
        }
      ],
      keyTakeaways: [
        'Orchestrate virtual town halls with high energy, multi-region inclusivity, and interactive polls.',
        'Maintain absolute composure during technical crashes; bridge gaps with verbal narrative.',
        'Address tough, unscripted employee questions with radical transparency.'
      ],
      practiceExercises: [
        {
          title: 'Virtual Town Hall Simulation Drill',
          instructions: 'Practice hosting the opening 2 minutes of a global virtual all-hands meeting, recovering from a simulated slide crash, and answering an unscripted audience question.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Virtual Meeting Leadership',
        question: 'When a slide deck crashes during a live virtual all-hands broadcast, what is the best executive response by the meeting host?',
        options: [
          'Scream in panic and end the Zoom call immediately',
          'Remain silent for ten minutes while looking terrified',
          'Blame the IT department loudly on the live microphone',
          'Maintain complete composure, keep the audience engaged with a light bridging remark, summarize the key metric verbally while the deck reloads, and smoothly hand back control'
        ],
        correctAnswer: 3,
        explanation: 'Option D maintains poise, prevents dead air, and preserves professional executive presence during unexpected technical disruptions.'
      }
    ]
  },
  {
    id: 'pes-adv-11',
    orderIndex: 11,
    title: '37. Storytelling for Professional Communication',
    description: 'Master business storytelling frameworks, the hero\'s journey in tech, case study narratives, lessons from failure, and inspiring teams through purposeful narratives.',
    duration: '55 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Data informs, but stories inspire and move humans to action. Visionary leaders use strategic storytelling to illustrate abstract ideas, rally teams behind ambitious missions, and transmit corporate culture.',
      objectives: [
        'Master the 4-part Business Storytelling Arc (Hook, Challenge, Turning Point, Transformation)',
        'Translate complex technical case studies into emotionally resonant human narratives',
        'Share authentic stories of failure and lessons learned to build trust and psychological safety',
        'Use strategic metaphors to simplify intricate system architectures for diverse audiences'
      ],
      sections: [
        {
          title: 'The Narrative Arc of Business Transformation',
          content: 'Every great business story follows a classic arc: 1. The Normal World (Context), 2. The Inciting Disruption / Challenge (The Obstacle), 3. The Climax / Turning Point (The Strategic Decision & Innovation), and 4. The New Reality & Transformation (Quantifiable Impact & Lessons Learned).',
          explanation: 'When sharing a turnaround story, do not make yourself the lone hero. Make your team, client, or user the hero of the story, with your strategy acting as the empowering catalyst.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Inspiring an Engineering Team Before a Major Pivot',
              code: `VP of Engineering (Tariq): "Three years ago, our company was thirty days away from running out of capital. Our monolithic platform crashed every Friday, and our largest client threatened to walk away. (The Turning Point) In that dark room, our four founding engineers decided to bet everything on rewriting our database engine from scratch in seventy-two sleepless hours. That sprint didn't just save our company—it laid the foundation for the resilient platform that now serves fifty million users daily. Today, as we face our migration to real-time AI, we stand at a similar crossroads. I have seen what this team is capable of when we unite behind a shared mission. Let us build the future once again."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Executive Case Study Storytelling for Clients',
              code: `Consultant (Aaliyah): "Let me share the story of Horizon Healthcare. When they approached us, their clinical staff was spending four hours every evening manually entering patient records into legacy mainframe software. Doctors were burning out, and patient wait times exceeded three weeks. (The Solution) We deployed our voice-first clinical documentation copilot directly into their examination rooms. (The Transformation) Six months later, doctor documentation time dropped from four hours to twelve minutes daily, clinician satisfaction reached ninety-four percent, and Horizon expanded patient access by forty percent. That is the transformative power of human-centered AI."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Sharing Lessons from a High-Impact Technical Failure',
              code: `Director (Omar): "Early in my career, I deployed an untested database indexing script on a Friday afternoon that took down our entire billing cluster for eight hours. It was the most humiliating day of my professional life. But our CTO didn't fire me. He sat down with me, walked through the logs, and helped me build our very first automated staging validation pipeline. That painful failure taught me that true engineering excellence is not about demanding individual perfection; it is about building resilient systems that make failure impossible. That is the culture of psychological safety we foster here today."`
            }
          ],
          commonMistakes: [
            'Telling rambling stories that take 15 minutes and have no clear business point or moral.',
            'Portraying yourself as an invincible superhero who never makes mistakes.',
            'Using overly dramatic or fictionalized stories that lack authentic grounded truth.'
          ],
          proTip: 'Keep business stories strictly under 2-3 minutes. Ensure every story has a crystal-clear business takeaway.'
        }
      ],
      keyTakeaways: [
        'Structure business stories: Hook -> Challenge -> Strategic Pivot -> Measurable Transformation.',
        'Make the user, client, or team the hero of the narrative.',
        'Use vulnerability and failure stories to build deep organizational trust.'
      ],
      practiceExercises: [
        {
          title: '3-Minute Business Storytelling Drill',
          instructions: 'Practice delivering a 3-minute business narrative about a past project challenge, detailing the initial crisis, the turning point, and the quantifiable transformation.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Business Storytelling',
        question: 'What are the 4 core components of a high-impact business storytelling narrative arc?',
        options: [
          'The Hook, The Challenge/Complication, The Strategic Turning Point, and The Measurable Transformation/Lesson',
          'A list of 100 random code functions',
          'Complaining about previous employers for 30 minutes',
          'Reading a dictionary definition aloud'
        ],
        correctAnswer: 0,
        explanation: 'Option A outlines the universal 4-part narrative arc that makes business storytelling compelling, structured, and memorable.'
      }
    ]
  },
  {
    id: 'pes-adv-12',
    orderIndex: 12,
    title: '38. Pronunciation, Intonation, and Speaking Confidence',
    description: 'Master advanced prosody, contrastive stress, intonation contours, pitch variation, pausing rhetoric, and commanding vocal authority.',
    duration: '55 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Executive presence is conveyed through the acoustic mechanics of your voice. Mastering contrastive sentence stress, intonation contours, diaphragmatic projection, and intentional pausing transforms your verbal impact from competent to commanding.',
      objectives: [
        'Master contrastive stress to shift semantic meaning dynamically in high-stakes statements',
        'Eliminate unintentional uptalk (rising intonation on factual statements) to project certainty',
        'Employ the Pitch Staircase (step up on premise, climax, resolve down) for authoritative delivery',
        'Harness the dramatic power of the 3-second strategic pause in keynotes and negotiations'
      ],
      sections: [
        {
          title: 'Contrastive Stress, Intonation Contours & Pitch Mastery',
          content: 'In English, where you place vocal stress fundamentally changes the sentence meaning: 1. "WE didn\'t approve this budget" (Someone else did), 2. "We DIDN\'T approve this budget" (Denial of approval), 3. "We didn\'t approve THIS budget" (We approved a different one), 4. "We didn\'t approve this BUDGET" (We approved something else).',
          explanation: 'Authoritative speakers use falling intonation contours (↘) at the end of declarative assertions, conveying certainty, finality, and executive gravitas.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Applying Contrastive Stress in Strategy Alignment',
              code: `Director: "Did the marketing team reject our security proposal?"\n\nLead Architect (Lina): "No. Marketing didn't REJECT the proposal (↘); they requested a TWO-WEEK DELAY (↗) to align the UI assets (↘). Our core architecture remains ONE HUNDRED PERCENT APPROVED (↘)."\n\nDirector: "Ah, that is a critical distinction. Thank you Lina."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Eliminating Uptalk to Project Executive Gravitas',
              code: `Junior Analyst (With Uptalk ↗): "Our revenue grew by twelve percent? And we project positive cash flow in Q4?" (Sounds uncertain and seeking validation)\n\nExecutive Speaker (Grounded Cadence ↘): "Our revenue grew by twelve percent (↘). We project positive cash flow in Q4 (↘). Our balance sheet is exceptionally strong (↘)." (Commands instant authority and trust)`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: The Dramatic 3-Second Pause in a Keynote Climax',
              code: `Keynote Speaker: "If we continue down our current path of fragmented legacy tooling, our engineering efficiency will degrade by twenty percent annually... [Deliberate 3-second silent pause, steady eye contact] ... But if we commit to our unified AI architecture today, we unlock forty million dollars in new enterprise value by Q4."`
            }
          ],
          commonMistakes: [
            'Ending statements with a rising intonation (uptalk) that makes authoritative facts sound like timid questions.',
            'Speaking without pauses, creating auditory exhaustion for listeners.',
            'Monotone delivery that fails to emphasize critical contrastive distinctions.'
          ],
          proTip: 'Record yourself speaking 3 factual sentences. Ensure your vocal pitch steps DOWN firmly on the final stressed syllable of each sentence.'
        }
      ],
      keyTakeaways: [
        'Use contrastive stress to highlight exact semantic distinctions in complex debates.',
        'Use grounded falling intonation (↘) on assertions to project executive certainty.',
        'Utilize strategic 2-3 second silent pauses before and after delivering your most critical insights.'
      ],
      practiceExercises: [
        {
          title: 'Contrastive Stress & Falling Intonation Read-Aloud',
          instructions: 'Read aloud 5 business statements emphasizing different words to shift semantic meaning, ensuring all sentences end with definitive falling intonation.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Executive Intonation',
        question: 'What intonation contour should an executive speaker use at the end of a declarative statement to project certainty and gravitas?',
        options: [
          'A rising question intonation (uptalk ↗)',
          'A grounded falling intonation (↘) resolving on the final stressed syllable',
          'A high-pitched squeak',
          'A monotonic unbroken drone with zero inflection'
        ],
        correctAnswer: 1,
        explanation: 'Option B represents the standard executive prosody: grounded falling intonation conveys certainty, authority, and finality.'
      }
    ]
  },
  {
    id: 'pes-adv-13',
    orderIndex: 13,
    title: '39. Professional Speaking Ethics and Responsibility',
    description: 'Master ethical corporate communication, handling sensitive data disclosure, avoiding deceptive language, inclusive communication, and crisis accountability.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Words carry immense power. At the executive level, what you say can move stock prices, impact careers, and shape public trust. Ethical communication is the bedrock of enduring professional credibility and institutional honor.',
      objectives: [
        'Uphold uncompromising standards of honesty, confidentiality, and accuracy in all public statements',
        'Avoid deceptive, misleading, or exaggerated claims when communicating technical capabilities',
        'Use inclusive, respectful language that values diverse global teams',
        'Maintain ethical accountability and radical transparency during corporate crises'
      ],
      sections: [
        {
          title: 'The Ethical Communication Charter & Crisis Accountability',
          content: 'Ethical leadership communication adheres to 4 principles: 1. Veracity (Uncompromising truthfulness), 2. Transparency (Disclosing relevant context and limitations), 3. Confidentiality (Safeguarding proprietary data and privacy), and 4. Inclusivity (Respectful, unbiased language for all backgrounds).',
          explanation: 'When communicating AI capabilities or software performance, never exaggerate: State verified benchmark numbers, acknowledge confidence boundary limits, and emphasize human oversight.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Dialogue 1: Transparent Technical Capability Disclosure to Enterprise Client',
              code: `Client Exec: "Can your AI agent guarantee one hundred percent zero-error automated invoice reconciliation?"\n\nAI Solutions Director (Maya): "In automated enterprise finance, no algorithm can responsibly claim a one hundred percent zero-error rate without human oversight. In our independent SOC 2 audited benchmarks, our engine achieves 99.4% precision on standard invoices. For the remaining 0.6% of low-confidence edge cases, our system automatically routes the transaction to your human finance team for review. This human-in-the-loop architecture guarantees complete financial compliance without risk."\n\nClient Exec: "Thank you for the absolute honesty, Maya. We trust your solution far more than vendors who make impossible promises."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 2: Ethical Whistleblowing & Security Escalation to Leadership',
              code: `Security Engineer (Samir): "Dr. Aris, during my vulnerability assessment of our upcoming release, I discovered that user location data is temporarily stored unencrypted in local caching logs. I know our marketing launch is scheduled for tomorrow, but deploying this violates our published privacy policy and user trust. I strongly recommend delaying launch by forty-eight hours to remediate the cache encryption."\n\nDr. Aris: "You made the exact right ethical call, Samir. User trust is our most sacred asset. I am announcing the 48-hour delay right now."`
            },
            {
              language: 'markdown',
              title: 'Dialogue 3: Fostering Inclusive Communication in Cross-Functional Leadership',
              code: `VP of People (Elena): "As we expand our engineering hubs across Latin America, Europe, and Asia, our leadership language must actively reflect inclusive values. Let us ensure all company-wide communications avoid gendered assumptions, regional slang, and exclusionary jargon, creating an environment where every single contributor feels respected and empowered to thrive."`
            }
          ],
          commonMistakes: [
            'Making exaggerated marketing claims that engineering teams cannot deliver in production.',
            'Concealing known technical security vulnerabilities to meet artificial commercial launch dates.',
            'Using exclusionary, biased, or disrespectful language in corporate communications.'
          ],
          proTip: 'Ask yourself the 3-Way Ethical Test: Is it true? Is it transparent? Does it honor our commitments to users and colleagues?'
        }
      ],
      keyTakeaways: [
        'Commit to absolute truthfulness and transparent capability boundaries.',
        'Never sacrifice safety or ethical compliance to hit commercial launch dates.',
        'Champion inclusive, respectful communication across global teams.'
      ],
      practiceExercises: [
        {
          title: 'Ethical Communication Scenario Drill',
          instructions: 'Practice responding to an aggressive client who asks you to guarantee impossible 100% error-free software performance, providing an honest benchmark disclosure and human-in-the-loop framework.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: 'Communication Ethics',
        question: 'When asked by a prospective client if your AI software is 100% error-free, what is the most ethical and professional response?',
        options: [
          'Say yes and lie to close the sale immediately',
          'Clearly state verified audited benchmark accuracy (e.g. 99.4%), explain confidence boundary limits, and detail how your human-in-the-loop architecture safely manages edge cases',
          'Insult the client for asking the question',
          'Pretend the software is human'
        ],
        correctAnswer: 1,
        explanation: 'Option B exemplifies ethical leadership: truthfulness, audited benchmark disclosure, and transparent human-in-the-loop safeguards.'
      }
    ]
  },
  {
    id: 'pes-adv-project',
    orderIndex: 14,
    title: '40. Advanced Capstone Speaking Project: Executive Communication & Leadership Speaking Master Portfolio',
    description: 'Execute a master-level 10-deliverable capstone portfolio demonstrating complete fluency across high-stakes leadership, keynote presentations, crisis management, enterprise sales, and negotiation.',
    duration: '120 mins',
    xpReward: 500,
    isCompleted: false,
    status: 'locked',
    isProject: true,
    type: 'project',
    projectDetails: {
      title: 'Executive Communication & Leadership Speaking Master Portfolio',
      overview: 'This master capstone project represents the ultimate evaluation of your professional spoken English mastery. You will execute 10 comprehensive, high-stakes leadership deliverables simulating the most demanding communication challenges in international business.',
      deliverables: [
        {
          id: 'del-pes-adv-01',
          title: 'Deliverable 1: 5-Minute Keynote Presentation with Rhetorical Mastery',
          description: 'Deliver a full 5-minute keynote speech unveiling an innovative technological solution, incorporating a powerful hook, classical rhetorical devices (Tricolon, Antithesis), a data-driven human transformation story, and an inspiring call to action.',
          checklist: [
            'Attention-grabbing opening hook establishing industry tension (30-45s)',
            'Application of rhetorical devices (Rule of Three / Tricolon, Antithesis)',
            'Data visualization storytelling linking metrics to human impact',
            'Composed delivery within 4:45 to 5:15 minutes with dynamic vocal variety'
          ]
        },
        {
          id: 'del-pes-adv-02',
          title: 'Deliverable 2: C-Suite BLUF Briefing & $500k Capital Allocation Request',
          description: 'Deliver a structured 90-second executive briefing using the BLUF model (The Ask, Business Rationale, Quantifiable Financial ROI, and Decision Request).',
          checklist: [
            'Bottom Line Up Front delivered in the first 25 seconds',
            'Financial impact and ROI quantified with precision ($500k ask vs $2M upside)',
            'Direct handling of potential executive counter-concerns',
            'Explicit, actionable decision sign-off request'
          ]
        },
        {
          id: 'del-pes-adv-03',
          title: 'Deliverable 3: Crisis Communication Briefing (The 4Rs Model)',
          description: 'Deliver a formal crisis briefing to enterprise stakeholders following a simulated data outage, executing Regret, Responsibility, Remedy, and Reform.',
          checklist: [
            'Sincere empathy and validation of stakeholder impact (Regret)',
            'Radical personal and corporate accountability without deflection (Responsibility)',
            'Immediate containment and restoration actions (Remedy)',
            'Systemic architectural prevention safeguards and audit timelines (Reform)'
          ]
        },
        {
          id: 'del-pes-adv-04',
          title: 'Deliverable 4: High-Stakes Multi-Term Commercial Negotiation',
          description: 'Simulate a high-stakes contract negotiation responding to a client\'s "take-it-or-leave-it" ultimatum, neutralizing pressure and structuring an interest-based win-win agreement.',
          checklist: [
            'Calm, poised neutralization of the ultimatum',
            'Principled focus on underlying business interests rather than positions',
            'Conditional concession trading (\'If you commit to X, we can offer Y\')',
            'Verbal confirmation of agreed terms and timelines'
          ]
        },
        {
          id: 'del-pes-adv-05',
          title: 'Deliverable 5: Consultative Diagnostic Sales Discovery Conversation',
          description: 'Lead a consultative enterprise sales discovery dialogue with a prospective client CTO, diagnosing deep operational pain points and calculating the Cost of Inaction.',
          checklist: [
            'Open-ended diagnostic questioning uncovering operational bottlenecks',
            'Quantification of the business Cost of Inaction (COI)',
            'Value prescription linking platform capabilities to revenue recovery',
            'Consultative close securing the next technical proof-of-concept milestone'
          ]
        },
        {
          id: 'del-pes-adv-06',
          title: 'Deliverable 6: Diplomatic Boundary Setting with Senior Leadership',
          description: 'Deliver a spoken diplomatic boundary negotiation to a CEO demanding an unfeasible last-minute feature, framing capacity constraints around strategic business trade-offs.',
          checklist: [
            'Validation of the CEO\'s strategic intent and urgency',
            'Objective articulation of engineering capacity constraints',
            'Clear presentation of strategic trade-offs (Feature A vs. Compliance Milestone B)',
            'Professional composure and psychological safety'
          ]
        },
        {
          id: 'del-pes-adv-07',
          title: 'Deliverable 7: Cross-Cultural Global Meeting Orchestration',
          description: 'Simulate facilitating a global video conference across high-context (Japan) and low-context (Germany/US) teams, ensuring equitable participation, face preservation, and cultural alignment.',
          checklist: [
            'Culturally inclusive welcome acknowledging multi-region time zones',
            'Diplomatic indirect questioning for high-context participants',
            'Clear, explicit action item synthesis for low-context participants',
            'Complete elimination of localized idioms and sports slang'
          ]
        },
        {
          id: 'del-pes-adv-08',
          title: 'Deliverable 8: Restorative Conflict Mediation Dialogue',
          description: 'Conduct a simulated mediation session between two department heads locked in a heated dispute, using the 5-step restorative framework to establish a shared working protocol.',
          checklist: [
            'De-escalate emotional tension and establish psychological safety',
            'Ground discussion in objective facts and \'I\' statements',
            'Align both parties on a shared north-star customer outcome',
            'Formalize a locked working protocol with mutual sign-off'
          ]
        },
        {
          id: 'del-pes-adv-09',
          title: 'Deliverable 9: Business Storytelling: The Turnaround Transformation Arc',
          description: 'Deliver a 3-minute executive business story about turning a catastrophic technical failure into an institutional triumph, following the Hook, Challenge, Pivot, and Transformation arc.',
          checklist: [
            'Captivating hook establishing the crisis and stakes',
            'Vulnerable, honest acknowledgment of the challenge',
            'The strategic innovation and turning point',
            'Measurable transformation metrics and permanent cultural lessons'
          ]
        },
        {
          id: 'del-pes-adv-10',
          title: 'Deliverable 10: Executive Speaking Self-Evaluation & Mastery Charter',
          description: 'Record a comprehensive 3-minute spoken self-evaluation reflecting on your speaking growth across Beginner, Intermediate, and Advanced levels, outlining your lifelong executive communication charter.',
          checklist: [
            'Critical reflection on pronunciation, intonation, and breath control growth',
            'Analysis of framework execution (STAR, SBI, HEAR, BLUF, Monroe\'s)',
            'Articulation of your personal leadership communication philosophy',
            'Commitment to ethical, transparent, and empathetic communication'
          ]
        }
      ],
      submissionGuidelines: 'Submit high-fidelity audio recordings or comprehensive spoken transcripts for all 10 master deliverables, demonstrating executive gravitas, rhetorical mastery, and flawless framework execution against the rubric.',
      evaluationRubric: [
        {
          criteria: 'Executive Gravitas & Vocal Prosody',
          advanced: 'Commanding vocal presence with diaphragmatic breath control, grounded falling intonation, dynamic pitch modulation, and masterful strategic pausing.',
          proficient: 'Strong vocal presence with good pacing and clear diction with minor occasional hesitation.',
          needsWork: 'Monotone delivery, pervasive uptalk, or rushed cadence under pressure.'
        },
        {
          criteria: 'Rhetorical Sophistication & Storytelling',
          advanced: 'Masterful use of tricolon, antithesis, strategic metaphors, and compelling narrative arcs that captivate and persuade diverse audiences.',
          proficient: 'Good rhetorical structure and clear storytelling with minor pacing inconsistencies.',
          needsWork: 'Dry data reading, lack of narrative structure, or disjointed presentation.'
        },
        {
          criteria: 'Strategic Diplomatic Agility & Framework Mastery',
          advanced: 'Flawless, spontaneous execution of BLUF, 4Rs, Monroe\'s Motivated Sequence, and Interest-Based Negotiation across high-stakes scenarios.',
          proficient: 'Frameworks executed accurately with minor structural rigidity.',
          needsWork: 'Missing framework components, defensive posture, or failure to achieve strategic alignment.'
        }
      ]
    }
  },
  {
    id: 'pes-adv-assessment',
    orderIndex: 15,
    title: 'Advanced Final Assessment (40 MCQs)',
    description: 'Formal 40-question multiple-choice assessment testing all Level 3 speaking and leadership concepts. Passing score: 35/40 (87.5%).',
    duration: '60 mins',
    xpReward: 500,
    isCompleted: false,
    status: 'locked',
    isFinalAssessment: true,
    type: 'assessment',
    requiresQuiz: true,
    totalQuestions: 40,
    passingScore: 35,
    questions: PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_ASSESSMENT
  }
];
