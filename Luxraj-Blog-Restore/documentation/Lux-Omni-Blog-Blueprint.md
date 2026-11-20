# Lux Omni Blog — Website Blueprint

**Project:** Lux Omni Blog  
**Target domain:** `blog.luxomni.com`  
**Document type:** Product and functional blueprint  
**Status:** Planning draft — proposed details remain unapproved until explicitly confirmed.

**Scope update — 2026-10-27:** The developer control panel/dashboard has been removed from the repository and is not part of the project. Content, homepage selections and supported settings are maintained directly in the static source files through VS Code and Git/GitHub. Older dashboard references below are superseded by this update.

---

## 1. Product Vision

Lux Omni Blog is planned as a hand-coded, static-first technology publication with a visual direction inspired by established technology editorial websites such as CNET. It will publish technical product reviews, drone engineering articles, tutorials, educational material, hardware/software coverage, buying advice and other technology writing.

The site should be:
- Readable and uncluttered.
- Suitable for frequent publishing and small incremental updates.
- Built around stable article URLs.
- Flexible enough for custom article layouts rather than one mandatory article template.
- Portable between hosting providers where practical.
- Maintainable by a learner who wants to understand and control the code.

This blueprint describes the intended product. It is not source code and does not authorize changes to any repository.

## Repository Layout for Planning and Implementation

The GitHub repository separates public website source from planning references:

```text
Lux-Omni-Blog/
├── README.md          # Existing root file; leave unchanged
├── documentation/     # Planning documents retained for development reference
├── site/              # Public website source and eventual deployment root
```

The static-site deployment publishes `site/` only. The `documentation/` folder is for project planning/reference and must not be treated as a website component. No control panel is included.

## 2. Audiences and Core Use Cases

### Readers
- Discover recent technology stories.
- Browse by topic or content type.
- Read detailed reviews, tutorials and technical explainers.
- Search articles and explore tags.
- Find popular or recommended content.
- Subscribe to the newsletter.
- Send feedback or feature suggestions.

### Site owner/editor
- Write and publish custom HTML articles.
- Preview and check articles before publication.
- Manage article metadata, IDs, tags and media references.
- Choose featured stories and homepage content.
- Manage trending topics and advertisement slots.
- Adjust supported site settings without manually editing every article.
- Review reader suggestions and choose which improvements to implement.

## 3. High-Level System

```text
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
  └── Source changes in VS Code + Git/GitHub ──► approved deployment
```

This is a proposed service layout, not a finalized implementation. Public site code must only access data intended to be public. Authentication and database permissions must be enforced independently of the visible interface.

## 4. Public Website Structure

### 4.1 Top Information Bar
Purpose: provide secondary links without competing with the main navigation.

Planned items:
- Manually maintained slogan.
- Newsletter link.
- Social links: Facebook, Instagram, X, YouTube and GitHub.
- Business email.
- About link.

Exact wording, destinations and mobile treatment remain open.

### 4.2 Main Navigation Header
Planned items:
- Brand logo/home link.
- Tech.
- Reviews.
- How To.
- Hardware.
- Software.
- Buying Advice.
- Search.
- Dark/light theme toggle.

The navigation should remain easy to scan. The responsive design and dropdown interaction will be finalized during UI planning.

### 4.3 Topic Dropdowns
The Tech menu is expected to include:
- AI
- Phones
- Computing
- TV & Audio
- Gaming
- Smart Home
- Internet
- Cars
- Security
- Science

The homepage should use one primary navigation row rather than adding a second category row. Each final dropdown destination must link to a dedicated article-group landing page. The exact contents of Reviews, How To, Hardware, Software, and Buying Advice dropdowns remain to be planned; new destinations should not be added to the final file map until their group/URL naming is agreed.

### 4.4 Trending Topics
Purpose: highlight selected topics or current areas of interest.

Planned behavior:
- Topic labels and destination URLs are maintained in static site files; there is no dashboard or live settings service.
- Display the topic label and link.
- Scrolling or static behavior is not yet decided; do not add motion by default before that decision.

### 4.5 Featured Story
Planned layout:
- One large featured story.
- Two smaller supporting stories.
- The large story rotates from left to right.
- Rotation pauses while the pointer is over the feature and resumes when the pointer leaves.
- Smaller stories remain fixed unless the owner changes them.
- The owner selects stories through the developer panel.

Each story may display an image, headline and short summary. Rotation timing, transition style, touch/keyboard behavior, accessibility and responsive layout remain open.

### 4.6 Homepage Advertisement Slots
Initial proposed slots:
1. A wide banner below the featured-story section and above the content feed.
2. An in-feed placement after several content rows.

