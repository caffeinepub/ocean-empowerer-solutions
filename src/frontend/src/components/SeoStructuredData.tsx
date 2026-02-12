import { siteContent } from '../content/siteContent';
import { getSiteUrl } from '../lib/siteOrigin';
import { BRAND_ASSETS } from '../lib/brandAssets';

export function SeoStructuredData() {
  const siteUrl = getSiteUrl('/');
  const logoUrl = getSiteUrl(BRAND_ASSETS.logoSocial);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteContent.company.name,
    "description": siteContent.company.description,
    "url": siteUrl,
    "logo": logoUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RK Salai, Mylapore",
      "addressLocality": "Chennai",
      "postalCode": "600004",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteContent.contact.info.phone,
      "contactType": "customer service"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
