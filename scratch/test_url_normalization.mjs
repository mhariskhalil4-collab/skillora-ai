function extractCertificateId(inputUrlOrId) {
  if (!inputUrlOrId || typeof inputUrlOrId !== 'string') return null;
  const trimmed = inputUrlOrId.trim();
  if (!trimmed || trimmed === '#' || trimmed === '/') return null;

  if (!trimmed.includes('/') && !trimmed.includes(':') && trimmed.length >= 3) {
    return trimmed;
  }

  try {
    const urlObj = trimmed.includes('://') ? new URL(trimmed) : new URL(trimmed, 'https://skillora-ai-eta.vercel.app');
    const segments = urlObj.pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      const last = segments[segments.length - 1];
      if (last && last !== 'verify' && last !== 'verify-certificate' && !last.includes(':')) {
        return last;
      }
    }
  } catch {
    const segments = trimmed.split(/[/\\?#]/).filter(Boolean);
    if (segments.length > 0) {
      const last = segments[segments.length - 1];
      if (last && last !== 'verify' && last !== 'verify-certificate' && !last.includes(':')) {
        return last;
      }
    }
  }
  return null;
}

function formatCanonicalVerifyUrl(inputUrlOrId) {
  const id = extractCertificateId(inputUrlOrId);
  if (id) {
    return `https://skillora-ai-eta.vercel.app/verify-certificate/${encodeURIComponent(id)}`;
  }
  return `https://skillora-ai-eta.vercel.app/verify-certificate`;
}

const testCases = [
  'http://localhost:3000/verify/c7bef9ae-bbca-4c07-8704-901fde15dffc',
  'http://localhost:3000',
  'http://127.0.0.1:5173/verify-certificate/SKL-2026-PROD99',
  'https://skillora.ai/verify/ab4cfe35-e4a4-440a-9e14-c6e927862bfe',
  'SKL-2026-X8K9M2',
  '/verify-certificate/SKL-2026-X8K9M2',
  '/verify/SKL-2026-X8K9M2',
  'https://skillora-ai-eta.vercel.app/verify-certificate/SKL-2026-X8K9M2',
  null,
  undefined,
  '',
  '#',
];

console.log('--- TEST RESULTS ---');
for (const tc of testCases) {
  const result = formatCanonicalVerifyUrl(tc);
  console.log(`Input:  ${String(tc).padEnd(65)} -> ${result}`);
  if (result.includes('localhost') || result.includes('127.0.0.1') || result.includes('skillora.ai/')) {
    console.error('FAILED SAFETY CHECK FOR:', tc);
    process.exit(1);
  }
}
console.log('\n ALL TEST CASES PASSED THE ZERO-LOCALHOST SAFETY PROTOCOL!');
