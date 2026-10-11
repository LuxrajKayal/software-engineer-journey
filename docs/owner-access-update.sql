-- Run this migration in Supabase SQL Editor if you already ran the original schema.
-- Replace this one placeholder with the same owner email used by your current write policies.
-- Do not add the email to a public GitHub file.
-- Safe to re-run: table creation and insert preserve existing data.

create table if not exists public.journey_owner_access (
  id boolean primary key default true check (id is true),
  can_edit boolean not null default true
);

alter table public.journey_owner_access enable row level security;

drop policy if exists "Only owner can read edit access marker" on public.journey_owner_access;
create policy "Only owner can read edit access marker"
on public.journey_owner_access for select to authenticated
using (can_edit is true and lower(auth.jwt() ->> 'email') = lower('YOUR_OWNER_EMAIL_HERE'));

revoke all on public.journey_owner_access from anon, authenticated;
grant select on public.journey_owner_access to authenticated;

insert into public.journey_owner_access (id, can_edit)
values (true, true)
on conflict (id) do nothing;
