import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Send, Mail, Github, Linkedin, Twitter,
  CheckCircle, AlertCircle, Calendar, ArrowRight
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useSeoMeta } from '../hooks/useSeoMeta';
import { fadeUp, fadeIn, slideFromLeft, slideFromRight } from '../lib/motion';

const topics = [
  'Investment Inquiry',
  'Technical Partnership',
  'P402 Integration',
  'Advisory',
  'Academic / Research',
  'Media & Press',
  'General',
];

export default function Contact() {
  useSeoMeta({
    title: 'Contact | Nature of Commerce',
    description: 'Get in touch with Nature of Commerce. Apply for funding, inquire about the Launchpad program, or reach out to discuss investment opportunities in Web3, DeFi, and agentic commerce.',
    ogTitle: 'Contact Nature of Commerce',
    ogDescription: 'Apply for funding or reach out to the Nature of Commerce team. We invest $50K–$500K in pre-seed and seed Web3, DeFi, and agentic AI startups.',
    canonical: 'https://natureofcommerce.com/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_submissions').insert([{
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        subject: formData.topic,
        message: formData.message,
      }]);
      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', company: '', topic: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center blueprint-grid pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-orb glow-orb-primary w-[400px] h-[400px] -top-20 right-0 opacity-15" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0} className="mb-8">
            <span className="section-label-minimal">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Get in Touch
            </span>
          </motion.div>
          <motion.h1 variants={slideFromLeft} initial="hidden" animate="visible" custom={1} className="hero-text max-w-3xl mb-8">
            Let's{' '}
            <span className="text-gradient">Connect</span>
          </motion.h1>
          <motion.p variants={slideFromLeft} initial="hidden" animate="visible" custom={2} className="body-large max-w-2xl">
            Whether you are a VC evaluating the agent economy, a technical partner building on x402,
            or an enterprise exploring autonomous settlement -- we should talk.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
                      <p className="text-[var(--color-text-secondary)]">
                        Thank you for reaching out. We will review your message and get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="input-label" htmlFor="name">Name *</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="input-label" htmlFor="email">Email *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="input-field"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="input-label" htmlFor="company">Company</label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company"
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="input-label" htmlFor="topic">Topic</label>
                          <select
                            id="topic"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            className="input-field"
                          >
                            <option value="">Select a topic</option>
                            {topics.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="input-label" htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What would you like to discuss?"
                          className="input-field resize-none"
                        />
                      </div>

                      {status === 'error' && (
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm">There was an error sending your message. Please try again.</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 card-accent-left"
              >
                <h3 className="text-lg font-bold text-white mb-4">Schedule a Call</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                  Prefer a direct conversation? Schedule a call to discuss investment opportunities
                  or partnership inquiries.
                </p>
                <a
                  href="https://calendly.com/natureofcommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-white transition-colors font-semibold"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule on Calendly
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:zeshan@natureofcommerce.com"
                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                    <span className="text-sm">zeshan@natureofcommerce.com</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">Connect Online</h3>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com/in/zeshanahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Z333Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                    <span className="text-sm">GitHub (Z333Q)</span>
                  </a>
                  <a
                    href="https://twitter.com/NatureofCommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                    <span className="text-sm">@NatureofCommerce</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className="glass-card rounded-2xl p-6 border border-[var(--color-primary)]/20"
              >
                <blockquote className="text-white font-bold text-lg mb-2">
                  "What would nature do?"
                </blockquote>
                <p className="text-[var(--color-text-muted)] text-sm">
                  The guiding principle for sustainable innovation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
