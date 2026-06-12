import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, Scale, Users, Ban, RefreshCw, Mail } from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';

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

export default function Terms() {
  useSeoMeta({
    title: 'Terms of Service | Nature of Commerce',
    description: 'Terms of Service for Nature of Commerce LLC. Read our terms governing use of our venture studio and investment services.',
    ogTitle: 'Terms of Service | Nature of Commerce',
    ogDescription: 'Nature of Commerce LLC terms of service, investment disclaimers, intellectual property rights, and governing law.',
    canonical: 'https://natureofcommerce.com/terms',
  });

  return (
    <main>
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label-minimal mb-8 block mx-auto w-fit">
            <FileText className="w-4 h-4" />
            Legal
          </span>
          <h1 className="hero-text mb-8">Terms of Service</h1>
          <p className="body-large max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
            By accessing our website, you agree to be bound by these terms.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm mt-4">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div className="surface-card p-8">
            <h2 className="text-xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              These Terms of Service govern your access to and use of the website and services
              provided by Nature of Commerce LLC, a Wyoming limited liability company. By
              accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="surface-card p-8 border-l-2 border-l-[var(--color-warning)]">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[var(--color-warning)] flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold mb-2">Investment Disclaimer</h2>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Nothing on this website constitutes an offer to sell or a solicitation of an
                  offer to buy any securities. Venture capital investments involve substantial
                  risk, including possible loss of principal. Past performance is not indicative
                  of future results.
                </p>
              </div>
            </div>
          </div>

          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="surface-card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                      <span className="text-[var(--color-text-secondary)] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="surface-card p-8">
            <h2 className="text-xl font-bold mb-4">Indemnification</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              You agree to defend, indemnify, and hold harmless Nature of Commerce LLC and its
              officers, directors, employees, and agents from any claims, damages, or losses
              arising from your use of our services or violation of these Terms.
            </p>
          </div>

          <div className="surface-card p-8">
            <h2 className="text-xl font-bold mb-4">Governing Law</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              These Terms shall be governed by the laws of the State of Wyoming, United States.
              Any disputes shall be subject to the exclusive jurisdiction of the state and
              federal courts located in Wyoming.
            </p>
          </div>

          <div className="surface-card p-8">
            <h2 className="text-xl font-bold mb-4">Entire Agreement</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement
              between you and Nature of Commerce LLC regarding your use of our services.
            </p>
          </div>

          <div className="surface-card p-8 text-center">
            <Mail className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-4">Questions?</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us.
            </p>
            <p className="text-[var(--color-text-muted)] text-sm mb-2">Nature of Commerce LLC -- Wyoming, United States</p>
            <Link to="/contact" className="text-[var(--color-primary)] hover:text-white transition-colors text-sm">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
