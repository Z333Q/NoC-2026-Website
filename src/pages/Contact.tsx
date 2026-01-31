import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  Calendar,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  CheckCircle,
  Loader2,
  MessageSquare,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

const inquiryTypes = [
  'General Inquiry',
  'Investment Partnership',
  'Portfolio Company Inquiry',
  'Speaking Opportunity',
  'Media Request',
  'Other',
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: inquiryTypes[0],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          inquiry_type: formData.inquiryType,
          message: formData.message,
        }]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: inquiryTypes[0],
        message: '',
      });
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden blueprint-grid">
        <div className="glow-orb glow-orb-primary w-[600px] h-[600px] -top-48 -left-48 opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="section-label mx-auto mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12">
              Whether you're a founder, investor, or industry partner,
              we'd love to hear from you.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src="/zeshan-degamefi.webp"
                  alt="Speaking at DeGameFi Conference"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border border-[var(--color-primary)]/20 -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[var(--color-success)]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    Thank you for reaching out. We'll review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[var(--color-primary)] hover:underline font-medium"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                  {error && (
                    <div className="mb-6 p-4 bg-[var(--color-error)]/10 border border-[var(--color-error)]/20 rounded-lg text-[var(--color-error)] text-sm">
                      {error}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="input-label">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="input-field"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="input-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="input-field"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="input-label">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="input-field"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="input-label">
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="input-field"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="input-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input-field resize-none"
                        placeholder="How can we help?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection>
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Schedule a Call</h2>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    Prefer a direct conversation? Schedule a call to discuss
                    investment opportunities or partnership inquiries.
                  </p>
                  {/* PLACEHOLDER: Update Calendly link */}
                  <a
                    href="https://calendly.com/natureofcommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule on Calendly
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[var(--color-primary)]/10 rounded-xl">
                        <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-text-muted)]">Email</p>
                        {/* PLACEHOLDER: Update email addresses */}
                        <a
                          href="mailto:invest@natureofcommerce.com"
                          className="text-white hover:text-[var(--color-primary)] transition-colors"
                        >
                          invest@natureofcommerce.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[var(--color-primary)]/10 rounded-xl">
                        <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-text-muted)]">Location</p>
                        {/* PLACEHOLDER: Update office location */}
                        <p className="text-white">Edmonton, Alberta, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-xl font-bold mb-6">Connect Online</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* PLACEHOLDER: Update social media links */}
                    <a
                      href="https://linkedin.com/company/natureofcommerce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 rounded-xl transition-colors group"
                    >
                      <Linkedin className="w-6 h-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-[var(--color-text-muted)]">LinkedIn</span>
                    </a>
                    <a
                      href="https://twitter.com/NatureofCommerce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 rounded-xl transition-colors group"
                    >
                      <Twitter className="w-6 h-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-[var(--color-text-muted)]">Twitter</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <p className="text-[var(--color-primary)] italic text-lg mb-2">
                    "What would nature do?"
                  </p>
                  <p className="text-[var(--color-text-muted)] text-sm">
                    The guiding principle for sustainable innovation
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
