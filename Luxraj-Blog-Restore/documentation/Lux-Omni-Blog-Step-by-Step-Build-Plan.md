# Lux Omni Blog — Step-by-Step Building Plan

**Status:** The owner approved the staged build workflow on 2026-10-25. Approval authorizes work one step at a time; undecided technical choices remain open, and deployment is not authorized.  
**Purpose:** Build Lux Omni Blog in small, testable fragments rather than generating the whole website at once.

**Scope update — 2026-10-27:** The control panel/dashboard has been removed from the repository and is no longer part of this project. Use direct HTML/CSS/JavaScript editing in VS Code and Git/GitHub for content and site changes; older dashboard requirements below are superseded.  
**Project principle:** Plan first, change only the approved scope, test each fragment, and keep a known-good checkpoint before continuing.

> This is a build plan, not website source code. Hosting, frameworks, file structure, database design, deployment method, and other technical choices remain unapproved unless separately approved by the project owner.

---

## 0. Approved build contract — 2026-10-25

This contract records the workflow and requirements confirmed before implementation. It does not silently finalize the choices listed later as open.

### Owner-controlled development

1. Work proceeds through the approved numbered plan, one step at a time.
2. Before a new step, its goal, dependencies, scope, files, and acceptance checks must be clear.
3. Make only the changes belonging to the current step. Prefer one file per change where practical; identify necessary multi-file scope before editing.
4. After each step, report what was done, every file changed, how to test it, the observed result, and any limitation. Then stop until the owner says to continue (for example, “next”).
5. Do not deploy, switch domains, alter hosting, create service accounts, or add an unapproved service or dependency without explicit authorization.
6. Preserve known-good checkpoints. Do not rewrite unrelated files or silently treat unresolved design choices as approved.

### Confirmed product and repository boundaries

- The public website source belongs under `site/`; project planning documents stay under `documentation/`. No control panel or dashboard is part of the current project.
- The public website is intended to be a hand-coded, static-first technical blog with a CNET-inspired editorial interface. Individual articles may have their own HTML, CSS, and JavaScript rather than being forced into an identical layout.
- The homepage is a preview/discovery surface. Each final article-group destination must have its own landing page, linked to its individual article pages.
- Stable human-readable article URLs are important. Group names, folders, links, metadata, listings, and sitemap entries must remain consistent.
- The existing SVG icons must be preserved as supplied; theme work must not alter their artwork.
- The previously proposed Cloudflare Pages/R2 and Supabase service layout is still a proposed direction until the relevant implementation decisions are finalized. This approval alone does not configure or deploy those services.

### Article creation, submission, and publication

- The site owner is responsible for writing and managing their own articles and must retain owner-level control.
- Articles are created and edited as individual HTML files in VS Code. Preview and validate them locally, then track and publish source changes through Git/GitHub and the configured site deployment.
- Each outside author the owner chooses to invite receives an individual Supabase Auth user account. Do not give authors Supabase project credentials, a service-role key, shared administrator login, or GitHub repository write access merely to let them submit an article.
- Multi-user author submissions, role management and a browser-based publishing dashboard are outside the current scope.
- Enforce access in trusted backend/database policies, not just by hiding controls in the interface. Supabase Row Level Security and any upload/publishing endpoints must be designed and tested before author accounts are enabled.
- Treat an author's uploaded HTML/CSS/JavaScript as untrusted input until the owner has reviewed it. A submission must not become publicly executable site content merely because the upload succeeded. The default workflow is **submit → owner review/approval → controlled publication**; any different auto-publication rule must be explicitly approved and secured.
- Supabase authentication and metadata storage do not, by themselves, create a new static HTML file on a static host. The publishing design must explain how an approved article becomes available at its stable public URL, how the article listing and sitemap are updated, and how failed publication can be recovered. That implementation remains undecided.

### Security and release boundaries

- Public browser code must never contain privileged Supabase credentials.
- Author access and owner/admin access must be distinct, with least-privilege rules and explicit tests for both permitted and denied actions.
- Do not expose drafts or private submissions to public listing/search/sitemap output.
- Do not make production or hosting changes as a side effect of local testing. Launch and deployment require separate explicit approval.

### Decisions that remain open

The following must be settled in their relevant steps, rather than guessed now:

- Final article-group taxonomy and the mapping from navigation items to group pages.
- Public article URL pattern and any redirect strategy.
- Whether any future feature genuinely requires a backend or database beyond the current static workflow.
- If an external service is later approved, its relevant data, access and privacy boundaries.
- The static publishing mechanism that deploys approved article files and updates listings/sitemap.
- Optional media storage, optional integrations, and the deployment procedure.

