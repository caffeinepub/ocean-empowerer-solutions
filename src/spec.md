# Specification

## Summary
**Goal:** Refresh the “Ocean Empowerer Solutions” brand logo to a bold, youthful, forward-thinking typographic style and update the app to use the new logo assets everywhere.

**Planned changes:**
- Create updated typographic logo assets (horizontal, icon, and social/OG) with a growth-oriented, youthful color treatment while maintaining small-size legibility.
- Update `frontend/src/lib/brandAssets.ts` to reference the new generated logo filenames under `/assets/generated/`.
- Replace any remaining hardcoded logo references (including social meta tags in `frontend/index.html`) to use the new logo asset filenames.
- Add the new logo files under `frontend/public/assets/generated/` and verify the app renders/builds without broken logo links.

**User-visible outcome:** The site displays the refreshed logo consistently in the header/footer and social share previews, with no missing or broken images.
