# Specification

## Summary
**Goal:** Update the BuildCraft Construction public website to closely match https://buildcraft.co.in/ in structure, styling, and marketing content while keeping the current single-page section-scroll experience and preserving the existing inquiry flow.

**Planned changes:**
- Update section order/presence and primary navigation labels/anchors to align with the reference site, ensuring all header/footer links scroll correctly to on-page sections.
- Replace any remaining placeholder/ocean-themed content and align all user-facing English marketing copy (hero, about, services, projects, testimonials, contact) to the reference site, managed via the existing site content module.
- Apply construction/industrial brand styling across typography, spacing, buttons, cards, and section backgrounds using Tailwind/global styles and component composition (without editing immutable UI component sources).
- Ensure the site uses the provided construction-themed static assets from `frontend/public/assets/generated` (logos, hero/section imagery) across header, footer, hero, sections, and social/SEO sharing metadata with no broken links.
- Update SEO metadata (title/description/OG/Twitter) to match BuildCraft branding while preserving existing verification files, robots.txt, sitemap.xml, and manifest behavior.
- Keep the contact/inquiry submission functioning end-to-end (validation + success/error states in English) and preserve admin-only access for inquiry list/count while allowing public submissions.

**User-visible outcome:** The public BuildCraft site looks and reads like the buildcraft.co.in reference (navigation, sections, styling, imagery, and copy), with working on-page scrolling, correct construction-themed branding/assets, updated SEO metadata, and a fully functional contact inquiry form.
