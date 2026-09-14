/**
 * Centralized URL validation and sanitization utility for Skillora AI.
 * Prevents Cross-Site Scripting (XSS) via javascript:, data:, vbscript:, and other dangerous URI schemes.
 */

// Strict list of disallowed dangerous protocol prefixes (case-insensitive)
const DANGEROUS_PROTOCOL_REGEX = /^(?:javascript|data|vbscript|file|blob|about):/i;

/**
 * Strips non-printable ASCII control characters and zero-width spaces from a string.
 */
function stripControlCharacters(input: string): string {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    // Exclude control characters 0-31, 127-159, and zero-width unicode
    if ((code >= 0 && code <= 31) || (code >= 127 && code <= 159) || code === 0x200b || code === 0x200c || code === 0x200d || code === 0xfeff) {
      continue;
    }
    output += input[i];
  }
  return output;
}

/**
 * Sanitizes a URL string by stripping control characters, verifying protocols, and rejecting malicious schemes.
 * 
 * @param rawUrl The unvalidated user input string.
 * @param allowedProtocols Array of allowed protocols (e.g., ['http:', 'https:'] or ['http:', 'https:', 'mailto:']).
 * @returns The sanitized URL string, or null if the URL is invalid or unsafe.
 */
export function sanitizeUrl(
  rawUrl?: string | null,
  allowedProtocols: string[] = ['http:', 'https:']
): string | null {
  if (!rawUrl || typeof rawUrl !== 'string') {
    return null;
  }

  // Remove control characters, null bytes, and surrounding whitespace
  let clean = stripControlCharacters(rawUrl).trim();

  if (!clean) {
    return null;
  }

  // Explicitly check and reject dangerous protocols
  if (DANGEROUS_PROTOCOL_REGEX.test(clean)) {
    console.warn('[Security] Blocked dangerous URI scheme in URL:', clean);
    return null;
  }

  // If the user entered a domain without protocol (e.g., "github.com/user" or "www.portfolio.dev")
  // and we only allow http/https, auto-prefix with https:// for safe link navigation
  const hasScheme = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(clean);
  if (!hasScheme && (allowedProtocols.includes('https:') || allowedProtocols.includes('http:'))) {
    clean = `https://${clean}`;
  }

  try {
    const parsed = new URL(clean);
    const protocol = parsed.protocol.toLowerCase();

    // Verify protocol is in the whitelist
    if (!allowedProtocols.includes(protocol)) {
      console.warn(`[Security] Blocked disallowed protocol "${protocol}" in URL:`, clean);
      return null;
    }

    return parsed.href;
  } catch (parseError) {
    // URL constructor throws if string is not a well-formed absolute URL
    console.warn('[Security] Failed to parse URL:', clean, parseError);
    return null;
  }
}

/**
 * Validates whether a given URL is safe and adheres to allowed protocols.
 */
export function isValidUrl(
  rawUrl?: string | null,
  allowedProtocols: string[] = ['http:', 'https:']
): boolean {
  return sanitizeUrl(rawUrl, allowedProtocols) !== null;
}

/**
 * Generates safe React anchor tag attributes for external links.
 */
export function getSafeExternalLinkProps(rawUrl?: string | null) {
  const sanitized = sanitizeUrl(rawUrl, ['http:', 'https:']);
  if (!sanitized) {
    return {
      href: '#',
      onClick: (e: React.MouseEvent) => e.preventDefault(),
      'aria-disabled': true,
    };
  }

  return {
    href: sanitized,
    target: '_blank' as const,
    rel: 'noopener noreferrer' as const,
  };
}
