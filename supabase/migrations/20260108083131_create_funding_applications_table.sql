/*
  # Create Funding Applications Table

  1. New Tables
    - `funding_applications`
      - `id` (uuid, primary key)
      - `founder_name` (text, required)
      - `email` (text, required)
      - `linkedin_url` (text)
      - `company_name` (text, required)
      - `website` (text)
      - `stage` (text)
      - `sector` (text)
      - `funding_range` (text)
      - `pitch_deck_url` (text)
      - `description` (text)
      - `problem_statement` (text)
      - `traction` (text)
      - `team_info` (text)
      - `referral_source` (text)
      - `additional_info` (text)
      - `status` (text, default 'pending')
      - `notes` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on table
    - Allow anonymous inserts with validation
    - No public read access (admin only)
*/

CREATE TABLE IF NOT EXISTS funding_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  founder_name text NOT NULL,
  email text NOT NULL,
  linkedin_url text,
  company_name text NOT NULL,
  website text,
  stage text DEFAULT 'Pre-Seed',
  sector text,
  funding_range text,
  pitch_deck_url text,
  description text,
  problem_statement text,
  traction text,
  team_info text,
  referral_source text,
  additional_info text,
  status text DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE funding_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit funding application"
  ON funding_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(founder_name) > 0 AND
    length(email) > 0 AND
    length(company_name) > 0 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );
