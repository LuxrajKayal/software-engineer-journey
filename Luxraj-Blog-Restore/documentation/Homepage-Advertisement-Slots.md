# Homepage Advertisement Slots

## Purpose
Plan a clean, CNET-inspired advertising system for the Lux Omni Blog homepage. Advertisements should generate revenue without overcrowding the interface or degrading the reading experience.

## Initial Homepage Slot Plan

### Slot 1 — Main Banner Advertisement
- **Position:** Below the Featured Story section and above the main article feed.
- **Format:** Wide, responsive banner slot.
- **Example desktop dimensions:** 970 × 250 px; this is a planning example, not a mandatory final size.
- **Behavior:** Keep the ad within its allocated area without distorting the creative. Adapt appropriately on smaller screens.
- **Label:** Clearly identify it as an advertisement.
- **Empty/disabled state:** Hide the slot when disabled or when no ad is available, rather than leaving a large blank area.

### Slot 2 — In-Feed Advertisement
- **Position:** Within the homepage article feed, after several article cards.
- **Behavior:** Keep the ad clearly distinguishable from editorial content. Do not interrupt an individual article card.
- **Initial limit:** One in-feed ad.

### Future Option — Sidebar Advertisement
- Not part of the initial homepage design.
- Consider later only if the layout has sufficient space and the placement does not make the homepage feel crowded.

## Advertising Strategy

### 1. Google AdSense First
- Prepare the site for Google AdSense from the beginning.
- Use manually positioned ad units rather than relying entirely on Google Auto ads, so the website layout remains under the site owner's control.
- Actual AdSense delivery and earnings depend on site/account approval, configuration, policy compliance, and eligible ad activity.
- A new website may apply when it is live and meets the provider's requirements, but approval is not guaranteed or instantaneous.
- Do not assume AdSense revenue will be available on launch day.

### 2. Add Other Advertising Networks Later
- Keep the design flexible enough to support other networks if the site becomes eligible and the chosen providers' requirements are met.
- Do not assume that all networks use the same approval process, ad formats, or payment model.

### 3. Direct Company Advertisements
- Support separately managed banner campaigns when a company approaches Lux Omni.
- Review and approve the creative before publishing.
- Configure placement, dimensions, destination link and campaign dates as agreed with the advertiser.
- Revenue comes from the agreement with the advertiser; it is not automatically based on impressions unless the agreement specifies that model.
- Plan the detailed direct-ad workflow when a real opportunity and its requirements are known.

## Ad Quality and Brand Control
The site owner wants to avoid low-quality or unsuitable advertisements and retain as much control as the selected advertising provider permits.

- Use provider-level review and blocking tools where available, including relevant categories and specific advertisers.
- Prefer ads relevant to technology, computing, electronics, drones, software and related topics where the provider's controls permit.
- Review ads periodically and block unsuitable ads using available provider controls.
- Direct campaigns must be reviewed and approved before publication.
- Understand that network controls cannot guarantee that every ad will meet the site owner's preferences in advance.
- Excessive blocking may reduce the pool of eligible ads and potential revenue.
- Label advertisements clearly and do not disguise ads as editorial content.

## Current Configuration Approach

There is no control panel or Supabase-backed ad-settings interface. Any approved ad slots are configured manually in the site's HTML/CSS/JavaScript and published with the normal site update. Leave a slot out of the page when no approved ad is configured. Do not add credentials, private ad-management keys or secrets to public source files.

## Fixed-Size and Responsive Slots
- The website controls the position and allocated space of each ad slot.
- Use appropriate fixed-size or responsive ad-unit settings supported by the provider.
- Do not distort or indiscriminately crop ad creatives to force them into a box.
- Fixed-size units may reduce the pool of eligible ads for some providers; confirm the current provider guidance during implementation.
- Direct company banners can use dimensions agreed with the advertiser.
- Ensure mobile layouts use appropriate sizing and do not overflow the viewport.

## Monetization Clarification
Manually placing an ad does not, by itself, guarantee income.

### Network advertising
- A provider such as Google AdSense must approve/activate the site and account as required before ads can generate eligible revenue.
- Revenue depends on the provider's model and eligible activity; an impression or display does not necessarily guarantee payment.
- Invalid activity may be excluded from earnings.
- A new website can apply once it is live and meets the provider's requirements, but approval is not guaranteed or immediate.
- Do not assume that AdSense revenue will be available on launch day.

### Direct advertising
- Direct advertising may generate revenue as soon as a paid campaign begins under an agreed contract or arrangement, even if AdSense has not approved the site.
- Payment terms, campaign duration and whether compensation is fixed-fee or impression-based must be agreed with the advertiser.

## Initial Design Rules
- No pop-up advertisements on the homepage.
- No ads covering navigation or article text.
- No autoplay audio.
- No flashing animations intended to attract unnecessary attention.
- No ads disguised as editorial content.
- No empty large slots when an ad is unavailable.
- Avoid placements that encourage accidental clicks.
- Follow the policies of each selected advertising provider.

## Initial Decisions Summary
| Item | Planned decision |
|---|---|
| Initial homepage slots | One main banner and one in-feed ad |
| Main banner position | Below Featured Story, above article feed |
| In-feed position | After several article cards |
| Initial sidebar ad | No; optional future addition |
| First network to prepare for | Google AdSense |
| Ad placement | Manually positioned slots |
| Other networks | Consider later when eligible |
| Direct company banners | Support later when real opportunities arise |
| Slot controls | Enable/disable and edit supported settings individually |
| Configuration storage | Supabase is the planned option for slot configuration; implementation remains undecided |
| Ad quality | Use available provider controls and review direct campaigns |
| Launch-day earnings | Not guaranteed from AdSense; direct paid campaigns may earn under agreed terms |

## Still to Decide
- Exact slot dimensions and responsive breakpoints.
- Exact in-feed insertion point.
- Whether the banner and in-feed slot will use the same or different providers.
- Ad provider selection and implementation details.
- Supabase table/schema and authorization rules.
- Direct advertising contract, pricing and campaign workflow.
- When to evaluate whether a sidebar slot is worthwhile.