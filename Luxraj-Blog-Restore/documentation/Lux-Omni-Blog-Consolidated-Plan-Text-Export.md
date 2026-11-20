> **Scope amendment — 2026-10-27:** This file is a historical consolidated planning export. Its old developer-control-panel, dashboard, upload-portal and related Supabase settings-panel requirements are superseded. The control panel has been removed from the repository and the Pages workflow now publishes only `site/`. Follow the current `Lux-Omni-Blog-FileMap.md`, `Lux-Omni-Blog-Blueprint.md`, and `Lux-Omni-Blog-Step-by-Step-Build-Plan.md` for the active static-site scope.

# Lux Omni Blog Consolidated Plan Text Export

> Text extraction of the updated Word planning document for GitHub reference. Word-specific page layout and formatting are not preserved in this export.

Lux Omni Blog — Updated Consolidated Planning Plan
Updated 2026-10-25 • Planning draft • No implementation authorization
Important status note
The initial authoring workflow excludes a separate backend/local Article Studio. The working direction is to write individual HTML articles directly in Visual Studio Code, preview and test locally, use Git/GitHub for checkpoints, and include SEO fundamentals from the beginning. These tool choices remain proposed pending owner confirmation; hosting, deployment, backend, and control-panel decisions remain open.
Blueprint summary
Lux Omni Blog — Website Blueprint
**Project:** Lux Omni Blog
**Target domain:** `blog.luxomni.com`
**Document type:** Product and functional blueprint
**Status:** Planning draft — proposed details remain unapproved until explicitly confirmed.
---
1. Product Vision
Lux Omni Blog is planned as a hand-coded, static-first technology publication with a visual direction inspired by established technology editorial websites such as CNET. It will publish technical product reviews, drone engineering articles, tutorials, educational material, hardware/software coverage, buying advice and other technology writing.
The site should be:
Readable and uncluttered.
Suitable for frequent publishing and small incremental updates.
Built around stable article URLs.
Flexible enough for custom article layouts rather than one mandatory article template.
Portable between hosting providers where practical.
Maintainable by a learner who wants to understand and control the code.
This blueprint describes the intended product. It is not source code and does not authorize changes to any repository.
2. Audiences and Core Use Cases
Readers
Discover recent technology stories.
Browse by topic or content type.
Read detailed reviews, tutorials and technical explainers.
Search articles and explore tags.
Find popular or recommended content.
Subscribe to the newsletter.
Send feedback or feature suggestions.
Site owner/editor
Write and publish custom HTML articles.
Preview and check articles before publication.
Manage article metadata, IDs, tags and media references.
Choose featured stories and homepage content.
Manage trending topics and advertisement slots.
Adjust supported site settings without manually editing every article.
Review reader suggestions and choose which improvements to implement.
3. High-Level System
Readers
  │
  ▼
Public website — Cloudflare Pages (planned)
  ├── Homepage and navigation
  ├── Article HTML files
  ├── Search/archive/404 pages
  └── Public UI assets (CSS, JS, small images)
          │
          ├──────── Reads supported public settings/metadata ────────► Supabase
          │
          └──────── Loads large media ───────────────────────────────► Cloudflare R2
Site owner
  ├── VS Code + local browser preview ──► Git/GitHub ──► Publishing workflow
  └── Developer Control Panel ── manages allowed settings ──────────► Supabase
