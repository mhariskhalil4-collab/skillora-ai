const fs = require('fs');
const path = require('path');

function getBeginnerTasks() {
  return [
    {
      id: 'pe-beg-01',
      orderIndex: 1,
      title: 'Module 1: Introduction to Prompt Engineering',
      description: 'Master how Large Language Models process instructions, tokenization mechanics, context windows, probability distributions, weak vs improved prompts, and the core prompt development lifecycle.',
      status: 'in_progress',
      requiresQuiz: true,
      xpReward: 150,
      level: 'beginner',
      resources: [
        { id: 'res-pe-01-1', title: 'OpenAI Prompt Engineering Guide', type: 'documentation', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
        { id: 'res-pe-01-2', title: 'Anthropic Prompt Engineering Tutorial', type: 'documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering' }
      ],
      lessonContent: {
        overview: `### Welcome to Prompt Engineering Engineering
Prompt engineering is the engineering discipline of designing, structuring, evaluating, and refining inputs (prompts) to guide Large Language Models (LLMs) toward accurate, deterministic, and high-quality outputs.

Modern language models are probabilistic next-token predictors trained on vast corpora of text. When presented with an input sequence, the model calculates a probability distribution over its vocabulary to select each subsequent token. Prompt engineering provides the necessary constraints, context, and structural delimiters to narrow this probability distribution toward your intended goal.

In this foundational module, you will learn how models tokenize text, how context windows function, how prompt engineering differs from casual search engine queries, and how to execute an iterative prompt development cycle.`,
        analogyHero: 'Think of an LLM as a brilliant junior assistant who has read millions of books but has no memory of your specific business context. If you say "write something about marketing", they will produce generic prose. If you give them a precise role, target audience, brand constraints, and structural template, they will produce executive-ready work.',
        objectives: [
          'Define prompt engineering and explain its business and engineering importance.',
          'Explain how tokenization, context windows, and next-token probability distributions operate.',
          'Distinguish structured prompt engineering from ordinary conversational questioning.',
          'Identify common prompt failure modes and articulate the iterative prompt development workflow.'
        ],
        estimatedTime: '45 mins',
        syntaxGuide: `Prompt Engineering Core Workflow:
1. Define Objective   → Identify the exact business goal and expected output format.
2. Provide Context    → Give relevant background, user personas, and domain facts.
3. Set Constraints    → Establish tone, forbidden terms, length bounds, and formatting rules.
4. Supply Demonstrations → Provide input/output examples (Few-Shot).
5. Evaluate & Iterate → Test with edge cases and refine instructions systematically.`,
        sections: [
          {
            id: 'sec-pe-1-1',
            title: 'How LLMs Process Text: Tokens & Probability Distributions',
            difficulty: 'Beginner',
            analogy: 'Tokens are like syllable puzzle pieces. Models do not see letters or full words; they see numerical IDs representing common sub-word fragments.',
            content: `### Tokenization and Prediction Mechanics
When an LLM receives an input prompt, the text is first split into tokens using a tokenizer (such as Byte-Pair Encoding or WordPiece). In standard English text, 1 token is roughly equivalent to 4 characters or 0.75 words (e.g., 100 tokens ≈ 75 words).

Once tokenized, the transformer architecture processes the tokens through multi-head self-attention layers to compute mathematical representations (embeddings) of semantic relationships. The final layer outputs logits—raw probability scores—for every token in the vocabulary. Hyperparameters like **Temperature** and **Top-P** shape how the model samples from this distribution:
- **Temperature = 0.0:** Deterministic greedy decoding (always picks the highest-probability token). Ideal for extraction, code, and classification.
- **Temperature = 0.7 - 1.0:** Adds variance and creative diversity. Ideal for brainstorming and creative drafting.`,
            codeSnippets: [
              {
                language: 'markdown',
                filename: 'weak-vs-improved-prompt.md',
                code: `<!-- WEAK PROMPT (Vague, unconstrained, prone to generic filler) -->
Explain cloud computing.

<!-- IMPROVED PROMPT (Clear role, target audience, explicit constraints, structural format) -->
You are a senior enterprise cloud architect.
Explain cloud computing to a non-technical Chief Financial Officer (CFO) who is evaluating whether to migrate from on-premise servers.

Constraints:
1. Focus strictly on cost structure: Capital Expenditure (CapEx) vs Operational Expenditure (OpEx).
2. Avoid technical jargon like "virtualization hypervisors" or "Kubernetes clusters".
3. Use a 3-bullet executive summary followed by a realistic 2-column cost comparison table.
4. Keep total response under 250 words.`,
                explanation: 'Comparing a vague single-sentence prompt with a production-grade prompt containing role, audience, constraints, and explicit output formatting.',
                lineByLine: [
                  { line: 'You are a senior enterprise cloud architect.', explanation: 'Assigns an expert persona to calibrate vocabulary and authoritative framing.' },
                  { line: 'Explain cloud computing to a non-technical CFO...', explanation: 'Establishes clear user persona and commercial evaluation context.' },
                  { line: '1. Focus strictly on cost structure: CapEx vs OpEx.', explanation: 'Guides model attention toward commercial decision metrics rather than technical mechanics.' },
                  { line: '3. Use a 3-bullet executive summary followed by a 2-column table.', explanation: 'Enforces deterministic visual structure.' }
                ]
              }
            ]
          },
          {
            id: 'sec-pe-1-2',
            title: 'Core Prompt Archetypes: Writing, Summarization, and Classification',
            difficulty: 'Beginner',
            content: `### The Three Fundamental Prompt Patterns
Most business AI applications map to three primary prompt archetypes:
1. **Generative Writing:** Creating original copy, emails, product briefs, or scripts adhering to brand tone.
2. **Information Summarization:** Condensing lengthy reports, customer tickets, or research papers without losing critical facts.
3. **Classification & Categorization:** Assigning discrete labels (sentiment, intent, priority) with strict schema boundaries.`,
            codeSnippets: [
              {
                language: 'markdown',
                filename: 'writing-and-summarization-prompts.md',
                code: `<!-- WRITING PROMPT -->
Role: Direct-response copywriter.
Task: Write a 3-sentence promotional push notification for a flash sale on noise-canceling headphones.
Target Audience: Remote software engineers working in noisy environments.
Tone: Energetic, concise, solution-oriented.
Constraint: Include discount percentage (40% OFF) and a clear call to action.

<!-- SUMMARIZATION PROMPT -->
Task: Condense the following customer interview transcript into a structured summary.
Input Text: """[Customer: The onboarding call was helpful, but setting up webhook notifications took 3 days because documentation lacked curl examples.]"""
Required Format:
- Primary Pain Point: (1 sentence)
- Recommended Product Action: (1 sentence)
- Customer Sentiment: [Positive | Neutral | Frustrated]`,
                explanation: 'Writing and summarization prompt patterns showing explicit constraints and structured output formats.',
                lineByLine: [
                  { line: 'Role: Direct-response copywriter.', explanation: 'Establishes domain expertise and persuasive framing.' },
                  { line: 'Input Text: """[Customer transcript]"""', explanation: 'Uses triple quotes as clean delimiters to separate instructions from user input.' },
                  { line: 'Required Format: - Primary Pain Point...', explanation: 'Demands predictable bulleted attributes for easy consumption.' }
                ]
              }
            ]
          },
          {
            id: 'sec-pe-1-3',
            title: 'Classification Prompts & Search Engine Comparison',
            difficulty: 'Beginner',
            content: `### Classification Mechanics & Search Comparison
Classification prompts map open-ended text into predefined categories with clear decision boundaries.

Unlike search engines that retrieve matching documents by index lookups, LLMs synthesize new text based on conditional probability. Prompt engineering turns general model capacity into domain-specific intelligence.`,
            codeSnippets: [
              {
                language: 'markdown',
                filename: 'classification-prompt-pattern.md',
                code: `<!-- CLASSIFICATION PROMPT -->
Task: Classify incoming support email urgency into one of 3 tiers: [LOW, MEDIUM, HIGH].
Rules:
- HIGH: System down, payment failure, security vulnerability.
- MEDIUM: Feature bug with temporary workaround, billing inquiry.
- LOW: General question, cosmetic request, feedback.
Output: Return ONLY the tier label and a 1-sentence justification.

Input: """Our checkout page is throwing a 500 internal server error whenever customers try to pay with Mastercard."""
Expected Output:
Tier: HIGH
Justification: Direct payment failure on the checkout page severely impacts active revenue transactions.`,
                explanation: 'Rule-based classification prompt with clear tier definitions and expected output example.',
                lineByLine: [
                  { line: 'Rules: - HIGH: System down...', explanation: 'Explicit criteria eliminate ambiguity in tier assignment.' },
                  { line: 'Output: Return ONLY the tier label and a 1-sentence justification.', explanation: 'Prevents chatty conversational preambles.' }
                ]
              }
            ],
            proTip: 'When writing prompts, state what the model SHOULD do before stating what it SHOULD NOT do. Positive instructions establish strong forward momentum for token generation.',
            commonMistakes: [
              'Using fragmented keyword queries instead of full sentence instructions.',
              'Assuming the model knows your private business acronyms without explicit context.',
              'Setting Temperature to 1.0 when deterministic JSON or factual extraction is needed.'
            ]
          }
        ],
        keyTakeaways: [
          'Prompt engineering shapes the probabilistic next-token generation of language models.',
          'Tokenization splits text into sub-word tokens; context windows dictate maximum input/output capacity.',
          'High-performing prompts define clear roles, tasks, audience, constraints, and output structures.',
          'Iterative prompt engineering involves drafting, testing edge cases, analyzing failure modes, and refining rules.'
        ],
        summary: 'You now understand LLM inference fundamentals, tokenization mechanics, and the three primary prompt archetypes.',
        practiceExercises: [
          {
            title: 'Transform a Weak Prompt into a Production Prompt',
            instructions: 'Take the vague prompt "Write a product description for running shoes" and rewrite it with an expert role, target athlete persona, 3 key technical features, length limit, and markdown bullet formatting.'
          }
        ]
      },
      questions: [
        {
          id: 1,
          topic: 'LLM Mechanics',
          question: 'What is the fundamental operation performed by Large Language Models during text generation?',
          options: [
            'Searching an internal database of pre-written answers',
            'Calculating probability distributions to predict subsequent tokens in a sequence',
            'Executing SQL database queries across the internet in real time',
            'Compiling Python bytecode into native machine instructions'
          ],
          correctAnswer: 1,
          explanation: 'LLMs calculate probability distributions over their vocabulary to sample and generate subsequent tokens conditioned on previous tokens.'
        }
      ]
    }
  ];
}

console.log('Beginner tasks builder ready.');
module.exports = { getBeginnerTasks };
