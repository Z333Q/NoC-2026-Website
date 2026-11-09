/*
  # Make the articles table read-only to the public roles

  1. Security
    - blog_posts is world readable by policy; nothing in the browser writes it.
      Revoke INSERT so no visitor can publish an article. SELECT is unchanged.
*/

REVOKE INSERT ON public.blog_posts FROM anon, authenticated;
