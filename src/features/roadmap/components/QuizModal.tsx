import React, { useState } from 'react';
import { Task, QuizQuestion, AssessmentWeakArea } from '../types/roadmap.types';
import { getQuizQuestionsForTask } from '../services/lessonData';
import { Button } from '@/components/elements/Button';
import { XMarkIcon, TrophyIcon, ExclamationTriangleIcon, CheckCircleIcon, ArrowPathIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

interface QuizModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (score: number) => void;
  onReviewWeakArea?: (topic: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  task,
  isOpen,
  onClose,
  onComplete,
  onReviewWeakArea
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [weakAreas, setWeakAreas] = useState<AssessmentWeakArea[]>([]);
  const [isPassed, setIsPassed] = useState(false);

  if (!isOpen) return null;

  const questions: QuizQuestion[] = task.questions && task.questions.length > 0 
    ? task.questions 
    : getQuizQuestionsForTask(task.title);

  const totalQuestions = questions.length;
  // Calculate required correct answers threshold
  const requiredCorrect = task.passingScore 
    ? task.passingScore 
    : Math.ceil(totalQuestions * 0.7);

  const handleSelect = (questionIdx: number, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const handleSubmit = () => {
    let correct = 0;
    const topicStats: Record<string, { total: number; missed: number; explanation: string }> = {};

    questions.forEach((q, idx) => {
      const topic = q.topic || 'Core Knowledge';
      if (!topicStats[topic]) {
        topicStats[topic] = { total: 0, missed: 0, explanation: q.explanation || '' };
      }
      topicStats[topic].total += 1;

      if (selectedAnswers[idx] === q.correctAnswer) {
        correct++;
      } else {
        topicStats[topic].missed += 1;
      }
    });

    const calculatedPercentage = Math.round((correct / totalQuestions) * 100);
    const passed = correct >= requiredCorrect;

    const identifiedWeakAreas: AssessmentWeakArea[] = Object.entries(topicStats)
      .filter(([_, s]) => s.missed > 0)
      .map(([topic, s]) => ({
        topic,
        missedCount: s.missed,
        totalInTopic: s.total,
        explanation: s.explanation
      }))
      .sort((a, b) => b.missedCount - a.missedCount);

    setCorrectCount(correct);
    setScorePercentage(calculatedPercentage);
    setIsPassed(passed);
    setWeakAreas(identifiedWeakAreas);
    setSubmitted(true);

    if (passed) {
      onComplete(calculatedPercentage);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setCorrectCount(0);
    setScorePercentage(0);
    setWeakAreas([]);
    setIsPassed(false);
  };

  const allAnswered = questions.every((_, idx) => selectedAnswers[idx] !== undefined);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-[color:var(--color-bg-base)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
                {task.isFinalAssessment ? 'Official Certification Assessment' : 'Knowledge Verification'}
              </span>
              {task.level && (
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-brand/10 text-brand border border-brand/20 font-bold">
                  Level: {task.level}
                </span>
              )}
            </div>
            <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)] mt-1">
              {task.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-[color:var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {submitted ? (
            <div className="space-y-6">
              {/* Result Hero Banner */}
              <div className={cn(
                "text-center py-6 px-4 rounded-2xl border transition-all",
                isPassed 
                  ? "bg-success/10 border-success/30 text-success" 
                  : "bg-orange-500/10 border-orange-500/30 text-orange-500"
              )}>
                <div className={cn(
                  "w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-3 border",
                  isPassed 
                    ? "bg-success/20 border-success/40 text-success" 
                    : "bg-orange-500/20 border-orange-500/40 text-orange-500"
                )}>
                  {isPassed ? (
                    <TrophyIcon className="w-9 h-9" />
                  ) : (
                    <ExclamationTriangleIcon className="w-9 h-9" />
                  )}
                </div>
                <h3 className="text-2xl font-heading font-bold text-[color:var(--text-primary)]">
                  {isPassed 
                    ? (task.isFinalAssessment ? 'Level Assessment Mastered!' : 'Assessment Cleared!') 
                    : 'Passing Threshold Not Met'}
                </h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-1.5">
                  You scored <span className="font-mono font-bold text-[color:var(--text-primary)] text-base">{correctCount} / {totalQuestions}</span> ({scorePercentage}%).
                  Required to pass: <span className="font-mono font-bold text-brand">{requiredCorrect} / {totalQuestions}</span>.
                </p>

                {isPassed ? (
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/15 text-success text-sm font-semibold border border-success/30 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>+{task.xpReward} XP Awarded & Next Level Progression Unlocked!</span>
                  </div>
                ) : (
                  <p className="text-xs text-[color:var(--text-secondary)] mt-3 max-w-md mx-auto">
                    You need {requiredCorrect} correct answers ({Math.round((requiredCorrect / totalQuestions) * 100)}%) to pass. Review the diagnosed weak areas below and retake the assessment when ready.
                  </p>
                )}
              </div>

              {/* Weak Areas Diagnostic Report */}
              {weakAreas.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-[color:var(--text-primary)] flex items-center gap-2">
                      <span>📊 Diagnostic Breakdown &amp; Weak Areas</span>
                    </h4>
                    <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                      {weakAreas.length} topic{weakAreas.length > 1 ? 's' : ''} to review
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {weakAreas.map((area, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-xl border border-border bg-[color:var(--color-bg-base)] space-y-2 text-left"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-[color:var(--text-primary)]">
                            {area.topic}
                          </span>
                          <span className="text-xs font-mono font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded-full">
                            {area.missedCount} / {area.totalInTopic} missed
                          </span>
                        </div>
                        {area.explanation && (
                          <p className="text-xs text-[color:var(--text-secondary)] font-body leading-relaxed bg-[color:var(--color-bg-card)] p-2.5 rounded-lg border border-border/60">
                            💡 <span className="font-semibold text-[color:var(--text-primary)]">Key Concept:</span> {area.explanation}
                          </p>
                        )}
                        {onReviewWeakArea && (
                          <button
                            type="button"
                            onClick={() => onReviewWeakArea(area.topic)}
                            className="text-xs font-semibold text-brand hover:underline flex items-center gap-1 cursor-pointer pt-1"
                          >
                            <BookOpenIcon className="w-3.5 h-3.5" /> Review {area.topic} Lesson
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-brand/5 border border-brand/20 p-4 rounded-xl flex items-center justify-between text-xs text-[color:var(--text-secondary)]">
                <span>Passing score requirement: <strong className="text-brand font-mono">{requiredCorrect} / {totalQuestions}</strong> correct ({Math.round((requiredCorrect / totalQuestions) * 100)}%)</span>
                <span>{Object.keys(selectedAnswers).length} of {totalQuestions} answered</span>
              </div>

              {questions.map((q, qIdx) => (
                <div key={q.id} className="space-y-3 pb-6 border-b border-border/60 last:border-0">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm font-heading font-semibold text-[color:var(--text-primary)] leading-snug">
                      <span className="text-brand font-mono mr-2">{qIdx + 1}.</span>
                      {q.question}
                    </h4>
                    {q.topic && (
                      <span className="text-[10px] font-mono uppercase bg-white/5 border border-border px-2 py-0.5 rounded text-[color:var(--text-secondary)] shrink-0">
                        {q.topic}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 mt-2">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[qIdx] === oIdx;
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleSelect(qIdx, oIdx)}
                          className={cn(
                            "w-full text-left p-3.5 rounded-xl border text-sm transition-all font-body cursor-pointer flex items-center justify-between",
                            isSelected
                              ? "border-brand bg-brand/10 text-brand font-medium shadow-sm ring-1 ring-brand/30"
                              : "border-border bg-[color:var(--color-bg-base)] text-[color:var(--text-primary)] hover:border-brand/40"
                          )}
                        >
                          <span>{opt}</span>
                          <span className={cn(
                            "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 text-[10px]",
                            isSelected ? "border-brand bg-brand text-white" : "border-border"
                          )}>
                            {isSelected ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-[color:var(--color-bg-base)] flex items-center justify-between gap-3">
          {submitted ? (
            <>
              {!isPassed ? (
                <Button 
                  variant="outline" 
                  onClick={handleReset} 
                  className="flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowPathIcon className="w-4 h-4" /> Retake Assessment
                </Button>
              ) : <div />}
              <Button 
                variant="primary" 
                onClick={onClose}
                className="cursor-pointer shadow-ai-glow"
              >
                {isPassed ? 'Continue Learning' : 'Close Diagnostic'}
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                variant="primary" 
                disabled={!allAnswered} 
                onClick={handleSubmit}
                className="cursor-pointer shadow-ai-glow"
              >
                Submit Answers ({Object.keys(selectedAnswers).length}/{totalQuestions})
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
