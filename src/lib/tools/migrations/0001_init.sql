-- 10DLC Registration Checker: schema for the SEPARATE free-tier Supabase project (never the SurFox AI production project).
-- Run once in the SQL editor of that project. All access is server-side with the service-role key (TOOLS_SUPABASE_SERVICE_KEY).
-- Row level security is on with no policies, so the browser (anon key) can read and write nothing.

create table if not exists tools_scans (
  id uuid primary key,
  share_id text not null unique,
  mode text not null check (mode in ('site', 'paste')),
  site text,
  pages jsonb not null default '[]',
  checks jsonb not null,
  counts jsonb not null,
  src text,
  aff text,
  referrer text,
  landing text,
  visitor_id text,
  ip_hash text,
  unlocked boolean not null default false,
  email text,
  consent_text text,
  consent_at timestamptz,
  report_status text not null default 'none' check (report_status in ('none', 'pending', 'sent', 'failed')),
  cost_usd numeric(12, 6) not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists tools_scans_report_idx on tools_scans (report_status) where report_status in ('pending', 'failed');
create index if not exists tools_scans_created_idx on tools_scans (created_at desc);

create table if not exists tools_events (
  id uuid primary key,
  type text not null check (type in ('check_started', 'result_shown', 'email_unlocked', 'demo_clicked', 'starter_clicked', 'cap_tripped')),
  scan_id uuid,
  site text,
  src text,
  aff text,
  referrer text,
  landing text,
  meta jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists tools_events_created_idx on tools_events (created_at desc);
create index if not exists tools_events_type_idx on tools_events (type, created_at desc);

create table if not exists tools_attempts (
  id uuid primary key,
  kind text not null check (kind in ('site', 'paste', 'queue')),
  visitor_id text,
  ip_hash text,
  created_at timestamptz not null default now()
);
create index if not exists tools_attempts_ip_idx on tools_attempts (ip_hash, created_at desc);
create index if not exists tools_attempts_visitor_idx on tools_attempts (visitor_id, created_at desc);

create table if not exists tools_costs (
  id uuid primary key,
  scan_id uuid,
  queue_id uuid,
  check_id text not null,
  model text not null,
  input_tokens integer not null,
  output_tokens integer not null,
  cost_usd numeric(12, 6) not null,
  created_at timestamptz not null default now()
);
create index if not exists tools_costs_created_idx on tools_costs (created_at desc);

create table if not exists tools_queue (
  id uuid primary key,
  url text not null,
  email text not null,
  consent_text text not null,
  consent_at timestamptz not null,
  src text,
  aff text,
  referrer text,
  landing text,
  visitor_id text,
  ip_hash text,
  status text not null default 'queued' check (status in ('queued', 'running', 'done', 'failed')),
  scan_id uuid,
  attempts integer not null default 0,
  last_error text,
  created_at timestamptz not null default now(),
  processed_at timestamptz
);
create index if not exists tools_queue_status_idx on tools_queue (status, created_at);

create table if not exists tools_alerts (
  id uuid primary key,
  event_type text not null,
  subject text not null,
  body text not null,
  status text not null default 'pending' check (status in ('pending', 'held', 'sent', 'digested')),
  attempts integer not null default 0,
  next_attempt_at timestamptz not null default now(),
  held_day text,
  last_error text,
  created_at timestamptz not null default now(),
  sent_at timestamptz
);
create index if not exists tools_alerts_status_idx on tools_alerts (status, created_at);

create table if not exists tools_sends (
  id uuid primary key,
  account text not null check (account in ('alert', 'report')),
  kind text not null check (kind in ('instant', 'digest', 'report')),
  created_at timestamptz not null default now()
);
create index if not exists tools_sends_idx on tools_sends (account, created_at desc);

alter table tools_scans enable row level security;
alter table tools_events enable row level security;
alter table tools_attempts enable row level security;
alter table tools_costs enable row level security;
alter table tools_queue enable row level security;
alter table tools_alerts enable row level security;
alter table tools_sends enable row level security;
