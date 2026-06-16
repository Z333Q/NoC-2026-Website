import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, Globe, Mail } from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';

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

export default function Privacy() {
  useSeoMeta({
    title: 'Privacy Policy | Nature of Commerce',
    description: 'Privacy Policy for Nature of Commerce LLC. Learn how we collect, use, and protect your personal information.',
    ogTitle: 'Privacy Policy | Nature of Commerce',
    ogDescription: 'Nature of Commerce LLC privacy practices, data collection, security measures, and your rights.',
    canonical: 'https://natureofcommerce.com/privacy',
  });

  return (
    <main>
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label-minimal mb-8 block mx-auto w-fit">
            <Shield className="w-4 h-4" />
            Legal
          </span>
          <h1 className="hero-text mb-8">Privacy Policy</h1>
          <p className="body-large max-w-2xl mx-auto">
            Your privacy matters. This policy explains how Nature of Commerce LLC
            collects, uses, and protects your information.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm mt-4">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div className="surface-card p-8">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Nature of Commerce LLC ("we," "our," or "us") is a Wyoming limited liability
              company operating as a venture studio and early-stage investment firm. This
              Privacy Policy describes how we collect, use, and share information when you
              visit our website or interact with our services.
            </p>
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
            <h2 className="text-xl font-bold mb-4">Your Rights</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Right to access your personal data',
                'Right to correct inaccurate data',
                'Right to request deletion',
                'Right to data portability',
                'Right to opt out of marketing',
                'Right to withdraw consent',
              ].map((right) => (
                <div key={right} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <div className="w-1 h-1 rounded-full bg-[var(--color-success)] flex-shrink-0" />
                  {right}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-8">
            <h2 className="text-xl font-bold mb-4">Cookies & Tracking</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              We use cookies and similar tracking technologies to analyze website traffic
              and improve your experience. You can control cookie preferences through your
              browser settings.
            </p>
          </div>

          <div className="surface-card p-8">
            <h2 className="text-xl font-bold mb-4">Data Retention</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill
              the purposes outlined in this policy, unless a longer retention period is
              required by law.
            </p>
          </div>

          <div className="surface-card p-8">
            <h2 className="text-xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of
              material changes by posting the updated policy on this page with a new "Last
              updated" date.
            </p>
          </div>

          <div className="surface-card p-8 text-center">
            <Mail className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us.
            </p>
            <p className="text-[var(--color-text-muted)] text-sm mb-2">Nature of Commerce LLC | Wyoming, United States</p>
            <Link to="/contact" className="text-[var(--color-primary)] hover:text-white transition-colors text-sm">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
