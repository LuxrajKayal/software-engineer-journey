# Publish and configure the learning dashboard

The site files are in the `docs` folder. GitHub Pages serves the public website; Supabase stores the current goals and schedule and enforces owner-only edits.

## 1. Create a Supabase project

Create a project in your Supabase account and keep the project dashboard private to you. Wait until the database is ready.

## 2. Set the owner email and create the database

1. Open the project's SQL Editor.
2. Open `docs/supabase-schema.sql` in this repository.
3. Replace every instance of `YOUR_OWNER_EMAIL_HERE` with the exact email address you will use to sign in to the website.
4. Run the full SQL script.

This creates the goals and study-schedule tables, adds public read access, restricts write policies to the owner email, and inserts starter goals. Running the script again will not overwrite existing goal edits.

**Important:** Do not remove or loosen the row-level security (RLS) policies. The website's visual checks are helpful for the user experience, but these database policies are what enforce owner-only writes.

## 3. Configure email sign-in redirects

In Supabase Authentication URL configuration:

- Set the Site URL to `https://luxrajkayal.github.io/software-engineer-journey/`.
- Add that same URL to the allowed Redirect URLs.
- Make sure the Email provider is enabled.

The magic link will be sent to the owner's inbox. Use the exact same email in the SQL policy and the browser configuration in the next step.

## 4. Add the browser configuration

Open `docs/config.js` in the repository and fill in these fields:

- `supabaseUrl`: your Supabase project URL.
- `supabaseAnonKey`: the browser-safe publishable key (or legacy anon key) from your Supabase project.
- `ownerEmail`: the exact owner email configured in the SQL policy.

Only use the public publishable/anon key here. **Never put a service-role key, database password, or other secret in this file.** The browser config is visible to anyone who can view the website, so database security must come from the RLS policies.

Commit the updated `config.js` to the public repository. It is expected that the publishable/anon key is public; it is not an admin secret.

## 5. Enable GitHub Pages

1. Open the repository's **Settings** on GitHub.
2. Open **Pages**.
3. Under the build/deployment source, select **Deploy from a branch**.
4. Select branch `main` and folder `/docs`.
5. Save the setting and wait for GitHub Pages to publish the site.

The expected public address is:

https://luxrajkayal.github.io/software-engineer-journey/

If the address does not load immediately, check the Pages status shown in repository Settings. The site must be published before the Supabase sign-in redirect can work reliably.

## 6. Test public viewing and owner editing

- Open the public website in a private/incognito browser window. Goals and schedule should be visible, but edit controls should not appear.
- On your normal browser, choose **Owner sign in** and enter the configured owner email.
- Open the magic link from your inbox in the same browser.
- Try changing a timeframe, checking a goal as complete, and editing the weekly schedule. The change should appear on a fresh page load.
- Sign out and confirm that the website returns to public read-only mode.

An authenticated account with a different email must not be able to add, edit, or delete goals. RLS should reject those writes even if someone tries to call the database directly.

## How to update the website later

Use the **Edit** button on a goal to change its title, details, timeframe, study schedule, or completion status. Use the pencil beside the weekly schedule to update each day's plan. The Add goal button lets the owner add a new milestone, and the goal editor also includes deletion.

Visitors can read the current goals and schedule, but only the configured owner account can save changes. Changes are stored in Supabase and are therefore shared with all visitors, rather than being saved only in one browser.

## Files

- `index.html` — website structure.
- `styles.css` — responsive visual design.
- `app.js` — display, filters, editing, and owner sign-in behavior.
- `config.js` — public Supabase browser configuration.
- `supabase-schema.sql` — database tables, access policies, and starter content.

This website is an evolving learning dashboard. The transparency note on the page explains the use of ChatGPT in generating the site and states that the author wrote the note himself.
