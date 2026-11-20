import { TAGS_BY_ID } from "./tag-library.js";

// Indexer rules: article ID -> article-side pouch -> Set 1 library Box ID.
// Pouch 1, Pouch 2 and Pouch 3 are active. Pouch 4 is reserved for later integration.
// If a Box is removed from the library, unresolved references are automatically omitted.
export const ARTICLE_TAG_RULES = Object.freeze({
  "tech-ai": Object.freeze({ pouch1: "Box1", pouch2: "Box2", pouch3: "Box3" }),
  "tech-phones": Object.freeze({ pouch1: "Box39", pouch2: "Box63", pouch3: "Box47" }),
  "tech-computing": Object.freeze({ pouch1: "Box5", pouch2: "Box6" }),
  "tech-tv-audio": Object.freeze({ pouch1: "Box10", pouch2: "Box12" }),
  "tech-gaming": Object.freeze({ pouch1: "Box7", pouch2: "Box6", pouch3: "Box8" }),
  "tech-smart-home": Object.freeze({ pouch1: "Box19", pouch2: "Box20", pouch3: "Box21" }),
  "tech-internet": Object.freeze({ pouch1: "Box15", pouch2: "Box16", pouch3: "Box18" }),
  "tech-cars": Object.freeze({ pouch1: "Box13", pouch2: "Box35" }),
  "tech-security": Object.freeze({ pouch1: "Box31", pouch2: "Box32", pouch3: "Box33" }),
  "tech-science": Object.freeze({ pouch1: "Box13", pouch2: "Box35" }),
  "reviews-phones": Object.freeze({ pouch1: "Box4", pouch2: "Box11", pouch3: "Box14" }),
  "reviews-laptops-pcs": Object.freeze({ pouch1: "Box6", pouch2: "Box5", pouch3: "Box9" }),
  "reviews-drones": Object.freeze({ pouch1: "Box58", pouch2: "Box59", pouch3: "Box64" }),
  "reviews-cameras": Object.freeze({ pouch1: "Box11", pouch2: "Box13" }),
  "reviews-audio": Object.freeze({ pouch1: "Box12", pouch2: "Box21", pouch3: "Box14" }),
  "reviews-smart-home": Object.freeze({ pouch1: "Box38", pouch2: "Box58", pouch3: "Box5" }),
  "how-to-windows": Object.freeze({ pouch1: "Box23", pouch2: "Box22", pouch3: "Box6" }),
  "how-to-linux": Object.freeze({ pouch1: "Box24", pouch2: "Box22", pouch3: "Box6" }),
  "how-to-android": Object.freeze({ pouch1: "Box55", pouch2: "Box36", pouch3: "Box24" }),
  "how-to-networking": Object.freeze({ pouch1: "Box15", pouch2: "Box16", pouch3: "Box17" }),
  "how-to-diy-repair": Object.freeze({ pouch1: "Box48", pouch2: "Box35", pouch3: "Box42" }),
  "how-to-troubleshooting": Object.freeze({ pouch1: "Box34", pouch2: "Box48" }),
  "hardware-pc-components": Object.freeze({ pouch1: "Box6", pouch2: "Box5", pouch3: "Box9" }),
  "hardware-storage": Object.freeze({ pouch1: "Box9", pouch2: "Box6" }),
  "hardware-peripherals": Object.freeze({ pouch1: "Box6" }),
  "hardware-drones": Object.freeze({ pouch1: "Box58", pouch2: "Box59", pouch3: "Box60" }),
  "hardware-networking": Object.freeze({ pouch1: "Box15", pouch2: "Box17", pouch3: "Box16" }),
  "hardware-bench-tools": Object.freeze({ pouch1: "Box40", pouch2: "Box39", pouch3: "Box47" }),
  "software-operating-systems": Object.freeze({ pouch1: "Box22", pouch2: "Box6" }),
  "software-productivity": Object.freeze({ pouch1: "Box30" }),
  "software-developer-tools": Object.freeze({ pouch1: "Box26", pouch2: "Box27", pouch3: "Box28" }),
  "software-ai-tools": Object.freeze({ pouch1: "Box1", pouch2: "Box33" }),
  "software-privacy-security": Object.freeze({ pouch1: "Box33", pouch2: "Box31", pouch3: "Box32" }),
  "software-open-source": Object.freeze({ pouch1: "Box29", pouch2: "Box26", pouch3: "Box27" }),
  "buying-advice-phones": Object.freeze({ pouch1: "Box4", pouch2: "Box11", pouch3: "Box14" }),
  "buying-advice-laptops": Object.freeze({ pouch1: "Box6", pouch2: "Box5", pouch3: "Box9" }),
  "buying-advice-pc-components": Object.freeze({ pouch1: "Box6", pouch2: "Box5", pouch3: "Box8" }),
  "buying-advice-home-networking": Object.freeze({ pouch1: "Box15", pouch2: "Box17", pouch3: "Box16" }),
  "buying-advice-smart-home": Object.freeze({ pouch1: "Box19", pouch2: "Box20", pouch3: "Box21" }),
  "buying-advice-cameras": Object.freeze({ pouch1: "Box11", pouch2: "Box13", pouch3: "Box14" }),
  "engineering-electrical-sample-01": Object.freeze({ pouch1: "Box35", pouch2: "Box36", pouch3: "Box37" }),
  "engineering-electrical-sample-02": Object.freeze({ pouch1: "Box35", pouch2: "Box38", pouch3: "Box39" }),
  "engineering-electrical-sample-03": Object.freeze({ pouch1: "Box39", pouch2: "Box40", pouch3: "Box38" }),
  "engineering-electrical-sample-04": Object.freeze({ pouch1: "Box41", pouch2: "Box42", pouch3: "Box36" }),
  "engineering-electrical-sample-05": Object.freeze({ pouch1: "Box44", pouch2: "Box43", pouch3: "Box35" }),
  "engineering-mechanical-sample-01": Object.freeze({ pouch1: "Box51", pouch2: "Box52", pouch3: "Box57" }),
  "engineering-mechanical-sample-02": Object.freeze({ pouch1: "Box1", pouch2: "Box2", pouch3: "Box40" }),
  "engineering-mechanical-sample-03": Object.freeze({ pouch1: "Box53", pouch2: "Box54", pouch3: "Box51" }),
  "engineering-mechanical-sample-04": Object.freeze({ pouch1: "Box55", pouch2: "Box56", pouch3: "Box57" }),
  "engineering-mechanical-sample-05": Object.freeze({ pouch1: "Box57", pouch2: "Box51", pouch3: "Box56" }),
  "engineering-labs-sample-01": Object.freeze({ pouch1: "Box9", pouch2: "Box57", pouch3: "Box61" }),
  "engineering-labs-sample-02": Object.freeze({ pouch1: "Box50", pouch2: "Box44", pouch3: "Box46" }),
  "engineering-labs-sample-03": Object.freeze({ pouch1: "Box43", pouch2: "Box35", pouch3: "Box42" }),
  "engineering-labs-sample-04": Object.freeze({ pouch1: "Box45", pouch2: "Box38", pouch3: "Box40" }),
  "engineering-labs-sample-05": Object.freeze({ pouch1: "Box49", pouch2: "Box50", pouch3: "Box28" }),
  "engineering-drone-technology-sample-01": Object.freeze({ pouch1: "Box58", pouch2: "Box59", pouch3: "Box35" }),
  "engineering-drone-technology-sample-02": Object.freeze({ pouch1: "Box58", pouch2: "Box60", pouch3: "Box61" }),
  "engineering-drone-technology-sample-03": Object.freeze({ pouch1: "Box58", pouch2: "Box62", pouch3: "Box14" }),
  "engineering-drone-technology-sample-04": Object.freeze({ pouch1: "Box58", pouch2: "Box63", pouch3: "Box64" }),
  "engineering-drone-technology-sample-05": Object.freeze({ pouch1: "Box58", pouch2: "Box65", pouch3: "Box59" })
});

