/*
  # Bound the length of funding application text fields

  1. Security
    - The insert policy only required three fields to be non-empty, so a direct
      Data API call could store unlimited text. Add generous upper bounds that
      no legitimate submission reaches.
    - Constraints are NOT VALID so existing rows are never rejected; they apply
      to all new inserts.
*/

ALTER TABLE public.funding_applications
  ADD CONSTRAINT funding_applications_text_length_check
  CHECK (
    length(founder_name) <= 200 AND
    length(email) <= 320 AND
    length(coalesce(linkedin_url, '')) <= 500 AND
    length(company_name) <= 200 AND
    length(coalesce(website, '')) <= 500 AND
    length(coalesce(stage, '')) <= 100 AND
    length(coalesce(sector, '')) <= 100 AND
    length(coalesce(funding_range, '')) <= 100 AND
    length(coalesce(pitch_deck_url, '')) <= 1000 AND
    length(coalesce(description, '')) <= 1000 AND
    length(coalesce(problem_statement, '')) <= 5000 AND
    length(coalesce(traction, '')) <= 5000 AND
    length(coalesce(team_info, '')) <= 5000 AND
    length(coalesce(referral_source, '')) <= 100 AND
    length(coalesce(additional_info, '')) <= 5000
  ) NOT VALID;
