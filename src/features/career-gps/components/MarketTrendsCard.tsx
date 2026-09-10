import React from 'react';
import { MarketTrend } from '../types/gps.types';
import { Card } from '@/components/data-display/Card';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, MinusIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';

export const MarketTrendsCard: React.FC<{ trends: MarketTrend[] }> = ({ trends }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
          Live Market Demand
        </h2>
        <p className="text-xs text-[color:var(--text-secondary)] mt-1">
          Based on recent global job & freelance postings.
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-5">
        {trends.map(trend => (
          <div key={trend.id}>
            <div className="flex justify-between items-end mb-1">
              <span className="text-sm font-medium text-[color:var(--text-primary)]">
                {trend.skill}
              </span>
              <div className="flex items-center gap-1">
                {trend.direction === 'up' && <ArrowTrendingUpIcon className="w-4 h-4 text-success" />}
                {trend.direction === 'down' && <ArrowTrendingDownIcon className="w-4 h-4 text-red-500" />}
                {trend.direction === 'stable' && <MinusIcon className="w-4 h-4 text-[color:var(--text-secondary)]" />}
                <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                  {trend.demandScore}/100
                </span>
              </div>
            </div>
            
            {/* Visual Bar Chart */}
            <div className="w-full h-2 bg-[color:var(--color-bg-base)] rounded-full overflow-hidden border border-border">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-1000",
                  trend.direction === 'up' ? 'bg-ai-glow shadow-[0_0_8px_rgba(0,240,255,0.6)]' :
                  trend.direction === 'stable' ? 'bg-brand' : 'bg-red-500/50'
                )}
                style={{ width: `${trend.demandScore}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border text-center">
        <span className="text-xs text-[color:var(--text-secondary)]">
          Updated September 2026
        </span>
      </div>
    </Card>
  );
};
