import React from 'react';
import {
  FireIcon,
  BoltIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/solid';

interface WeeklyActivityProps {
  streakDays: number;
  xpTotal: number;
  tasksCompleted: number;
}

export const WeeklyLearningActivity: React.FC<WeeklyActivityProps> = ({
  streakDays,
  xpTotal,
  tasksCompleted,
}) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0

  // Calculate dynamic weekly activity heights based on streak and tasks
  const activityData = days.map((day, index) => {
    const isPast = index <= todayIndex;
    const isActive = isPast && (todayIndex - index < streakDays || streakDays >= 7);
    const heightPercentage = isActive ? Math.min(100, Math.max(35, 45 + (index * 10) % 55)) : 15;
    const isToday = index === todayIndex;

    return {
      day,
      isActive,
      isToday,
      heightPercentage,
    };
  });

  return (
    <div className="rounded-2xl p-6 bg-[color:var(--color-bg-card)] border border-border shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2">
            <CalendarDaysIcon className="w-5 h-5 text-indigo-400" />
            Learning Activity & Consistency
          </h3>
          <p className="text-xs text-[color:var(--text-secondary)] mt-0.5">
            Track your weekly study consistency and XP velocity.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Active Streak: {streakDays} {streakDays === 1 ? 'Day' : 'Days'}
          </span>
        </div>
      </div>

      {/* 7-Day Activity Bar Chart */}
      <div className="grid grid-cols-7 gap-2 sm:gap-3 items-end h-32 pt-4 px-2">
        {activityData.map((item) => (
          <div key={item.day} className="flex flex-col items-center gap-2 h-full justify-end">
            <div className="w-full max-w-[2.5rem] bg-slate-800/40 rounded-lg h-full flex items-end p-1 overflow-hidden">
              <div
                className={`w-full rounded-md transition-all duration-500 ${
                  item.isActive
                    ? item.isToday
                      ? 'bg-gradient-to-t from-indigo-600 to-cyan-400 shadow-md shadow-indigo-500/30'
                      : 'bg-indigo-600/70 hover:bg-indigo-500'
                    : 'bg-slate-800/80'
                }`}
                style={{ height: `${item.heightPercentage}%` }}
                title={`${item.day}: ${item.isActive ? 'Active Study Session' : 'No Activity'}`}
              />
            </div>
            <span
              className={`text-[11px] font-mono ${
                item.isToday
                  ? 'text-indigo-400 font-bold'
                  : item.isActive
                  ? 'text-slate-300'
                  : 'text-slate-500'
              }`}
            >
              {item.day}
            </span>
          </div>
        ))}
      </div>

      {/* Metric Highlights */}
      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border/60 text-center">
        <div className="p-3 rounded-xl bg-[color:var(--color-bg-base)] border border-border">
          <div className="text-xs text-[color:var(--text-secondary)] flex items-center justify-center gap-1">
            <FireIcon className="w-3.5 h-3.5 text-orange-500" />
            Streak
          </div>
          <div className="text-base sm:text-lg font-bold text-[color:var(--text-primary)] mt-0.5">
            {streakDays} {streakDays === 1 ? 'day' : 'days'}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[color:var(--color-bg-base)] border border-border">
          <div className="text-xs text-[color:var(--text-secondary)] flex items-center justify-center gap-1">
            <AcademicCapIcon className="w-3.5 h-3.5 text-emerald-400" />
            Milestones
          </div>
          <div className="text-base sm:text-lg font-bold text-[color:var(--text-primary)] mt-0.5">
            {tasksCompleted} done
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[color:var(--color-bg-base)] border border-border">
          <div className="text-xs text-[color:var(--text-secondary)] flex items-center justify-center gap-1">
            <BoltIcon className="w-3.5 h-3.5 text-indigo-400" />
            Total XP
          </div>
          <div className="text-base sm:text-lg font-bold text-indigo-400 mt-0.5">
            {xpTotal} XP
          </div>
        </div>
      </div>
    </div>
  );
};
