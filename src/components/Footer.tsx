import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  navigate: [
    { label: 'Stack', path: '/stack' },
    { label: 'Thesis', path: '/thesis' },
    { label: 'About', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ],
  ventures: [
    { label: 'P402.io', href: 'https://www.p402.io', external: true },
    { label: 'ReFi Trading', href: 'https://refi.trading', external: true },
    { label: 'RapMath', href: 'https://www.rapmath.com', external: true },
    { label: 'EYEcercise', href: 'https://eyecercise.com', external: true },
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
              <img src="/artboard_1.png" alt="Nature of Commerce" className="w-12 h-12" />
              <span className="text-xl font-semibold">Nature of Commerce</span>
            </Link>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-md mb-4">
              20 years building infrastructure that opens financial access -- from rural banking terminals to autonomous AI agents.
            </p>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-md mb-6">
              Nature of Commerce LLC, Wyoming. Studio vehicle for P402.io and adjacent ventures.
            </p>
            <p className="text-[var(--color-primary)] text-sm font-medium italic mb-8">
              The mechanics of participation. The nature of commerce.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/zeshan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Z333Q"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/NatureofCommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:zeshan@natureofcommerce.com"
                className="p-2 glass-card rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[var(--color-text-secondary)] hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-4">
              Ventures
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.ventures.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-4">
              GitHub
            </h4>
            <ul className="space-y-3">
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
                    className="text-[var(--color-text-secondary)] hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    <Github className="w-3.5 h-3.5 flex-shrink-0 text-[var(--color-text-muted)]" />
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
              <div className="flex items-start gap-2 text-[var(--color-text-muted)] text-xs">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Global</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            &copy; {currentYear} Nature of Commerce LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--color-text-muted)]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
