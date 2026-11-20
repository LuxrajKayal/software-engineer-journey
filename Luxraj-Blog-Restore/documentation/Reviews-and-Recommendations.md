# Reviews & Recommendations

## Purpose
Show a two-column homepage section that highlights product reviews and buying recommendations alongside a Most Popular article ranking.

## Layout

### Left Column — Reviews & Recommendations
- Contains four review-style cards.
- The four cards are stacked vertically.
- Content includes:
  - Product reviews.
  - Buying recommendations.
- Each card may include an image, title, short description, and link to the full article.
- The homepage cards are previews only. A “See All Reviews”/equivalent link should lead to the dedicated Product Reviews group page (planned example: `sections/reviews.html`). Buying recommendations can link to the corresponding Buying Guides/Buying Advice group if that is the final taxonomy.

### Right Column — Most Popular
- Displays a ranked list of popular articles.
- Rankings are calculated automatically using page-view data.
- Manual pins are maintained in the homepage's static source/data files. Automatic popularity ranking is not active unless a suitable analytics data source is implemented.
- Manual overrides allow selected articles to be promoted even when they are not among the most-viewed articles.

## Responsive Behavior
- The two-column section should adapt to the website's responsive layout.
- Exact tablet and mobile behavior remains undecided.

## Data and Ranking
- Automatic popularity ranking will use page-view data.
- The definition of a valid page view and the method used to collect and store page-view data have not yet been decided.
- The site owner can change pinned articles by editing the relevant static source/data files. An automatic ranking requires a separate analytics source and is not assumed to exist.

## Relationship to Dedicated Group Pages
- The homepage component remains part of `index.html`; it does not replace a dedicated Reviews group page.
- The dedicated group page lists its full group collection and links to individual article files under the matching `articles/<group-slug>/` folder.
- During development, the Reviews group page should have six separately linked sample articles. These are intentional test content and may be deleted later by the owner; do not hide them automatically.

## Decisions Summary
| Item | Decision |
|---|---|
| Section layout | Two columns |
| Left column | Four vertically stacked cards |
| Left column content | Product reviews and buying recommendations |
| Right column | Most Popular ranked list |
| Ranking method | Automatic page-view ranking with manual pinning/overrides |
| Responsive details | To be decided |
| Page-view collection and storage | To be planned later |

## Still to Decide
- How many articles appear in the Most Popular list.
- What counts as a valid page view.
- How page-view data will be collected and stored.
- How long the ranking period should be (for example, recent views or all-time views).
- Exact card design and which metadata each card displays.
- Tablet and mobile layout.