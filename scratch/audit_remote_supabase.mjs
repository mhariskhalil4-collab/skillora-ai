const supabaseUrl = 'https://perclaccxozkwkeogewo.supabase.co';
const supabaseAnonKey = 'sb_publishable_OD4f_odyS7Ybk1IAtXzRew_SY-FNrj4';

async function queryStudyBuddy(prompt) {
  console.log(`\n======================================================`);
  console.log(`Testing Question: "${prompt}"`);
  try {
    const res = await fetch(`${supabaseUrl}/functions/v1/study-buddy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'apikey': supabaseAnonKey,
      },
      body: JSON.stringify({
        message: prompt,
        context: {
          courseId: 'python',
          courseTitle: 'Python Masterclass',
          taskTitle: 'Fundamentals of HTML',
        },
      }),
    });

    const status = res.status;
    const body = await res.json();
    console.log('HTTP Status:', status);
    console.log('Reply:\n', body.reply || JSON.stringify(body, null, 2));
  } catch (err) {
    console.error('Error querying:', err);
  }
}

async function testAll() {
  await queryStudyBuddy('What is machine learning?');
  await queryStudyBuddy('What is Python?');
  await queryStudyBuddy('What is Docker?');
  await queryStudyBuddy('Explain neural networks');
}

testAll();
