# Pre-Launch URL Cleanup and Google Indexing Checklist

## Purpose

This is a **pre-launch task**, not a current development task.

After Lux Omni Blog's website structure, category landing pages, article pages, and features are complete—and **before the public launch**—review and standardize the public URLs.

Do not start this cleanup while the website is still being built. Do not rename files or change the current folder structure as part of this task.

## The intended URL convention

Use clean, descriptive public URLs without the `.html` suffix, following a readable category → subcategory → article hierarchy.

Examples:

| Existing source file | Intended public URL path |
|---|---|
| `site/index.html` | `/` |
| `site/categories/engineering/engineering-index.html` | `/categories/engineering/engineering-index/` |
| `site/categories/engineering/electrical/electrical-engineering-index.html` | `/categories/engineering/electrical/electrical-engineering-index/` |
| `site/categories/engineering/electrical/articles/choosing-a-multimeter-for-electrical-measurements.html` | `/categories/engineering/electrical/articles/choosing-a-multimeter-for-electrical-measurements/` |

These are intended public paths. Confirm the exact extensionless and trailing-slash behavior on the final hosting platform before changing links.

## Rules to preserve

- Keep all existing physical `.html` filenames.
- Keep the current category, subcategory, and article folder hierarchy.
- Do not rename article or landing-page files.
- Do not create duplicate `index.html` files in category or article folders.
- Do not add a client-side routing framework just to hide file extensions.
- Use one consistent public URL convention throughout navigation, metadata, and indexing files.
- Pick and verify the final production canonical domain before updating absolute URLs. The current sitemap uses `https://blog.luxomni.com/`; confirm that this is still the intended launch domain rather than assuming it.

## Cleanup checklist

### 1. Verify hosting URL behavior first

- [ ] Confirm the final host (GitHub Pages, Cloudflare Pages, or another provider).
- [ ] Test an existing page using its physical `.html` URL.
- [ ] Test the intended extensionless URL.
- [ ] Test the intended trailing-slash form, if using trailing slashes.
- [ ] Check whether the host serves the extensionless URL directly or redirects to it.
- [ ] If the host does not provide the required behavior, choose a hosting-level redirect/rewrite solution before changing internal links.
- [ ] Make sure the old `.html` address does not remain as a competing indexable duplicate. Use a permanent redirect where supported, or the host's documented canonical URL behavior.

### 2. Update internal navigation links

Review links across the whole `site/` source, including:

- [ ] `site/partials/main-header.html` — the shared logo/home link currently explicitly ends in `index.html`.
- [ ] `site/partials/footer.html` — the shared footer logo/home link currently explicitly ends in `index.html`.
- [ ] `site/partials/topbar.html` — review any homepage or internal page links.
- [ ] `site/categories/**` — category landing-page links, subcategory links, article cards, and breadcrumbs.
- [ ] `site/pages/**` — internal page links, where applicable.
- [ ] `site/assets/js/hero-showcase.js` — `FEATURED_ARTICLE_URLS` currently contains article paths ending in `.html`.
- [ ] Any other JavaScript data/configuration that stores internal page URLs.

Use the correct project-root token or relative path for the existing build architecture. Do not introduce root-relative paths that break the GitHub Pages project path `/Lux-Omni-Blog/` while that remains the active deployment.

### 3. Update search-engine URL signals

- [ ] Update `site/sitemap.xml` so every `<loc>` uses the final canonical production domain and the agreed public URL format.
- [ ] Ensure the sitemap lists only the preferred canonical URL for each page.
- [ ] Add or verify a self-referencing canonical URL on each indexable homepage, category, subcategory, article, and other public content page.
- [ ] Ensure Open Graph URL metadata (such as `og:url`), where used, agrees with the canonical URL.
- [ ] Review structured-data URLs, breadcrumbs, and any absolute internal references so they agree with the same canonical URL format.
- [ ] Review `site/robots.txt` and add the correct sitemap declaration for the final production domain.
- [ ] Keep the 404 page out of the sitemap.

### 4. Build and verify before launch

- [ ] Run `node scripts/build-site.mjs` from the repository root.
- [ ] Search the generated `_site/` output for unintended internal links ending in `.html`.
- [ ] Check the generated sitemap for the final domain and clean URL paths.
- [ ] Verify that every URL in the sitemap resolves to the correct page.
- [ ] Verify old `.html` URLs redirect or resolve consistently without duplicate indexing.
- [ ] Test the homepage, category pages, subcategory pages, articles, shared header/footer links, hero links, and 404 homepage link from both root and deeply nested pages.
- [ ] Test on the final hosting provider, not only in a local preview.
- [ ] Validate the sitemap and inspect representative URLs in Google Search Console after the production domain is live.

## Google indexing reminder

Google indexes the **published HTML response at its public URL**, not the source filename in the repository. The physical `.html` files can remain unchanged while the hosting platform serves the agreed clean URLs.

The sitemap, canonical tags, internal links, redirects, and actual hosted responses must all agree. A sitemap submission or URL inspection request does not guarantee that Google will index a page.

## Completion condition

This task is complete only when:

1. The final production domain and public URL format are confirmed.
2. All internal links use the chosen public URL convention.
3. Canonical tags, sitemap, robots.txt, and structured URL metadata agree.
4. Old URL forms do not create competing indexable duplicates.
5. The deployed site has been tested on the actual launch host.

**Timing:** Complete this checklist after website development is finished and before launch. Until then, leave the current URLs and links as they are.
