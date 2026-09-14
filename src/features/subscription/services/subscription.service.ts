import { supabase } from '@/lib/supabase';
import { UserSubscription, SubscriptionPlan } from '../types/subscription.types';
import { useAuthStore } from '@/features/auth/store/auth.store';

const LOCAL_STORAGE_SUB_KEY = 'skillora_user_subscription';

export const SubscriptionService = {
  /**
   * Fetches the current user's subscription record from Supabase.
   */
  getUserSubscription: async (userId?: string): Promise<UserSubscription> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    if (effectiveUserId) {
      try {
        const { data, error } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', effectiveUserId)
          .maybeSingle();

        if (error && error.code !== 'PGRST116') {
          console.warn('[SubscriptionService] Error fetching subscription:', error.message);
        }

        if (data) {
          const subscription: UserSubscription = {
            id: data.id,
            userId: data.user_id,
            provider: data.provider || 'stripe',
            providerCustomerId: data.provider_customer_id || undefined,
            providerSubscriptionId: data.provider_subscription_id || undefined,
            plan: (data.plan as SubscriptionPlan) || 'free',
            status: data.status || 'active',
            currentPeriodStart: data.current_period_start ? new Date(data.current_period_start) : undefined,
            currentPeriodEnd: data.current_period_end ? new Date(data.current_period_end) : undefined,
            cancelAtPeriodEnd: Boolean(data.cancel_at_period_end),
            createdAt: new Date(data.created_at),
            updatedAt: new Date(data.updated_at),
          };

          try {
            localStorage.setItem(LOCAL_STORAGE_SUB_KEY, JSON.stringify(subscription));
          } catch (_) {}

          return subscription;
        }
      } catch (err) {
        console.error('[SubscriptionService] Unexpected subscription query error:', err);
      }
    }

    // Default Free Tier
    return {
      id: `sub_free_${effectiveUserId || 'guest'}`,
      userId: effectiveUserId || 'guest',
      provider: 'stripe',
      plan: 'free',
      status: 'active',
      cancelAtPeriodEnd: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },

  /**
   * Starts a secure Stripe Checkout Session by invoking the Supabase Edge Function.
   */
  createCheckoutSession: async (priceId?: string): Promise<{ url: string; sessionId?: string }> => {
    const returnUrl = window.location.origin;

    const { data, error } = await supabase.functions.invoke('create-checkout-session', {
      body: {
        priceId,
        returnUrl,
      },
    });

    if (error) {
      console.error('[SubscriptionService] Checkout invocation failed:', error);
      throw new Error(error.message || 'Failed to initialize payment gateway.');
    }

    if (!data?.url) {
      throw new Error(data?.message || data?.error || 'Payment gateway did not return a checkout URL.');
    }

    return {
      url: data.url,
      sessionId: data.sessionId,
    };
  },

  /**
   * Opens the Stripe Customer Billing Portal for subscription management and cancellation.
   */
  createCustomerPortalSession: async (): Promise<{ url: string }> => {
    const returnUrl = window.location.origin;

    const { data, error } = await supabase.functions.invoke('create-customer-portal', {
      body: { returnUrl },
    });

    if (error) {
      console.error('[SubscriptionService] Portal invocation failed:', error);
      throw new Error(error.message || 'Failed to open billing portal.');
    }

    if (!data?.url) {
      throw new Error(data?.error || 'Billing portal URL not received.');
    }

    return { url: data.url };
  },

  /**
   * Helper to verify if a subscription has active Pro entitlements.
   */
  isPro: (subscription: UserSubscription | null): boolean => {
    if (!subscription) return false;
    return subscription.plan === 'pro' && (subscription.status === 'active' || subscription.status === 'trialing');
  },
};
