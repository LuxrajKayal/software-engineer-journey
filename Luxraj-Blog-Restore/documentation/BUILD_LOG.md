# Lux Omni Blog — Build and Planning Log

**Implementation status:** Initial shared navigation/search/theme implementation completed; broader homepage and editorial content build remains in progress.

Append-only after implementation begins. Record real milestones only; do not pre-fill future work as completed.

## Planning milestone — 2026-10-25
- Discussed excluding a separate backend/local Article Studio from the initial scope.
- Updated draft workflow to author individual HTML articles in VS Code, use proposed Git/GitHub checkpoints, and include SEO fundamentals from the beginning.
- Hosting/deployment, backend, and control-panel choices remain unresolved.
- No code, repository, or deployment changes were made.


## 2026-10-25 — Article-group page planning update

- Documented the homepage → group landing page → individual article hierarchy.
- Recorded six linkable sample articles per final group for development testing and a canonical article-template contract.
- Updated planning documents only; no repository or deployment changes occurred.

## 2026-10-25 — Initial repository skeleton

- Added a blank public-site skeleton under `site/`.
- Added root-level `documentation/` with the planning reference files.
- Added a separate blank `control-panel/` skeleton for the future application.
- Added six blank sample article files in each of the five currently listed article groups (30 sample files total).
- No website implementation code or article content was added. The existing root `README.md` was left unchanged.


## 2026-10-25 — Main header, category destinations, search and theme

- Implemented the single-row CNET-inspired navigation with the supplied transparent-symbol SVG and a bold uppercase crimson LUX OMNI wordmark that remains crimson across themes.
- Added direct parent links and separate click-operated dropdown controls for Tech, Reviews, How To, Hardware, Software and Buying Advice; hover does not open menus.
- Added dedicated parent and dropdown-category landing pages and linkable sample article HTML pages for all current menu categories.
- Implemented the search popup with text search, category filtering, a reading-time slider and sorting by date/category/article title.
- Implemented a persistent light/dark theme toggle and placed JavaScript in the existing `site/assets/js/` structure with `main.js` as the entry point.
- Added responsive navigation and updated the file map and navigation planning documents. The finalized copper topbar stylesheet and design tokens were not changed.


## 2026-10-27 — Control panel removed

- Deleted the complete `control-panel/` directory and its HTML/CSS/JavaScript placeholders.
- Updated `.github/workflows/pages.yml` to publish only `site/`; removed the `/dev/` assembly, control-panel existence check, and control-panel path trigger.
- Updated active architecture and feature planning documents to use manual source-file configuration instead of a control-panel workflow.
- No public-site source files were changed as part of this removal.


## 2026-10-27 — Category folder migration

- Reorganized seven main categories and 44 subcategories beneath `site/categories/`, using distinct descriptive landing-page filenames. `site/index.html` remains the only `index.html` page.
- Migrated 40 existing populated sample articles into their subcategory-specific `articles/` folders with descriptive filenames.
- Added Engineering's Electrical Engineering, Mechanical Engineering, Labs and Drone Technology topic pages, with five sample articles per topic.
- Updated article-index hrefs, the dynamic Engineering navigation, local links/assets and each page's `data-site-root`.
- Preserved old `sections/` and `articles/` URLs with compatibility redirects and regenerated the canonical sitemap with 112 URLs.
- Kept all CSS files unchanged.

## 2026-10-27 — Legacy redirect and template-placeholder cleanup

- Deleted 52 legacy landing-page redirect files from `site/sections/` and 46 legacy article redirect files from the top-level `site/articles/`.
- Removed the now-empty legacy folders; canonical category pages and articles remain under `site/categories/`.
- Intentionally deleted the empty `site/templates/article-template.html` placeholder. No shared article-template file currently exists.
- Kept the canonical sitemap unchanged at 112 URLs and preserved the existing CSS files.
- Updated `documentation/Lux-Omni-Blog-FileMap.md` to describe the actual repository structure.

