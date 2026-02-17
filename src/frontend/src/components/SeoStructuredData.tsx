import { useEffect } from 'react';
import { siteContent } from '../content/siteContent';
import { BRAND_ASSETS } from '../lib/brandAssets';
import { getSiteOrigin } from '../lib/siteOrigin';

export function SeoStructuredData() {
  useEffect(() => {
    const origin = getSiteOrigin();
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteContent.company.name,
      description: siteContent.company.description,
      url: origin,
      logo: `${origin}${BRAND_ASSETS.logoSocial}`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteContent.contact.info.phone,
        email: siteContent.contact.info.email,
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1247 Construction Way',
        addressLocality: 'Builder\'s District',
        addressRegion: 'TX',
        postalCode: '75001',
        addressCountry: 'US',
      },
      sameAs: [],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'structured-data';

    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
