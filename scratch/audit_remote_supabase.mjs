const supabaseUrl = 'https://perclaccxozkwkeogewo.supabase.co';
const supabaseAnonKey = 'sb_publishable_OD4f_odyS7Ybk1IAtXzRew_SY-FNrj4';

async function auditLiveSupabase() {
  console.log('=== AUDITING LIVE DEPLOYED SUPABASE ENVIRONMENT ONLY ===\n');

  try {
    const res = await fetch(`${supabaseUrl}/functions/v1/study-buddy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'apikey': supabaseAnonKey
      },
      body: JSON.stringify({
        message: 'Audit live secret format'
      })
    });

    const status = res.status;
    const body = await res.json();

    console.log('Live Function HTTP Status:', status);
    console.log('Live Function Payload:', JSON.stringify(body, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

auditLiveSupabase();
