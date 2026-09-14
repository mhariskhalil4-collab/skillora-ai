import React, { useState, useMemo } from 'react';
import {
  TrophyIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid';
import { useAchievements } from '../useAchievements';
import { AchievementCard } from './AchievementCard';
import type { AchievementCategory } from '../achievement.types';

export const AchievementsSection: React.FC = () => {
  const { achievements, unlockedCount, totalCount, totalXpEarned, isLoading, error } = useAchievements();
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'all'>('all');

  const categories: Array<{ id: AchievementCategory | 'all'; label: string }> = [
    { id: 'all', label: 'All Badges' },
    { id: 'learning', label: 'Learning' },
    { id: 'streak', label: 'Streaks' },
    { id: 'quiz', label: 'Quizzes' },
    { id: 'project', label: 'Projects' },
    { id: 'special', label: 'Career Special' },
  ];

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === 'all') return achievements;
    return achievements.filter((a) => a.category === selectedCategory);
  }, [achievements, selectedCategory]);

  const percentage = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-slate-400">
        <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-sm">Loading achievement catalog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-center">
        <p className="font-semibold text-sm">Unable to load achievements.</p>
        <p className="text-xs text-rose-400 mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Achievements Hero Banner & Metrics */}
      <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-500/30 text-yellow-400 shadow-inner">
              <TrophyIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                Achievement Center
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {unlockedCount} / {totalCount} Badges
                </span>
              </h3>
              <p className="text-sm text-slate-400 mt-0.5">
                Earn verified milestone badges and bonus XP across your learning journey.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="text-center px-4 py-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-xs text-slate-400">Total Earned</div>
              <div className="text-lg font-bold text-indigo-300">+{totalXpEarned} XP</div>
            </div>
            <div className="text-center px-4 py-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-xs text-slate-400">Mastery</div>
              <div className="text-lg font-bold text-emerald-400">{percentage}%</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Progress to complete collection</span>
            <span className="font-semibold text-slate-200">{unlockedCount} of {totalCount} Unlocked</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Achievements */}
      {filteredAchievements.length === 0 ? (
        <div className="text-center py-12 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
          <SparklesIcon className="w-8 h-8 mx-auto mb-2 text-slate-600" />
          <p className="text-sm font-medium text-slate-300">No achievements in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      )}
    </div>
  );
};
