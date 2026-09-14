import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import Stripe from "https://esm.sh/stripe@14.18.0?target=deno";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { status: 200 });
  }

  const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

  if (!stripeSecretKey || !webhookSecret) {
    console.error("[stripe-webhook] ⚠️ Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET");
    return new Response("Webhook secret not configured", { status: 500 });
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2023-10-16",
    httpClient: Stripe.createFetchHttpClient(),
  });

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    console.warn("[stripe-webhook] ⚠️ Missing stripe-signature header");
    return new Response("Missing signature", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const rawBody = await req.text();
    event = await stripe.webhooks.constructEventAsync(rawBody, signature, webhookSecret);
  } catch (err: any) {
    console.error(`[stripe-webhook] ❌ Webhook signature verification failed: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log(`[stripe-webhook] 📩 Received verified event: ${event.type} (${event.id})`);

  // Service role Supabase client for database mutation (bypasses RLS)
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.client_reference_id || session.metadata?.userId;
        const customerId = session.customer as string;
        const subscriptionId = session.subscription as string;

        if (userId) {
          console.log(`[stripe-webhook] Activating Pro subscription for user: ${userId}`);

          // Fetch full subscription details from Stripe
          let currentPeriodStart = new Date();
          let currentPeriodEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
          let cancelAtPeriodEnd = false;

          if (subscriptionId) {
            try {
              const subObj = await stripe.subscriptions.retrieve(subscriptionId);
              currentPeriodStart = new Date(subObj.current_period_start * 1000);
              currentPeriodEnd = new Date(subObj.current_period_end * 1000);
              cancelAtPeriodEnd = subObj.cancel_at_period_end;
            } catch (fetchErr) {
              console.warn("[stripe-webhook] Could not retrieve subscription details:", fetchErr);
            }
          }

          const { error: upsertError } = await supabase
            .from("subscriptions")
            .upsert(
              {
                user_id: userId,
                provider: "stripe",
                provider_customer_id: customerId,
                provider_subscription_id: subscriptionId,
                plan: "pro",
                status: "active",
                current_period_start: currentPeriodStart.toISOString(),
                current_period_end: currentPeriodEnd.toISOString(),
                cancel_at_period_end: cancelAtPeriodEnd,
                updated_at: new Date().toISOString(),
              },
              { onConflict: "user_id" }
            );

          if (upsertError) {
            console.error("[stripe-webhook] Failed to upsert subscription in Supabase:", upsertError);
            throw upsertError;
          }
        }
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const customerId = sub.customer as string;
        const status = sub.status === "active" ? "active" : sub.status === "trialing" ? "trialing" : sub.status === "past_due" ? "past_due" : sub.status === "canceled" ? "canceled" : "unpaid";

        const { error: updateError } = await supabase
          .from("subscriptions")
          .update({
            status,
            current_period_start: new Date(sub.current_period_start * 1000).toISOString(),
            current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
            cancel_at_period_end: sub.cancel_at_period_end,
            updated_at: new Date().toISOString(),
          })
          .eq("provider_customer_id", customerId);

        if (updateError) {
          console.error("[stripe-webhook] Error updating subscription:", updateError);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const customerId = sub.customer as string;

        const { error: cancelError } = await supabase
          .from("subscriptions")
          .update({
            plan: "free",
            status: "canceled",
            cancel_at_period_end: false,
            updated_at: new Date().toISOString(),
          })
          .eq("provider_customer_id", customerId);

        if (cancelError) {
          console.error("[stripe-webhook] Error cancelling subscription:", cancelError);
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        await supabase
          .from("subscriptions")
          .update({
            status: "past_due",
            updated_at: new Date().toISOString(),
          })
          .eq("provider_customer_id", customerId);
        break;
      }

      default:
        console.log(`[stripe-webhook] Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("[stripe-webhook] Handler error:", err);
    return new Response(`Webhook handler failed: ${err.message}`, { status: 500 });
  }
});