This is a proposed service layout, not a finalized implementation. Public site code must only access data intended to be public. Authentication and database permissions must be enforced independently of the visible interface.
4. Public Website Structure
4.1 Top Information Bar
Purpose: provide secondary links without competing with the main navigation.
Planned items:
Manually maintained slogan.
Newsletter link.
Social links: Facebook, Instagram, X, YouTube and GitHub.
Business email.
About link.
Exact wording, destinations and mobile treatment remain open.
4.2 Main Navigation Header
Planned items:
Brand logo/home link.
Tech.
Reviews.
How To.
Hardware.
Software.
Buying Advice.
Search.
Dark/light theme toggle.
The navigation should remain easy to scan. The responsive design and dropdown interaction will be finalized during UI planning.
4.3 Topic Dropdowns
The Tech menu is expected to include:
AI
Phones
Computing
TV & Audio
Gaming
Smart Home
Internet
Cars
Security
Science
The homepage should use one primary navigation row rather than adding a second category row. Every final selectable dropdown destination should map to its own dedicated article-group landing page. The remaining dropdown contents and exact navigation-to-page map still need planning.
4.4 Trending Topics
Purpose: highlight selected topics or current areas of interest.
Planned behavior:
Topics and destination URLs are entered by the owner through the control panel.
Display the topic label and link.
Scrolling or static behavior is not yet decided; do not add motion by default before that decision.
4.5 Featured Story
Planned layout:
One large featured story.
Two smaller supporting stories.
The large story rotates from left to right.
Rotation pauses while the pointer is over the feature and resumes when the pointer leaves.
Smaller stories remain fixed unless the owner changes them.
The owner selects stories through the developer panel.
Each story may display an image, headline and short summary. Rotation timing, transition style, touch/keyboard behavior, accessibility and responsive layout remain open.
4.6 Homepage Advertisement Slots
Initial proposed slots:
A wide banner below the featured-story section and above the content feed.
An in-feed placement after several content rows.
Initial exclusions:
No ads in the top information bar, navigation, trending strip or featured-story content.
The control panel should eventually support enabling/disabling a slot and storing its placement/provider/campaign details. Exact ad sizes, responsive behavior and campaign management are not finalized. Begin with manually placed ad units; direct advertising campaigns can be considered later.
4.7 Reviews & Recommendations
Planned two-column section:
Left: four stacked review/recommendation cards.
Right: “Most Popular” list.
Most Popular is intended to use page-view information, with manual pinning or override available to the owner.
The view-count definition, measurement period, data source, card fields and responsive behavior remain open.
4.8 Latest Tech News & Guides
Planned desktop layout: four article cards in a horizontal row.
Each card may include:
Category.
Headline.
Short excerpt.
Publication date.
Estimated reading time.
Article link.
Default selection: latest published articles. The owner may pin or override selections through the control panel.
A “See All” link leads to the dedicated Tech News & Guides group landing page, or to a specifically planned aggregate archive if it spans multiple groups. The cross-group archive remains a separate utility page. Tablet/mobile layout and the exact archive filters remain open.
4.9 Newsletter
Planned provider: Brevo, initially using a free plan, subject to checking its current limits when implementation begins.
Proposed copy direction:
Heading: “Stay Ahead of Technology” (draft, not final).
Email field.
Subscribe button.
Short privacy note.
The placement, confirmation flow, consent text and visual treatment remain open. Newsletter signup must clearly communicate what the reader is subscribing to.
4.10 Footer
Planned contents:
Brand name and short description.
Topic links.
About and Contact.
Privacy Policy.
Advertising information.
Social links: Facebook, Instagram, X, YouTube and GitHub.
Link to `luxomni.com`.
Link to the separate personal portfolio/author website.
Newsletter signup or newsletter link.
Copyright notice.
Desktop may use multiple columns; mobile should stack content cleanly. Exact text and URLs remain open.
5. Article Experience
5.1 Article Format
Each article is a separate HTML file stored in the folder for its article group.
Use `templates/article-template.html` as the canonical starter/reference contract for article structure, metadata conventions and shared hooks. Article-specific layouts remain allowed when deliberate; the template is a safety baseline, not a demand that every article look identical.
Shared site styles and components may be reused where useful.
Article URLs should remain stable after publication.
5.2 Article Information
The publishing workflow should support suitable metadata such as:
Unique article ID.
Title and URL/slug.
Summary or excerpt.
Category and tags.
Author reference.
Publication/update dates.
Featured image and media references.
Publication status.
Homepage placement or pinning, where relevant.
The final metadata schema is not yet approved.
5.3 Article IDs and Media IDs
Article IDs and media IDs should be distinct.
IDs should be generated or assigned automatically by the authoring workflow where practical.
IDs are for organization and referencing, not security.
Human-readable article filenames should be stable and should not depend on secret identifiers.
5.4 Article Visibility Gate
Proposed behavior:
When the gate is disabled, the article displays normally.
When enabled, the public experience shows a private/unavailable message with a link to the homepage instead of the article content.
The owner wants to manage visibility centrally through the developer panel.
Important boundary: a browser-side script that hides content does not prevent the HTML from being downloaded. If genuinely private content must not be delivered to the public, enforcement must happen at a server/edge access-control layer. The final security model is still open.
6. Search, Categories and Tags
Search
Readers should be able to search published articles.
Search should support filtering by tags; additional filters can be selected based on usability.
Search behavior should remain useful on mobile and keyboard-accessible.
Categories and tags
Categories provide broad editorial navigation.
Tags describe specific subjects and connect related articles.
Tag pages should help readers discover relevant content, not merely create empty pages.
Search implementation is open: a generated client-side index or another approach may be chosen after testing.
Archive
The archive should list published articles.
Planned capabilities include filters, search and pagination.
Archive URLs and query-parameter conventions remain open.
7. Owner Tools
7.1 Developer Control Panel
Planned management areas:
Article metadata and publication status.
Homepage featured-story selections.
Reviews/recommendations and manual popular-content overrides.
Trending topics and links.
Site settings and supported theme/configuration settings.
Advertisement slots and campaign metadata.
Media records and references.
Article visibility setting.
The panel should manage structured content and settings, not become a general-purpose code editor unless separately planned.
7.2 Initial Article Authoring Workflow
A separate backend or local Article Studio is excluded from the initial scope to reduce workload. The owner will author and maintain individual HTML articles directly in Visual Studio Code. Each article may use custom markup and article-specific CSS/JavaScript when needed; reusable components are optional, not mandatory.
Proposed workflow: edit in VS Code → preview locally → test links/responsiveness/console → check SEO metadata → commit with Git → push to GitHub → publish using the deployment method selected later → verify the live page and sitemap. The exact deployment trigger and hosting setup remain undecided.
7.3 Recommended Development and SEO Tools
**Visual Studio Code:** article and website editing.
**Git + GitHub:** version history, checkpoints and remote backup.
**Browser Developer Tools:** console, network and responsive checks.
**Lighthouse / PageSpeed Insights:** audits at meaningful milestones.
**Google Search Console:** sitemap, indexing status and search performance after launch.
**Bing Webmaster Tools:** optional search monitoring.
**Google Trends:** optional editorial topic research.
These are proposed tools, not mandatory sign-ups. SEO tools can identify issues but cannot guarantee indexing or ranking.
7.3 Publishing Rules
A change to a setting can avoid a full site deployment only when the public site is implemented to fetch and apply that setting dynamically.
A new static article HTML file normally must be included in a deployment before its public URL becomes available.
Shared CSS/JS changes generally require a new deployment.
Media can be uploaded separately when the public site/article references the correct stable media URL.
Keep the sitemap aligned with the URLs intentionally included in the current development/release build. During development, six sample articles per group are deliberate linkable test pages and may be included in listings and sitemap tests; do not automatically hide or exclude them. The owner will delete samples later and the sitemap/references should then be updated.
8. Hosting, Assets and Migration
Planned responsibilities
**Cloudflare Pages:** public website and published static article files.
**Cloudflare R2:** large photos, videos, banners and other media.
**Supabase:** structured metadata/settings and protected developer-panel data.
**Brevo:** newsletter subscription and email delivery.
**Google Forms:** contact/reader feedback forms.
**Separate portfolio site:** personal author/About page and broader legal/personal information as appropriate.
This service allocation is the current direction, not a claim that every service is already configured.
URL preservation
Use stable article URLs.
Keep domain and path strategy independent of provider-specific features where possible.
Before migration, test a staging copy, internal links, media URLs, redirects, sitemap, forms and article rendering.
Switch DNS only after verification.
Keep a rollback path for migration.
9. Design and Accessibility Principles
Editorial, technology-focused visual style inspired by CNET-style publications without copying another site's design or branding.
Clear hierarchy between featured content, article feeds and secondary navigation.
Avoid overcrowding the homepage.
Mobile-first responsive behavior.
Readable type sizes and line lengths.
Keyboard-operable navigation, search, forms and game interactions.
Visible focus states and sufficient color contrast.
Respect reduced-motion preferences.
Images should have meaningful alternative text when informative.
Theme switching should remain readable and consistent across public pages.
Add optional features only when they have a clear purpose.
The final brand palette, typography, spacing, breakpoints and component states belong in a separate design-system plan.
10. 404 Page
Planned elements:
Clear “page not found” message.
Link back to the homepage.
A small Snake game as an optional interactive feature.
The page should remain lightweight, support keyboard and touch input, avoid intrusive autoplay and return a genuine HTTP 404 response.
11. Legal, Privacy and External Services
Keep blog-specific privacy information easy to find.
Explain newsletter collection and the relevant provider.
Disclose advertising and any analytics/tracking actually used.
Provide clear contact/advertising information.
Link to relevant policies on the separate portfolio site where appropriate, but do not assume that an unrelated policy automatically covers every blog-specific data practice.
Do not claim analytics, tracking or data collection is present until it is implemented.
Exact legal copy should be reviewed for the real services and practices used at launch.
12. Security and Reliability
Never expose Supabase service-role credentials or other secrets in public JavaScript.
Enforce control-panel permissions using appropriate authentication and Supabase RLS.
Validate input in the trusted layer, not only in browser forms.
Treat custom article HTML/JavaScript as executable code and review it before publication.
Keep drafts, credentials and private configuration out of the public deployment directory.
Ensure public database access is limited to fields/data intended for public display.
Validate article links, metadata and media references before publishing.
Keep backups and document how to restore a known-good deployment.
Avoid unnecessary dependencies and keep the site performant.
13. Phased Implementation Roadmap
Phase 1 — Foundation
Confirm domain and deployment approach.
Create the smallest public skeleton: homepage, shared styles, basic navigation and 404.
Establish brand tokens and responsive layout.
Publish a staging version and test URLs.
Phase 2 — Article publishing
Define article metadata and URL rules.
Create a canonical article-template starter and test one representative HTML article, then create six linkable sample articles for every final article group.
Build the local preview/validation workflow.
Test publishing and sitemap updates end-to-end.
Phase 3 — Homepage content
Implement homepage components and connect cards/“See All” links to the correct group pages or article files. Validate the dedicated group pages using six samples per final group.
Populate these sections with static sample data first.
Add dynamic settings only where they provide a clear benefit.
Phase 4 — Backend and owner tools
Finalize Supabase schema, access rules and public-read model.
Implement the smallest useful authenticated control panel.
Add supported homepage and article visibility settings.
Test authorization and failure states.
Phase 5 — Search, media and integrations
Add search, tag filtering and archive.
Connect R2 media workflow.
Add Brevo newsletter signup and Google Forms links.
Add ad slots only when ready to test them.
Phase 6 — Quality and launch
Test mobile, keyboard accessibility, performance, metadata, sitemap and 404 behavior.
Test links and media loading.
Verify privacy disclosures and third-party integrations.
Test backup/rollback and migration procedures.
Launch only after the owner reviews the working site.
Phases can be adjusted as implementation experience reveals the most practical order.
14. Decisions Still Open
Exact framework/build/deployment commands, if any; no generator is selected by this blueprint.
Final article URL pattern.
Supabase schema, RLS policies and authentication approach.
How public pages retrieve settings and metadata.
Whether a separate authoring helper is needed later (deferred; excluded initially).
Search indexing approach.
Exact mobile navigation and dropdown behavior.
Featured-story timing, transitions and accessibility behavior.
Popular-content metric and ranking period.
Newsletter placement, consent copy and current provider limits.
Advertisement sizes, responsive rules and provider integration.
Analytics decision and associated privacy requirements.
Final visual design tokens and component specifications.
Whether and how article visibility will be enforced at an edge/server layer.
15. Working Rules
This blueprint is a planning reference, not a blanket approval to implement every feature.
No repository, source file or deployment should be changed without explicit permission.
Keep major planning subjects in their own documents.
Distinguish confirmed decisions from proposals and unresolved questions.
Start small, test real workflows, and avoid premature complexity.
Preserve article URLs and keep migration in mind from the beginning.
Add features based on actual need and reader feedback rather than filling the homepage with every possible feature.
Step-by-step build plan
Lux Omni Blog — Step-by-Step Building Plan
**Status:** Draft proposal — not approved for implementation
**Purpose:** Build Lux Omni Blog in small, testable fragments rather than generating the whole website at once.
**Project principle:** Plan first, change only the approved scope, test each fragment, and keep a known-good checkpoint before continuing.
This is a build plan, not website source code. Hosting, frameworks, file structure, database design, deployment method, and other technical choices remain unapproved unless separately approved by the project owner.
---
1. Current working direction and toolset
The initial plan excludes a separate backend/local Article Studio to reduce workload. Articles will be written directly as individual HTML files in **Visual Studio Code**. Git and GitHub are proposed for version control from the beginning. The owner will preview and test locally before committing and publishing. The deployment method is still undecided.
**Proposed tools:** VS Code; Git; GitHub; browser Developer Tools; Lighthouse/PageSpeed Insights; Google Search Console after the domain is ready; Bing Webmaster Tools and Google Trends as optional additions. These are recommendations, not yet a finalized mandatory tool stack.
**SEO from the beginning (proposed):** unique page title and meta description, meaningful headings, descriptive stable URLs, canonical URL strategy where appropriate, useful image alt text, social-preview metadata, crawlable internal links, and a sitemap reflecting published URLs. Search Console helps monitor indexing and search performance but cannot guarantee indexing or ranking.
2. The fragment workflow
Every fragment follows the same controlled cycle:
**Define the goal.** State exactly what the fragment must achieve.
**Confirm dependencies.** Identify what must already exist and be working.
**Set scope.** List the exact files allowed to be created or changed.
**Agree on acceptance criteria.** Decide what observable result counts as success.
**Implement only that fragment.** Do not add unrelated features or refactor unrelated files.
**Run appropriate checks.** Check syntax, paths, links, console errors, accessibility basics, and regressions as relevant.
**Test in a browser.** Verify actual behaviour at relevant screen sizes and in the target browsers.
**Fix and retest.** Do not carry known failures forward.
**Commit a tested checkpoint.** Use Git for a clear commit after the fragment passes its checks; push to GitHub when appropriate. Note files changed, tests performed, results, known limitations, and how to return to the last known-good state.
**Get owner approval.** Do not start the next fragment until the current checkpoint is accepted.
No process can promise a completely error-free site. The purpose of this workflow is to make defects smaller, easier to diagnose, and less likely to spread.
3. Build stages
The stages below are proposed. They are not permission to start coding, and their technical choices are not final until approved.
Stage 0 — Confirm the build contract
**Goal:** Agree how work will be controlled before any website files are created.
**Tasks**
Review the latest approved planning documents.
Separate confirmed requirements from proposals and unresolved decisions.
Agree the initial scope and explicitly defer features not needed for the first working release.
Confirm where the source files will live and how backups or version control will be used.
Agree how the owner reviews and approves each fragment.
**Pass criteria**
There is a clear list of approved requirements and open questions.
No unresolved decision is silently treated as approved.
The owner approves the first implementation scope.
**Checkpoint:** Build contract approved.
Stage 1 — Prepare the development workspace
**Goal:** Establish a safe, repeatable local development and testing environment.
**Tasks**
Confirm the working directory and repository arrangement.
Install/verify Visual Studio Code and Git; create or select the GitHub repository after owner approval.
Create or verify a baseline version-control checkpoint.
Decide how the site will be previewed locally in a browser.
Confirm the intended browsers and viewport sizes for basic testing.
Record the starting state before changes.
**Pass criteria**
The project can be opened and previewed using the agreed method.
The starting state can be restored.
No production deployment or domain change occurs during setup.
**Checkpoint:** Workspace ready.
Stage 2 — Create the minimum public-site skeleton
**Goal:** Make the smallest valid website that can be previewed.
**Tasks**
Create only the approved initial entry page and minimum required assets.
Add basic document metadata and a semantic page structure.
Add a minimal not-found page only if it is in the approved initial scope.
Do not add databases, authentication, advertising, newsletter integration, or complex JavaScript yet.
**Pass criteria**
The entry page loads locally.
No missing asset requests or browser-console errors are present.
The page has a meaningful title, language declaration, and basic semantic landmarks.
The layout does not overflow at the agreed mobile and desktop widths.
**Checkpoint:** Minimal site loads reliably.
Stage 3 — Establish design foundations
**Goal:** Create reusable visual rules before building multiple sections.
**Tasks**
Agree typography, spacing, content widths, borders, and brand colours.
Define the initial light/dark theme strategy only after the approach is approved.
Establish keyboard focus visibility and readable contrast.
Add only the design tokens and shared styles needed by the first fragment.
**Pass criteria**
The agreed tokens are used consistently in the fragment.
Text is readable and controls have visible focus states.
No theme toggle is claimed to work until its behaviour is actually implemented and tested.
**Checkpoint:** Design foundation accepted.
Stage 4 — Build the header in isolated fragments
Build one sub-fragment at a time:
Brand/logo and home link.
Main navigation links.
Search control appearance and behaviour, if approved.
Theme control, if approved.
Responsive navigation behaviour, if needed.
**Pass criteria**
The logo/home link reaches the correct homepage.
Every visible navigation link points to an existing destination or is clearly marked as not yet active during development.
Keyboard navigation works.
The header does not cover page content unexpectedly.
Mobile and desktop behaviour matches the agreed design.
**Checkpoint:** Header accepted before the next major section.
Stage 5 — Build the homepage layout with temporary content
**Goal:** Establish section order and responsive layout without connecting live data.
Build separately:
Trending-topic strip.
Featured-story area.
Reviews and recommendations layout.
Latest news and guides cards.
Newsletter presentation.
Footer.
Use clearly identified sample content while testing. Six sample article files per group are intentional development fixtures and should be linkable from their group landing pages. Do not connect the database or newsletter service just to make the layout look populated.
**Pass criteria**
Each section is independently reviewable.
Cards align and wrap at agreed viewport widths.
Images have appropriate alternative text or are correctly treated as decorative.
No section introduces horizontal overflow or blocks keyboard access.
Sample content is clearly identifiable as development content where appropriate, and is not automatically hidden from development group-page listings or sitemap tests.
**Checkpoint:** Static homepage layout accepted.
Stage 6 — Build one article page as a proof of concept
**Goal:** Prove the custom-HTML article approach with one representative article before scaling up.
**Tasks**
Agree the group taxonomy and URL rules; create `templates/article-template.html`; then create one representative article as an individual HTML file under its group folder.
Agree the stable group slug, landing-page path and article-folder pattern before creating the remaining samples.
Add the approved article metadata and semantic structure.
Test headings, images, captions, tables, code samples, citations, and any special layout that the test article actually needs.
Decide which elements are shared and which can remain article-specific.
**Pass criteria**
The article loads at its intended URL.
Navigation back to the homepage works.
The page is readable on mobile and desktop.
Title, description, canonical URL strategy, and social-preview metadata are checked against the approved SEO plan.
Article-specific styling does not unintentionally break the rest of the site.
**Checkpoint:** Canonical article template and one representative article accepted before creating six sample articles for every final group and wiring up the group landing pages.
Stage 7 — Add archive, categories, tags, and search one at a time
**Recommended order**
A cross-group article archive and dedicated article-group landing pages.
Category/group navigation that maps dropdown destinations to dedicated landing pages.
Tag listing and tag filtering.
Search interface.
Search behaviour and empty-result state.
Pagination or “load more,” if required.
**Pass criteria**
Each feature has a defined source of article information.
Links and filters produce correct results for the test content.
Empty results and unknown categories/tags are handled clearly.
Search does not claim to search content that is not indexed or supported.
No feature is added merely because its button has been drawn.
**Checkpoint:** Discovery features accepted individually.
Stage 8 — Introduce structured content and backend services only when needed
**Goal:** Add dynamic management without destabilising the working static site.
Before implementation, explicitly decide which information truly needs a backend. If Supabase is approved, plan and test each area separately, for example:
Schema and data model.
Development/test project and credentials.
Public read access and row-level security policies.
Article metadata retrieval.
Homepage selections and trending topics.
Owner-only management actions.
Error and unavailable-service states.
**Pass criteria**
Public visitors cannot perform owner-only operations.
Secrets are not embedded in public browser code.
Row-level security and permissions are tested with both permitted and denied operations.
The site remains understandable when the service fails or returns no data.
Static fallback behaviour is documented where required.
**Checkpoint:** Each backend capability accepted separately.
Stage 9 — Add media storage and media handling
If a separate object store such as Cloudflare R2 is approved, implement this only after the media requirements and access model are agreed.
**Tasks**
Define image/video formats, size limits, naming conventions, and alt-text workflow.
Test a small set of images before uploading a large library.
Decide whether media is public or private and apply the matching access controls.
Test missing, slow, and incorrectly typed media responses.
**Pass criteria**
Correct media loads at the intended URLs.
Images do not distort layouts or cause avoidable layout shifts.
Private media is not exposed through public URLs if privacy is required.
Upload and replacement procedures are documented.
**Checkpoint:** Media workflow accepted.
Stage 10 — Add owner tools in small modules (optional, later)
Do not build a large control panel all at once. The control panel is not required for the initial article-writing workflow. If approved later, split it into:
Authentication and access protection.
Read-only content overview.
Article metadata editing.
Homepage story selection.
Trending topics management.
Categories and tags management.
Site settings.
Ad-slot settings.
Media management.
Audit/error feedback and recovery.
**Pass criteria**
Unauthenticated visitors cannot access protected management functions.
Each module changes only its intended data.
Invalid input is rejected with a useful message.
Risky operations have confirmation and a recovery path.
Public pages are retested after each management feature.
**Checkpoint:** Each management module accepted before adding the next.
Stage 11 — Add external integrations individually
Possible integrations include newsletter signup, feedback form, analytics, and advertising. Each requires a separate scope and test.
For each integration:
Confirm the provider and current plan/limits.
Define what information is sent and where.
Add the minimum integration needed.
Test success, validation failure, network failure, and duplicate submission.
Review privacy disclosures and consent requirements where applicable.
Keep unrelated integrations out of the same change.
**Pass criteria**
The integration works in a real test submission.
Failure states are understandable.
No secret API key is exposed in public code.
Privacy/disclosure wording matches the actual implementation.
**Checkpoint:** One integration accepted at a time.
Stage 12 — Add special features and interaction polish
Examples include the rotating featured story, Most Popular ranking, theme switching, the 404 Snake Game, and any advanced animation.
Implement and test each separately. Prefer accessible, pauseable, keyboard-operable behaviour and respect reduced-motion preferences where animation is used.
**Pass criteria**
The feature behaves as specified and can be operated accessibly.
It does not block reading or navigation.
It fails gracefully if required data is missing.
Performance and regression checks pass.
**Checkpoint:** Each special feature accepted independently.
Stage 13 — Search-engine, accessibility, performance, and security review
**Goal:** Test the assembled site, not just its individual fragments.
**Checks**
Internal links and missing pages.
Page titles, descriptions, canonical URLs, sitemap, and robots directives.
Heading hierarchy, keyboard navigation, visible focus, contrast, image alternatives, and form labels.
Mobile layout and horizontal overflow.
Console errors, failed network requests, and broken assets.
Image sizes and loading performance.
Authentication, permissions, exposed credentials, and unsafe HTML handling.
Privacy notices and third-party disclosures appropriate to enabled features.
**Pass criteria**
All critical issues are fixed or explicitly accepted as known limitations.
Tests are recorded with the date and result.
No launch blocker is silently ignored.
**Checkpoint:** Pre-launch review accepted.
Stage 14 — Staging and launch rehearsal
**Goal:** Verify the complete site before the public domain is changed.
**Tasks**
Deploy to an agreed test/staging location.
Test representative pages and workflows on the deployed version.
Verify redirects, canonical URLs, asset paths, caching, and error pages.
Test backup and rollback procedures.
Confirm that the current production site/domain configuration will not be changed without explicit approval.
**Pass criteria**
The staging version passes the agreed checklist.
The rollback procedure is understood and has been checked as far as practical.
The owner explicitly approves the launch.
**Checkpoint:** Launch approved or returned for fixes.
Stage 15 — Launch and controlled maintenance
**Tasks**
Make the approved production change.
Verify homepage, sample articles, search/navigation, media, and integrations.
Check logs and error reports after launch.
Record the deployed version and changes.
Continue with small, reversible updates.
**Pass criteria**
Critical visitor journeys work in production.
The deployed version is recorded.
A rollback path is available.
Later changes continue to follow the same fragment workflow.
**Checkpoint:** Initial launch verified.
---
3. Definition of done for every fragment
A fragment is not complete just because its code has been written. Mark it complete only when:
[ ] The scope was approved before implementation.
[ ] Only the approved files were changed.
[ ] The code or content passes relevant syntax/validation checks.
[ ] No unexplained browser-console errors or failed requests remain.
[ ] The intended behaviour has been tested in the browser.
[ ] Relevant mobile and desktop layouts have been checked.
[ ] Existing working features have been regression-tested.
[ ] Accessibility basics relevant to the fragment have been checked.
[ ] Known limitations are documented.
[ ] The previous known-good checkpoint can be restored.
[ ] The owner has reviewed and accepted the result.
Not every item applies identically to every fragment; record “not applicable” with a reason rather than skipping checks silently.
4. Change-control rules
**One fragment per change set.** Avoid mixing unrelated features.
**One file at a time where practical.** If a fragment genuinely requires several files, list them before editing.
**No surprise refactoring.** Do not reformat or rewrite unrelated code.
**No silent architecture changes.** If a new dependency or design decision becomes necessary, stop and ask.
**Keep a known-good checkpoint.** Use version control or an equivalent backup method before risky changes.
**Test before and after.** Record the result, not just “looks fine.”
**Stop on unexplained failure.** Diagnose the earliest failing layer before adding more features.
**Keep credentials safe.** Never put service-role keys or private secrets in public client-side code.
**Separate test and production.** Do not test risky database or deployment changes against production by default.
**Owner approval controls progression.** A plan or generated file does not itself authorize repository edits or deployment.
5. Bug isolation procedure
When a test fails:
Stop adding new features.
Reproduce the issue and record the exact steps.
Identify the smallest affected fragment.
Check the browser console, network requests, and relevant file changes.
Compare against the last known-good checkpoint.
Make the smallest targeted correction.
Repeat the original failing test.
Run relevant regression tests.
Record the root cause and correction if known.
Continue only after the owner accepts the fix.
6. Build log entry template
Append one entry for each completed fragment:
**Date:**
**Stage / fragment:**
**Goal:**
**Files changed:**
**Tests performed:**
**Results:**
**Issues found:**
**Fixes made:**
**Known limitations:**
**Checkpoint / version:**
**Owner approval:** Pending / Approved / Rejected
Keep the build log append-only once implementation begins; correct a previous entry with a new dated note rather than silently rewriting history.
7. Proposed first implementation sequence
The recommended first sequence is deliberately small:
Review and approve the build contract.
Confirm the development workspace and recovery method.
Create a minimal page that loads locally.
Test that page and record the baseline.
Establish the smallest approved design foundation.
Build the logo/home link as the first visual fragment.
Test and approve it.
Add one navigation fragment.
Test and approve it.
Continue one header fragment at a time before building the homepage sections.
Do not start with Supabase, a control panel, newsletter integration, ads, or a complete homepage. First establish that the local site can be changed, previewed, tested, and restored safely.
---
8. Decisions still requiring owner approval
This plan intentionally does not finalize:
Framework or static-site generation tool.
Final folder/file structure.
Exact article URL pattern.
Hosting and deployment configuration.
Database schema and access policies.
Control-panel hosting and authentication design.
Media storage and privacy model.
Newsletter, analytics, advertising, and feedback integrations.
The precise initial launch scope.
These should be decided in the relevant planning documents before the corresponding implementation stage begins.
Proposed file map
Lux Omni Blog — File Map
**Project:** `blog.luxomni.com`
**Status:** Proposed planning map — not a commitment to a framework or final implementation.
**Hosting direction:** Cloudflare Pages for the public site and published article HTML; Cloudflare R2 for large media; Supabase for structured metadata and developer-panel settings.
This map separates the **public website** from any future developer control panel. The initial authoring workflow is deliberately simple: edit individual HTML article files directly in Visual Studio Code, preview and test locally, use Git/GitHub for version history, then publish through a deployment method that will be decided later. A separate article-writing tool is excluded from the initial scope.
---
1. Public Website — Cloudflare Pages
lux-omni-blog/
├── index.html                    # Homepage
├── 404.html                      # Custom not-found page; should return HTTP 404
├── robots.txt                    # Search-engine crawling rules
├── sitemap.xml                   # Sitemap; generated or updated during publishing
├── favicon.ico
├── manifest.webmanifest          # Optional; add if install/PWA support is wanted
│
├── pages/                        # Standalone public pages
│   ├── search.html               # Search and tag filtering interface
│   ├── archive.html              # All articles with filters/pagination
│   ├── privacy.html              # Blog-specific privacy information
│   ├── advertising.html           # Advertising/contact information
│   └── contact.html               # Optional; can instead link to a Google Form
│
├── sections/                    # One landing page per final article group/navigation destination
├── templates/article-template.html  # Canonical article starter/reference contract
├── articles/<group-slug>/       # Matching group folder; six development samples per group
│
├── assets/
│   ├── css/
│   │   ├── tokens.css            # Shared brand, theme, spacing and typography tokens
│   │   ├── base.css              # Resets, body defaults and shared typography
│   │   ├── layout.css            # Shared page/container layout
│   │   ├── topbar.css            # Top information bar
│   │   ├── header.css            # Main navigation header
│   │   ├── dropdowns.css         # Navigation dropdowns
│   │   ├── trending.css          # Trending topics strip
│   │   ├── featured-story.css    # Featured story layout
│   │   ├── ads.css               # Reserved ad-slot layout
│   │   ├── reviews.css           # Reviews & Recommendations section
│   │   ├── latest-articles.css   # Latest Tech News & Guides section
│   │   ├── newsletter.css        # Newsletter section
│   │   ├── footer.css            # Footer
│   │   ├── search.css            # Search/archive interface
│   │   └── responsive.css        # Shared responsive adjustments
│   │
│   ├── js/
│   │   ├── main.js               # Public-site entry point
│   │   ├── theme.js              # Theme toggle and persistence
│   │   ├── navigation.js         # Mobile navigation/dropdown behavior
│   │   ├── featured-story.js     # Featured-story rotation and interactions
│   │   ├── homepage-data.js      # Loads homepage selections/settings as required
│   │   ├── search.js             # Search and tag filtering
│   │   ├── newsletter.js         # Newsletter form integration
│   │   └── analytics.js           # Optional analytics integration, if adopted
│   │
│   ├── images/
│   │   ├── brand/                # Logo and small brand graphics
│   │   └── ui/                   # Small interface icons/graphics
│   │
│   └── fonts/                    # Only if self-hosted fonts are needed
│
└── README.md                     # Add when the skeleton becomes a working site
Public-site notes
Keep `articles/` for the actual article HTML files. Each article can include its own article-specific CSS and JavaScript when needed; shared site assets are optional for an article.
Use stable, human-readable article filenames, for example `articles/compact-drone-review.html`. Once published, avoid changing its URL unless a redirect is provided.
Large article photographs, video, banners and other media belong in **Cloudflare R2**, not in this source tree. The article or site settings can reference their public delivery URLs.
Small essential interface assets, such as the logo and icons, can remain in `assets/`.
`sitemap.xml` must reflect the real published URLs. The publishing workflow should update it rather than relying on a manually maintained stale list.
The file names above are a proposed starting point. Files should be created when needed; this is not a requirement to create every file immediately.
---
2. Developer Control Panel — Separate Application
Keep the control panel separate from the public site's ordinary frontend files. It may be deployed as its own application, for example on a separate subdomain, once the deployment arrangement is chosen.
lux-omni-blog-control-panel/
├── index.html                    # Dashboard entry point
├── login.html                    # Sign-in interface, if appropriate for chosen auth flow
├── assets/
│   ├── css/
│   │   ├── panel-base.css
│   │   ├── panel-layout.css
│   │   └── panel-components.css
│   └── js/
│       ├── panel-main.js
│       ├── auth.js                # Authentication integration
│       ├── articles.js            # Article metadata and publishing controls
│       ├── homepage.js            # Featured stories, reviews and latest articles
│       ├── trending.js            # Trending-topic controls
│       ├── ads.js                 # Ad-slot/campaign settings
│       ├── site-settings.js       # Shared settings and visibility controls
│       └── media.js               # Media metadata and R2 workflow integration
└── README.md                     # Setup notes when implementation begins
**Security boundary:** client-side code is not a security boundary. Protect the panel with an appropriate authentication setup and enforce permissions in Supabase Row Level Security (RLS). Never put a Supabase service-role key in browser JavaScript.
---
3. Initial Authoring and Publishing Workflow — VS Code, Git and GitHub
No separate Article Studio or backend article-writing tool will be built for the initial release. The owner will create and edit each article directly as an HTML file in Visual Studio Code. Articles may use custom HTML structure and article-specific CSS/JavaScript when justified; a shared starter file is optional and must not force all articles into the same layout.
Local project folder
├── index.html                 # Homepage
├── articles/                  # Individual HTML article files
├── assets/                    # Shared CSS, JS, images and UI assets
└── ...
Git repository
└── GitHub remote              # Version history and backup/collaboration
**Proposed working cycle (not yet approved as a final deployment procedure):**
Create or edit one scoped fragment in VS Code.
Preview it locally in a browser.
Check responsive behaviour, links, browser-console errors and basic accessibility.
Check SEO basics for each article: unique title and description, meaningful headings, descriptive URL/slug, canonical URL when appropriate, image alt text, and social-preview metadata.
Run relevant Lighthouse/PageSpeed checks at suitable milestones rather than after every tiny text edit.
Commit the tested change in Git and push it to GitHub. Do not label a known-broken change as a good checkpoint.
Publish using the deployment method selected later; verify the live URL and update sitemap/listings as needed.
**Initial tool shortlist:**
Visual Studio Code — editing individual HTML/CSS/JS files.
Git — local version history and checkpoints.
GitHub — remote repository and change history.
Browser Developer Tools — console, network, device/responsive testing.
Google Lighthouse / PageSpeed Insights — performance, accessibility, SEO and best-practice audits.
Google Search Console — indexing, search performance and sitemap monitoring after the domain is ready.
Bing Webmaster Tools — optional additional search-engine monitoring.
Google Trends — optional topic research; not a technical requirement.
These tools are recommendations, not an instruction to sign up for every service immediately. No SEO tool can guarantee indexing or ranking.
---
4. Data and Media Outside the Website Repository
These are services/resources rather than folders in the public website repository.
Supabase
├── articles metadata and publication status
├── categories and tags
├── homepage selections
├── trending-topic entries
├── site/theme settings
├── ad-slot and campaign settings
├── media metadata/IDs
└── authenticated control-panel access and permissions
Cloudflare R2
├── article photographs
├── videos and other large media
├── banners and campaign creatives
└── other large downloadable media
This is a **conceptual map**, not a finalized database schema. Exact table names, columns, policies, storage buckets and access rules must be designed before implementation.
Do not assume that changing a Supabase setting automatically changes the public site: the public site must be built to read that setting. A new standalone HTML article still normally needs to be included in a Pages deployment to become available at its URL.
---
5. Publishing Flow
VS Code article authoring
        │
        ├── Create/edit and preview custom article HTML
        ├── Validate article ID, metadata, links and media references
        └── Prepare article for publication
                    │
                    ▼
          Cloudflare Pages deployment
                    │
                    ├── Article has a stable public URL
                    └── Sitemap/public article listing is updated
