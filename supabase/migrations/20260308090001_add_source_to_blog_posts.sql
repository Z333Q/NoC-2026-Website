/*
  # Add source column to blog_posts

  1. Modified Tables
    - `blog_posts`
      - Added `source` (text) - identifies the origin site (e.g. 'refi', 'p402', 'personal')
      - Added `read_time` (text) - estimated reading time (e.g. '9 min read')
      - Added `series_name` (text) - optional series grouping (e.g. 'Market Wars')
      - Added `series_order` (integer) - order within a series

  2. Notes
    - Uses IF NOT EXISTS checks for safety
    - No destructive operations
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'source'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN source text DEFAULT 'refi';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'read_time'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN read_time text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'series_name'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN series_name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'series_order'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN series_order integer;
  END IF;
END $$;
