> **Scope amendment — 2026-10-27:** This earlier architecture export contains historical control-panel ideas. The control panel has been removed from the repository and is not part of the current project. Use the static source-file workflow in the current File Map and Build Plan instead.\n\n# Lux Omni Blog Architecture Plan Text Export

> Text extraction of the updated Word planning document for GitHub reference. Word-specific page layout and formatting are not preserved in this export.

Lux Omni Blog — Updated Architecture and Workflow Plan
Updated 2026-10-25 • Proposed architecture only • Not approved for implementation
1. Current goal
Build a CNET-inspired, static-first technology publication at blog.luxomni.com for technical product reviews, drone-related engineering writing, tutorials, teaching, hardware/software coverage, and buying advice.
2. Initial authoring approach
Do not build a separate backend/local Article Studio at the start. Write individual HTML articles directly in Visual Studio Code. Custom article-specific HTML, CSS, and JavaScript may be used when needed; do not force all articles into one rigid template.
3. Proposed development tools
Visual Studio Code for editing; Git for local version history; GitHub for remote repository and checkpoints; browser Developer Tools for console/network/responsive checks; Lighthouse or PageSpeed Insights for milestone audits; Google Search Console after the domain is ready. Bing Webmaster Tools and Google Trends are optional.
4. SEO baseline
Use unique titles and meta descriptions, meaningful heading hierarchy, stable descriptive URLs, canonical URL handling where appropriate, useful alt text, social-preview metadata, crawlable internal links, and an accurate sitemap. Search tools can report issues but cannot guarantee indexing or rankings.
5. Suggested build sequence
Agree scope and tools; prepare local workspace; create minimum public skeleton; establish design tokens; build header; assemble homepage sections with temporary content; prove one custom HTML article; add archive/categories/tags/search; add backend only if a clear requirement justifies it; add media storage and owner tools only as separately approved modules; add newsletter/ads/analytics independently; audit quality; rehearse migration/launch; launch only after explicit approval.
6. Hosting direction under discussion
Cloudflare Pages for public static pages, Cloudflare R2 for large media, and Supabase for structured metadata/settings were discussed. The control panel has since been removed from scope. Hosting and media choices remain subject to approval; no backend or database is required for the current static site.
7. Change control
Implement only the approved fragment and files. Define acceptance criteria before coding. Test locally and in a browser, fix and retest failures, record the tested checkpoint, and get owner approval before starting the next major fragment. No repository edits or deployment without explicit permission.
8. Open decisions
Confirm VS Code/Git/GitHub workflow; choose local preview method; choose hosting and deployment approach; decide whether any backend/database is justified later; settle the static content metadata/sitemap workflow; define image/media delivery and privacy; decide analytics/ads/newsletter integrations; define URL and redirect policy before publishing many articles.
9. Article-Group Page Structure — Update 2026-10-25
The public website is planned as three connected levels: (1) homepage, (2) a dedicated landing page for every final article group/navigation destination, and (3) individual article HTML pages. The homepage keeps its current components; it is not substituted by the group pages.
Navigation and file organization
Each final selectable dropdown destination maps to a dedicated sections/<group-slug>.html page.
Each group page links to individual article files in the corresponding articles/<group-slug>/ folder.
Homepage cards link to individual article pages; “See All” links lead to a matching group page, or to a specifically planned aggregate archive for mixed content.
templates/article-template.html is the canonical starter/reference contract for article metadata conventions, shared navigation, stable CSS classes/IDs and script hooks. Article-specific custom layouts remain allowed.
Development samples
Every final article group receives six separate, linkable sample article HTML files during development—not six samples total across the site. These files should be reachable from the corresponding group page and may be included in development listings and sitemap tests. Do not automatically hide or exclude them; the owner will remove samples later when ready and then update internal links and the sitemap. The template file itself is not one of the sample articles.
Group landing-page component baseline
Shared header/navigation/footer and theme conventions.
Group title, concise introduction, optional featured story and article-card grid/list.
Optional filters/sorting, pagination or Load More, ad slots, newsletter or related-content area after those behaviors are agreed.
Responsive layout and valid navigation between homepage, group page and individual articles.
The complete article-group taxonomy, exact group-page order, parent navigation behavior, filters and pagination remain open until separately agreed. This remains a planning document and does not authorize repository edits or deployment.
