import React from 'react';
import {
  TrophyIcon,
  FireIcon,
  BoltIcon,
  AcademicCapIcon,
  SparklesIcon,
  CheckBadgeIcon,
  LockClosedIcon,
} from '@heroicons/react/24/solid';
import type { AchievementWithStatus } from '../achievement.types';

interface AchievementCardProps {
  achievement: AchievementWithStatus;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'flame':
      case 'fire':
        return <FireIcon className="w-7 h-7 text-amber-500" />;
      case 'zap':
      case 'bolt':
        return <BoltIcon className="w-7 h-7 text-cyan-400" />;
      case 'award':
      case 'trophy':
        return <TrophyIcon className="w-7 h-7 text-yellow-400" />;
      case 'sparkles':
        return <SparklesIcon className="w-7 h-7 text-purple-400" />;
      case 'academic':
      case 'compass':
      case 'footprints':
        return <AcademicCapIcon className="w-7 h-7 text-emerald-400" />;
      default:
        return <CheckBadgeIcon className="w-7 h-7 text-indigo-400" />;
    }
  };

  const formattedDate = achievement.unlockedAt
    ? new Date(achievement.unlockedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <article
      className={`relative overflow-hidden rounded-2xl p-5 border transition-all duration-300 ${
        achievement.isUnlocked
          ? 'bg-gradient-to-br from-indigo-900/30 via-slate-900/90 to-purple-900/20 border-yellow-500/40 shadow-lg shadow-yellow-500/5 hover:border-yellow-400/60'
          : 'bg-slate-900/50 border-slate-800/80 opacity-75 hover:opacity-100 hover:border-slate-700'
      }`}
      aria-label={`${achievement.title} - ${achievement.isUnlocked ? 'Unlocked' : 'Locked'}`}
    >
      {/* Glow Effect for Unlocked */}
      {achievement.isUnlocked && (
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-xl flex items-center justify-center ${
              achievement.isUnlocked
                ? 'bg-slate-800/90 border border-yellow-500/30 shadow-inner'
                : 'bg-slate-800/50 border border-slate-700/50 text-slate-500'
            }`}
          >
            {achievement.isUnlocked ? (
              getIcon(achievement.icon)
            ) : (
              <LockClosedIcon className="w-7 h-7 text-slate-500" />
            )}
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 text-base flex items-center gap-2">
              {achievement.title}
              {achievement.isUnlocked && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Unlocked
                </span>
              )}
            </h4>
            <span className="text-xs text-slate-400 capitalize">{achievement.category}</span>
          </div>
        </div>

        {/* XP Badge */}
        <div className="flex flex-col items-end">
          <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
            +{achievement.xp_reward} XP
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-300 leading-relaxed">{achievement.description}</p>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        {achievement.isUnlocked ? (
          <span className="text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Earned on {formattedDate}
          </span>
        ) : (
          <div className="w-full flex items-center justify-between">
            <span className="text-slate-500">Requirement: {achievement.requirement_value} {achievement.requirement_type.replace('_', ' ')}</span>
            <span className="text-slate-500 font-medium">Locked</span>
          </div>
        )}
      </div>
    </article>
  );
};