Initial exclusions:
- No ads in the top information bar, navigation, trending strip or featured-story content.

Advertisement slots, if implemented, are configured in the static source files. Exact ad sizes, responsive behavior and campaign management are not finalized. Begin with manually placed ad units; direct advertising campaigns can be considered later.

### 4.7 Reviews & Recommendations
Planned two-column section:
- Left: four stacked review/recommendation cards.
- Right: “Most Popular” list.
- Most Popular is intended to use page-view information, with manual pinning or override available to the owner.

The view-count definition, measurement period, data source, card fields and responsive behavior remain open.

### 4.8 Latest Tech News & Guides
Planned desktop layout: four article cards in a horizontal row.

Each card may include:
- Category.
- Headline.
- Short excerpt.
- Publication date.
- Estimated reading time.
- Article link.

Default selection: latest published articles. Manual pinning or overrides, if needed, are maintained in the static homepage data/markup.

A “See All” link leads to the dedicated Tech News & Guides group landing page (or to a specifically planned aggregate archive if the selected content spans multiple groups). The group page can support filters, search links and pagination once those behaviors are agreed. Tablet/mobile layout and exact filters remain open.

A cross-group archive remains a separate utility page under `pages/archive.html`; it does not replace the dedicated landing page for each article group.

### 4.9 Newsletter
Planned provider: Brevo, initially using a free plan, subject to checking its current limits when implementation begins.

Proposed copy direction:
- Heading: “Stay Ahead of Technology” (draft, not final).
- Email field.
- Subscribe button.
- Short privacy note.

The placement, confirmation flow, consent text and visual treatment remain open. Newsletter signup must clearly communicate what the reader is subscribing to.

### 4.10 Footer
Planned contents:
- Brand name and short description.
- Topic links.
- About and Contact.
- Privacy Policy.
- Advertising information.
- Social links: Facebook, Instagram, X, YouTube and GitHub.
- Link to `luxomni.com`.
- Link to the separate personal portfolio/author website.
- Newsletter signup or newsletter link.
- Copyright notice.

Desktop may use multiple columns; mobile should stack content cleanly. Exact text and URLs remain open.


### 4.11 Dedicated Article-Group Landing Pages

These pages form a second level between the homepage and the individual article pages. The homepage already has its own components and remains a discovery/preview page; it is not replaced by the group pages.

- Every final article group/navigation destination gets a dedicated landing page.
- Selecting a dropdown item opens the matching group page. A “See All” link in a homepage component can open the relevant group page or a specifically planned aggregate archive.
- Each group page uses a shared page framework while allowing group-specific content where useful. The proposed framework includes shared site header/navigation, a breadcrumb or clear return path, group title and introduction, a featured/lead article when appropriate, a grid/list of articles, optional category/tag filters or sorting, pagination/“Load More” if approved, optional ad placement, newsletter area where appropriate, and the shared footer.
- The group page links to individual HTML files in the matching `articles/<group-slug>/` folder.
- The group-page visual design and exact component order will be planned in `Article-Group-Pages.md`. The homepage's Reviews and Recommendations and Latest Tech News & Guides components remain homepage components, not substitutes for the dedicated pages.
- Article group names and slugs must be stable and mapped consistently across dropdowns, section pages, article folders, article metadata and future publishing software.

## 5. Article Experience

### 5.1 Article Template and Format
- Each article is a separate HTML file under its article-group folder.
- `templates/article-template.html` is the canonical starter/reference structure and the contract that future publishing software should respect.
- The template should provide consistent document metadata conventions, shared navigation/footer references, known CSS classes/IDs and script hooks, article information slots, content landmarks, and link conventions.
- Custom article layouts remain allowed. The template is a safety baseline, not a rule that every article must look identical; deliberate exceptions should preserve the stable URL and shared interfaces whenever possible.
- Future publishing software should populate defined fields and preserve structural hooks rather than rewriting unrelated parts of an article.
- Validate links, asset paths, metadata, and navigation before adding or updating an article.
- Article URLs should remain stable after publication.

### 5.2 Article Information
The publishing workflow should support suitable metadata such as:
- Unique article ID.
- Title and URL/slug.
- Summary or excerpt.
- Category and tags.
- Author reference.
- Publication/update dates.
- Featured image and media references.
- Publication status.
- Homepage placement or pinning, where relevant.

The final metadata schema is not yet approved.

### 5.3 Article IDs and Media IDs
- Article IDs and media IDs should be distinct.
- IDs should be generated or assigned automatically by the authoring workflow where practical.
- IDs are for organization and referencing, not security.
- Human-readable article filenames should be stable and should not depend on secret identifiers.

