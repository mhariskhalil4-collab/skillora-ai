import React from 'react';
import { RecommendedSkill } from '../types/gps.types';
import { Button } from '@/components/elements/Button';
import { PlusIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

export interface RecommendationCardProps {
  recommendation: RecommendedSkill;
  onAdd: () => void;
  isAdding?: boolean;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation, onAdd, isAdding = false }) => {
  return (
    <div className={cn(
      "flex flex-col justify-between p-5 rounded-xl border backdrop-blur-md transition-all",
      recommendation.isAdded 
        ? 'bg-[color:var(--color-bg-base)] border-success/30 opacity-80' 
        : 'bg-[color:var(--color-bg-card)] border-border shadow-sm hover:border-ai-glow/50'
    )}>
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-heading font-bold text-[color:var(--text-primary)]">
            {recommendation.title}
          </h3>
          <span className="flex items-center gap-1 text-xs font-mono text-[color:var(--text-secondary)] bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
            <ClockIcon className="w-3 h-3" /> {recommendation.estimatedHours}h
          </span>
        </div>
        <p className="text-sm text-[color:var(--text-secondary)] mb-6 line-clamp-2">
          {recommendation.reason}
        </p>
      </div>
      
      <Button 
        variant={recommendation.isAdded ? "ghost" : "ai-action"} 
        size="sm" 
        className="w-full"
        onClick={onAdd}
        disabled={recommendation.isAdded || isAdding}
        isLoading={isAdding}
      >
        {recommendation.isAdded ? (
          <><CheckIcon className="w-4 h-4 mr-2 text-success" /> Added to Roadmap</>
        ) : isAdding ? (
          'Adding to Roadmap…'
        ) : (
          <><PlusIcon className="w-4 h-4 mr-2" /> Add to Roadmap</>
        )}
      </Button>
    </div>
  );
};
