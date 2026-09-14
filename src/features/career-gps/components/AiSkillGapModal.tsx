import React from 'react';
import { Modal } from '@/components/overlay/Modal';
import { Button } from '@/components/elements/Button';
import {
  SparklesIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  BriefcaseIcon,
  ArrowTrendingUpIcon,
  CommandLineIcon,
} from '@heroicons/react/24/solid';
import type { AiSkillGapAnalysisResult } from '../types/gps.types';

interface AiSkillGapModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: AiSkillGapAnalysisResult | null;
  isLoading: boolean;
}

export const AiSkillGapModal: React.FC<AiSkillGapModalProps> = ({
  isOpen,
  onClose,
  result,
  isLoading,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center gap-2 text-slate-100 font-bold">
          <SparklesIcon className="w-5 h-5 text-indigo-400 animate-pulse" />
          AI Skill Gap & Career Readiness Analysis
        </div>
      }
      size="lg"
    >
      {isLoading ? (
        <div className="py-16 text-center space-y-4">
          <div className="w-12 h-12 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <div className="text-slate-200 font-semibold">Analyzing your skills against current market demand...</div>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Our server-side Gemini intelligence engine is evaluating your verified competencies, roadmap milestones, and technical benchmarks.
          </p>
        </div>
      ) : result ? (
        <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-1">
          {/* Score & Summary Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-center gap-5">
            <div className="relative flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl bg-indigo-500/10 border border-indigo-500/30">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-indigo-300">{result.overallMatchScore}%</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Readiness</div>
              </div>
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                Executive Assessment
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300">
                  Gemini Verified
                </span>
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{result.summary}</p>
            </div>
          </div>

          {/* Strengths & Missing Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-3">
                <CheckCircleIcon className="w-4 h-4" /> Core Strengths
              </h5>
              <ul className="space-y-2">
                {result.strengths.map((str) => (
                  <li key={str} className="text-xs text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {str}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-3">
                <ExclamationCircleIcon className="w-4 h-4" /> High-Impact Missing Skills
              </h5>
              <ul className="space-y-2">
                {result.missingSkills.map((msk) => (
                  <li key={msk} className="text-xs text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {msk}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Priority Skill Upgrades */}
          {result.prioritySkills && result.prioritySkills.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <ArrowTrendingUpIcon className="w-4 h-4 text-indigo-400" /> Strategic Priorities
              </h5>
              <div className="space-y-2.5">
                {result.prioritySkills.map((ps) => (
                  <div key={ps.skill} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-slate-100 flex items-center gap-2">
                        {ps.skill}
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            ps.importance === 'High'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                          }`}
                        >
                          {ps.importance} Priority
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{ps.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Suggested Projects */}
          {result.suggestedProjects && result.suggestedProjects.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BriefcaseIcon className="w-4 h-4 text-purple-400" /> Recommended Portfolio Projects
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.suggestedProjects.map((proj) => (
                  <div key={proj.title} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <h6 className="text-xs font-bold text-slate-100">{proj.title}</h6>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{proj.description}</p>
                    </div>
                    {proj.keySkills && proj.keySkills.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {proj.keySkills.map((ks) => (
                          <span key={ks} className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {ks}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Estimated Learning Sequence */}
          {result.estimatedLearningSequence && result.estimatedLearningSequence.length > 0 && (
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <CommandLineIcon className="w-4 h-4 text-cyan-400" /> Recommended Learning Sequence
              </h5>
              <div className="space-y-2">
                {result.estimatedLearningSequence.map((step, idx) => (
                  <div key={step} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <Button variant="primary" onClick={onClose} className="text-xs">
              Close & Focus On Priorities
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 text-slate-400 text-sm">
          No analysis result available.
        </div>
      )}
    </Modal>
  );
};
