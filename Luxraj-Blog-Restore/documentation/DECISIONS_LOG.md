# Lux Omni Blog — Decisions Log

**Status:** Open. Record a decision only after the owner explicitly approves it.

| Date | Decision | Status | Reason / notes |
|---|---|---|---|
| 2026-10-25 | Exclude a separate backend/local article-writing tool from the initial scope; author articles directly in VS Code is the current working direction. | Proposed / confirm with owner | Reduce initial workload; use individual HTML files and custom article layouts where needed. |
| 2026-10-25 | Use Git and GitHub for version control/checkpoints. | Proposed / confirm with owner | Enable traceable small changes and recovery. |
| 2026-10-25 | Add SEO fundamentals from the beginning and use appropriate auditing/search-console tools. | Proposed / confirm with owner | Catch metadata, crawlability, and quality issues early. |

Do not silently promote a proposal to Approved. Add a dated row when the owner confirms or changes a decision.

| 2026-10-25 | Each final article group/navigation destination will have its own landing page, matching article folder, and six separate sample article HTML files during development. Samples remain linkable for testing and can be deleted later by the owner. | Confirmed planning requirement | Keeps homepage previews, group browsing, individual articles, and future publishing software connected. |
| 2026-10-25 | Use `templates/article-template.html` as the canonical article starter/reference contract while allowing deliberate article-specific layouts. | Confirmed planning requirement | Standardizes metadata/link/hooks to reduce accidental breakage as authoring software is added later. |

## D-Repository-Layout — 2026-10-25

**Historical decision (superseded 2026-10-27):** Keep repository-root `documentation/`, public-site `site/`, and future `control-panel/` as siblings. The `site/`-only deployment boundary remains in force, but the control-panel directory was later removed.

**Reason:** Planning documents must remain available on GitHub for development reference without becoming components of the public website. The earlier idea of a separate control-panel application has been withdrawn.

**Status:** Confirmed by the project owner.


## D-Control-Panel-Removal — 2026-10-27

**Decision:** Remove the control panel completely from the project. Do not deploy a `/dev/` copy and do not build a dashboard or browser-based article uploader.

**Current workflow:** Maintain article HTML, metadata, homepage selections and static site settings directly in source files using VS Code; review changes through Git/GitHub and publish the `site/` directory.

**Status:** Implemented in the repository and GitHub Pages workflow.


| 2026-10-27 | Keep `site/index.html` as the only `index.html`; put every main category and subcategory under `site/categories/` with unique descriptive landing-page filenames. Every subcategory owns its `articles/` folder. | Confirmed by project owner | Avoids nested-index ambiguity and makes route targets explicit. |

## D-Legacy-Redirect-Cleanup — 2026-10-27

**Decision:** Remove the legacy redirect-only files and top-level directories `site/sections/` and `site/articles/` after migrating canonical category pages and articles under `site/categories/`.

**Related cleanup:** Intentionally remove the empty `site/templates/article-template.html` placeholder. A shared article template is not part of the current repository structure and must not be assumed to exist.

**Constraints:** Keep `site/index.html` as the only file named `index.html`; retain canonical landing pages and article files under `site/categories/`; keep the canonical sitemap at 112 URLs; do not alter CSS as part of this cleanup.

**Status:** Confirmed by the project owner and implemented in commit `6fd74c1fbff7c722b857b437ba02d88bf5a6f1b9`. The file map was updated in commit `5c6e4afc1484238152a91896fcff5e9a8b39f027`.