## 2026-10-27 — Shared shell components and homepage-only build

- Added source-only partials for the topbar, main navigation header (including the search dialog), and footer under site/partials/.
- Added scripts/build-site.mjs to expand explicit shared-component markers into full HTML at build time, resolve local component links for the current page depth, exclude source partials from public output, and verify the built homepage shell.
- Migrated only site/index.html to shared markers. Category, subcategory, article, and other pages retain their existing markup until the owner approves each subsequent migration step.
- Kept the footer content blank and retained the existing dedicated CSS files.
- Updated the GitHub Pages workflow to run the build before deployment and updated the file map to describe the implemented source/build/output structure.


## 2026-10-27 — Source-level shared shell migration

- Migrated all 112 populated HTML pages under `site/` to one explicit marker each for the canonical topbar, main header/search dialog, and footer.
- Removed the duplicated inline topbar, main header, and search dialog from category, subcategory, and article source files; replaced any existing shared footer shell where present, and added the shared footer marker to each populated page.
- Preserved page-specific content, metadata, URLs, CSS references, and JavaScript; five empty HTML placeholders were left unchanged.
- Reworked `scripts/build-site.mjs` into a marker-only assembler. It rejects populated pages with missing/duplicate markers or leftover hardcoded shared shell markup instead of automatically replacing legacy source markup.
- Updated the file map to describe the source-level shared-component structure and strict build behavior.

## 2026-10-27 — Initial shared footer content

- Replaced the empty footer partial with a brand summary, round author avatar/profile link, seven main-category links, the existing article-search trigger, a link to the public source repository, copyright, and Back to Top.
- Kept the author-page destination at the requested temporary `https://example.com` URL; the avatar uses the repository owner's public GitHub profile image.
- Implemented responsive footer columns and theme-aware text masks so the circuit pattern does not show through the footer's text.
- Left optional RSS/Atom/JSON feeds, recent-posts module, status page, newsletter, social-link list, and unfinished policy destinations out of this implementation.

## 2026-10-27 — Dark theme first-visit default

- Changed the theme initializer fallback to dark mode when no valid preference is saved; saved `light` or `dark` values continue to take priority.
- Kept the existing localStorage key and theme-toggle persistence behavior unchanged.
- Updated the design-token documentation to reflect the dark first-visit default.

## 2026-10-27 — Remove source-code link from footer

- Removed the “Source Code on GitHub” item from the shared footer Quick Links section.
- Kept the existing Search Articles action and all other footer content unchanged.
- Updated the FileMap footer description to match the current content.

## 2026-10-27 — Sticky main header

- Changed the shared main header from normal relative positioning to `position: sticky; top: 0`, so it scrolls up beneath the topbar and remains pinned at the viewport top once it reaches that edge.
- Kept the existing header height, colors, navigation, dropdown, search, and theme styling unchanged.

## 2026-10-27 — Prepare five tagged hero-image samples

- Added one local WebP sample image to each of five Tech News articles: AI on the edge, phone hardware, computer processors, display refresh rates/HDR, and gaming PC upgrades.
- Marked each chosen article-body image with `data-hero-image` and added accessible alt text and a short illustrative caption.
- Added responsive featured-image styling to `section-page.css` and documented the image-marker convention in the FileMap.
- Prepared source articles for the future curated hero showcase; no hero carousel or image-fetching logic was added in this step.

## 2026-10-28 — Curated homepage hero showcase

- Replaced the homepage's decorative LO visual with a curated article slide that retrieves each configured article's h1 and explicitly marked `img[data-hero-image]` from same-origin article HTML.
- Configured five manually maintained article URLs in `site/assets/js/hero-showcase.js`; changing that list controls which articles appear, up to five.
- Added five-second automatic rotation, previous/next controls, slide indicators, pause/play, pause-on-hover, tab-visibility handling, and reduced-motion support.
- Added responsive showcase styling in `hero.css` and initialized it from `main.js`; image and headline links each point to the exact configured article URL.
- Kept the rest of the homepage content and all article sources unchanged.

