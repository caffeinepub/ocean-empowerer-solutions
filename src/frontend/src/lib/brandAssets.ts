/**
 * Single source of truth for brand asset static paths.
 * All logo and social image references should use these constants
 * to ensure consistency across the application.
 */

export const BRAND_ASSETS = {
  // Primary horizontal logo for header and footer (PNG)
  logoHorizontal: '/assets/generated/premium-logo-horizontal-empowerment.dim_512x128.png',
  
  // Square icon variant for favicons and small displays (PNG)
  logoIcon: '/assets/generated/premium-logo-icon-empowerment.dim_256x256.png',
  
  // Wide social sharing image for OG/Twitter cards (PNG)
  logoSocial: '/assets/generated/ocean-empowerer-solutions-logo-empowerment.dim_512x256.png',
  
  // JPG exports for download
  logoHorizontalJpg: '/assets/generated/premium-logo-horizontal-empowerment.dim_512x128.jpg',
  logoIconJpg: '/assets/generated/premium-logo-icon-empowerment.dim_256x256.jpg',
  logoSocialJpg: '/assets/generated/ocean-empowerer-solutions-logo-empowerment.dim_512x256.jpg',
} as const;
