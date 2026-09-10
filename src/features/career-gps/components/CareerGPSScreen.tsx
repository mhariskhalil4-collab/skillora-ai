import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MarketTrend, SkillGap, RecommendedSkill } from '../types/gps.types';
import { CareerGpsService } from '../services/career-gps.service';
import { SkillGapCard } from './SkillGapCard';
import { MarketTrendsCard } from './MarketTrendsCard';
import { RecommendationCard } from './RecommendationCard';
import { Button } from '@/components/elements/Button';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { CheckCircleIcon, SparklesIcon, ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export const CareerGPSScreen: React.FC = () => {
  const [gapData, setGapData] = useState<SkillGap | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedSkill[]>([]);
  const [trends, setTrends] = useState<MarketTrend[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [addingSkillId, setAddingSkillId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const authUser = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const loadCareerGpsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await CareerGpsService.fetchCareerGpsData(authUser?.id);
      setGapData(data.skillGap);
      setRecommendations(data.recommendations);
      setTrends(data.trends);
    } catch (err: any) {
      console.error('[CareerGPSScreen] Failed to load Career GPS data:', err);
      setError(err?.message || 'Unable to connect to labor market and skills benchmark data. Please verify your connection.');
    } finally {
      setIsLoading(false);
    }
  }, [authUser?.id]);

  useEffect(() => {
    loadCareerGpsData();
  }, [loadCareerGpsData]);

  const handleAddToRoadmap = async (rec: RecommendedSkill) => {
    setAddingSkillId(rec.id);
    try {
      await CareerGpsService.addSkillToRoadmap(authUser?.id, rec);
      
      // Update local state to reflect that it is added
      setRecommendations(prev =>
        prev.map(r => (r.id === rec.id ? { ...r, isAdded: true } : r))
      );

      setToastMessage(`"${rec.title}" added to your Roadmap as an active learning module!`);
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    } catch (err) {
      console.error('[CareerGPSScreen] Failed to add skill to roadmap:', err);
    } finally {
      setAddingSkillId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-brand border-t-transparent animate-spin" />
          <p className="text-sm font-mono text-[color:var(--text-secondary)]">
            Analyzing your career trajectory & live market data...
          </p>
        </div>
      </div>
    );
  }

  if (error || !gapData) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-6 pb-24 lg:pb-8">
        <div className="max-w-md w-full text-center bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl mx-auto flex items-center justify-center border border-red-500/20">
            <ExclamationTriangleIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[color:var(--text-primary)]">
              Failed to Load Career GPS
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
              {error || 'Unable to analyze skill benchmarks and labor market trends. Please check your connection.'}
            </p>
          </div>
          <Button
            variant="primary"
            className="w-full flex items-center justify-center gap-2 cursor-pointer shadow-ai-glow"
            onClick={() => loadCareerGpsData()}
          >
            <ArrowPathIcon className="w-4 h-4" /> Retry Connection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-brand text-white px-5 py-3.5 rounded-xl shadow-2xl font-heading text-sm font-semibold animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
          <span>{toastMessage}</span>
          <button 
            onClick={() => navigate('/roadmap')}
            className="ml-2 underline text-xs font-mono font-normal hover:opacity-80 cursor-pointer"
          >
            View Roadmap →
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[color:var(--text-primary)]">
              Career GPS
            </h1>
            <p className="text-[color:var(--text-secondary)] mt-1 font-body">
              Aligning your verified skills with real-time labor market demand.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono">
            <SparklesIcon className="w-4 h-4" /> Live AI Skill Matcher
          </div>
        </header>

        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
          {/* Left Column: Gap Analysis & Actions */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8">
            <SkillGapCard gapData={gapData} />
            
            <section>
              <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)] mb-4">
                Recommended Modules to Bridge the Gap
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map(rec => (
                  <RecommendationCard 
                    key={rec.id} 
                    recommendation={rec} 
                    onAdd={() => handleAddToRoadmap(rec)} 
                    isAdding={addingSkillId === rec.id}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Market Trends */}
          <div className="w-full xl:w-[400px] flex flex-col gap-6 lg:gap-8">
            <MarketTrendsCard trends={trends} />
          </div>
        </div>
      </div>
    </div>
  );
};