**Current-step boundary:** Step 1 establishes this contract in documentation only. It does not implement the website, connect Supabase, create author accounts, or deploy anything.

---

## 1. Current working direction and toolset

The initial plan excludes a separate backend, Article Studio and control panel to reduce workload. The public website files belong under `site/`; the planning package belongs under the sibling `documentation/` folder. The public deployment root is `site/` so project notes do not become website content. Articles will be written directly as individual HTML files in **Visual Studio Code**. Git and GitHub are proposed for version control from the beginning. The owner will preview and test locally before committing and publishing. The deployment method is still undecided.

**Proposed tools:** VS Code; Git; GitHub; browser Developer Tools; Lighthouse/PageSpeed Insights; Google Search Console after the domain is ready; Bing Webmaster Tools and Google Trends as optional additions. These are recommendations, not yet a finalized mandatory tool stack.

**SEO from the beginning (proposed):** unique page title and meta description, meaningful headings, descriptive stable URLs, canonical URL strategy where appropriate, useful image alt text, social-preview metadata, crawlable internal links, and a sitemap reflecting published URLs. Search Console helps monitor indexing and search performance but cannot guarantee indexing or ranking.

## 2. The fragment workflow

Every fragment follows the same controlled cycle:

1. **Define the goal.** State exactly what the fragment must achieve.
2. **Confirm dependencies.** Identify what must already exist and be working.
3. **Set scope.** List the exact files allowed to be created or changed.
4. **Agree on acceptance criteria.** Decide what observable result counts as success.
5. **Implement only that fragment.** Do not add unrelated features or refactor unrelated files.
6. **Run appropriate checks.** Check syntax, paths, links, console errors, accessibility basics, and regressions as relevant.
7. **Test in a browser.** Verify actual behaviour at relevant screen sizes and in the target browsers.
8. **Fix and retest.** Do not carry known failures forward.
9. **Commit a tested checkpoint.** Use Git for a clear commit after the fragment passes its checks; push to GitHub when appropriate. Note files changed, tests performed, results, known limitations, and how to return to the last known-good state.
10. **Get owner approval.** Do not start the next fragment until the current checkpoint is accepted.

No process can promise a completely error-free site. The purpose of this workflow is to make defects smaller, easier to diagnose, and less likely to spread.

## 3. Build stages

The stages below are proposed. They are not permission to start coding, and their technical choices are not final until approved.

### Stage 0 — Confirm the build contract

**Goal:** Agree how work will be controlled before any website files are created.

**Tasks**
- Review the latest approved planning documents.
- Separate confirmed requirements from proposals and unresolved decisions.
- Agree the initial scope and explicitly defer features not needed for the first working release.
- Confirm where the source files will live and how backups or version control will be used.
- Agree how the owner reviews and approves each fragment.

**Pass criteria**
- There is a clear list of approved requirements and open questions.
- No unresolved decision is silently treated as approved.
- The owner approves the first implementation scope.

**Checkpoint:** Build contract approved.

### Stage 1 — Prepare the development workspace

**Goal:** Establish a safe, repeatable local development and testing environment.

**Tasks**
- Confirm the working directory and repository arrangement.
- Install/verify Visual Studio Code and Git; create or select the GitHub repository after owner approval.
- Create or verify a baseline version-control checkpoint.
- Decide how the site will be previewed locally in a browser.
- Confirm the intended browsers and viewport sizes for basic testing.
- Record the starting state before changes.

**Pass criteria**
- The project can be opened and previewed using the agreed method.
- The starting state can be restored.
- No production deployment or domain change occurs during setup.

**Checkpoint:** Workspace ready.

### Stage 2 — Create the minimum public-site skeleton

**Goal:** Make the smallest valid website that can be previewed.

**Tasks**
- Create only the approved initial entry page and minimum required assets inside `site/`.
- Keep `documentation/` outside the public website folder.
- Add basic document metadata and a semantic page structure.
- Add a minimal not-found page only if it is in the approved initial scope.
- Do not add databases, authentication, advertising, newsletter integration, or complex JavaScript yet.

**Pass criteria**
- The entry page loads locally.
- No missing asset requests or browser-console errors are present.
- The page has a meaningful title, language declaration, and basic semantic landmarks.
- The layout does not overflow at the agreed mobile and desktop widths.

**Checkpoint:** Minimal site loads reliably.

### Stage 3 — Establish design foundations

