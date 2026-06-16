import { motion } from 'framer-motion';
import MolecularOrb from '../components/MolecularOrb';

export default function Contact() {
  const socialLinks = [
    { platform: 'Twitter', handle: '@yourusername', link: '#' },
    { platform: 'LinkedIn', handle: 'yourprofile', link: '#' },
    { platform: 'GitHub', handle: 'yourrepo', link: '#' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
        <MolecularOrb />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Have a question or opportunity? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="frame"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Other ways to connect</h2>

            {/* Email */}
            <div className="mb-8 p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
              <h3 className="font-semibold mb-3">Email</h3>
              <p>
                <span className="link-underline">hello@example.com</span>
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                We typically respond within 24 hours
              </p>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="space-y-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-bg-secondary)] transition"
                  >
                    <span className="link-underline">{social.platform}</span>
                    <span className="text-[var(--color-text-secondary)]">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
              <h3 className="font-semibold mb-3">Schedule a Call</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Want to chat? Schedule a time that works for you.
              </p>
              <a href="#" className="link-underline text-[var(--color-primary)]">
                Book a meeting →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Info Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Office</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <p className="text-[var(--color-text-secondary)]">
              San Francisco, CA<br />
              United States
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Business Hours</h3>
            <p className="text-[var(--color-text-secondary)]">
              Monday - Friday<br />
              9:00 AM - 6:00 PM PST
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p className="text-[var(--color-text-secondary)]">
              +1 (555) 123-4567<br />
              Available for inquiries
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <details className="p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] cursor-pointer group">
            <summary className="font-semibold flex items-center justify-between">
              What's your typical response time?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="text-[var(--color-text-secondary)] mt-4">
              We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.
            </p>
          </details>

          <details className="p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] cursor-pointer group">
            <summary className="font-semibold flex items-center justify-between">
              Do you offer consulting services?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="text-[var(--color-text-secondary)] mt-4">
              Yes! We offer consulting services for companies looking to integrate AI into their workflows. Contact us to discuss your specific needs.
            </p>
          </details>

          <details className="p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] cursor-pointer group">
            <summary className="font-semibold flex items-center justify-between">
              What are your rates?
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="text-[var(--color-text-secondary)] mt-4">
              Our rates vary depending on the scope of work. We'll provide a detailed quote after our initial consultation.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}