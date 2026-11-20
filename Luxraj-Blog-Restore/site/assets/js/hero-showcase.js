/*
 * Lux Omni Blog — curated homepage hero.
 * Maintain up to five same-origin article URLs in FEATURED_ARTICLE_URLS.
 * Each article must contain an image marked with data-hero-image.
 */
const FEATURED_ARTICLE_URLS = [
  "categories/tech-news/ai/articles/ai-on-the-edge-what-local-inference-changes.html",
  "categories/how-to/linux/articles/how-to-choose-a-linux-desktop-for-an-older-computer.html",
  "categories/engineering/drone-technology/articles/how-a-drone-flight-controller-connects-aircraft-systems.html",
  "categories/reviews/phones/articles/phone-review-sample-beyond-the-specification-sheet.html",
  "categories/buying-advice/phones/articles/buying-a-phone-which-features-are-worth-paying-for.html"
];
const MAX_FEATURED_ARTICLES = 5;
const ROTATION_INTERVAL_MS = 5000;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function makeArrow(direction, onClick, disabled) {
  const previous = direction === "prev";
  const button = el("button", "hero-showcase__arrow hero-showcase__arrow--" + (previous ? "prev" : "next"));
  button.type = "button";
  button.disabled = disabled;
  button.setAttribute("aria-label", previous ? "Previous featured article" : "Next featured article");
  button.innerHTML = previous
    ? '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m14.5 5-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9.5 5 7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  button.addEventListener("click", onClick);
  return button;
}

async function readArticle(path, siteRoot) {
  const url = new URL(path, siteRoot);
  if (url.origin !== window.location.origin) throw new Error("Featured article must be same-origin: " + url.href);
  const response = await fetch(url.href, { headers: { Accept: "text/html" } });
  if (!response.ok) throw new Error("Article request failed (" + response.status + "): " + url.href);
  const doc = new DOMParser().parseFromString(await response.text(), "text/html");
  const heading = doc.querySelector(".article-content h1, main article h1, article h1, main h1");
  const image = doc.querySelector("img[data-hero-image]");
  if (!heading?.textContent.trim()) throw new Error("Article has no h1: " + url.href);
  if (!image) throw new Error("Article has no img[data-hero-image]: " + url.href);
  const src = image.getAttribute("src") || image.getAttribute("data-src");
  if (!src) throw new Error("Tagged image has no src: " + url.href);
  const imageUrl = new URL(src, url);
  if (!["http:", "https:"].includes(imageUrl.protocol)) throw new Error("Unsupported image URL: " + imageUrl.href);
  return { url: url.href, title: heading.textContent.trim(), imageUrl: imageUrl.href, alt: (image.getAttribute("alt") || heading.textContent).trim() };
}

function buildSlide(article, onPrevious, onNext, canNavigate) {
  const item = el("article", "hero-showcase__item");
  const imageLink = el("a", "hero-showcase__image-link");
  imageLink.href = article.url;
  imageLink.setAttribute("aria-label", "Read article: " + article.title);
  const image = el("img", "hero-showcase__image");
  image.src = article.imageUrl;
  image.alt = article.alt;
  image.width = 480;
  image.height = 270;
  image.loading = "eager";
  image.decoding = "async";
  imageLink.append(image);

  const caption = el("div", "hero-showcase__caption");
  const titleLink = el("a", "hero-showcase__headline");
  titleLink.href = article.url;
  titleLink.setAttribute("aria-label", article.title);
  const titleText = el("span", "hero-showcase__headline-text", article.title);
  const openIcon = el("svg", "hero-showcase__open-icon");
  openIcon.setAttribute("viewBox", "0 0 24 24");
  openIcon.setAttribute("aria-hidden", "true");
  openIcon.setAttribute("focusable", "false");
  openIcon.innerHTML = '<path d="M14 4h6v6M20 4 10.5 13.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>';
  titleLink.append(titleText, openIcon);
  caption.append(titleLink);

  item.append(imageLink, caption);
  item.append(makeArrow("prev", onPrevious, !canNavigate), makeArrow("next", onNext, !canNavigate));
  return item;
}

export function initHeroShowcase() {
  const root = document.querySelector("[data-hero-showcase]");
  if (!root) return;
  const siteRoot = new URL(document.body.dataset.siteRoot || "./", document.baseURI);
  const slide = root.querySelector("[data-hero-slide]");
  const count = root.querySelector("[data-hero-count]");
  if (!slide || !count) return;

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  let articles = [];
  let current = 0;
  let hovering = false;
  let focused = false;
  let timer = null;

  function updateCount() {
    const total = articles.length;
    count.textContent = total ? String(current + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0") : "0 / 0";
  }
  function stopTimer() {
    if (timer !== null) window.clearInterval(timer);
    timer = null;
  }
  function syncTimer() {
    stopTimer();
    if (articles.length < 2 || hovering || focused || document.hidden || reducedMotion) return;
    timer = window.setInterval(() => show(current + 1), ROTATION_INTERVAL_MS);
  }
  function navigate(offset) {
    show(current + offset);
    syncTimer();
  }
  function show(index) {
    if (!articles.length) return;
    current = (index + articles.length) % articles.length;
    const article = articles[current];
    slide.replaceChildren(buildSlide(article, () => navigate(-1), () => navigate(1), articles.length > 1));
    slide.classList.remove("is-entering");
    void slide.offsetWidth;
    slide.classList.add("is-entering");
    updateCount();
  }
  function unavailable() {
    count.textContent = "0 / 0";
    const message = el("p", "hero-showcase__status", "Featured articles are temporarily unavailable.");
    const link = el("a", "", "Browse Tech News");
    link.href = new URL("categories/tech-news/tech-news-index.html", siteRoot).href;
    message.append(document.createElement("br"), link);
    slide.replaceChildren(message);
  }

  root.addEventListener("pointerenter", () => { hovering = true; syncTimer(); });
  root.addEventListener("pointerleave", () => { hovering = false; syncTimer(); });
  root.addEventListener("focusin", () => { focused = true; syncTimer(); });
  root.addEventListener("focusout", event => {
    focused = root.contains(event.relatedTarget);
    syncTimer();
  });
  document.addEventListener("visibilitychange", syncTimer);

  Promise.all(FEATURED_ARTICLE_URLS.slice(0, MAX_FEATURED_ARTICLES).map(async path => {
    try { return await readArticle(path, siteRoot); }
    catch (error) { console.warn("[Lux Omni hero] Skipping featured article:", error); return null; }
  })).then(results => {
    articles = results.filter(Boolean);
    if (!articles.length) { unavailable(); return; }
    show(0);
    syncTimer();
  });
}
