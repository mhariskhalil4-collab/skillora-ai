import React, { useState } from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { SKILLORA_PLAN_FEATURES } from '../types/subscription.types';
import { Button } from '@/components/elements/Button';
import {
  CheckIcon,
  XMarkIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  const { isPaidPro, isEarlyAccess, upgradeToPro, isUpgrading, error } = useSubscription();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [localError, setLocalError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleUpgrade = async () => {
    setLocalError(null);
    try {
      await upgradeToPro(billingCycle);
    } catch (err: any) {
      setLocalError(err.message || 'Payment gateway connection failed. Please verify Stripe configuration.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[color:var(--color-bg-card)] border border-brand/40 rounded-3xl w-full max-w-4xl shadow-[0_0_50px_rgba(99,91,255,0.25)] overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative p-6 sm:p-8 text-center border-b border-border bg-gradient-to-b from-brand/10 via-transparent to-transparent">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[color:var(--text-secondary)] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/15 border border-brand/30 text-brand text-xs font-mono font-semibold mb-3">
            <SparklesIcon className="w-3.5 h-3.5" /> {isEarlyAccess ? 'Free Early Access Active' : 'Accelerate Your Career'}
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[color:var(--text-primary)]">
            Upgrade to <span className="text-brand">Skillora Pro</span>
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)] max-w-lg mx-auto mt-2">
            {isEarlyAccess 
              ? 'All Skillora AI features are currently unlocked and free for all learners during our Early Access phase.' 
              : 'Unlock unlimited AI mentoring, deep tech role wage benchmarks, verified pro badges, and priority code reviews.'}
          </p>

          {/* Billing Cycle Switch */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span
              className={cn(
                'text-xs font-heading font-medium cursor-pointer',
                billingCycle === 'monthly' ? 'text-[color:var(--text-primary)] font-bold' : 'text-[color:var(--text-secondary)]'
              )}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-brand/30 transition-colors duration-200 ease-in-out focus:outline-none"
            >
              <span
                className={cn(
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-brand shadow ring-0 transition duration-200 ease-in-out',
                  billingCycle === 'annual' ? 'translate-x-6 bg-white' : 'translate-x-0 bg-brand'
                )}
              />
            </button>
            <span
              className={cn(
                'text-xs font-heading font-medium cursor-pointer flex items-center gap-1.5',
                billingCycle === 'annual' ? 'text-brand font-bold' : 'text-[color:var(--text-secondary)]'
              )}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Save 25%</span>
            </span>
          </div>
        </div>

        {/* Early Access Free Notice */}
        {isEarlyAccess && !isPaidPro && (
          <div className="mx-6 mt-4 p-4 rounded-2xl bg-brand/10 border border-brand/30 text-xs text-[color:var(--text-primary)] flex items-start gap-3">
            <SparklesIcon className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-heading font-bold text-brand block sm:inline">Free Early Access Phase: </span>
              <span>All Skillora AI features (Unlimited AI Study Buddy, Career GPS, AI Skill Gap Analysis, Interactive Quizzes, and Verified Certificates) are currently unlocked and free for all learners.</span>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {(localError || error) && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-medium flex items-center gap-2">
            <ExclamationCircleIcon className="w-4 h-4 flex-shrink-0" />
            <span>{localError || error}</span>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Tier */}
          <div className="rounded-2xl border border-border bg-[color:var(--color-bg-base)] p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">Free Learner</h3>
                <p className="text-xs text-[color:var(--text-secondary)] mt-1">Core foundations for aspiring tech professionals.</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-heading font-black text-[color:var(--text-primary)]">$0</span>
                <span className="text-xs text-[color:var(--text-secondary)] font-mono">/ forever</span>
              </div>
              <ul className="space-y-3 pt-4 border-t border-border text-xs text-[color:var(--text-primary)]">
                {SKILLORA_PLAN_FEATURES.filter((f) => f.includedInFree).map((feature) => (
                  <li key={feature.title} className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="outline" className="w-full cursor-default opacity-70" disabled>
              {isEarlyAccess ? 'Early Access Active' : 'Current Free Tier'}
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="relative rounded-2xl border-2 border-brand bg-gradient-to-b from-brand/15 via-[color:var(--color-bg-card)] to-brand/5 p-6 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-brand text-white text-[10px] font-heading font-bold tracking-wider uppercase shadow-ai-glow">
              {isEarlyAccess ? 'Free In Early Access' : 'Most Popular'}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2">
                  <span>Skillora Pro</span>
                  <BoltIcon className="w-4 h-4 text-brand" />
                </h3>
                <p className="text-xs text-[color:var(--text-secondary)] mt-1">For candidates serious about securing high-income roles.</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-heading font-black text-brand">
                  {billingCycle === 'annual' ? '$15' : '$19'}
                </span>
                <span className="text-xs text-[color:var(--text-secondary)] font-mono">
                  / month {billingCycle === 'annual' && '(billed annually)'}
                </span>
              </div>
              <ul className="space-y-3 pt-4 border-t border-border text-xs text-[color:var(--text-primary)]">
                {SKILLORA_PLAN_FEATURES.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                    <span>
                      {feature.title}{' '}
                      {feature.proHighlight && (
                        <strong className="text-brand block sm:inline font-semibold">({feature.proHighlight})</strong>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {isPaidPro ? (
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-heading font-bold">
                <ShieldCheckIcon className="w-5 h-5" /> You are an Active Pro Member!
              </div>
            ) : isEarlyAccess ? (
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-brand/20 border border-brand/40 text-brand text-xs font-heading font-bold shadow-ai-glow">
                <SparklesIcon className="w-4 h-4 text-brand" /> All Pro Features Unlocked (Early Access)
              </div>
            ) : (
              <Button
                variant="primary"
                className="w-full shadow-ai-glow cursor-pointer"
                isLoading={isUpgrading}
                onClick={handleUpgrade}
              >
                <SparklesIcon className="w-4 h-4 mr-1.5" /> Upgrade to Pro Now
              </Button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-[color:var(--color-bg-base)] text-center text-xs text-[color:var(--text-secondary)] font-mono">
          🔒 Secure 256-bit encrypted checkout powered by Stripe • Cancel anytime
        </div>
      </div>
    </div>
  );
};
