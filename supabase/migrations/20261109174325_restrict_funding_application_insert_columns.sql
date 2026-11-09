/*
  # Restrict funding application inserts to applicant-supplied columns

  1. Security
    - Revoke table-wide INSERT on funding_applications from anon/authenticated
    - Re-grant INSERT only on the columns the public form legitimately sends,
      excluding the operator fields `status` and `notes` and the server-managed
      `id` / `created_at` (both have defaults)
*/

REVOKE INSERT ON public.funding_applications FROM anon, authenticated;

GRANT INSERT (
  founder_name,
  email,
  linkedin_url,
  company_name,
  website,
  stage,
  sector,
  funding_range,
  pitch_deck_url,
  description,
  problem_statement,
  traction,
  team_info,
  referral_source,
  additional_info
) ON public.funding_applications TO anon, authenticated;