### 5.4 Article Visibility Gate
Proposed behavior:
- When the gate is disabled, the article displays normally.
- When enabled, the public experience shows a private/unavailable message with a link to the homepage instead of the article content.
- The owner wants to manage visibility centrally through the developer panel.

Important boundary: a browser-side script that hides content does not prevent the HTML from being downloaded. If genuinely private content must not be delivered to the public, enforcement must happen at a server/edge access-control layer. The final security model is still open.

## 6. Search, Categories and Tags

### Search
- Readers should be able to search published articles.
- Search should support filtering by tags; additional filters can be selected based on usability.
- Search behavior should remain useful on mobile and keyboard-accessible.

### Categories and tags
- Categories provide broad editorial navigation.
- Tags describe specific subjects and connect related articles.
- Tag pages should help readers discover relevant content, not merely create empty pages.
- Search implementation is open: a generated client-side index or another approach may be chosen after testing.

### Archive
- The archive should list published articles.
- Planned capabilities include filters, search and pagination.
- Archive URLs and query-parameter conventions remain open.

## 7. Owner Tools

### 7.1 Manual Source-Based Workflow

The owner edits article HTML, article metadata and homepage selections directly in VS Code. Preview changes locally, check links and browser-console errors, then commit and publish through the approved Git/GitHub workflow. No dashboard, article-upload portal or browser-based settings editor is in scope.

### 7.2 Initial Article Authoring Workflow

A separate backend or local Article Studio is excluded from the initial scope to reduce workload. The owner will author and maintain individual HTML articles directly in Visual Studio Code. Each article may use custom markup and article-specific CSS/JavaScript when needed; reusable components are optional, not mandatory.

Proposed workflow: edit in VS Code → preview locally → test links/responsiveness/console → check SEO metadata → commit with Git → push to GitHub → publish using the deployment method selected later → verify the live page and sitemap. The exact deployment trigger and hosting setup remain undecided.

### 7.3 Recommended Development and SEO Tools

- **Visual Studio Code:** article and website editing.
- **Git + GitHub:** version history, checkpoints and remote backup.
- **Browser Developer Tools:** console, network and responsive checks.
- **Lighthouse / PageSpeed Insights:** audits at meaningful milestones.
- **Google Search Console:** sitemap, indexing status and search performance after launch.
- **Bing Webmaster Tools:** optional search monitoring.
- **Google Trends:** optional editorial topic research.

These are proposed tools, not mandatory sign-ups. SEO tools can identify issues but cannot guarantee indexing or ranking.

### 7.3 Publishing Rules
- A change to a setting can avoid a full site deployment only when the public site is implemented to fetch and apply that setting dynamically.
- A new static article HTML file normally must be included in a deployment before its public URL becomes available.
- Shared CSS/JS changes generally require a new deployment.
- Media can be uploaded separately when the public site/article references the correct stable media URL.
- The publishing workflow should keep the sitemap aligned with the URLs intentionally included in the current development/release build. During development, the six sample articles per group are deliberate linkable test pages and may be included in listings and sitemap tests; do not automatically exclude or hide them. The owner will remove samples later when ready, after which the sitemap and links should be updated.
- The canonical template file is a reference/starter, not itself a group article or one of the six samples. A sample page used for testing must be its own real article HTML file.

## 8. Hosting, Assets and Migration

### Planned responsibilities
- **Cloudflare Pages:** public website and published static article files.
- **Cloudflare R2:** large photos, videos, banners and other media.
- **Supabase:** structured metadata/settings and protected developer-panel data.
- **Brevo:** newsletter subscription and email delivery.
- **Google Forms:** contact/reader feedback forms.
- **Separate portfolio site:** personal author/About page and broader legal/personal information as appropriate.

This service allocation is the current direction, not a claim that every service is already configured.

### URL preservation
- Use stable article URLs.
- Keep domain and path strategy independent of provider-specific features where possible.
- Before migration, test a staging copy, internal links, media URLs, redirects, sitemap, forms and article rendering.
- Switch DNS only after verification.
- Keep a rollback path for migration.

## 9. Design and Accessibility Principles

- Editorial, technology-focused visual style inspired by CNET-style publications without copying another site's design or branding.
- Clear hierarchy between featured content, article feeds and secondary navigation.
- Avoid overcrowding the homepage.
- Mobile-first responsive behavior.
- Readable type sizes and line lengths.
- Keyboard-operable navigation, search, forms and game interactions.
- Visible focus states and sufficient color contrast.
- Respect reduced-motion preferences.
- Images should have meaningful alternative text when informative.
- Theme switching should remain readable and consistent across public pages.
- Add optional features only when they have a clear purpose.

