/*
  # Revoke unused UPDATE permission from the public roles

  1. Security
    - The application never updates any of these tables from the browser;
      no UPDATE policy exists. Remove the grant so the permission cannot be
      activated by a future policy by accident.
*/

REVOKE UPDATE ON public.blog_posts FROM anon, authenticated;
REVOKE UPDATE ON public.projects FROM anon, authenticated;
REVOKE UPDATE ON public.contact_submissions FROM anon, authenticated;
REVOKE UPDATE ON public.funding_applications FROM anon, authenticated;
