/*
  # Revoke public read access to contact submissions

  1. Security
    - contact_submissions is admin-read-only by design and no client code
      selects from it. Removing SELECT from anon/authenticated also takes the
      table out of the publicly discoverable Data API / GraphQL schema.
    - service_role retains full access for administrative review.
*/

REVOKE SELECT ON public.contact_submissions FROM anon, authenticated;