**Goal:** Create reusable visual rules before building multiple sections.

**Tasks**
- Agree typography, spacing, content widths, borders, and brand colours.
- Define the initial light/dark theme strategy only after the approach is approved.
- Establish keyboard focus visibility and readable contrast.
- Add only the design tokens and shared styles needed by the first fragment.

**Pass criteria**
- The agreed tokens are used consistently in the fragment.
- Text is readable and controls have visible focus states.
- No theme toggle is claimed to work until its behaviour is actually implemented and tested.

**Checkpoint:** Design foundation accepted.

### Stage 4 — Build the header in isolated fragments

Build one sub-fragment at a time:

1. Brand/logo and home link.
2. Main navigation links.
3. Search control appearance and behaviour, if approved.
4. Theme control, if approved.
5. Responsive navigation behaviour, if needed.

**Pass criteria**
- The logo/home link reaches the correct homepage.
- Every visible navigation link points to an existing destination or is clearly marked as not yet active during development.
- Keyboard navigation works.
- The header does not cover page content unexpectedly.
- Mobile and desktop behaviour matches the agreed design.

**Checkpoint:** Header accepted before the next major section.

### Stage 5 — Build the homepage layout with temporary content

**Goal:** Establish section order and responsive layout without connecting live data.

Build separately:
1. Trending-topic strip.
2. Featured-story area.
3. Reviews and recommendations layout.
4. Latest news and guides cards.
5. Newsletter presentation.
6. Footer.

Use clearly identified sample content while testing. The six sample articles for each group are deliberate, linkable development content; they should appear on the group pages so layout and navigation can be tested. Do not connect the database or newsletter service just to make the layout look populated.

**Pass criteria**
- Each section is independently reviewable.
- Cards align and wrap at agreed viewport widths.
- Images have appropriate alternative text or are correctly treated as decorative.
- No section introduces horizontal overflow or blocks keyboard access.
- Sample content is clearly labelled as development/test content where appropriate and is not silently omitted from development group pages or sitemap tests.

**Checkpoint:** Static homepage layout accepted.

### Stage 6 — Build one article page as a proof of concept

**Goal:** Prove the custom-HTML article approach with one representative article before scaling up.

**Tasks**
- Agree the initial article-group taxonomy and navigation-to-group URL mapping.
- Create `templates/article-template.html` as the canonical starter/reference contract for article structure, metadata conventions, shared site links, CSS classes/IDs and script hooks.
- Choose one representative test article and create it as a separate HTML file under its group folder.
- Agree the stable URL/folder pattern before creating the remaining samples.
- Add the approved article metadata and semantic structure.
- Test headings, images, captions, tables, code samples, citations, and any special layout that the test article actually needs.
- Decide which elements are shared and which can remain article-specific.

**Pass criteria**
- The article loads at its intended URL.
- Navigation back to the homepage works.
- The page is readable on mobile and desktop.
- Title, description, canonical URL strategy, and social-preview metadata are checked against the approved SEO plan.
- Article-specific styling does not unintentionally break the rest of the site.

**Checkpoint:** Canonical article template and one representative article proof of concept accepted before creating the full sample set.

### Stage 6A — Plan and build article-group landing pages

**Goal:** Build one dedicated browse page for each final article group and connect it to navigation and the homepage.

**Tasks**
- Use `Article-Group-Pages.md` to agree the reusable group-page components and the group slug rules.
- Create one page under `sections/<group-slug>.html` for each final group/navigation destination.
- Keep the homepage components distinct; connect their “See All”/equivalent links to group pages where appropriate.
- Map each dropdown destination to a real group landing page.
- Put individual articles in the corresponding `articles/<group-slug>/` folder.
- Create six sample article pages for every final group, not six in total. Link these sample pages from their group pages during development.
- Do not automatically hide or exclude development sample articles from section listings or sitemap testing; the owner will decide when to delete them later.

**Pass criteria**
- Every final dropdown destination opens its matching group page.
- Every group page links to six sample article files for testing.
- Each sample article has a valid route and a predictable link back to its group and/or homepage.
- The site can load all nested pages and their shared asset paths correctly.
- Responsive, keyboard and link checks pass for the representative pages before scaling the pattern across all groups.

**Checkpoint:** Group-page pattern accepted; all final groups have landing pages and six linked test articles.

### Stage 7 — Add article-group landing pages, archive, categories, tags, and search one at a time

