/*
  # Bound contact submission field lengths and validate the email format

  1. Security
    - The insert policy capped `message` at 5000 but left name, email, company
      and inquiry_type unbounded, and accepted any text as an email address.
    - Adds length bounds plus the same email regex already used on
      funding_applications. NOT VALID so existing rows are untouched.
*/

ALTER TABLE public.contact_submissions
  ADD CONSTRAINT contact_submissions_text_length_check
  CHECK (
    length(name) <= 200 AND
    length(email) <= 320 AND
    length(coalesce(company, '')) <= 200 AND
    length(coalesce(inquiry_type, '')) <= 100 AND
    length(message) <= 5000
  ) NOT VALID;

ALTER TABLE public.contact_submissions
  ADD CONSTRAINT contact_submissions_email_format_check
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$') NOT VALID;
