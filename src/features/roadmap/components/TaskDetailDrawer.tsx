import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Task } from '../types/roadmap.types';
import { Button } from '@/components/elements/Button';
import { LessonContentScreen } from './LessonContentScreen';
import { QuizModal } from './QuizModal';
import { ProjectSubmitModal } from './ProjectSubmitModal';
import { 
  XMarkIcon, 
  PlayCircleIcon, 
  DocumentTextIcon, 
  SparklesIcon, 
  BookOpenIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export interface DrawerProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
  onTaskCompleted?: (taskId: string) => void;
}

export const TaskDetailDrawer: React.FC<DrawerProps> = ({ 
  task, 
  isOpen, 
  onClose,
  onTaskCompleted 
}) => {
  const [render, setRender] = useState(isOpen);
  const [isLessonOpen, setIsLessonOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) setRender(false);
  };

  if (!render || !task) return null;

  const handleStartLesson = () => {
    setIsLessonOpen(true);
  };

  const handleProceedFromLesson = () => {
    setIsLessonOpen(false);
    if (task.requiresQuiz) {
      setIsQuizOpen(true);
    } else {
      setIsProjectModalOpen(true);
    }
  };

  const handleAssessmentComplete = () => {
    if (onTaskCompleted) {
      onTaskCompleted(task.id);
    }
  };

  const isCompleted = task.status === 'completed';

  return (
    <>
      <div className="fixed inset-0 z-40 overflow-hidden" role="dialog" aria-modal="true">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`} 
            onClick={onClose} 
          />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full md:pl-10">
            <div 
              className={`pointer-events-auto w-full md:w-screen md:max-w-md transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onTransitionEnd={handleAnimationEnd}
            >
              <div className="flex h-full flex-col bg-[color:var(--color-bg-base)] border-l border-border shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-[color:var(--color-bg-card)]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
                        Step {task.orderIndex} Module
                      </span>
                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
                          <CheckCircleIcon className="w-3.5 h-3.5" /> Completed
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

                {/* Body */}
                <div className="relative flex-1 px-6 py-6 overflow-y-auto pb-24 md:pb-6 space-y-6">
                  
                  {/* Module Summary & Start Lesson Button */}
                  <div className="space-y-4">
                    <p className="text-base text-[color:var(--text-secondary)] font-body leading-relaxed">
                      {task.description}
                    </p>
                    
                    <Button 
                      variant="primary" 
                      className="w-full flex items-center justify-center gap-2 py-3.5 text-base cursor-pointer shadow-ai-glow"
                      onClick={handleStartLesson}
                    >
                      <BookOpenIcon className="w-5 h-5" /> Start Learning Lesson <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Button>
                  </div>

                  {/* Learning Resources */}
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[color:var(--text-primary)] mb-3 uppercase tracking-wider opacity-80">
                      Module Topics & Resources
                    </h3>
                    
                    <div className="flex flex-col gap-3">
                      {task.resources && task.resources.length > 0 ? task.resources.map((res) => (
                        <button 
                          key={res.id} 
                          type="button"
                          onClick={handleStartLesson}
                          className="group flex items-center justify-between p-4 rounded-xl border border-border bg-[color:var(--color-bg-card)] hover:border-brand/50 hover:shadow-sm transition-all text-left cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            {res.type === 'video' ? (
                              <PlayCircleIcon className="w-6 h-6 text-brand flex-shrink-0" />
                            ) : (
                              <DocumentTextIcon className="w-6 h-6 text-brand flex-shrink-0" />
                            )}
                            <span className="font-body text-sm font-medium text-[color:var(--text-primary)] group-hover:text-brand transition-colors">
                              {res.title}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                            {res.duration || 'Lesson'}
                          </span>
                        </button>
                      )) : (
                        <button
                          type="button"
                          onClick={handleStartLesson}
                          className="p-4 border border-border rounded-xl text-left bg-[color:var(--color-bg-card)] hover:border-brand text-sm text-[color:var(--text-primary)] flex items-center justify-between cursor-pointer"
                        >
                          <span>Review Full Theory & Code Examples</span>
                          <span className="text-brand text-xs font-semibold">Open Lesson →</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Contextual Study Buddy Prompt */}
                  <div className="bg-ai-glow/10 border border-ai-glow/30 rounded-xl p-4 flex gap-4 items-start">
                    <SparklesIcon className="w-6 h-6 text-ai-glow flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-heading font-bold text-ai-glow">Need Help with this Topic?</h4>
                      <p className="text-xs text-[color:var(--text-secondary)] mt-1 mb-3">
                        Study Buddy is pre-loaded with the context of {task.title}.
                      </p>
                      <Button 
                        variant="ai-action" 
                        size="sm"
                        onClick={() => navigate(`/study-buddy?taskId=${task.id}&prompt=${encodeURIComponent(`Explain key concepts for ${task.title}`)}`)}
                      >
                        Ask Study Buddy
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="p-6 border-t border-border bg-[color:var(--color-bg-card)] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col gap-2">
                  <Button 
                    variant="outline"
                    className="w-full h-12 text-sm cursor-pointer border-border hover:border-brand"
                    onClick={handleStartLesson}
                  >
                    <BookOpenIcon className="w-4 h-4 mr-2 text-brand" /> 
                    {isCompleted ? "Review Lesson Material" : "Launch Lesson Viewer"}
                  </Button>
                  <p className="text-[11px] text-center text-[color:var(--text-secondary)] font-mono">
                    Complete lesson verification inside the viewer to unlock the assessment.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Lesson Screen */}
      <LessonContentScreen
        task={task}
        isOpen={isLessonOpen}
        onClose={() => setIsLessonOpen(false)}
        onProceedToAssessment={handleProceedFromLesson}
      />

      {/* Post-Lesson Knowledge Quiz */}
      <QuizModal
        task={task}
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onComplete={handleAssessmentComplete}
      />

      {/* Post-Lesson Project Submission */}
      <ProjectSubmitModal
        task={task}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onSubmitSuccess={handleAssessmentComplete}
      />
    </>
  );
};
