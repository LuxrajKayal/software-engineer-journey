# Latest Tech News & Guides

## Purpose
Display a homepage grid of the latest technology news and guides, with a link to browse the full collection.

## Homepage Layout
- Display four article cards in one horizontal row on desktop.
- Responsive behavior for tablets and mobile will be planned during the layout stage.
- The section includes a **See All** link.

## Article Cards
Each card displays:
- Category.
- Headline.
- Short excerpt.
- Publication date.
- Estimated reading time.
- Link to the full article.

## Article Selection
- Automatically display the latest published articles by default.
- Allow the site owner to pin or manually override selected articles by editing the static homepage data/markup.
- JavaScript populates the cards using article data available to the website.

## See All Destination
The **See All** link opens the planned dedicated Tech News & Guides group page (example path: `sections/tech-news-and-guides.html`), rather than sending the reader back to the homepage. That page is a separate destination and can support:
- The full group article collection.
- Category/tag filters where useful.
- Search or a link to the broader search page.
- Pagination or “Load More,” once selected.

If the final editorial taxonomy splits news and guides into separate groups, update the destination accordingly rather than forcing both into one page.

## Decisions Summary
| Item | Decision |
|---|---|
| Desktop card layout | Four cards in one horizontal row |
| Default selection | Latest published articles |
| Manual selection | Update the static homepage data/markup in a reviewed source change |
| Card information | Category, headline, excerpt, publication date, estimated reading time, article link |
| See All destination | Dedicated group landing page (or explicit aggregate archive if the content spans groups) |
| Responsive details | To be planned later |

## Relationship to Development Samples
The homepage may preview selected sample articles while the site is under development. The dedicated group page must link to all six sample articles planned for its group. Do not automatically hide them or exclude them from development link/sitemap testing; the owner will delete the samples later when ready.

## Still to Decide
- Exact tablet and mobile card layouts.
- How many articles are shown on the dedicated page per page.
- Article search behavior and supported filters.
- How publication dates and estimated reading times are calculated or stored.