const ACTIVE_POUCHES = Object.freeze(["pouch1", "pouch2", "pouch3"]);

/** Resolve the article's pouch rules against the current Tag Library. */
export function getArticlePouchContents(articleId) {
  const rules = ARTICLE_TAG_RULES[articleId];
  if (!rules) return [];

  return ACTIVE_POUCHES.flatMap(pouch => {
    const boxId = rules[pouch];
    if (!boxId) return [];

    const tag = TAGS_BY_ID[boxId];
    if (!tag) return [];

    return [{ pouch, boxId, tagId: tag.id, name: tag.name }];
  });
}

/** Shared searchable names for the common Search engine; no tag UI is exposed there. */
export function getArticleTagNames(articleId) {
  return getArticlePouchContents(articleId).map(item => item.name);
}

/** Return each article once when any active pouch is connected to this library Box. */
export function getArticleIdsByBoxId(boxId) {
  if (!boxId || !TAGS_BY_ID[boxId]) return [];

  return Object.entries(ARTICLE_TAG_RULES)
    .filter(([, rules]) => ACTIVE_POUCHES.some(pouch => rules[pouch] === boxId))
    .map(([articleId]) => articleId);
}

/** Return article-to-library references that no longer resolve, for maintenance checks. */
export function getUnresolvedTagReferences() {
  return Object.entries(ARTICLE_TAG_RULES).flatMap(([articleId, rules]) =>
    ACTIVE_POUCHES.flatMap(pouch => {
      const boxId = rules[pouch];
      return boxId && !TAGS_BY_ID[boxId] ? [{ articleId, pouch, boxId }] : [];
    })
  );
}
