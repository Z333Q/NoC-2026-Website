/*
  # Revoke unused DELETE permission from the public roles

  1. Security
    - Nothing in the browser deletes rows and no DELETE policy exists.
      Remove the grant on all four client-reachable tables.
*/

REVOKE DELETE ON public.blog_posts FROM anon, authenticated;
REVOKE DELETE ON public.projects FROM anon, authenticated;
REVOKE DELETE ON public.contact_submissions FROM anon, authenticated;
REVOKE DELETE ON public.funding_applications FROM anon, authenticated;
