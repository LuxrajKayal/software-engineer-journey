# Tag System — Architecture, Decisions and Editing Guide

This guide records the tag architecture currently implemented in Lux Omni Blog, the design arguments that shaped it, and the rules a future CMS must preserve. It covers the existing tag environment only. The dedicated Tag Search popup has **not** been built.

## 1. The central idea

The tag system has three separate responsibilities:

1. **Set 1 — Tag Library:** stores reusable tag Boxes and their current names.
2. **Indexer — the pump:** stores the connection rules between article-side Pouches and library-side Boxes.
3. **Set 2 — Article Pouches:** provides the destinations in which an article receives the current contents of the Boxes selected by the Indexer.

The **Tag Fetcher** reads those rules when an article page opens and places the resolved tag names into the article's tag area.

The separation is intentional: tag content and tag connections are different things. Changing a tag name should not require rewriting article connections. Changing which tag appears in a particular article Pouch should be an explicit Indexer change.

## 2. Set 1 — Tag Library

**Source file:** `site/assets/js/tag-library.js`

The Tag Library currently contains 65 entries, identified as `Box1` through `Box65`. Each entry has this structure:

```js
{ id: "Box24", name: "Linux" }
```

### Box ID and tag name are not the same thing

- **ID** identifies the Box — its stable position in the library.
- **Name** is the editable content currently held by that Box.

The ID must not be derived from the tag name. For example, `Box24` can be renamed from `Linux` to another label without changing the ID. Every Indexer connection pointing to `Box24` still points to that same Box and will receive its updated name.

Do not rename a Box ID merely because its tag name changes.

### Vacating a Box

A Box can be made temporarily unavailable without deleting its Indexer connections. The Indexer rule remains in place. When that Box ID has no matching entry in the library, the current resolver skips that tag, so it is not displayed in the article and is not included in common Search matching.

If the same Box ID is later restored to the library with a new name, the existing Indexer connection resolves again. The new name returns to the same article Pouch automatically.

For example:

- Article A's Pouch 2 is connected to `Box2`.
- The `Box2` library entry is temporarily removed.
- The Indexer still says Article A / Pouch 2 → `Box2`, but no tag is displayed there.
- A library entry with ID `Box2` is later added again.
- The tag now stored in `Box2` appears in Article A's Pouch 2 without recreating the connection.

**Important:** this is a vacancy, not an instruction to delete the Indexer rule. Do not add an automatic cleanup process that removes Indexer connections simply because a Box is temporarily absent.

The function `getUnresolvedTagReferences()` can report connections whose Box is currently absent. Treat this as a diagnostic list. A reported reference may be an intentionally vacant position, not necessarily a connection that should be erased.

## 3. The Indexer — the pump and its connection rules

**Source file:** `site/assets/js/tag-indexer.js`

The Indexer stores explicit rules in `ARTICLE_TAG_RULES`. The structure is:

```text
Article ID
  └── Article-side Pouch
        └── Set 1 Box ID
```

For example:

```js
"tech-ai": Object.freeze({
  pouch1: "Box1",
  pouch2: "Box2",
  pouch3: "Box3"
})
```

This means:

- Article `tech-ai` Pouch 1 receives the current contents of library Box 1.
- Article `tech-ai` Pouch 2 receives the current contents of library Box 2.
- Article `tech-ai` Pouch 3 receives the current contents of library Box 3.

These are explicit connections. The numbers do **not** create an automatic pairing between Set 1 and Set 2. For example, Pouch 1 could connect to Box 24, and Pouch 3 could connect to Box 2. The Indexer decides the mapping.

The current Indexer contains rules for 60 article IDs and 167 active Pouch-to-Box assignments.

### Pouches currently supported

- **Pouch 1, Pouch 2 and Pouch 3:** active.
- **Pouch 4:** reserved for later integration. It is not included in the active Indexer resolution list.

The Indexer is the authoritative place to change an article's tag connections. Do not place duplicate article-to-tag assignments in `article-index.js` or in individual article HTML files.

## 4. Set 2 — Article-side Pouches

Set 2 is the destination side of the system. Each article has its own Pouch positions:

- Article A has its own Pouch 1, Pouch 2 and Pouch 3.
- Article B has its own Pouch 1, Pouch 2 and Pouch 3.
- The Pouch number identifies a position within that article; it does not identify a library Box.

The Pouch contents are resolved from the Indexer's rules and the current Tag Library. They are not maintained as a second independent list of tag names.

An article's ID is read from its page metadata (`data-article-id`). That ID must match the corresponding key in `ARTICLE_TAG_RULES`.

## 5. Tag Fetcher — how the article receives its tags

**Source file:** `site/assets/js/tag-fetcher.js`

The Tag Fetcher runs on article pages through `site/assets/js/main.js`. Its current process is:

1. Check that the current page is an article.
2. Read the article ID from the page.
3. Ask the Indexer for that article's active Pouch connections.
4. Resolve each connected Box ID against the Tag Library.
5. Create the article tag area after `.article-meta`.
6. Put each resolved tag name in its assigned Pouch position.

If a Box ID has no matching library entry, that mapping produces no visible tag at that moment. The Indexer rule itself remains unchanged.

When a reader clicks a displayed tag, the Tag Fetcher dispatches a `luxomni:tag-select` custom event. The event includes the tag/Box ID, current tag name, article ID and Pouch. This prepares an interaction point for the future dedicated Tag Search feature; it does not open a popup by itself.

