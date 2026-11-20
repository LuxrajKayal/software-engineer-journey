import { AUTHORS_BY_ID } from "./author-library.js";

/**
 * Render the author profile referenced by an article.
 * The article stores only the author ID; profile details stay in Author Library.
 */
export function initAuthorCard() {
  if (document.body.dataset.pageType !== "article") return;

  const cards = document.querySelectorAll("[data-author-card]");
  if (!cards.length) return;

  const siteRoot = document.body.dataset.siteRoot || "";

  cards.forEach(card => {
    const authorId = card.dataset.authorId;
    const author = AUTHORS_BY_ID[authorId];

    if (!author) {
      card.hidden = true;
      console.warn(`Author profile not found in Author Library: ${authorId || "(missing ID)"}`);
      return;
    }

    let websiteUrl;
    try {
      websiteUrl = new URL(author.website);
      if (!["http:", "https:"].includes(websiteUrl.protocol)) {
        throw new TypeError("Author website must use HTTP or HTTPS.");
      }
    } catch (error) {
      card.hidden = true;
      console.warn(`Invalid website URL for author profile: ${authorId}`, error);
      return;
    }

    card.hidden = false;
    card.replaceChildren();
    card.setAttribute("aria-label", `Author profile: ${author.name}`);

    const layout = document.createElement("div");
    layout.className = "author-card__layout";

    const avatarLink = document.createElement("a");
    avatarLink.className = "author-card__avatar-link";
    avatarLink.href = websiteUrl.href;
    avatarLink.target = "_blank";
    avatarLink.rel = "noopener noreferrer";
    avatarLink.setAttribute("aria-label", `Visit ${author.name}'s website`);

    const avatar = document.createElement("img");
    avatar.className = "author-card__avatar";
    avatar.src = `${siteRoot}${author.image}`;
    avatar.alt = "Lux Omni Blog logo";
    avatar.width = 72;
    avatar.height = 72;
    avatar.loading = "lazy";
    avatar.decoding = "async";
    avatarLink.append(avatar);

    const content = document.createElement("div");
    content.className = "author-card__content";

    const label = document.createElement("p");
    label.className = "eyebrow author-card__eyebrow";
    label.textContent = "Author";

    const name = document.createElement("h2");
    name.className = "author-card__name";

    const nameLink = document.createElement("a");
    nameLink.href = websiteUrl.href;
    nameLink.target = "_blank";
    nameLink.rel = "noopener noreferrer";
    nameLink.textContent = author.name;
    nameLink.setAttribute("aria-label", `Visit ${author.name}'s website`);
    name.append(nameLink);

    const description = document.createElement("p");
    description.className = "author-card__description";
    description.textContent = author.description;

    const websiteLink = document.createElement("a");
    websiteLink.className = "author-card__website";
    websiteLink.href = websiteUrl.href;
    websiteLink.target = "_blank";
    websiteLink.rel = "noopener noreferrer";
    websiteLink.textContent = "Visit website";

    const externalMark = document.createElement("span");
    externalMark.setAttribute("aria-hidden", "true");
    externalMark.textContent = "↗";
    websiteLink.append(externalMark);

    content.append(label, name, description, websiteLink);
    layout.append(avatarLink, content);
    card.append(layout);
  });
}
