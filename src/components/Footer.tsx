import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const footerLinks = {
  navigate: [
    { label: 'Stack', path: '/stack' },
    { label: 'Thesis', path: '/thesis' },
    { label: 'About', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ],
  ventures: [
    { label: 'P402.io', href: 'https://www.p402.io' },
    { label: 'ReFi Trading', href: 'https://refi.trading' },
    { label: 'RapMath', href: 'https://www.rapmath.com' },
    { label: 'EYEcercise', href: 'https://eyecercise.com' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/artboard_1.png" alt="Nature of Commerce" className="w-10 h-10" />
              <span className="text-base font-semibold">Nature of Commerce</span>
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-md mb-3">
              20 years building infrastructure that opens financial access — from rural banking terminals to autonomous AI agents.
            </p>
            <p className="text-[var(--color-text-muted)] text-xs mb-6">
              Nature of Commerce LLC, Wyoming.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: 'https://linkedin.com/in/zeshanahmad', Icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com/Z333Q', Icon: Github, label: 'GitHub' },
                { href: 'https://twitter.com/NatureofCommerce', Icon: Twitter, label: 'Twitter' },
                { href: 'mailto:zeshan@natureofcommerce.com', Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-center w-9 h-9 rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white hover:border-[var(--color-border-strong)] transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mono-label mb-4">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.navigate.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[var(--color-text-secondary)] hover:text-white text-sm transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mono-label mb-4">Ventures</h4>
            <ul className="space-y-2 mb-8">
              {footerLinks.ventures.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-white text-sm transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="mono-label mb-4">GitHub</h4>
            <ul className="space-y-2">
              {[
                { label: 'Personal', href: 'https://github.com/Z333Q' },
                { label: 'P402 Protocol', href: 'https://github.com/Z333Q/p402-protocol' },
                { label: 'Course Materials', href: 'https://github.com/orgs/ZA-KIU-Classroom' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 link-underline"
                  >
                    <Github className="w-3 h-3 text-[var(--color-text-muted)]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-xs">
            &copy; {currentYear} Nature of Commerce LLC
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--color-text-muted)]">
            <Link to="/privacy" className="hover:text-white transition-colors link-underline">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors link-underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}