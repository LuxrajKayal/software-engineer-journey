-- Software Engineer Journey dashboard
-- In Supabase SQL Editor, replace YOUR_OWNER_EMAIL_HERE with the exact email
-- you will use to sign in to the dashboard. Then run this complete script.
-- Do not weaken these row-level security policies: they protect edits.

create extension if not exists pgcrypto;

create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(),
  phase text not null,
  title text not null,
  description text not null default '',
  timeframe text not null default '',
  study_schedule text not null default '',
  completed boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.journey_settings (
  id text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.goals enable row level security;
alter table public.journey_settings enable row level security;

drop policy if exists "Goals are visible to everyone" on public.goals;
create policy "Goals are visible to everyone"
on public.goals for select
using (true);

drop policy if exists "Owner can add goals" on public.goals;
create policy "Owner can add goals"
on public.goals for insert to authenticated
with check (lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'));

drop policy if exists "Owner can update goals" on public.goals;
create policy "Owner can update goals"
on public.goals for update to authenticated
using (lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'))
with check (lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'));

drop policy if exists "Owner can delete goals" on public.goals;
create policy "Owner can delete goals"
on public.goals for delete to authenticated
using (lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'));

drop policy if exists "Study schedule is visible to everyone" on public.journey_settings;
create policy "Study schedule is visible to everyone"
on public.journey_settings for select
using (true);

drop policy if exists "Owner can add settings" on public.journey_settings;
create policy "Owner can add settings"
on public.journey_settings for insert to authenticated
with check (lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'));

drop policy if exists "Owner can update settings" on public.journey_settings;
create policy "Owner can update settings"
on public.journey_settings for update to authenticated
using (lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'))
with check (lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'));

drop policy if exists "Owner can delete settings" on public.journey_settings;
create policy "Owner can delete settings"
on public.journey_settings for delete to authenticated
using (lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'));

grant select on public.goals to anon, authenticated;
grant insert, update, delete on public.goals to authenticated;
grant select on public.journey_settings to anon, authenticated;
grant insert, update, delete on public.journey_settings to authenticated;

-- Seed the initial goals. Running this script again will not overwrite your edits.
insert into public.goals (id, phase, title, description, timeframe, study_schedule, completed, sort_order)
values
('10000000-0000-4000-8000-000000000001','Phase 0 — Workflow','Maintain the learning repository','Keep the README, roadmap, goals, and progress tracker understandable and current.','Month 1, first 1–2 weeks','One short review each week',false,1),
('10000000-0000-4000-8000-000000000002','Phase 1 — Python','Practise Python fundamentals','Work with types, conditions, loops, functions, collections, files, exceptions, and modules.','Months 1–5','3–5 focused practice sessions each week',false,2),
('10000000-0000-4000-8000-000000000003','Phase 1 — Python','Build a CLI Task Manager','Create, list, complete, and remove tasks; save the tasks to a file and document how to run the program.','Months 2–4','One project session each week',false,3),
('10000000-0000-4000-8000-000000000004','Phase 1 — Python','Build a Hardware/Flight Log Parser','Use only a safe sample or shareable log; extract chosen fields and generate a readable summary.','Months 4–5','One project session each week',false,4),
('10000000-0000-4000-8000-000000000005','Phase 2 — Web','Improve the technical blog','Use semantic HTML, an external CSS file, responsive layouts, and a useful JavaScript feature.','Months 6–8','3 sessions each week; small changes',false,5),
('10000000-0000-4000-8000-000000000006','Phase 3 — Algorithms','Learn data structures and Big-O','Explain common structures, test basic algorithms, and write down complexity and edge cases.','Months 9–12','3 practice sessions each week',false,6),
('10000000-0000-4000-8000-000000000007','Phase 3 — Algorithms','Build a pathfinding project','Start with breadth-first search and extend to Dijkstra when ready.','Months 10–12','One project session each week',false,7),
('10000000-0000-4000-8000-000000000008','Phase 4 — CS and databases','Create an inventory database','Design related tables and write tested SQL queries with joins and aggregation.','Months 13–15','2 SQL sessions and 1 CS-notes session each week',false,8),
('10000000-0000-4000-8000-000000000009','Phase 4 — CS and databases','Learn OS and networking basics','Write short notes and complete small experiments about processes, DNS, TCP, and HTTP.','Months 13–15','2 focused sessions each week',false,9),
('10000000-0000-4000-8000-000000000010','Phase 5 — Backend','Build a database-backed Inventory API','Use one Python framework, validate requests, document endpoints, and persist data in a database.','Months 16–20','3 sessions each week; build incrementally',false,10),
('10000000-0000-4000-8000-000000000011','Phase 5 — Backend','Test the backend project','Add automated tests for normal cases and expected failures; document setup and configuration.','Months 18–20','One testing session each week',false,11),
('10000000-0000-4000-8000-000000000012','Phase 6 — Deployment','Deploy one portfolio project','Add automated checks, deploy the project, and write clear setup and troubleshooting instructions.','Months 21–24','One deployment/documentation session each week',false,12)
on conflict (id) do nothing;

insert into public.journey_settings (id, value)
values (
  'weekly_schedule',
  '{
    "Monday":"Python study or current core topic — 45 minutes",
    "Tuesday":"Hands-on exercises — 45 minutes",
    "Wednesday":"Website or project practice — 45 minutes",
    "Thursday":"Review errors and rewrite notes — 30–45 minutes",
    "Friday":"Small coding task or project progress — 45 minutes",
    "Saturday":"Longer project session — 60–90 minutes if available",
    "Sunday":"Weekly review, update progress, plan next step — 20 minutes"
  }'::jsonb
)
on conflict (id) do nothing;