The final brand palette, typography, spacing, breakpoints and component states belong in a separate design-system plan.

## 10. 404 Page

Planned elements:
- Clear “page not found” message.
- Link back to the homepage.
- A small Snake game as an optional interactive feature.

The page should remain lightweight, support keyboard and touch input, avoid intrusive autoplay and return a genuine HTTP 404 response.

## 11. Legal, Privacy and External Services

- Keep blog-specific privacy information easy to find.
- Explain newsletter collection and the relevant provider.
- Disclose advertising and any analytics/tracking actually used.
- Provide clear contact/advertising information.
- Link to relevant policies on the separate portfolio site where appropriate, but do not assume that an unrelated policy automatically covers every blog-specific data practice.
- Do not claim analytics, tracking or data collection is present until it is implemented.

Exact legal copy should be reviewed for the real services and practices used at launch.

## 12. Security and Reliability

- Never expose Supabase service-role credentials or other secrets in public JavaScript.
- Treat public HTML, CSS, JavaScript and static metadata as public; never store credentials or secrets in the deployed site.
- Validate input in the trusted layer, not only in browser forms.
- Treat custom article HTML/JavaScript as executable code and review it before publication.
- Keep drafts, credentials and private configuration out of the public deployment directory.
- Ensure public database access is limited to fields/data intended for public display.
- Validate article links, metadata and media references before publishing.
- Keep backups and document how to restore a known-good deployment.
- Avoid unnecessary dependencies and keep the site performant.

## 13. Phased Implementation Roadmap

### Phase 1 — Foundation
- Confirm domain and deployment approach.
- Create the smallest public skeleton: homepage, shared styles, basic navigation and 404.
- Establish brand tokens and responsive layout.
- Publish a staging version and test URLs.

### Phase 2 — Article and group-page foundation
- Define stable group slugs, article URL rules, metadata, and the navigation-to-group mapping.
- Create the canonical `templates/article-template.html` and test one representative article.
- Plan and build the shared layout for dedicated article-group landing pages.
- Create six sample article HTML files for every final article group and make them available from their respective landing pages during development.
- Build the local preview/validation workflow; test page-to-page links and sitemap updates end-to-end.

### Phase 3 — Homepage and group-page content
- Implement trending topics, featured story, reviews/recommendations and latest articles on the homepage.
- Connect homepage cards and “See All” links to the correct group pages or individual articles.
- Test all dedicated group landing pages using the six samples per group.
- Add dynamic settings only where they provide a clear benefit.

### Phase 4 — Evaluate optional backend needs
- Finalize Supabase schema, access rules and public-read model.

- Add supported homepage and article visibility settings.
- Test authorization and failure states.

### Phase 5 — Search, media and integrations
- Add search, tag filtering and archive.
- Connect R2 media workflow.
- Add Brevo newsletter signup and Google Forms links.
- Add ad slots only when ready to test them.

### Phase 6 — Quality and launch
- Test mobile, keyboard accessibility, performance, metadata, sitemap and 404 behavior.
- Test links and media loading.
- Verify privacy disclosures and third-party integrations.
- Test backup/rollback and migration procedures.
- Launch only after the owner reviews the working site.

Phases can be adjusted as implementation experience reveals the most practical order.

## 14. Decisions Still Open

1. Exact framework/build/deployment commands, if any; no generator is selected by this blueprint.
2. Final article URL pattern.
3. Supabase schema, RLS policies and authentication approach.
4. How public pages retrieve settings and metadata.
5. Whether a separate authoring helper is needed later (deferred; excluded initially).
6. Search indexing approach.
7. Exact mobile navigation and dropdown behavior.
8. Featured-story timing, transitions and accessibility behavior.
9. Popular-content metric and ranking period.
10. Newsletter placement, consent copy and current provider limits.
11. Advertisement sizes, responsive rules and provider integration.
12. Analytics decision and associated privacy requirements.
13. Final visual design tokens and component specifications.
14. Whether and how article visibility will be enforced at an edge/server layer.

## 15. Working Rules

- This blueprint is a planning reference, not a blanket approval to implement every feature.
- No repository, source file or deployment should be changed without explicit permission.
- Keep major planning subjects in their own documents.
- Distinguish confirmed decisions from proposals and unresolved questions.
- Start small, test real workflows, and avoid premature complexity.
- Preserve article URLs and keep migration in mind from the beginning.
- Add features based on actual need and reader feedback rather than filling the homepage with every possible feature.