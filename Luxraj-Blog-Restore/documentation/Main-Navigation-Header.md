# Lux Omni Blog — Main Navigation Header

**Status:** Implemented for development on 2026-10-25.

## Confirmed visual direction
- Use the supplied transparent-symbol SVG, not the app-icon SVG.
- The visible **LUX OMNI** wordmark is bold, uppercase, and crimson in both themes.
- Keep the main navigation separate from the finalized copper top information bar.
- Keep desktop navigation to a single row; expand it into a keyboard/touch-friendly menu on small screens.

## Navigation behavior
The primary labels navigate directly to their parent landing pages: Tech, Reviews, How To, Hardware, Software and Buying Advice. A separate adjacent arrow button opens each dropdown on click. Hover does not open a menu. Escape closes open menus.

## Search
Search opens an accessible modal popup. It supports text search over article title, summary and tags; category filtering; a reading-time slider; and sorting by newest/oldest date, category, and article title A–Z/Z–A. The data index is a static JavaScript module at `site/assets/js/article-index.js`.

## Theme
The theme toggle switches between the existing semantic light/dark token sets and persists the choice to localStorage under `lux-omni-blog-theme`. The page starts in the current dark preview theme unless a saved preference overrides it. The wordmark is crimson in both themes.

## Implementation destinations
- `site/assets/css/header.css` — header structure, wordmark and controls.
- `site/assets/css/dropdowns.css` — click-controlled menus.
- `site/assets/css/responsive.css` — responsive navigation and layout.
- `site/assets/css/search.css` — search popup and filters.
- `site/assets/js/main.js` — JavaScript entry point.
- `site/assets/js/theme.js` — theme toggle and persistence.
- `site/assets/js/navigation.js` — dropdown and mobile navigation.
- `site/assets/js/search.js` — search/filter/sort behavior.
- `site/assets/js/article-index.js` — shared sample article metadata.

Sample copy is development content and must be replaced with reviewed editorial material before launch.