**Recommended order**
1. A cross-group article listing/archive.
2. Category/group navigation and the dedicated group pages described in Stage 6A.
4. Tag listing and tag filtering.
5. Search interface.
6. Search behaviour and empty-result state.
7. Pagination or “load more,” if required.

**Pass criteria**
- Each feature has a defined source of article information.
- Links and filters produce correct results for the test content.
- Empty results and unknown categories/tags are handled clearly.
- Search does not claim to search content that is not indexed or supported.
- No feature is added merely because its button has been drawn.

**Checkpoint:** Discovery features accepted individually.

### Stage 8 — Introduce structured content and backend services only when needed

**Goal:** Add dynamic management without destabilising the working static site.

Before implementation, explicitly decide which information truly needs a backend. If Supabase is approved, plan and test each area separately, for example:
1. Schema and data model.
2. Development/test project and credentials.
3. Public read access and row-level security policies.
4. Article metadata retrieval.
5. Homepage selections and trending topics.
6. Owner-only management actions.
7. Error and unavailable-service states.

**Pass criteria**
- Public visitors cannot perform owner-only operations.
- Secrets are not embedded in public browser code.
- Row-level security and permissions are tested with both permitted and denied operations.
- The site remains understandable when the service fails or returns no data.
- Static fallback behaviour is documented where required.

**Checkpoint:** Each backend capability accepted separately.

### Stage 9 — Add media storage and media handling

If a separate object store such as Cloudflare R2 is approved, implement this only after the media requirements and access model are agreed.

**Tasks**
- Define image/video formats, size limits, naming conventions, and alt-text workflow.
- Test a small set of images before uploading a large library.
- Decide whether media is public or private and apply the matching access controls.
- Test missing, slow, and incorrectly typed media responses.

**Pass criteria**
- Correct media loads at the intended URLs.
- Images do not distort layouts or cause avoidable layout shifts.
- Private media is not exposed through public URLs if privacy is required.
- Upload and replacement procedures are documented.

**Checkpoint:** Media workflow accepted.

### Stage 10 — Maintain the site through source files

- Keep routine article and homepage updates in HTML, CSS, JavaScript and the static article index.
- Use Git/GitHub commits as checkpoints and rollback points.
- Do not create an owner dashboard, article-upload portal or settings application.
- Revisit the architecture only if a concrete requirement later makes a backend necessary.

### Stage 11 — Add external integrations individually

Possible integrations include newsletter signup, feedback form, analytics, and advertising. Each requires a separate scope and test.

For each integration:
- Confirm the provider and current plan/limits.
- Define what information is sent and where.
- Add the minimum integration needed.
- Test success, validation failure, network failure, and duplicate submission.
- Review privacy disclosures and consent requirements where applicable.
- Keep unrelated integrations out of the same change.

**Pass criteria**
- The integration works in a real test submission.
- Failure states are understandable.
- No secret API key is exposed in public code.
- Privacy/disclosure wording matches the actual implementation.

**Checkpoint:** One integration accepted at a time.

### Stage 12 — Add special features and interaction polish

Examples include the rotating featured story, Most Popular ranking, theme switching, the 404 Snake Game, and any advanced animation.

Implement and test each separately. Prefer accessible, pauseable, keyboard-operable behaviour and respect reduced-motion preferences where animation is used.

**Pass criteria**
- The feature behaves as specified and can be operated accessibly.
- It does not block reading or navigation.
- It fails gracefully if required data is missing.
- Performance and regression checks pass.

**Checkpoint:** Each special feature accepted independently.

### Stage 13 — Search-engine, accessibility, performance, and security review

**Goal:** Test the assembled site, not just its individual fragments.

**Checks**
- Internal links and missing pages.
- Page titles, descriptions, canonical URLs, sitemap, and robots directives.
- Heading hierarchy, keyboard navigation, visible focus, contrast, image alternatives, and form labels.
- Mobile layout and horizontal overflow.
- Console errors, failed network requests, and broken assets.
- Image sizes and loading performance.
- Authentication, permissions, exposed credentials, and unsafe HTML handling.
- Privacy notices and third-party disclosures appropriate to enabled features.

**Pass criteria**
- All critical issues are fixed or explicitly accepted as known limitations.
- Tests are recorded with the date and result.
- No launch blocker is silently ignored.

**Checkpoint:** Pre-launch review accepted.

### Stage 14 — Staging and launch rehearsal

**Goal:** Verify the complete site before the public domain is changed.

**Tasks**
- Deploy to an agreed test/staging location.
- Test representative pages and workflows on the deployed version.
- Verify redirects, canonical URLs, asset paths, caching, and error pages.
- Test backup and rollback procedures.
- Confirm that the current production site/domain configuration will not be changed without explicit approval.

