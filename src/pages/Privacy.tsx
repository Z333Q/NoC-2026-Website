import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Eye, Database, Globe, Mail } from 'lucide-react';
import ParticleField from '../components/ParticleField';

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    content: [
      'Contact information you provide when reaching out to us, including name, email, and company details',
      'Application data submitted through our funding application forms',
      'Usage data collected through analytics to improve our services',
      'Technical data such as browser type, device information, and IP address',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: [
      'To evaluate and process funding applications and partnership inquiries',
      'To communicate with you about our services, portfolio companies, and opportunities',
      'To improve and optimize our website and user experience',
      'To comply with legal obligations and protect our legitimate business interests',
    ],
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: [
      'We implement industry-standard security measures to protect your personal information',
      'Data is encrypted in transit and at rest using modern encryption protocols',
      'Access to personal data is restricted to authorized personnel only',
      'We regularly review and update our security practices to address emerging threats',
    ],
  },
  {
    icon: Globe,
    title: 'Third-Party Services',
    content: [
      'We use Google Analytics to understand website usage patterns',
      'Our database infrastructure is provided by Supabase with enterprise-grade security',
      'We do not sell your personal information to third parties',
      'Third-party service providers are bound by confidentiality agreements',
    ],
  },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden">
        <ParticleField className="opacity-30" particleCount={40} />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="section-label mx-auto mb-8">
              <Shield className="w-4 h-4" />
              Legal
            </div>
            <h1 className="hero-text mb-8">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="body-large max-w-2xl mx-auto">
              Your privacy matters. This policy explains how Nature of Commerce LLC
              collects, uses, and protects your information.
            </p>
            <p className="text-[var(--color-text-muted)] mt-4">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Nature of Commerce LLC ("we," "our," or "us") is a Wyoming limited liability
                company operating as a venture studio and early-stage investment firm. This
                Privacy Policy describes how we collect, use, and share information when you
                visit our website or interact with our services. By using our services, you
                agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <AnimatedSection key={section.title}>
                <motion.div
                  className="glass-card rounded-2xl p-8"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <ul className="space-y-4">
                    {section.content.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                        <span className="text-[var(--color-text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Depending on your location, you may have certain rights regarding your personal
                information, including:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Right to access your personal data',
                  'Right to correct inaccurate data',
                  'Right to request deletion',
                  'Right to data portability',
                  'Right to opt out of marketing',
                  'Right to withdraw consent',
                ].map((right) => (
                  <div key={right} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{right}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Cookies & Tracking</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We use cookies and similar tracking technologies to analyze website traffic
                and improve your experience. These include essential cookies required for
                site functionality and analytics cookies that help us understand how visitors
                interact with our website. You can control cookie preferences through your
                browser settings. Note that disabling certain cookies may affect site functionality.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill
                the purposes outlined in this policy, unless a longer retention period is
                required by law. When we no longer need your information, we will securely
                delete or anonymize it in accordance with our data retention procedures.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect changes in
                our practices or legal requirements. We will notify you of any material
                changes by posting the updated policy on this page with a new "Last updated"
                date. Your continued use of our services after any changes indicates your
                acceptance of the updated policy.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <div className="glass-card rounded-2xl p-8 text-center">
              <Mail className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices,
                please contact us.
              </p>
              <div className="text-[var(--color-text-muted)]">
                <p>Nature of Commerce LLC</p>
                <p>Wyoming, United States</p>
                <a
                  href="/contact"
                  className="inline-block mt-4 text-[var(--color-primary)] hover:underline"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