Developer Control Panel ─────► Supabase
                                  │
                                  └── Homepage selections, tags,
                                      visibility and other settings
Large media ─────────────────► Cloudflare R2
The exact automation mechanism—manual Wrangler deployment, a script, or another approved workflow—remains open. This map does not configure or deploy anything.
---
6. File and Naming Rules
**One article, one HTML file** under `articles/`, with custom article-specific styling or scripting when needed.
Use stable lowercase filenames with hyphens; avoid spaces and frequent URL changes.
Keep article IDs distinct from media IDs. IDs support management and references; they are not secrets or access controls.
Keep large media in R2 and store references/metadata where appropriate.
Keep public code, authenticated control-panel code, local drafts and secrets separated.
Add shared CSS/JS files only when there is a real need for shared behavior; do not create empty files just to match this map.
Preserve the existing file map and architecture decisions as the project evolves. Update this document when the actual structure changes.
Do not treat optional files, proposed component names, or the separate-app arrangement as final until explicitly approved.
---
7. Decisions Still Open
Exact URL format for articles (`/articles/article-name.html` versus clean directory URLs).
Whether the control panel will be hosted on a separate subdomain or another protected deployment.
Exact Supabase schema and public read-access model.
How the public site retrieves homepage selections and other settings.
Deployment automation for new article files and sitemap updates.
Whether search is generated at build time, uses a client-side index, or uses another method.
Final CSS/JavaScript module boundaries after the first working skeleton.
Whether the optional `manifest.webmanifest`, contact page, analytics and self-hosted fonts are needed.
**Guiding principle:** start with the smallest working structure, keep article URLs stable, and add files when the corresponding feature is implemented.
Article-Group Pages and Sample Articles — Update 2026-10-25
This update clarifies and supersedes any earlier description in this consolidated plan that shows a single flat articles/ folder or treats a single sample article as the full development test set. The GitHub repository remains untouched by this planning update.
Three connected page levels
Homepage — index.html retains the already planned homepage components and shows selected story previews.
Article-group landing page — sections/<group-slug>.html is the dedicated browse page reached from the matching navigation dropdown item or homepage “See All” link.
Individual article — articles/<group-slug>/<article-slug>.html is a separate full article page.
Six sample articles per group
The requirement is six distinct sample article HTML files for every final article group, not six articles total. Each group page must link to its six samples so card grids, different metadata lengths, images, nested asset paths, article layout behavior, navigation and sitemap/link checking can be exercised during development. Samples are intentionally linkable and should not be automatically hidden or excluded from development listings or sitemap tests. The owner will decide when to delete samples later, after which internal links and sitemap entries must be cleaned up.
Canonical article template
templates/article-template.html is the canonical starter/reference contract for recognized metadata, content landmarks, shared CSS classes/IDs, navigation/footer references and JavaScript hooks. It is not itself one of the six sample articles. Actual test articles are separate HTML files created using the template conventions. Custom article-specific HTML/CSS/JS is allowed when needed, provided stable URLs and shared interfaces are preserved where practical.
Group landing-page components
Shared site shell: information bar, main navigation/dropdowns, theme behavior and shared footer.
Group identity: title and short introduction; optional hero/lead story.
Article-card grid/list with useful metadata and valid individual article links.
Optional group-specific filters, tags, sort controls, pagination/Load More, advertisements, newsletter or related content; each behavior must be separately agreed and tested.
A clear path back to the homepage or broader parent topic.
Homepage previews and dedicated group pages are different destinations. The homepage stays focused on selected content, while the group page supports browsing its full collection. Every final selectable dropdown destination gets a real landing page and matching articles/<group-slug>/ folder. The full taxonomy, parent-label links, page component order, filters and pagination remain open decisions.
