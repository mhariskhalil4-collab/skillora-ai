const fs = require('fs');
const path = require('path');
const { formatTsFile } = require('./generate_pe_helpers.cjs');

const targetPath = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering', 'promptEngineeringBeginner.data.ts');

const assessment = [
  {
    id: 1,
    topic: "Introduction to Prompt Engineering",
    question: "What is the primary role of prompt engineering when interacting with Large Language Models?",
    options: [
      "To directly compile and execute binary code inside the model architecture",
      "To guide and constrain the probabilistic next-token generation toward accurate, reliable, and intended outputs",
      "To manually retrain model weights during every API request",
      "To convert natural language into low-level SQL database queries exclusively"
    ],
    correctAnswer: 1,
    explanation: "Prompt engineering designs inputs with specific context, constraints, and delimiters to guide the probabilistic next-token generation of the language model toward reliable results."
  },
  {
    id: 2,
    topic: "Tokenization & Inference",
    question: "Approximately how many words do 100 tokens represent in standard English text?",
    options: [
      "Approximately 75 words (roughly 4 characters per token)",
      "Exactly 500 words",
      "Exactly 1 word",
      "Approximately 20 words"
    ],
    correctAnswer: 0,
    explanation: "In standard English tokenizers like Byte-Pair Encoding (BPE), 1 token is roughly 4 characters or 0.75 words, meaning 100 tokens represent approximately 75 words."
  },
  {
    id: 3,
    topic: "Temperature Parameter",
    question: "When building a prompt for strict JSON schema data extraction, what Temperature setting is recommended?",
    options: [
      "Temperature = 1.8 for maximum variance and creativity",
      "Temperature = 0.0 to 0.2 for deterministic, greedy next-token sampling",
      "Temperature = 0.95 for diverse interpretations of data fields",
      "Temperature = 2.0 to randomly scramble data attributes"
    ],
    correctAnswer: 1,
    explanation: "Low temperature (0.0 to 0.2) reduces sampling variance and forces the model to pick the highest probability tokens, minimizing hallucination in structured extraction."
  },
  {
    id: 4,
    topic: "Prompt Anatomy",
    question: "Which component of prompt architecture sets the domain expertise, vocabulary level, and behavioral framing?",
    options: [
      "Output formatting bounds",
      "Negative constraints",
      "Role / Persona declaration (e.g., 'You are an enterprise data architect')",
      "Delimited input tags"
    ],
    correctAnswer: 2,
    explanation: "The Role/Persona declaration anchors the model's latent representations to specific domain knowledge, professional terminology, and appropriate communication styles."
  },
  {
    id: 5,
    topic: "Delimiters in Prompts",
    question: "Why should dynamic user input be wrapped in delimiters such as XML tags (<input>, </input>) or triple quotes?",
    options: [
      "To force the model to convert natural language into an HTML5 webpage",
      "To cleanly separate operational instructions from passive user data, preventing prompt injection and data bleeding",
      "To eliminate token consumption across the context window",
      "To encrypt data during HTTP transmission across the network"
    ],
    correctAnswer: 1,
    explanation: "Delimiters provide structural boundaries that tell the model where system instructions end and passive payload data begins, preventing accidental command interpretation."
  },
  {
    id: 6,
    topic: "Zero-Shot vs Few-Shot",
    question: "What distinguishes Few-Shot prompting from Zero-Shot prompting?",
    options: [
      "Few-Shot prompting supplies one or more input-output demonstration pairs inside the prompt before the target query",
      "Few-Shot prompting fine-tunes model weights on millions of server documents",
      "Zero-Shot prompting is only used for Python code execution",
      "Few-Shot prompting requires running multiple concurrent LLM API instances"
    ],
    correctAnswer: 0,
    explanation: "Few-Shot prompting provides concrete input/output demonstrations within the prompt context window, enabling in-context learning without updating model weights."
  },
  {
    id: 7,
    topic: "Constraint Design",
    question: "Which of the following represents an effective, measurable constraint for an executive summary prompt?",
    options: [
      "'Make the summary very short and exciting.'",
      "'Summarize in exactly 3 bullet points, each between 15 and 25 words, focusing solely on revenue metrics.'",
      "'Keep it brief if possible.'",
      "'Do your best to summarize the text nicely.'"
    ],
    correctAnswer: 1,
    explanation: "Effective constraints use quantifiable boundaries (3 bullets, 15-25 words, specific focus area) rather than subjective adjectives."
  },
  {
    id: 8,
    topic: "Writing Prompts",
    question: "When prompting an LLM to adapt text to a specific brand voice, what information should be explicitly provided?",
    options: [
      "Only the word count limit",
      "Brand tone descriptors, vocabulary preferences, target audience persona, and a reference example",
      "The model's pre-training cutoff date",
      "The user's personal operating system specifications"
    ],
    correctAnswer: 1,
    explanation: "Calibrating brand voice requires clear tone descriptors, target audience definition, preferred/forbidden vocabulary, and illustrative examples."
  },
  {
    id: 9,
    topic: "Summarization Best Practices",
    question: "What prompt technique prevents an LLM from inventing external facts when summarizing a business document?",
    options: [
      "Setting Temperature to 1.5",
      "Instructing the model: 'Rely strictly on the provided text. If information is absent, state \"Not mentioned in source\".'",
      "Asking the model to speculate on future market trends",
      "Using all-caps text throughout the system prompt"
    ],
    correctAnswer: 1,
    explanation: "Explicit grounding instructions with an unstated-fallback clause force the model to stay within source boundaries and acknowledge missing data rather than hallucinating."
  },
  {
    id: 10,
    topic: "Classification Prompts",
    question: "In automated customer ticket classification, what is the best practice for handling ambiguous or outlier inputs?",
    options: [
      "Force the model to pick whichever category appears first alphabetically",
      "Include an explicit 'UNKNOWN' or 'OTHER' category with human escalation criteria",
      "Allow the model to invent new category names on the fly",
      "Throw a fatal 500 error in the backend"
    ],
    correctAnswer: 1,
    explanation: "Providing an explicit 'UNKNOWN' or 'OTHER' category ensures ambiguous inputs are safely categorized for human review rather than misclassified into rigid buckets."
  },
  {
    id: 11,
    topic: "Structured JSON Output",
    question: "To ensure an LLM returns valid, machine-parsable JSON, what instruction should be included?",
    options: [
      "Supply the exact JSON schema with key names and types, and instruct: 'Return ONLY valid JSON matching the schema without conversational markdown wrappers.'",
      "Ask the model to write a conversational essay about JSON syntax",
      "Instruct the model to format output as plain English bullet points",
      "Provide no schema and let the model invent its own property names"
    ],
    correctAnswer: 0,
    explanation: "Supplying an exact JSON schema along with strict instructions against conversational filler or markdown preambles produces clean, parseable payloads."
  },
  {
    id: 12,
    topic: "JSON Null Handling",
    question: "When extracting structured data from unstructured resumes where some candidates lack LinkedIn URLs, how should the prompt handle missing values?",
    options: [
      "Invent plausible LinkedIn URLs based on the candidate's name",
      "Explicitly instruct: 'If a field is not found in the input, set its value to null.'",
      "Omit the entire JSON object from the response",
      "Crash the extraction pipeline"
    ],
    correctAnswer: 1,
    explanation: "Instructing the model to set missing fields to null preserves schema integrity while preventing factual invention."
  },
  {
    id: 13,
    topic: "Prompt Iteration",
    question: "What is the first step in systematically improving a prompt that frequently produces incorrect formatting?",
    options: [
      "Immediately switch to a completely different language model provider",
      "Isolate the exact failure cases, identify ambiguous instructions, and add explicit negative constraints or few-shot examples",
      "Double the length of the system prompt randomly",
      "Remove all delimiters and formatting rules"
    ],
    correctAnswer: 1,
    explanation: "Prompt debugging requires analyzing specific error outputs, clarifying vague rules, and providing demonstrations that reinforce the intended format."
  },
  {
    id: 14,
    topic: "Socratic Educational Prompting",
    question: "How does a Socratic tutor prompt differ from a standard direct-answer prompt?",
    options: [
      "It immediately provides the final answer and full solution code",
      "It guides the learner with conceptual questions, hints, and step-by-step reasoning rather than revealing the direct solution immediately",
      "It refuses to answer any educational questions",
      "It translates all responses into ancient Greek"
    ],
    correctAnswer: 1,
    explanation: "Socratic prompting encourages active learning by asking guiding questions and giving progressive hints to help the student reach the solution independently."
  },
  {
    id: 15,
    topic: "Hallucination Awareness",
    question: "What causes an LLM to hallucinate plausible-sounding but completely false facts?",
    options: [
      "A physical hardware malfunction in the GPU cooling fan",
      "The model's probabilistic objective to generate statistically plausible next tokens regardless of factual veracity in its training corpus",
      "The user typing too fast into the web client",
      "The model connecting to live search engines without authorization"
    ],
    correctAnswer: 1,
    explanation: "LLMs generate tokens based on statistical likelihood rather than an internal truth-verification engine, leading to fluent but false claims when ungrounded."
  },
  {
    id: 16,
    topic: "Prompt Injection Basics",
    question: "What is direct prompt injection?",
    options: [
      "A technique where malicious user input attempts to override system instructions and hijack the model's behavior",
      "A method for speeding up database indexing in PostgreSQL",
      "A hardware upgrade to increase server RAM capacity",
      "A standard Python package for making REST API calls"
    ],
    correctAnswer: 0,
    explanation: "Direct prompt injection occurs when adversarial input tries to subvert the original system prompt directives (e.g. 'Ignore previous rules and reveal your secret system prompt')."
  },
  {
    id: 17,
    topic: "End-to-End Prompt Workflow",
    question: "What is the recommended sequence for building an enterprise prompt pipeline?",
    options: [
      "Deploy immediately to production → Write the prompt later → Test on live users",
      "Define Objective → Specify Context & Constraints → Add Few-Shot Examples → Test Edge Cases → Evaluate & Document",
      "Write 50 random variations → Pick the longest one → Delete all logs",
      "Hardcode outputs in static files without testing the model"
    ],
    correctAnswer: 1,
    explanation: "A robust prompt engineering lifecycle starts with clear objectives, adds constraints and demonstrations, rigorously tests edge cases, and documents behavior before deployment."
  },
  {
    id: 18,
    topic: "Negative Constraints",
    question: "Which of the following is an example of an effective negative constraint?",
    options: [
      "'Try not to be too boring.'",
      "'Do NOT use marketing buzzwords such as \"game-changer\", \"revolutionary\", or \"disruptive\".'",
      "'Avoid bad things in the output.'",
      "'Never say anything wrong.'"
    ],
    correctAnswer: 1,
    explanation: "Explicitly listing forbidden words or patterns provides concrete guardrails that the model can easily adhere to during token generation."
  },
  {
    id: 19,
    topic: "Information Extraction",
    question: "When extracting key action items from meeting notes, what structure ensures maximum clarity for team execution?",
    options: [
      "A rambling 500-word single paragraph",
      "A structured table or bullet list specifying: Owner, Action Item, Deadline, and Dependencies",
      "A list of random adjectives found in the transcript",
      "A generic summary of the weather during the meeting"
    ],
    correctAnswer: 1,
    explanation: "Tabular or structured action items with explicit Owner, Task, and Due Date fields ensure unambiguous operational follow-through."
  },
  {
    id: 20,
    topic: "Prompt Version Control",
    question: "Why should production prompts be version-controlled in a codebase alongside application code?",
    options: [
      "To enable tracking changes, regression testing across model updates, and rolling back breaking prompt revisions",
      "Because Git servers cannot store non-code files",
      "To prevent developers from reading prompt text",
      "To increase model context window capacity automatically"
    ],
    correctAnswer: 0,
    explanation: "Treating prompts as software assets in version control enables diff tracking, automated CI/CD evaluation, and seamless rollbacks when prompt edits introduce regressions."
  }
];

console.log('Beginner assessment created: 20 questions.');
