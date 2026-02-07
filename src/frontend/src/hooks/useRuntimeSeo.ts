import { useEffect } from 'react';
import { getSiteUrl } from '../lib/siteOrigin';

/**
 * Hook that updates canonical and social meta tags at runtime
 * to use the actual deployed origin instead of hardcoded domains.
 */
export function useRuntimeSeo() {
  useEffect(() => {
    const currentUrl = getSiteUrl(window.location.pathname);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = currentUrl;

    // Update Twitter URL
    let twitterUrl = document.querySelector('meta[property="twitter:url"]') as HTMLMetaElement;
    if (!twitterUrl) {
      twitterUrl = document.createElement('meta');
      twitterUrl.setAttribute('property', 'twitter:url');
      document.head.appendChild(twitterUrl);
    }
    twitterUrl.content = currentUrl;
  }, []);
}
