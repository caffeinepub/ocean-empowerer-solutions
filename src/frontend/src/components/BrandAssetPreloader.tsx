import { useEffect } from 'react';
import { BRAND_ASSETS } from '../lib/brandAssets';

/**
 * Non-visual component that preloads brand logo assets on app mount
 * and logs warnings if any fail to load, helping detect missing static assets early.
 */
export function BrandAssetPreloader() {
  useEffect(() => {
    const assetsToPreload = [
      { path: BRAND_ASSETS.logoHorizontal, name: 'Horizontal Logo' },
      { path: BRAND_ASSETS.logoIcon, name: 'Icon Logo' },
      { path: BRAND_ASSETS.logoSocial, name: 'Social Logo' },
    ];

    assetsToPreload.forEach(({ path, name }) => {
      const img = new Image();
      img.onload = () => {
        console.log(`✓ ${name} loaded successfully: ${path}`);
      };
      img.onerror = () => {
        console.warn(`⚠ Failed to load ${name}: ${path}`);
      };
      img.src = path;
    });
  }, []);

  return null;
}