## 2026-10-28 — Compact hero showcase layout

- Moved the curated article headline onto the bottom of the image with a dark gradient, single-line ellipsis truncation, and a small open-article icon.
- Moved previous/next arrows to the left and right sides of the image; removed the duplicate featured-article label, separate Read article link, dots, and bottom control bar.
- Kept the top Editor's Picks label and slide counter, the five-second rotation interval, exact article links, and pause-on-hover/focus and hidden-tab handling.

## 2026-10-28 — Add hero-section editing guide

- Added `Edit-Guide/hero-section-link -edit.md` with instructions for editing the manual `FEATURED_ARTICLE_URLS` list in `site/assets/js/hero-showcase.js`.
- Documented the site-root-relative URL format, the article `h1` and `img[data-hero-image]` requirements, the five-article limit, rotation order, and publish/verification workflow.
- Documented the new `Edit-Guide/` folder in the FileMap; no website runtime files were changed.

## 2026-10-28 — Add topbar-links editing guide

- Added `Edit-Guide/topbar-links -edit.md` with the source file, exact markup patterns, and steps for updating the logo/home link, slogan, newsletter destination, social profiles, email address, and About link.
- Documented the `{{ROOT}}` path token, the shared partial/build workflow, and the distinction between content edits in `topbar.html` and visual changes in `topbar.css`.
- Kept the FileMap and all public-site runtime files unchanged.

## 2026-10-30 — Remove redundant homepage sections

- Removed the “Browse by Interest / Explore the topics” category-card section from `site/index.html`.
- Removed the hardcoded “Latest Sample Stories / Fresh perspectives” article-card section and the temporary development-preview notice from the homepage; the linked sample article files remain intact.
- Removed the homepage's now-unused `section-page.css` stylesheet reference and obsolete homepage-only category-grid, spacing and development-notice CSS, including their responsive rules.
- Preserved the homepage hero and Editor's Picks carousel, shared topbar/header/footer, article files, shared article-card styling used by category pages, and the FileMap.

## 2026-10-30 — Add Technical Pioneer homepage placeholder

- Added a blank “Technical Pioneer born today” section immediately below the homepage hero.
- Created a dedicated `technical-pioneer.css` stylesheet for the section title and empty bordered panel, matching the homepage hero's surface, border, radius and width conventions.
- Kept the section content empty; no person data, image, quotation, article link, fetch logic or JavaScript was added.
- Left the existing hero, shared header/footer, FileMap and article files unchanged.

## 2026-10-30 — Keep Technical Pioneer placeholder blank

- Removed the visible section heading from the homepage; the section now contains only its empty bordered panel.
- Removed the heading-specific CSS. Kept the section's accessible label, position, panel dimensions, border, radius, and dedicated stylesheet.
- No data, image, quotation, article card, fetching logic or JavaScript was added.

## 2026-10-30 — Add SEO heading to Technical Pioneer section

- Added the eyebrow “On This Day in Science & Engineering”, the H2 “Famous Scientists, Engineers & Inventors Born Today”, and a concise supporting description above the existing empty panel.
- Kept the content panel blank; no person data, portrait, quotation, article details, external fetch, or JavaScript was added.
- Kept all section typography and layout in the dedicated `technical-pioneer.css` file. The FileMap and unrelated homepage components were not changed.

## 2026-10-30 — Refine Technical Pioneer description

- Replaced the Technical Pioneer section's introductory description with concise wording focused on a relevant theory, principle or original passage paired with a related Lux Omni article.
- Preserved the heading, empty content panel, section layout, dedicated stylesheet and all other homepage content.
- No daily data, images, quotations, article content or fetching behavior was added.

## 2026-10-30 — Widen Technical Pioneer description

- Removed the 900px intro-container and 75ch description width caps so the supporting description can use the available homepage content width on desktop.
- Kept natural text wrapping for smaller viewports; did not force `white-space: nowrap` or change typography, spacing, heading, or panel dimensions.
