# Lux Omni Blog — Article Group Pages

**Status:** Planning specification; implementation is not authorized by this document alone.  
**Purpose:** Define the pages that readers open from navigation dropdowns and homepage “See All” links.

## 1. Place in the Website Structure

The public website has three connected levels:

1. **Homepage (`index.html`)** — retains the homepage components already planned and introduces selected stories/topics.
2. **Article-group landing pages (`sections/<group-slug>.html`)** — one page per final selectable group/navigation destination, allowing readers to explore that group.
3. **Individual articles (`articles/<group-slug>/<article-slug>.html`)** — each full article is a separate HTML file based on the canonical starter/reference at `templates/article-template.html`, with custom layouts allowed when needed.

These levels are connected but not interchangeable. A homepage component may preview a few items from a group; it does not replace the group's dedicated landing page.

## 2. Navigation and URL Contract

- A dropdown item links to its matching group landing page.
- Each group landing page links to articles stored inside the matching `articles/<group-slug>/` folder.
- Homepage cards link to the actual individual article, while a “See All”/equivalent link opens the relevant group page.
- Each group slug must be consistent across the landing-page filename, article folder, article metadata, navigation mapping, and future publishing software.
- Use lowercase hyphen-separated slugs and avoid changing URLs after they become referenced. If a URL must change after release, plan a redirect and update internal references/sitemap.
- The exact full taxonomy and final navigation-to-page mapping remain open until the dropdown content is decided. The examples below are the groups discussed so far, not an exhaustive final list.

Examples:

| Group | Landing page example | Article folder example |
|---|---|---|
| Product Reviews | `sections/reviews.html` | `articles/reviews/` |
| Drone Technology | `sections/drone-technology.html` | `articles/drone-technology/` |
| Tutorials / How To | `sections/tutorials.html` | `articles/tutorials/` |
| Tech News & Guides | `sections/tech-news-and-guides.html` | `articles/tech-news-and-guides/` |
| Buying Guides | `sections/buying-guides.html` | `articles/buying-guides/` |

## 3. Planned Components of a Group Landing Page

Plan a reusable page structure while allowing the content and minor layout choices to differ by group:

1. **Shared site shell:** top information bar, main navigation/dropdowns, theme behavior, and shared footer consistent with the homepage.
2. **Breadcrumb or return path:** make it easy to return to the homepage or broader parent topic, if a parent/child hierarchy is selected.
3. **Group identity:** readable group title, short introduction, and optional group-level illustration/hero image.
4. **Lead or featured story:** an optional prominent article at the top of the group page. If used, it must link to a real article in that group.
5. **Article collection:** card grid/list showing articles belonging to the group. Cards should use the approved article metadata convention: title, category/group, excerpt, date where available, reading time where available, thumbnail/alt text, and a valid link.
6. **Discovery controls:** optional subgroup/category filters, tag filters, sort order, or a search affordance if appropriate for the group. Do not display controls until their behavior is implemented and tested.
7. **Pagination or “Load More”:** decision remains open; choose one mechanism only after card count and user experience are tested.
8. **Advertisement slots:** reserved placements may be added if approved, without interrupting reading or making the page unstable.
9. **Newsletter/related-content area:** optional, reusing shared components where appropriate.
10. **Shared footer:** same core footer conventions as the rest of the public site.

The final order, responsive layout, number of cards per page, and whether every group uses the same set of components are not yet fixed. The common navigation, link rules, and article-card interface should stay consistent.

## 4. Six Sample Articles Per Group During Development

**The requirement is six sample article pages for every article group—not six articles total.** When the final list of groups is established, each group receives six separate HTML sample files.

These are purposeful development fixtures used to test:
- The group's article-card layout with several items, not just one.
- Different title lengths, summaries, publication dates, reading-time labels and thumbnail ratios.
- Link paths from dropdown → group page → individual article and back.
- The article template's shared styles and hooks.
- Article-specific layouts when a subject needs a deliberate exception.
- Search/category/tag/filter/pagination behavior when those features are implemented.
- Sitemap generation and internal-link checking.
- Responsive page layout with multiple rows/cards.

Keep these samples linkable and visible during development so these flows can be tested. Do not automatically hide them or remove them from test listings/sitemap checks. They can be deleted later by the owner. After the owner decides to remove them, clean up references from group pages, homepage selections, indexes and sitemap so there are no broken links.

## 5. Relationship to the Canonical Article Template

`templates/article-template.html` is the canonical starting structure and interface contract for individual article pages. It should standardize appropriate metadata conventions, shared site navigation/footer references, stable CSS classes/IDs, shared script hooks and content landmarks.

The template is not itself one of the group's six samples. Each sample must be a real article file created from/corresponding to the template. The template is a baseline, not a rigid visual mandate: article-specific markup, CSS or JavaScript may be used deliberately where the topic requires it. Future publishing software should populate recognized fields and preserve stable interfaces/links rather than rewrite the whole page unpredictably.

## 6. Relationship to the Homepage

- Homepage components remain as already planned.
- The homepage may show a small selected set of reviews, latest stories, featured items, and other previews.
- The homepage “See All” link points to a matching group page when a component represents one group. For mixed content, it may point to the archive or another explicitly planned aggregate page.
- Group-page article cards link to individual article files; article pages should provide a predictable way back to the homepage and/or their group page.
- A homepage component and a dedicated group page may use related visual elements, but their content purpose differs: preview on the homepage versus exploration on the group page.

## 7. Development and Validation Checks

For every group, verify:

- Its dropdown destination and group-page URL match the navigation map.
- Its landing page loads directly when its URL is entered.
- Six sample article files exist and are linked from the group page.
- Every article card resolves to the intended article.
- Every article has its intended metadata and sensible title/heading structure.
- Shared CSS/JS paths work from nested article directories.
- Breadcrumb/home/group links resolve correctly.
- The page works at desktop, tablet and mobile widths and keyboard navigation remains usable.
- Sitemap and article-listing tests include the sample URLs during development as intended.
- No page relies on a button/control that has no implemented behavior.

## 8. Decisions Still Open

- Full list of article groups and how they map to the final dropdowns.
- Whether broad parent labels (Tech, Reviews, How To, Hardware, Software, Buying Advice) are also direct landing pages.
- Exact group-page components/order and per-group exceptions.
- Page size and whether pagination or “Load More” is preferred.
- Which groups need filters, tags, sorting, or related-content areas.
- Whether a featured-story block appears on every group page or only selected groups.

**Change control:** This plan does not authorize changes to the GitHub repository, website source files, or deployment. Those require separate explicit permission.