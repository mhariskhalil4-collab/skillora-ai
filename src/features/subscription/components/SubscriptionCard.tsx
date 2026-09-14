import React, { useState } from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { PricingModal } from './PricingModal';
import { Card } from '@/components/data-display/Card';
import { Button } from '@/components/elements/Button';
import {
  SparklesIcon,
  CreditCardIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';
import { ACCESS_CONFIG } from '@/config/access.config';

export const SubscriptionCard: React.FC = () => {
  const { subscription, isPaidPro, isEarlyAccess, isUpgrading, openCustomerPortal } = useSubscription();
  const [showPricingModal, setShowPricingModal] = useState(false);

  let planName = 'Free Learner Plan';
  let badgeText = 'Free Plan';
  let renewalText = 'Upgrade to Skillora Pro for unlimited AI Study Buddy mentoring, wage benchmarks, and verified pro credentials.';

  if (isPaidPro) {
    planName = 'Skillora Pro';
    badgeText = 'Pro Member';
    const formattedDate = subscription?.currentPeriodEnd
      ? new Date(subscription.currentPeriodEnd).toLocaleDateString()
      : 'monthly';
    renewalText = `Active Pro subscription • Renews ${formattedDate}`;
  } else if (isEarlyAccess) {
    planName = 'Free Early Access';
    badgeText = 'All Features Unlocked';
    renewalText = ACCESS_CONFIG.statusMessage;
  }

  return (
    <>
      <Card className="relative overflow-hidden border-brand/30 bg-gradient-to-br from-[color:var(--color-bg-card)] via-[color:var(--color-bg-card)] to-brand/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand/10 text-brand border border-brand/20">
                <CreditCardIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
                    {planName}
                  </h2>
                  <span
                    className={cn(
                      'text-xs font-mono px-2.5 py-0.5 rounded-full border font-semibold flex items-center gap-1',
                      isPaidPro || isEarlyAccess
                        ? 'bg-brand/15 text-brand border-brand/40 shadow-ai-glow'
                        : 'bg-zinc-500/10 text-[color:var(--text-secondary)] border-border'
                    )}
                  >
                    {(isPaidPro || isEarlyAccess) && <SparklesIcon className="w-3.5 h-3.5 text-brand" />}
                    {badgeText}
                  </span>
                </div>
                <p className="text-xs text-[color:var(--text-secondary)] mt-0.5">
                  {renewalText}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {isPaidPro ? (
              <Button
                type="button"
                variant="outline"
                size="sm"
                isLoading={isUpgrading}
                onClick={openCustomerPortal}
                className="flex items-center gap-1.5 cursor-pointer"
              >
                <span>Manage Billing</span>
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 ml-0.5" />
              </Button>
            ) : (
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={() => setShowPricingModal(true)}
                className="flex items-center gap-1.5 shadow-ai-glow cursor-pointer"
              >
                <SparklesIcon className="w-4 h-4" />
                <span>{isEarlyAccess ? 'Early Access Plan' : 'Upgrade to Pro'}</span>
              </Button>
            )}
          </div>
        </div>
      </Card>

      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />
    </>
  );
};