Pouch 4 is currently added as a hidden, reserved element. It is not shown to readers.

## 6. Common Search and the separate Tag Search feature

**Common Search source:** `site/assets/js/search.js`

Common Search uses the Indexer through `getArticleTagNames(article.id)`. It includes the current resolved tag names internally when matching a reader's text query, along with the article title, summary and category metadata.

This means a reader can find an article by typing a relevant tag name, even though the tag names are not shown as selectable tag chips in the common Search results.

The two search responsibilities must remain separate:

- **Common Search:** general article search. Tag names are additional searchable metadata only; they are not displayed as tag filters or selection controls.
- **Dedicated Tag Search:** a future feature opened from a clicked article tag, intended to find articles connected to that tag. It has not been implemented yet.

The click event is only groundwork for that future feature.

## 7. Why the architecture was changed

These are the main arguments and the solutions agreed during implementation.

| Design issue | Decision / solution |
|---|---|
| Keeping tag names directly inside every article record would duplicate content and make central renaming harder. | Move tag definitions into one shared Tag Library and keep article connections in the Indexer. |
| Using a semantic ID such as `linux` would create a misleading ID/name relationship if the name changed. | Use stable Box IDs such as `Box24`; keep the editable label in the separate `name` field. |
| The word “index” was ambiguous: the library and the pump were being confused. | Name the content collection `tag-library.js` and the connection-rule program `tag-indexer.js`. |
| Matching Box 1 automatically with Pouch 1 would wrongly tie two independent numbering systems together. | Store explicit article → Pouch → Box rules in the Indexer. |
| Removing a tag's current content should not destroy the route that was assigned to it. | Keep the Indexer connection. If its Box is temporarily absent, the Pouch is empty; restoring the same Box ID makes the connection work again. |
| Showing tag chips in the general Search interface would mix two different search experiences. | Common Search uses tag names internally but does not show tag controls. A separate Tag Search feature is deferred. |
| Building the tag popup before the article tag environment existed would couple groundwork with a feature that was not yet ready. | Implement clickable article tags and the selection event first; defer the popup and related search behavior. |

## 8. How to edit the current system in VS Code

The current system is source-file based. There is no tag-management CMS screen yet.

### Rename a tag

1. Open `site/assets/js/tag-library.js`.
2. Find the Box ID, for example `Box24`.
3. Change only its `name` value.
4. Keep the ID unchanged.

All articles connected to that Box receive the updated name through the Indexer and Tag Fetcher.

### Change an article's tag connection

1. Open `site/assets/js/tag-indexer.js`.
2. Find the article ID in `ARTICLE_TAG_RULES`.
3. Change the Box ID assigned to the required Pouch.

For example, changing `pouch2: "Box2"` to `pouch2: "Box24"` changes that article's Pouch 2 connection. It does not rename either Box.

### Add a new tag Box

1. Add a new unique Box entry to `TAGS` in `tag-library.js`.
2. Use a new stable Box ID, following the existing sequence.
3. Add an explicit connection to the required article Pouch or Pouches in `tag-indexer.js`.

Adding a Box to the library alone does not assign it to any article.

### Vacate and restore a Box

To make a Box's content unavailable while preserving the routes that already point to it, keep its ID reserved and do not remove or rewrite those Indexer rules. In the current implementation, a missing library entry is skipped by the resolver. Restoring an entry with the same ID makes the existing routes resolve again.

Do not use a different Box ID when restoring the same reserved position. Do not interpret every unresolved reference as an instruction to delete a rule.

### Move a tag to a different Pouch

Edit the Indexer rule explicitly. The connection is controlled by the destination Pouch key and the source Box ID. Do not rely on matching numbers or article order.

## 9. Current implementation status

| Part | Status |
|---|---|
| Shared Tag Library with stable Box IDs | Implemented |
| Separate article-to-Pouch connection rules in the Indexer | Implemented |
| Tag Fetcher on article pages | Implemented |
| Clickable article tags and `luxomni:tag-select` event | Implemented |
| Common Search matching against current tag names | Implemented |
| Pouch 1–3 | Active |
| Pouch 4 | Reserved and hidden |
| Dedicated Tag Search popup and related-article results | Not implemented |
| CMS interface for editing library contents | Not implemented |
| CMS interface for changing Indexer connection rules | Not implemented |

## 10. Requirements for the future CMS

When a CMS is added, it must preserve the separation already established:

1. **Library editing and connection editing are separate operations.** Changing a Box's name must not silently change its ID or its Indexer routes.
2. **A vacant Box does not mean its route should be deleted.** Clearing or temporarily removing the Box's content must leave the connection rule available for later restoration.
3. **Restoring a Box with the same ID restores its existing connections.** Its current name then flows to every Pouch connected to that Box.
4. **Connection changes are explicit.** The CMS must let the editor choose which Box is connected to which article Pouch; it must not infer a connection from matching numbers.
5. **No automatic stale-rule cleanup.** An absent Box reference can represent an intentionally vacant slot. The CMS must not automatically erase it just because the library entry is currently missing.
6. **Pouch 4 remains reserved** until a later feature is specifically planned and authorised.

The CMS should make these operations easier to edit, not change the underlying Box/Indexer/Pouch model.

---

**Current source of truth:** `tag-library.js` stores Box identities and names; `tag-indexer.js` stores article-to-Pouch-to-Box connections; `tag-fetcher.js` resolves and displays the current contents. Keep those responsibilities separate.
