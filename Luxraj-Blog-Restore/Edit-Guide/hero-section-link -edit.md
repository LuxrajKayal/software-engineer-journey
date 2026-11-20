# How to Edit the Homepage Hero Featured Articles

This guide explains how to choose which articles appear in the rotating **Editor's Picks** card on the Lux Omni Blog homepage.

## 1. Open the configuration file

Edit this file in the repository:

`site/assets/js/hero-showcase.js`

Near the top, find the list named `FEATURED_ARTICLE_URLS`:

```js
const FEATURED_ARTICLE_URLS = [
  "categories/tech-news/ai/articles/ai-on-the-edge-what-local-inference-changes.html",
  "categories/tech-news/phones/articles/phone-hardware-explained-chips-cameras-and-radios.html",
  "categories/tech-news/computing/articles/a-practical-guide-to-choosing-a-computer-processor.html",
  "categories/tech-news/tv-audio/articles/display-refresh-rates-and-hdr-explained.html",
  "categories/tech-news/gaming/articles/what-to-check-before-upgrading-a-gaming-pc.html"
];
```

This is the **only list you need to edit** to change which articles the hero features. You do not need to edit the homepage HTML or hero CSS just to replace a featured article.

## 2. Paste the article path, not the image URL

Use the article's path relative to the website's published root. Do **not** include the domain name or a leading slash.

For example, if the published article URL is:

`https://luxrajkayal.github.io/Lux-Omni-Blog/categories/tech-news/ai/articles/my-new-ai-article.html`

put this entry in the array:

```js
"categories/tech-news/ai/articles/my-new-ai-article.html"
```

The URL above is an example. Make sure the article page exists at the path you use.

### Example: replace one featured article

To replace the first slide, change only the first array entry:

```js
const FEATURED_ARTICLE_URLS = [
  "categories/tech-news/ai/articles/my-new-ai-article.html",
  "categories/tech-news/phones/articles/phone-hardware-explained-chips-cameras-and-radios.html",
  "categories/tech-news/computing/articles/a-practical-guide-to-choosing-a-computer-processor.html",
  "categories/tech-news/tv-audio/articles/display-refresh-rates-and-hdr-explained.html",
  "categories/tech-news/gaming/articles/what-to-check-before-upgrading-a-gaming-pc.html"
];
```

Keep the quotation marks and commas in place. Each entry except the last needs a comma after it.

## 3. Tag the image inside the article HTML

The hero opens each configured article page, reads its main `h1` headline, and selects the image marked with `data-hero-image`. It does **not** use the image URL you paste into the featured list.

In the article HTML, mark the specific image you want the hero to show:

```html
<figure>
  <img
    src="../../../../assets/images/articles/my-article-image.webp"
    alt="A clear description of the featured image"
    width="480"
    height="270"
    data-hero-image
  >
  <figcaption>Optional image caption.</figcaption>
</figure>
```

Important:

- Put `data-hero-image` on the chosen `img` element itself.
- Use an image `src` that resolves correctly from the article page. Local WebP images are recommended.
- The article needs a readable main `h1`; this becomes the hero headline.
- The article page must be on the same website origin as the homepage. The current hero script intentionally rejects article HTML hosted on a different origin.
- The image source can be an image URL, but it must be directly embeddable by the browser. A Google Drive sharing-page URL is not necessarily a direct image URL.

## 4. Keep the list to five articles or fewer

The hero is configured for a maximum of five articles. The order of the URLs controls their display order and rotation sequence: the first entry appears first, followed by the next entries.

To feature fewer than five, remove the entries you don't want from the array. Do not add article URLs to any other file to manage the hero list.

The showcase changes slides every **5 seconds**. The image and headline both link to the exact article configured for that slide.

## 5. Commit and publish

After editing `site/assets/js/hero-showcase.js`:

1. Save the file.
2. Commit and push the change to the repository's `main` branch.
3. Check the GitHub Actions run for the Pages build and deployment.
4. Open the published homepage and verify the new article image, headline, and link.

If a configured article is missing, can't be fetched, has no readable `h1`, or has no `img[data-hero-image]`, that article is skipped. If none of the configured articles can be loaded, the hero displays its fallback message.

## Quick checklist

- [ ] The article path is correct and relative to the published site root.
- [ ] The article page exists and is on the same website origin as the homepage.
- [ ] The article has a readable main `h1`.
- [ ] The intended image has `data-hero-image`.
- [ ] No more than five article URLs are listed.
- [ ] The Pages workflow succeeds after pushing the change.
