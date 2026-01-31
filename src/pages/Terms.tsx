import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, AlertTriangle, Scale, Users, Ban, RefreshCw, Mail } from 'lucide-react';
import ParticleField from '../components/ParticleField';

const sections = [
  {
    icon: Users,
    title: 'Use of Services',
    content: [
      'You must be at least 18 years old to use our services',
      'You agree to provide accurate and complete information when submitting forms or applications',
      'You are responsible for maintaining the confidentiality of any account credentials',
      'You agree not to use our services for any unlawful or unauthorized purpose',
    ],
  },
  {
    icon: FileText,
    title: 'Intellectual Property',
    content: [
      'All content on this website, including text, graphics, logos, and software, is owned by Nature of Commerce LLC',
      'You may not reproduce, distribute, or create derivative works without our express written permission',
      'Trademarks and service marks displayed on this site are the property of their respective owners',
      'Any feedback or suggestions you provide may be used by us without obligation to you',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Disclaimers',
    content: [
      'Information on this website is provided for general informational purposes only',
      'We do not guarantee the accuracy, completeness, or timeliness of any information',
      'Past performance of portfolio companies is not indicative of future results',
      'Content does not constitute investment, legal, tax, or other professional advice',
    ],
  },
  {
    icon: Scale,
    title: 'Limitation of Liability',
    content: [
      'Nature of Commerce LLC shall not be liable for any indirect, incidental, or consequential damages',
      'Our total liability shall not exceed the amount you paid us, if any, in the past twelve months',
      'Some jurisdictions do not allow limitations on liability, so these may not apply to you',
      'We are not responsible for third-party websites or services linked from our site',
    ],
  },
  {
    icon: Ban,
    title: 'Prohibited Activities',
    content: [
      'Attempting to gain unauthorized access to our systems or data',
      'Interfering with or disrupting our services or servers',
      'Transmitting malware, viruses, or other harmful code',
      'Impersonating any person or entity or misrepresenting your affiliation',
      'Scraping, mining, or collecting data without permission',
      'Using our services to violate any applicable laws or regulations',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Modifications',
    content: [
      'We reserve the right to modify these terms at any time',
      'Changes will be effective immediately upon posting to this page',
      'Your continued use of our services constitutes acceptance of modified terms',
      'We encourage you to review these terms periodically',
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

export default function Terms() {
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
              <FileText className="w-4 h-4" />
              Legal
            </div>
            <h1 className="hero-text mb-8">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="body-large max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
              By accessing our website, you agree to be bound by these terms.
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
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the website
                and services provided by Nature of Commerce LLC ("Company," "we," "our," or "us"),
                a Wyoming limited liability company. By accessing or using our services, you agree
                to be bound by these Terms. If you do not agree to these Terms, you may not access
                or use our services. These Terms apply to all visitors, users, and others who
                access or use our services.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-12">
            <div className="glass-card rounded-2xl p-8 border-l-4 border-[var(--color-warning)]">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-[var(--color-warning)] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Investment Disclaimer</h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Nothing on this website constitutes an offer to sell or a solicitation of an
                    offer to buy any securities. Any investment decisions should be made only after
                    thorough review of official offering documents and consultation with qualified
                    legal, tax, and financial advisors. Venture capital investments involve substantial
                    risk, including possible loss of principal. Past performance is not indicative
                    of future results.
                  </p>
                </div>
              </div>
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
              <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                You agree to defend, indemnify, and hold harmless Nature of Commerce LLC and its
                officers, directors, employees, agents, and affiliates from and against any claims,
                damages, obligations, losses, liabilities, costs, or debt arising from your use of
                our services, your violation of these Terms, or your violation of any rights of a
                third party.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of
                the State of Wyoming, United States, without regard to its conflict of law
                provisions. Any disputes arising under these Terms shall be subject to the
                exclusive jurisdiction of the state and federal courts located in Wyoming.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable, the
                remaining provisions shall continue in full force and effect. Our failure to
                enforce any right or provision of these Terms shall not be deemed a waiver
                of such right or provision.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement
                between you and Nature of Commerce LLC regarding your use of our services and
                supersede all prior agreements and understandings, whether written or oral.
                Any ambiguities in the interpretation of these Terms shall not be construed
                against the drafting party.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <div className="glass-card rounded-2xl p-8 text-center">
              <Mail className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Questions?</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us.
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
