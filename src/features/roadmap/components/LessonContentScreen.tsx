import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Task, LessonContent, MiniPractice } from '../types/roadmap.types';
import { getLessonContentForTask } from '../services/lessonData';
import { Button } from '@/components/elements/Button';
import { 
  XMarkIcon, 
  BookOpenIcon, 
  CheckCircleIcon, 
  SparklesIcon, 
  ClipboardDocumentIcon, 
  ClipboardDocumentCheckIcon,
  ClockIcon,
  LightBulbIcon,
  LockClosedIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExclamationTriangleIcon,
  CommandLineIcon,
  CodeBracketIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as SolidCheckCircleIcon } from '@heroicons/react/24/solid';

interface LessonContentScreenProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onProceedToAssessment: () => void;
}

// Inline text formatter for **bold** and `code`
const formatInlineText = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let keyIndex = 0;

  // Regex to match **bold** or `code`
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let match: RegExpExecArray | null;
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={`b-${keyIndex++}`} className="font-semibold text-[color:var(--text-primary)]">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={`c-${keyIndex++}`} className="px-1.5 py-0.5 rounded bg-brand/10 text-brand font-mono text-xs font-medium">
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

// Rich Structured Content Renderer for Theory, Headings, Lists, and Paragraphs
const StructuredContentRenderer: React.FC<{ content: string }> = ({ content }) => {
  if (!content) return null;

  const paragraphs = content.split('\n\n');

  return (
    <div className="space-y-4 text-sm sm:text-base text-[color:var(--text-secondary)] font-body leading-relaxed">
      {paragraphs.map((para, pIdx) => {
        const trimmed = para.trim();
        if (!trimmed) return null;

        // Subheading (### )
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={pIdx} className="text-base sm:text-lg font-heading font-bold text-[color:var(--text-primary)] mt-5 mb-2 pt-2 flex items-center gap-2 border-b border-border/50 pb-1.5">
              <span className="w-2 h-2 rounded-full bg-brand" />
              {formatInlineText(trimmed.replace('### ', ''))}
            </h4>
          );
        }

        // Sub-subheading (#### )
        if (trimmed.startsWith('#### ')) {
          return (
            <h5 key={pIdx} className="text-sm sm:text-base font-heading font-semibold text-brand mt-4 mb-1.5">
              {formatInlineText(trimmed.replace('#### ', ''))}
            </h5>
          );
        }

        // Check if paragraph is a list of lines
        const lines = trimmed.split('\n');
        const isNumberedList = lines.every(l => /^\d+\.\s/.test(l.trim()));
        const isBulletList = lines.every(l => /^[-•*]\s/.test(l.trim()));

        if (isNumberedList) {
          return (
            <div key={pIdx} className="space-y-2.5 my-3 pl-1">
              {lines.map((line, lIdx) => {
                const numMatch = line.trim().match(/^(\d+)\.\s*(.*)/);
                const num = numMatch ? numMatch[1] : `${lIdx + 1}`;
                const text = numMatch ? numMatch[2] : line;
                return (
                  <div key={lIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand/15 text-brand font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {num}
                    </span>
                    <span className="flex-1 text-sm sm:text-base text-[color:var(--text-secondary)]">
                      {formatInlineText(text)}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }

        if (isBulletList) {
          return (
            <ul key={pIdx} className="space-y-2 my-3 pl-1">
              {lines.map((line, lIdx) => {
                const text = line.trim().replace(/^[-•*]\s*/, '');
                return (
                  <li key={lIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2.5" />
                    <span className="flex-1 text-sm sm:text-base text-[color:var(--text-secondary)]">
                      {formatInlineText(text)}
                    </span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Standard Paragraph
        return (
          <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-[color:var(--text-secondary)]">
            {formatInlineText(trimmed)}
          </p>
        );
      })}
    </div>
  );
};

// Sub-component for interactive in-lesson mini check (Khan Academy / Duolingo style)
const MiniPracticeCard: React.FC<{ practice: MiniPractice; practiceId: string }> = ({ practice }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleChoose = (idx: number) => {
    if (hasAnswered) return;
    setSelected(idx);
    setHasAnswered(true);
  };

  const isCorrect = selected === practice.correctAnswer;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[color:var(--color-bg-card)] border-2 border-brand/20 my-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider">
        <QuestionMarkCircleIcon className="w-4 h-4 text-brand" /> Quick Concept Check
      </div>
      <p className="text-sm sm:text-base font-heading font-semibold text-[color:var(--text-primary)]">
        {practice.question}
      </p>

      <div className="space-y-2">
        {practice.options.map((option, optIdx) => {
          const isSelected = selected === optIdx;
          const isTargetCorrect = optIdx === practice.correctAnswer;

          let btnStyle = "border-border bg-[color:var(--color-bg-base)] text-[color:var(--text-primary)] hover:border-brand/50";
          if (hasAnswered) {
            if (isTargetCorrect) {
              btnStyle = "border-success bg-success/10 text-success font-semibold shadow-sm";
            } else if (isSelected) {
              btnStyle = "border-red-500 bg-red-500/10 text-red-500 font-medium";
            } else {
              btnStyle = "border-border/40 opacity-50";
            }
          }

          return (
            <button
              key={optIdx}
              type="button"
              disabled={hasAnswered}
              onClick={() => handleChoose(optIdx)}
              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all font-body flex items-center justify-between cursor-pointer ${btnStyle}`}
            >
              <span>{option}</span>
              {hasAnswered && isTargetCorrect && <CheckIcon className="w-4 h-4 text-success flex-shrink-0 ml-2" />}
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div className={`p-3 rounded-xl text-xs leading-relaxed font-body mt-2 animate-in fade-in duration-200 ${
          isCorrect ? 'bg-success/10 border border-success/30 text-success' : 'bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400'
        }`}>
          <span className="font-bold">{isCorrect ? '🎉 Great job! ' : '💡 Helpful Note: '}</span>
          {practice.explanation}
        </div>
      )}
    </div>
  );
};

export const LessonContentScreen: React.FC<LessonContentScreenProps> = ({
  task,
  isOpen,
  onClose,
  onProceedToAssessment,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [expandedBreakdowns, setExpandedBreakdowns] = useState<{ [key: string]: boolean }>({});
  const [expandedSolutions, setExpandedSolutions] = useState<{ [key: number]: boolean }>({});
  const [showSyntaxGuide, setShowSyntaxGuide] = useState(true);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const lesson: LessonContent = task.lessonContent || getLessonContentForTask(task.title, task.description);

  const handleCopyCode = async (code: string, id: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      }
    } catch (err) {
      console.warn('Clipboard write note:', err);
    }
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleBreakdown = (snippetId: string) => {
    setExpandedBreakdowns(prev => ({
      ...prev,
      [snippetId]: !prev[snippetId]
    }));
  };

  const toggleSolution = (idx: number) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleAskStudyBuddy = () => {
    navigate(`/study-buddy?prompt=${encodeURIComponent(`I'm reading the lesson for "${task.title}". Can you give me another simple real-world analogy?`)}&taskId=${task.id}`);
  };

  const getDifficultyColor = (diff?: string) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30';
      default:
        return 'bg-brand/10 text-brand border-brand/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-[color:var(--color-bg-base)] border border-border rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col my-auto max-h-[92vh] overflow-hidden">
        
        {/* Top Sticky Header */}
        <header className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-[color:var(--color-bg-card)] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 shadow-sm">
              <BookOpenIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
                  Step {task.orderIndex} Lesson
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-[color:var(--text-secondary)] bg-[color:var(--color-bg-base)] px-2.5 py-0.5 rounded-full border border-border">
                  <ClockIcon className="w-3 h-3" /> {lesson.estimatedTime}
                </span>
              </div>
              <h1 className="text-lg sm:text-2xl font-heading font-bold text-[color:var(--text-primary)] mt-0.5">
                {task.title}
              </h1>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-[color:var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title="Close Lesson"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </header>

        {/* Main Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-8">
          
          {/* Friendly Overview with Analogy Banner */}
          <section className="bg-gradient-to-br from-brand/15 via-ai-glow/10 to-transparent border border-brand/25 p-5 sm:p-6 rounded-2xl space-y-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-brand mb-1.5 flex items-center gap-2">
                <LightBulbIcon className="w-4 h-4" /> Welcome & Overview
              </h2>
              <StructuredContentRenderer content={lesson.overview} />
            </div>

            {lesson.analogyHero && (
              <div className="p-4 rounded-xl bg-[color:var(--color-bg-card)]/80 border border-brand/20 backdrop-blur-sm flex items-start gap-3">
                <SparklesIcon className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[color:var(--text-primary)] font-body">
                  <span className="font-bold text-brand">Core Analogy: </span>
                  {lesson.analogyHero}
                </div>
              </div>
            )}
          </section>

          {/* Syntax Guide & Quick Command Reference (if provided) */}
          {lesson.syntaxGuide && (
            <section className="rounded-2xl border border-brand/20 bg-brand/5 p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand">
                  <CommandLineIcon className="w-4 h-4" /> Quick Syntax & Command Reference
                </div>
                <button
                  type="button"
                  onClick={() => setShowSyntaxGuide(!showSyntaxGuide)}
                  className="text-xs font-mono text-brand hover:underline cursor-pointer flex items-center gap-1"
                >
                  {showSyntaxGuide ? 'Collapse' : 'Expand'}
                  {showSyntaxGuide ? <ChevronUpIcon className="w-3.5 h-3.5" /> : <ChevronDownIcon className="w-3.5 h-3.5" />}
                </button>
              </div>
              {showSyntaxGuide && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-mono text-xs overflow-x-auto whitespace-pre">
                  {lesson.syntaxGuide}
                </div>
              )}
            </section>
          )}

          {/* What You'll Learn (Objectives) */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[color:var(--text-secondary)] uppercase tracking-wider">
              What You'll Learn In This Lesson
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lesson.objectives.map((objective, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-border bg-[color:var(--color-bg-card)] shadow-sm"
                >
                  <CheckCircleIcon className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[color:var(--text-primary)] font-body leading-snug">
                    {objective}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Progressive Lesson Sections */}
          <section className="space-y-8 pt-2">
            {lesson.sections.map((section) => (
              <div key={section.id} className="space-y-4 border-t border-border pt-6">
                
                {/* Section Title & Difficulty Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[color:var(--text-primary)]">
                    {section.title}
                  </h3>
                  {section.difficulty && (
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${getDifficultyColor(section.difficulty)}`}>
                      {section.difficulty} Level
                    </span>
                  )}
                </div>

                {/* Section Real-World Analogy */}
                {section.analogy && (
                  <div className="p-4 rounded-xl bg-ai-glow/10 border border-ai-glow/30 flex items-start gap-3 text-xs sm:text-sm text-[color:var(--text-primary)] font-body">
                    <LightBulbIcon className="w-5 h-5 text-ai-glow flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-ai-glow">Real-World Analogy: </span>
                      {section.analogy}
                    </div>
                  </div>
                )}

                {/* Section Plain-English Content (Structured Rendering) */}
                <StructuredContentRenderer content={section.content || section.explanation || ''} />

                {/* Code Snippets with Line-by-Line Breakdown */}
                {section.codeSnippets && section.codeSnippets.map((snippet, sIdx) => {
                  const snippetId = `${section.id}_${sIdx}`;
                  const isCopied = copiedIndex === snippetId;
                  const isBreakdownOpen = expandedBreakdowns[snippetId] !== false; // open by default

                  return (
                    <div key={sIdx} className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 text-slate-100 my-4 shadow-lg">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/90 border-b border-slate-700 text-xs font-mono text-slate-300">
                        <span className="font-semibold text-brand-light">{snippet.filename || `${snippet.language} Example`}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyCode(snippet.code, snippetId)}
                          className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <ClipboardDocumentCheckIcon className="w-4 h-4 text-success" />
                              <span className="text-success font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <ClipboardDocumentIcon className="w-4 h-4" />
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>
                      
                      <div className="p-4 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
                        <pre><code>{snippet.code}</code></pre>
                      </div>

                      {snippet.explanation && (
                        <div className="px-4 py-2.5 bg-slate-800/50 border-t border-slate-800 text-xs text-slate-300 font-body">
                          💡 <span className="font-medium text-white">What this does: </span> {snippet.explanation}
                        </div>
                      )}

                      {/* Line-by-Line Plain English Breakdown */}
                      {snippet.lineByLine && snippet.lineByLine.length > 0 && (
                        <div className="border-t border-slate-800 bg-slate-950/60 p-3 sm:p-4 text-xs">
                          <button
                            type="button"
                            onClick={() => toggleBreakdown(snippetId)}
                            className="flex items-center justify-between w-full text-slate-400 hover:text-slate-200 font-mono font-semibold mb-2 cursor-pointer"
                          >
                            <span>🔍 Line-by-Line Plain English Breakdown</span>
                            {isBreakdownOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                          </button>

                          {isBreakdownOpen && (
                            <div className="space-y-2 mt-2 pt-2 border-t border-slate-800/80">
                              {snippet.lineByLine.map((item, lIdx) => (
                                <div key={lIdx} className="flex flex-col sm:flex-row gap-1 sm:gap-3 py-1 text-slate-300 border-b border-slate-900 last:border-0">
                                  <code className="font-mono text-xs text-brand-light font-semibold sm:w-1/3 flex-shrink-0">
                                    {item.line}
                                  </code>
                                  <span className="font-body text-slate-400 text-xs sm:w-2/3">
                                    → {item.explanation}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Common Mistakes & Anti-Patterns */}
                {section.commonMistakes && section.commonMistakes.length > 0 && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm space-y-2 text-[color:var(--text-primary)]">
                    <div className="flex items-center gap-2 font-heading font-bold text-amber-600 dark:text-amber-400">
                      <ExclamationTriangleIcon className="w-4 h-4" /> Common Pitfalls & Anti-Patterns to Avoid
                    </div>
                    <ul className="space-y-1.5 pl-1">
                      {section.commonMistakes.map((mistake, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{formatInlineText(mistake)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Section Mini Practice Checkpoint */}
                {section.miniPractice && (
                  <MiniPracticeCard 
                    practice={section.miniPractice} 
                    practiceId={`${section.id}_practice`} 
                  />
                )}

                {/* Pro-Tip Box */}
                {section.proTip && (
                  <div className="p-4 rounded-xl bg-brand/5 border border-brand/20 flex items-start gap-3 text-xs sm:text-sm text-[color:var(--text-primary)]">
                    <SparklesIcon className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-brand">Helpful Pro-Tip: </span>
                      {formatInlineText(section.proTip)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Hands-On Practice Coding Challenges (if available) */}
          {lesson.practiceExercises && lesson.practiceExercises.length > 0 && (
            <section className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-base sm:text-lg font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2">
                <CodeBracketIcon className="w-5 h-5 text-brand" /> 🛠️ Hands-On Coding Challenges
              </h3>
              <div className="space-y-4">
                {lesson.practiceExercises.map((exercise, eIdx) => (
                  <div key={eIdx} className="p-5 rounded-2xl bg-[color:var(--color-bg-card)] border border-border space-y-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-semibold text-sm sm:text-base text-[color:var(--text-primary)]">
                        Challenge {eIdx + 1}: {exercise.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[color:var(--text-secondary)] font-body leading-relaxed">
                      {exercise.instructions}
                    </p>
                    
                    {exercise.starterCode && (
                      <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 text-slate-100 p-3 font-mono text-xs">
                        <div className="text-[10px] text-slate-400 mb-1 font-semibold uppercase">Starter Code:</div>
                        <pre><code>{exercise.starterCode}</code></pre>
                      </div>
                    )}

                    {exercise.solutionCode && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => toggleSolution(eIdx)}
                          className="flex items-center gap-1.5 text-xs font-mono font-semibold text-brand hover:underline cursor-pointer"
                        >
                          {expandedSolutions[eIdx] ? (
                            <>
                              <EyeSlashIcon className="w-4 h-4" /> Hide Solution Code
                            </>
                          ) : (
                            <>
                              <EyeIcon className="w-4 h-4" /> Reveal Reference Solution
                            </>
                          )}
                        </button>
                        {expandedSolutions[eIdx] && (
                          <div className="mt-2 rounded-xl overflow-hidden border border-emerald-600/50 bg-slate-900 text-slate-100 p-3 font-mono text-xs animate-in fade-in duration-150">
                            <div className="text-[10px] text-emerald-400 mb-1 font-semibold uppercase">Reference Solution:</div>
                            <pre><code>{exercise.solutionCode}</code></pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Takeaways & Summary */}
          <section className="bg-[color:var(--color-bg-card)] border border-border p-6 rounded-2xl space-y-4 shadow-sm">
            <h3 className="text-base font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2">
              <AcademicCapIcon className="w-5 h-5 text-brand" /> Lesson Summary & Key Takeaways
            </h3>
            <ul className="space-y-2.5">
              {lesson.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[color:var(--text-secondary)] font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                  <span>{formatInlineText(takeaway)}</span>
                </li>
              ))}
            </ul>
            {lesson.summary && (
              <div className="text-xs sm:text-sm font-body text-[color:var(--text-primary)] pt-3 border-t border-border font-medium leading-relaxed">
                <StructuredContentRenderer content={lesson.summary} />
              </div>
            )}
          </section>

          {/* Interactive Lesson Verification Toggle */}
          <section className="p-5 rounded-2xl border-2 border-dashed border-border bg-[color:var(--color-bg-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-base font-heading font-bold text-[color:var(--text-primary)]">
                Ready to Test Your Knowledge?
              </h4>
              <p className="text-xs sm:text-sm text-[color:var(--text-secondary)] font-body">
                Mark this lesson complete once you've reviewed the analogies, theoretical foundations, examples, and mini checks to unlock your quiz.
              </p>
            </div>

            <Button
              type="button"
              variant={isCompleted ? 'primary' : 'outline'}
              className={`flex items-center gap-2 cursor-pointer transition-all flex-shrink-0 ${
                isCompleted ? 'bg-success border-success text-white' : 'border-brand text-brand hover:bg-brand/10'
              }`}
              onClick={() => setIsCompleted(!isCompleted)}
            >
              {isCompleted ? (
                <>
                  <SolidCheckCircleIcon className="w-5 h-5 text-white" />
                  <span>Lesson Completed</span>
                </>
              ) : (
                <>
                  <CheckCircleIcon className="w-5 h-5" />
                  <span>Mark Lesson as Complete</span>
                </>
              )}
            </Button>
          </section>

        </div>

        {/* Sticky Bottom Action Bar */}
        <footer className="p-4 sm:p-6 border-t border-border bg-[color:var(--color-bg-card)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleAskStudyBuddy}
            className="text-xs sm:text-sm font-medium text-ai-glow hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <SparklesIcon className="w-4 h-4" /> Have questions? Ask Study Buddy for another analogy
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="ghost" onClick={onClose} className="w-full sm:w-auto">
              Back to Roadmap
            </Button>

            <Button
              variant="primary"
              disabled={!isCompleted}
              onClick={onProceedToAssessment}
              className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              {!isCompleted ? (
                <>
                  <LockClosedIcon className="w-4 h-4" />
                  <span>Complete Lesson to Unlock Quiz</span>
                </>
              ) : (
                <span>
                  {task.requiresQuiz ? 'Continue to Knowledge Quiz →' : 'Continue to Project Submission →'}
                </span>
              )}
            </Button>
          </div>
        </footer>

      </div>
    </div>
  );
};

