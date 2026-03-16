create table public.user_settings (
  id                uuid        not null default gen_random_uuid(),
  user_id           integer     not null,
  theme             text        not null default 'system',
  language          text        not null default 'ta',
  english_text_color text       not null default 'default',
  images            boolean     not null default true,
  short_summary     boolean     not null default true,
  bible_reading     boolean     not null default true,
  verse_heading     boolean     not null default true,
  verse_heading_language text    not null default 'ta',
  only_headers      boolean     not null default true,
  author_details    boolean     not null default true,
  memory_verse      boolean     not null default true,
  bookmark          boolean     not null default true,
  notes_feature     boolean     not null default true,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  constraint user_settings_pkey primary key (id),
  constraint user_settings_user_id_key unique (user_id),
  constraint user_settings_user_id_fkey
    foreign key (user_id) references public.users (id) on delete cascade
);