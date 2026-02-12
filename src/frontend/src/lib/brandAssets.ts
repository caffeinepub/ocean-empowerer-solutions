/**
 * Single source of truth for brand asset static paths.
 * All logo and social image references should use these constants
 * to ensure consistency across the application.
 */

export const BRAND_ASSETS = {
  // Primary horizontal logo for header and footer
  logoHorizontal: '/assets/generated/premium-logo-horizontal-empowerment.dim_512x128.png',
  
  // Square icon variant for favicons and small displays
  logoIcon: '/assets/generated/premium-logo-icon-empowerment.dim_256x256.png',
  
  // Wide social sharing image for OG/Twitter cards
  logoSocial: '/assets/generated/ocean-empowerer-solutions-logo-empowerment.dim_512x256.png',
} as const;
