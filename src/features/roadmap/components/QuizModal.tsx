import React, { useState } from 'react';
import { Task, QuizQuestion } from '../types/roadmap.types';
import { getQuizQuestionsForTask } from '../services/lessonData';
import { Button } from '@/components/elements/Button';
import { XMarkIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

interface QuizModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (score: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  task,
  isOpen,
  onClose,
  onComplete
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!isOpen) return null;

  const questions: QuizQuestion[] = task.questions && task.questions.length > 0 
    ? task.questions 
    : getQuizQuestionsForTask(task.title);

  const handleSelect = (questionIdx: number, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round((correctCount / questions.length) * 100);
    setScore(calculatedScore);
    setSubmitted(true);
    if (calculatedScore >= 70) {
      onComplete(calculatedScore);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const allAnswered = questions.every((_, idx) => selectedAnswers[idx] !== undefined);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
              Knowledge Verification
            </span>
            <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
              {task.title} Quiz
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-[color:var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-brand/10 border border-brand/20 text-brand rounded-full mx-auto flex items-center justify-center mb-4">
                <TrophyIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[color:var(--text-primary)]">
                {score >= 70 ? 'Assessment Cleared!' : 'Keep Practicing'}
              </h3>
              <p className="text-sm text-[color:var(--text-secondary)] mt-1 mb-4">
                You scored <span className="font-mono font-bold text-brand text-base">{score}%</span>.
              </p>
              {score >= 70 ? (
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold border border-success/30">
                  +{task.xpReward} XP Awarded & Next Module Unlocked!
                </div>
              ) : (
                <p className="text-xs text-[color:var(--text-secondary)]">
                  70% or higher is required to unlock subsequent modules. Review the lesson material and try again.
                </p>
              )}
            </div>
          ) : (
            questions.map((q, qIdx) => (
              <div key={q.id} className="space-y-3">
                <h4 className="text-sm font-heading font-semibold text-[color:var(--text-primary)]">
                  {qIdx + 1}. {q.question}
                </h4>
                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = selectedAnswers[qIdx] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => handleSelect(qIdx, oIdx)}
                        className={cn(
                          "w-full text-left p-3.5 rounded-xl border text-sm transition-all font-body cursor-pointer",
                          isSelected
                            ? "border-brand bg-brand/10 text-brand font-medium shadow-sm"
                            : "border-border bg-[color:var(--color-bg-base)] text-[color:var(--text-primary)] hover:border-brand/40"
                        )}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-[color:var(--color-bg-base)] flex items-center justify-end gap-3">
          {submitted ? (
            <>
              {score < 70 && (
                <Button variant="ghost" onClick={handleReset}>
                  Try Again
                </Button>
              )}
              <Button variant="primary" onClick={onClose}>
                Finish & Close
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="primary" disabled={!allAnswered} onClick={handleSubmit}>
                Submit Answers
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
