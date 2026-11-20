# Newsletter Section

## Component
Component 9 — Newsletter Section

## Status
- Newsletter provider selected: Brevo.
- Initial plan: use Brevo's free plan.
- Newsletter section design and placement are not yet finalized.

## Provider and Initial Budget
- **Provider:** Brevo
- **Starting plan:** Free
- **Current advertised sending allowance:** Up to 300 email sends per day. This is a sending allowance, not a limit of 300 subscribers.
- Start with the free plan and consider a paid plan only if audience growth and actual needs justify the cost.
- Plan limits and terms may change; verify the current terms when setting up the account.

## Intended Workflow
1. Create a Brevo account.
2. Create a newsletter signup form in Brevo.
3. Embed the signup form into the custom-coded `blog.luxomni.com` website.
4. Visitors enter their email addresses and subscribe.
5. Write and send newsletters through the Brevo dashboard.

This avoids building a custom newsletter backend at the beginning.

## Initial Content Suggestion
A possible section could contain:
- Heading: **Stay Ahead of Technology**
- A short sentence explaining what subscribers will receive.
- An email address field.
- A **Subscribe** button.
- A brief privacy note.

This is a suggestion only; the final wording and visual design have not been decided.

## Decisions Still Open
- Whether the newsletter section appears only on the homepage or also on article pages.
- Final heading and supporting text.
- Visual design and layout.
- Signup and confirmation details, including whether to use double opt-in.

## Implementation Notes
- Use Brevo's form/dashboard rather than building custom email delivery at the start.
- Confirm Brevo's current free-plan limits and signup-form options during setup.
- Do not add newsletter-related code or integrate the service until implementation is explicitly requested.