# Update notes — 2026-10-25

This package reflects the latest planning discussion.

- Removed the separate local/backend Article Studio from the initial scope.
- Updated the working article workflow to individual HTML files authored in VS Code.
- Added proposed Git/GitHub checkpoint workflow.
- Added proposed SEO baseline and tool shortlist: browser Developer Tools, Lighthouse/PageSpeed Insights, Google Search Console; optional Bing Webmaster Tools and Google Trends.
- Updated the file map, blueprint, step-by-step build plan, planning notes, index, decisions log, and build/planning log.
- Kept all unconfirmed technical choices as proposals. Hosting, deployment, Supabase/backend, control panel, and exact workflow remain open.
- Older consolidated/architecture DOCX files are intentionally not included because refreshed versions are supplied instead.
- No website code was generated, and no repository or deployment changes were made.


## Update — Article-group pages (2026-10-25)

- Added a dedicated `Article-Group-Pages.md` planning document.
- Updated the file map to show `sections/`, `templates/article-template.html`, and group-matched `articles/<group-slug>/` folders.
- Documented the three-level navigation flow: homepage → article-group landing page → individual article.
- Recorded the requirement for six distinct, linkable sample article files for every final article group during development. Samples are not automatically hidden or excluded from development listings/sitemap tests; the owner will delete them later.
- Updated the navigation dropdown plan, blueprint, build sequence, homepage Reviews and Latest Tech News & Guides notes, plan index, and decisions log.
- These are planning-document updates only. No GitHub repository files were changed and nothing was deployed.

## Repository skeleton addition

Planning documents are retained in the repository-root `documentation/` folder. The deployable public website is isolated in `site/`, and the future developer control panel sits separately in `control-panel/`. The existing root `README.md` is unchanged.


## Update — Control panel removal (2026-10-27)

- Removed the `control-panel/` directory completely.
- GitHub Pages now assembles only the `site/` directory; there is no `/dev/` deployment.
- Updated current file map, blueprint, build plan and affected homepage feature specifications to describe a source-controlled static workflow.
- The owner maintains article files, metadata and homepage selections through VS Code and Git/GitHub. Historical planning exports may retain older requirements, but those requirements are superseded by the removal decision.
