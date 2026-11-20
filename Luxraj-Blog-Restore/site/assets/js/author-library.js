// Lux Omni Author Library — development test records.
// Replace these records with approved author details when the author profiles are ready.
export const AUTHORS = Object.freeze([
  Object.freeze({
    id: "author-alpha-tester",
    name: "Alpha Tester",
    description: "Website tester for desktop",
    website: "https://example.com",
    image: "assets/images/brand/lux-Omni-Blog-Transparent-Symbol.svg"
  }),
  Object.freeze({
    id: "author-beta-tester",
    name: "Beta Tester",
    description: "Website tester for mobile",
    website: "https://example.com",
    image: "assets/images/brand/lux-Omni-Blog-Transparent-Symbol.svg"
  })
]);

export const AUTHORS_BY_ID = Object.freeze(
  Object.fromEntries(AUTHORS.map(author => [author.id, author]))
);
