# How to Edit the Topbar Links and Contact Details

This guide explains how to change the destinations and labels shown in the **top information bar** at the top of the Lux Omni Blog. It covers the home/logo link, Newsletter, social profile links, email address, and About link.

## 1. Open the shared topbar source

Edit this file:

`site/partials/topbar.html`

The topbar is a shared HTML partial assembled into populated website pages by `scripts/build-site.mjs`. Edit this source file once; do not make the same change separately in individual category or article pages.

Do not edit a generated copy under `_site/`: that folder is rebuilt from the `site/` source.

## 2. Find the item you want to change

### Home/logo link

Find:

```html
<a class="topbar__brand" href="{{ROOT}}index.html" aria-label="Lux Omni Blog home">
```

- Keep `{{ROOT}}index.html` when the logo should return to the site homepage.
- The build script replaces `{{ROOT}}` with the correct relative path for each page depth. Do not remove the token just to make the link work from nested pages.
- If you change the site's accessible brand wording, update `aria-label` to describe the destination.

### Brand text / slogan

Find:

```html
<span class="topbar__slogan" data-config-key="topbarSlogan">Lux Omni</span>
```

Change only the visible `Lux Omni` text to the wording you want. Keep the `class` and `data-config-key` attributes unless you are deliberately changing how the component is implemented.

### Newsletter

Find:

```html
<a class="topbar__newsletter" href="https://example.com/newsletter">Newsletter</a>
```

- Replace `https://example.com/newsletter` with the real newsletter signup URL.
- Change `Newsletter` only if you want a different visible label.
- The current `example.com` destination is a placeholder.

### Social media links

Each social item is an anchor inside `<div class="topbar__socials">`. The current items are Facebook, Instagram, X, YouTube, and GitHub. For each one, update its `href` to your own profile URL.

For example, the Facebook item currently begins:

```html
<a class="topbar__social-link" href="https://facebook.com/" aria-label="Facebook" title="Facebook">
```

For a social link, check these attributes together:

- `href`: the destination URL for your profile.
- `aria-label`: the accessible name read by assistive technology.
- `title`: the short label shown by many browsers on hover.

Keep the visible icon's SVG consistent with the platform. If you replace one social platform with a different service, change its SVG too; changing only `href` could leave the wrong icon beside the link. If you do not use a platform, remove that entire anchor element rather than leaving a dead link.

### Email address

Find:

```html
<a class="topbar__email" href="mailto:hello@example.com">hello@example.com</a>
```

Replace `hello@example.com` in both places:

1. The `mailto:` target inside `href`.
2. The visible email text between the opening and closing `a` tags.

Keep the two values consistent. The current address is a placeholder.

### About link

Find:

```html
<a class="topbar__about" href="https://example.com/about">About</a>
```

Replace the placeholder URL with the real About page or profile destination. Change the visible `About` label only if needed. The current destination is a placeholder.

For a page inside this same GitHub Pages website, use the build's root token for a path that must work from nested pages, for example:

```html
<a class="topbar__about" href="{{ROOT}}pages/about.html">About</a>
```

Use that example only if `site/pages/about.html` actually exists. Do not use a leading slash for a same-site URL on the GitHub Pages project site, because the project is published beneath `/Lux-Omni-Blog/`.

## 3. What not to change for a link-only edit

- Do not edit `site/assets/css/topbar.css` just to update a URL or label. That stylesheet controls the topbar's appearance and layout.
- Do not edit `site/index.html` or individual category/article HTML files to change the shared topbar.
- Do not remove `{{ROOT}}` from the brand link, or from any new same-site relative link that needs to work from nested pages.
- Do not leave an `example.com` placeholder in place when the link should lead to a real destination.

## 4. Build and check the change

After editing `site/partials/topbar.html`:

1. Save the file.
2. Run the site build from the repository root: `node scripts/build-site.mjs`.
3. Preview the generated `_site/` output and test each changed link on both the homepage and a nested category/article page.
4. Confirm the visible label matches the destination and that social icons match their platforms. For email, confirm the mail client opens with the expected address.
5. Commit and push the change to `main`, then check the GitHub Pages workflow and the published site.

## Quick checklist

- [ ] Edited `site/partials/topbar.html`, not a generated file.
- [ ] Replaced placeholder newsletter, email, or About destinations where needed.
- [ ] Updated the social `href` values and checked their labels/icons.
- [ ] Kept `{{ROOT}}` for the logo/home link and any applicable same-site links.
- [ ] Built the site and tested the topbar from both root and nested pages.
- [ ] Verified the published site after deployment.
