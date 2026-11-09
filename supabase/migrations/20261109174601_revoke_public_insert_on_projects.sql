/*
  # Make the projects table read-only to the public roles

  1. Security
    - projects is the public portfolio, readable by policy; nothing in the
      browser writes it. Revoke INSERT. SELECT is unchanged.
*/

REVOKE INSERT ON public.projects FROM anon, authenticated;
