import { getArticlePouchContents } from "./tag-indexer.js";

/**
 * Tag Fetcher: reads the Indexer's article-to-pouch rules and resolves
 * the corresponding current names from the shared Tag Library.
 * It does not implement the dedicated Tag Search popup.
 */
export function initTagFetcher() {
  if (document.body.dataset.pageType !== "article") return;

  const articleId = document.body.dataset.articleId;
  const articleMeta = document.querySelector(".article-meta");
  if (!articleId || !articleMeta || document.querySelector("[data-tag-fetcher]")) return;

  const contents = getArticlePouchContents(articleId);
  if (!contents.length) return;

  const section = document.createElement("section");
  section.className = "article-tags";
  section.dataset.tagFetcher = "";
  section.setAttribute("aria-label", "Article topics");

  const label = document.createElement("span");
  label.className = "article-tags__label";
  label.textContent = "Topics";
  section.append(label);

  const pouchList = document.createElement("div");
  pouchList.className = "article-tags__list";
  section.append(pouchList);

  contents.forEach(({ pouch, boxId, tagId, name }) => {
    const pouchElement = document.createElement("div");
    pouchElement.className = "article-tags__pouch";
    pouchElement.dataset.tagPouch = pouch;
    pouchElement.dataset.libraryBox = boxId;

    const button = document.createElement("button");
    button.className = "article-tag";
    button.type = "button";
    button.dataset.tagTrigger = "";
    button.dataset.tagId = tagId;
    button.textContent = name;

    pouchElement.append(button);
    pouchList.append(pouchElement);
  });

  // Reserved destination for future integration. It is deliberately not rendered to readers.
  const reservedPouch = document.createElement("div");
  reservedPouch.className = "article-tags__pouch article-tags__pouch--reserved";
  reservedPouch.dataset.tagPouch = "pouch4";
  reservedPouch.hidden = true;
  reservedPouch.setAttribute("aria-hidden", "true");
  section.append(reservedPouch);

  articleMeta.insertAdjacentElement("afterend", section);

  pouchList.addEventListener("click", event => {
    const trigger = event.target.closest("[data-tag-trigger]");
    if (!trigger || !pouchList.contains(trigger)) return;

    const pouchElement = trigger.closest("[data-tag-pouch]");
    document.dispatchEvent(new CustomEvent("luxomni:tag-select", {
      detail: {
        tagId: trigger.dataset.tagId,
        tagName: trigger.textContent,
        articleId,
        pouch: pouchElement?.dataset.tagPouch || null
      }
    }));
  });
}
