# Lux Omni Blog — Main Navigation Dropdowns

**Status:** Implemented for development on 2026-10-25.

## Interaction rule
Each main label is a direct link to a parent landing page. A separate adjacent arrow button toggles its dropdown on click. Hovering never opens a menu. Dropdown choices navigate to dedicated category landing pages. Menus support keyboard and touch use, and Escape closes an open menu.

## Parent and dropdown destinations
### Tech
- Parent landing page: `sections/tech.html`
- Categories:
  - AI → `sections/tech-ai.html`
  - Phones → `sections/tech-phones.html`
  - Computing → `sections/tech-computing.html`
  - TV & Audio → `sections/tech-tv-audio.html`
  - Gaming → `sections/tech-gaming.html`
  - Smart Home → `sections/tech-smart-home.html`
  - Internet → `sections/tech-internet.html`
  - Cars → `sections/tech-cars.html`
  - Security → `sections/tech-security.html`
  - Science → `sections/tech-science.html`

### Reviews
- Parent landing page: `sections/reviews.html`
- Categories:
  - Phones → `sections/reviews-phones.html`
  - Laptops & PCs → `sections/reviews-laptops-pcs.html`
  - Drones → `sections/reviews-drones.html`
  - Cameras → `sections/reviews-cameras.html`
  - Audio → `sections/reviews-audio.html`
  - Smart Home → `sections/reviews-smart-home.html`

### How To
- Parent landing page: `sections/tutorials.html`
- Categories:
  - Windows → `sections/how-to-windows.html`
  - Linux → `sections/how-to-linux.html`
  - Android → `sections/how-to-android.html`
  - Networking → `sections/how-to-networking.html`
  - DIY & Repair → `sections/how-to-diy-repair.html`
  - Troubleshooting → `sections/how-to-troubleshooting.html`

### Hardware
- Parent landing page: `sections/hardware.html`
- Categories:
  - PC Components → `sections/hardware-pc-components.html`
  - Storage → `sections/hardware-storage.html`
  - Peripherals → `sections/hardware-peripherals.html`
  - Drones → `sections/hardware-drones.html`
  - Networking → `sections/hardware-networking.html`
  - Bench Tools → `sections/hardware-bench-tools.html`

### Software
- Parent landing page: `sections/software.html`
- Categories:
  - Operating Systems → `sections/software-operating-systems.html`
  - Productivity → `sections/software-productivity.html`
  - Developer Tools → `sections/software-developer-tools.html`
  - AI Tools → `sections/software-ai-tools.html`
  - Privacy & Security → `sections/software-privacy-security.html`
  - Open-source Utilities → `sections/software-open-source.html`

### Buying Advice
- Parent landing page: `sections/buying-guides.html`
- Categories:
  - Phones → `sections/buying-advice-phones.html`
  - Laptops → `sections/buying-advice-laptops.html`
  - PC Components → `sections/buying-advice-pc-components.html`
  - Home Networking → `sections/buying-advice-home-networking.html`
  - Smart Home → `sections/buying-advice-smart-home.html`
  - Cameras → `sections/buying-advice-cameras.html`

## Page/content contract
- Parent pages list sample stories for their top-level category.
- Every dropdown destination has its own landing page and a matching sample article HTML destination.
- Sample article pages live under the appropriate `articles/<group-folder>/` folder and link back to their category and parent page.
- All pages share the topbar, main header, semantic theme tokens and theme toggle.
- Search indexes the local sample article metadata. It does not claim to search content outside the static development library.

## Scope note
Sample stories demonstrate routing, layout, metadata, search and theme behavior. Replace sample copy with verified editorial content before launch.
