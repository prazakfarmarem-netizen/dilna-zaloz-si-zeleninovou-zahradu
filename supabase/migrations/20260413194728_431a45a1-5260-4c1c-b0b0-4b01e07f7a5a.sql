
create table public.interest_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz default now()
);

alter table public.interest_signups enable row level security;

create policy "Anyone can insert interest signups"
  on public.interest_signups
  for insert
  to anon, authenticated
  with check (true);
