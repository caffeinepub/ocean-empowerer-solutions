/**
 * Utility to resolve the current site origin safely.
 * Returns the browser's current origin or a safe fallback for SSR/non-browser contexts.
 */
export function getSiteOrigin(): string {
  if (typeof window !== 'undefined' && window.location) {
    return window.location.origin;
  }
  // Fallback for non-browser contexts (should not happen in this SPA)
  return '';
}

/**
 * Get the full URL for a given path using the current site origin.
 */
export function getSiteUrl(path: string = '/'): string {
  const origin = getSiteOrigin();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${normalizedPath}`;
}
