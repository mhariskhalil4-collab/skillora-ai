async function verifyLive() {
  try {
    const res = await fetch('https://skillora-ai-eta.vercel.app/verify-certificate/SKL-2026-DEMO');
    console.log('Live Verification Route Status:', res.status);
    const html = await res.text();
    console.log('HTML contains root div:', html.includes('id="root"'));
    
    const match = html.match(/\/assets\/index-[^"']+\.js/);
    if (match) {
      const jsUrl = 'https://skillora-ai-eta.vercel.app' + match[0];
      console.log('Fetching live bundle:', jsUrl);
      const jsRes = await fetch(jsUrl);
      const jsText = await jsRes.text();
      console.log('Bundle contains verify-certificate route:', jsText.includes('/verify-certificate/'));
      console.log('Bundle contains production base URL:', jsText.includes('https://skillora-ai-eta.vercel.app/verify-certificate'));
      console.log('Bundle contains VerifyCertificateScreen:', jsText.includes('Official Verified Credential') || jsText.includes('VerifyCertificateScreen') || jsText.includes('CERTIFICATE ID'));
    }
  } catch (err) {
    console.error('Error verifying live:', err);
  }
}

verifyLive();
