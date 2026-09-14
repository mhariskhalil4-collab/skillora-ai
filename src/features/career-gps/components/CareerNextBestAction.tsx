import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SparklesIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/solid';
import { Button } from '@/components/elements/Button';
import type { NextBestAction } from '../types/gps.types';

interface CareerNextBestActionProps {
  action: NextBestAction;
}

export const CareerNextBestAction: React.FC<CareerNextBestActionProps> = ({ action }) => {
  const navigate = useNavigate();

  const getActionIcon = () => {
    switch (action.type) {
      case 'quiz':
        return <TrophyIcon className="w-6 h-6 text-amber-400" />;
      case 'project':
        return <BriefcaseIcon className="w-6 h-6 text-purple-400" />;
      case 'lesson':
        return <PlayCircleIcon className="w-6 h-6 text-emerald-400" />;
      case 'streak':
        return <AcademicCapIcon className="w-6 h-6 text-cyan-400" />;
      default:
        return <SparklesIcon className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-900 border border-indigo-500/30 shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-inner flex-shrink-0">
            {getActionIcon()}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {action.badge}
              </span>
              {action.xpReward ? (
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  +{action.xpReward} XP
                </span>
              ) : null}
            </div>
            <h3 className="text-lg font-bold text-slate-100">{action.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {action.description}
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          onClick={() => navigate(action.actionUrl)}
          className="w-full md:w-auto whitespace-nowrap flex items-center justify-center gap-2 text-xs sm:text-sm py-2.5 px-5 shadow-lg shadow-indigo-500/20 cursor-pointer"
        >
          {action.actionLabel}
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
