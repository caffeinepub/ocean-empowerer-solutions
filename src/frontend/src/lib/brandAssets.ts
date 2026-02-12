/**
 * Single source of truth for brand asset static paths.
 * All logo and social image references should use these constants
 * to ensure consistency across the application.
 */

export const BRAND_ASSETS = {
  // Primary horizontal logo for header and footer (PNG)
  logoHorizontal: '/assets/generated/bold-youthful-logo-horizontal.dim_512x128.png',
  
  // Square icon variant for favicons and small displays (PNG)
  logoIcon: '/assets/generated/bold-youthful-logo-icon.dim_256x256.png',
  
  // Wide social sharing image for OG/Twitter cards (PNG)
  logoSocial: '/assets/generated/bold-youthful-logo-social.dim_512x256.png',
  
  // JPG exports for download (keeping same paths as PNG for consistency)
  logoHorizontalJpg: '/assets/generated/bold-youthful-logo-horizontal.dim_512x128.png',
  logoIconJpg: '/assets/generated/bold-youthful-logo-icon.dim_256x256.png',
  logoSocialJpg: '/assets/generated/bold-youthful-logo-social.dim_512x256.png',
} as const;
