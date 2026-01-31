/*
  # Update Contact Submissions Table

  1. Changes
    - Add `company` column for business context
    - Ensure table exists with correct schema

  2. Security
    - Maintain existing RLS policies
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'company'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN company text;
  END IF;
END $$;
