import { useState, useEffect, useCallback } from 'react';
import { UserSubscription } from '../types/subscription.types';
import { SubscriptionService } from '../services/subscription.service';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { EARLY_ACCESS_FREE } from '@/config/access.config';

export function useSubscription() {
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUpgrading, setIsUpgrading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const authUser = useAuthStore((state) => state.user);

  const loadSubscription = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const sub = await SubscriptionService.getUserSubscription(authUser?.id);
      setSubscription(sub);
    } catch (err: any) {
      console.warn('[useSubscription] Error loading subscription:', err);
      setError(err.message || 'Could not load subscription details.');
    } finally {
      setIsLoading(false);
    }
  }, [authUser?.id]);

  useEffect(() => {
    loadSubscription();
  }, [loadSubscription]);

  const upgradeToPro = async (priceId?: string) => {
    setIsUpgrading(true);
    setError(null);
    try {
      const { url } = await SubscriptionService.createCheckoutSession(priceId);
      window.location.href = url;
    } catch (err: any) {
      console.error('[useSubscription] Upgrade error:', err);
      setError(err.message || 'Payment gateway is temporarily unavailable. Please try again later.');
      setIsUpgrading(false);
      throw err;
    }
  };

  const openCustomerPortal = async () => {
    setIsUpgrading(true);
    setError(null);
    try {
      const { url } = await SubscriptionService.createCustomerPortalSession();
      window.location.href = url;
    } catch (err: any) {
      console.error('[useSubscription] Portal error:', err);
      setError(err.message || 'Unable to open billing portal.');
      setIsUpgrading(false);
      throw err;
    }
  };

  // Authoritative database-level Pro check (preserved for real Stripe subscriptions)
  const isPaidPro = SubscriptionService.isPro(subscription);

  // Feature entitlement: active if user has paid Pro or during Free Early Access
  const isPro = EARLY_ACCESS_FREE || isPaidPro;

  return {
    subscription,
    isPro,
    isPaidPro,
    isEarlyAccess: EARLY_ACCESS_FREE,
    isLoading,
    isUpgrading,
    error,
    refreshSubscription: loadSubscription,
    upgradeToPro,
    openCustomerPortal,
  };
}