**Pass criteria**
- The staging version passes the agreed checklist.
- The rollback procedure is understood and has been checked as far as practical.
- The owner explicitly approves the launch.

**Checkpoint:** Launch approved or returned for fixes.

### Stage 15 — Launch and controlled maintenance

**Tasks**
- Make the approved production change.
- Verify homepage, sample articles, search/navigation, media, and integrations.
- Check logs and error reports after launch.
- Record the deployed version and changes.
- Continue with small, reversible updates.

**Pass criteria**
- Critical visitor journeys work in production.
- The deployed version is recorded.
- A rollback path is available.
- Later changes continue to follow the same fragment workflow.

**Checkpoint:** Initial launch verified.

---

## 3. Definition of done for every fragment

A fragment is not complete just because its code has been written. Mark it complete only when:

- [ ] The scope was approved before implementation.
- [ ] Only the approved files were changed.
- [ ] The code or content passes relevant syntax/validation checks.
- [ ] No unexplained browser-console errors or failed requests remain.
- [ ] The intended behaviour has been tested in the browser.
- [ ] Relevant mobile and desktop layouts have been checked.
- [ ] Existing working features have been regression-tested.
- [ ] Accessibility basics relevant to the fragment have been checked.
- [ ] Known limitations are documented.
- [ ] The previous known-good checkpoint can be restored.
- [ ] The owner has reviewed and accepted the result.

Not every item applies identically to every fragment; record “not applicable” with a reason rather than skipping checks silently.

## 4. Change-control rules

1. **One fragment per change set.** Avoid mixing unrelated features.
2. **One file at a time where practical.** If a fragment genuinely requires several files, list them before editing.
3. **No surprise refactoring.** Do not reformat or rewrite unrelated code.
4. **No silent architecture changes.** If a new dependency or design decision becomes necessary, stop and ask.
5. **Keep a known-good checkpoint.** Use version control or an equivalent backup method before risky changes.
6. **Test before and after.** Record the result, not just “looks fine.”
7. **Stop on unexplained failure.** Diagnose the earliest failing layer before adding more features.
8. **Keep credentials safe.** Never put service-role keys or private secrets in public client-side code.
9. **Separate test and production.** Do not test risky database or deployment changes against production by default.
10. **Owner approval controls progression.** A plan or generated file does not itself authorize repository edits or deployment.

## 5. Bug isolation procedure

When a test fails:

1. Stop adding new features.
2. Reproduce the issue and record the exact steps.
3. Identify the smallest affected fragment.
4. Check the browser console, network requests, and relevant file changes.
5. Compare against the last known-good checkpoint.
6. Make the smallest targeted correction.
7. Repeat the original failing test.
8. Run relevant regression tests.
9. Record the root cause and correction if known.
10. Continue only after the owner accepts the fix.

## 6. Build log entry template

Append one entry for each completed fragment:

- **Date:**
- **Stage / fragment:**
- **Goal:**
- **Files changed:**
- **Tests performed:**
- **Results:**
- **Issues found:**
- **Fixes made:**
- **Known limitations:**
- **Checkpoint / version:**
- **Owner approval:** Pending / Approved / Rejected

Keep the build log append-only once implementation begins; correct a previous entry with a new dated note rather than silently rewriting history.

## 7. Proposed first implementation sequence

The recommended first sequence is deliberately small:

1. Review and approve the build contract.
2. Confirm the development workspace and recovery method.
3. Create a minimal page that loads locally.
4. Test that page and record the baseline.
5. Establish the smallest approved design foundation.
6. Build the logo/home link as the first visual fragment.
7. Test and approve it.
8. Add one navigation fragment.
9. Test and approve it.
10. Continue one header fragment at a time before building the homepage sections.
11. Define the article-template contract, build the group-page pattern, and create six linked sample articles for each final article group before testing the full navigation/content flow.

Do not start with Supabase, a control panel, newsletter integration, ads, or a complete homepage. First establish that the local site can be changed, previewed, tested, and restored safely.

---

## 8. Decisions still requiring owner approval

This plan intentionally does not finalize:
- Framework or static-site generation tool.
- Final folder/file structure.
- Exact article URL pattern.
- Hosting and deployment configuration.
- Database schema and access policies.
- Media storage and privacy model.
- Newsletter, analytics, advertising, and feedback integrations.
- The precise initial launch scope.

These should be decided in the relevant planning documents before the corresponding implementation stage begins.