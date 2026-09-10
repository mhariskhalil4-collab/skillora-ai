import React from 'react';
import { SkillGap } from '../types/gps.types';
import { Card } from '@/components/data-display/Card';
import { Badge } from '@/components/elements/Badge';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { MapPinIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export const SkillGapCard: React.FC<{ gapData: SkillGap }> = ({ gapData }) => {
  return (
    <Card className="relative overflow-hidden">
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="flex items-center gap-2 text-xs font-mono text-brand uppercase tracking-wider font-semibold mb-2">
            <MapPinIcon className="w-4 h-4" /> Target Destination
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[color:var(--text-primary)]">
            {gapData.targetRole}
          </h2>
        </div>
        <div className="text-right">
          <span className="text-3xl font-heading font-bold text-success">
            {gapData.matchPercentage}%
          </span>
          <p className="text-xs text-[color:var(--text-secondary)] font-medium">Match</p>
        </div>
      </div>

      <div className="mb-8">
        <ProgressBar progress={gapData.matchPercentage} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Acquired Skills */}
        <div className="bg-[color:var(--color-bg-base)] p-4 rounded-xl border border-border">
          <h3 className="flex items-center gap-2 text-sm font-heading font-bold text-[color:var(--text-primary)] mb-3">
            <CheckCircleIcon className="w-5 h-5 text-success" /> You Have
          </h3>
          <div className="flex flex-wrap gap-2">
            {gapData.currentSkills.map(skill => (
              <Badge key={skill} label={skill} type="skill" />
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="bg-orange-500/5 p-4 rounded-xl border border-orange-500/20">
          <h3 className="flex items-center gap-2 text-sm font-heading font-bold text-[color:var(--text-primary)] mb-3">
            <XCircleIcon className="w-5 h-5 text-orange-500" /> You Need
          </h3>
          <div className="flex flex-wrap gap-2">
            {gapData.missingSkills.map(skill => (
              <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-xs border border-orange-500/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
