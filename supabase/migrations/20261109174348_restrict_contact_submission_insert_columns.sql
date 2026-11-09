/*
  # Restrict contact submission inserts to sender-supplied columns

  1. Security
    - Revoke table-wide INSERT on contact_submissions from anon/authenticated
    - Re-grant INSERT only on the columns the public contact form sends,
      excluding the operator field `read_status` and the server-managed
      `id` / `created_at` (both have defaults)
*/

REVOKE INSERT ON public.contact_submissions FROM anon, authenticated;

GRANT INSERT (
  name,
  email,
  company,
  inquiry_type,
  message
) ON public.contact_submissions TO anon, authenticated;
