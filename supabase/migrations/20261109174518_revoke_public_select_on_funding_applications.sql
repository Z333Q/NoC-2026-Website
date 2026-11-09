/*
  # Revoke public read access to funding applications

  1. Security
    - funding_applications holds founder contact details and pitch material and
      is admin-read-only by design; no client code selects from it.
    - service_role retains full access for administrative review.
*/

REVOKE SELECT ON public.funding_applications FROM anon, authenticated;
