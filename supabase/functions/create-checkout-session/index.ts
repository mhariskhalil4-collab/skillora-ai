import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import Stripe from "https://esm.sh/stripe@14.18.0?target=deno";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    const stripePriceId = Deno.env.get("STRIPE_PRICE_ID");
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";

    if (!stripeSecretKey) {
      console.warn("[create-checkout-session] ⚠️ STRIPE_SECRET_KEY is not configured.");
      return new Response(
        JSON.stringify({
          error: "Stripe is not configured on this server.",
          message: "Please configure STRIPE_SECRET_KEY in Supabase secrets.",
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 1. Authenticate user from Supabase JWT in Authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized: Missing Authorization header." }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized: Invalid user session." }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json().catch(() => ({}));
    const monthlyPriceId = Deno.env.get("STRIPE_PRICE_ID_MONTHLY") || stripePriceId;
    const annualPriceId = Deno.env.get("STRIPE_PRICE_ID_ANNUAL") || stripePriceId;
    
    // Determine validated price ID based on selected plan
    let resolvedPriceId: string | undefined;
    if (body.plan === "annual" || body.priceId === "annual") {
      resolvedPriceId = annualPriceId;
    } else if (body.plan === "monthly" || body.priceId === "monthly") {
      resolvedPriceId = monthlyPriceId;
    } else if (body.priceId === monthlyPriceId || body.priceId === annualPriceId || body.priceId === stripePriceId) {
      resolvedPriceId = body.priceId;
    } else {
      resolvedPriceId = monthlyPriceId || annualPriceId || stripePriceId;
    }

    const returnUrl = body.returnUrl || req.headers.get("origin") || "http://localhost:3000";

    if (!resolvedPriceId) {
      return new Response(
        JSON.stringify({
          error: "Missing Stripe Price ID.",
          message: "Please configure STRIPE_PRICE_ID_MONTHLY / STRIPE_PRICE_ID_ANNUAL in Supabase Secrets.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
      httpClient: Stripe.createFetchHttpClient(),
    });

    // 2. Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: resolvedPriceId,
          quantity: 1,
        },
      ],
      client_reference_id: user.id,
      customer_email: user.email,
      metadata: {
        userId: user.id,
        userEmail: user.email || "",
      },
      subscription_data: {
        metadata: {
          userId: user.id,
        },
      },
      success_url: `${returnUrl}/profile?tab=settings&checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${returnUrl}/profile?tab=settings&checkout=cancelled`,
    });

    console.log(`[create-checkout-session] ✓ Checkout session created for user ${user.id}: ${session.id}`);

    return new Response(
      JSON.stringify({
        url: session.url,
        sessionId: session.id,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("[create-checkout-session] ❌ Error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Failed to create checkout session." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
