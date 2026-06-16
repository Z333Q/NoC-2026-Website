import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/stack', label: 'Stack' },
  { path: '/thesis', label: 'Thesis' },
  { path: '/about', label: 'About' },
  { path: '/insights', label: 'Insights' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
          scrolled
            ? 'py-3 bg-[var(--color-bg-primary)]/95 border-[var(--color-border)]'
            : 'py-5 border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/artboard_1.png" alt="Nature of Commerce" className="h-8 w-8" />
            <span className="hidden sm:block text-sm font-semibold tracking-tight">Nature of Commerce</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-[var(--color-text-muted)] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-[var(--color-primary)]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/contact"
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-white link-underline transition-colors"
            >
              Contact
            </Link>
            <Link to="/thesis" className="btn-primary text-sm py-2 px-4">
              Builder Thesis <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[var(--color-text-muted)] hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[var(--color-bg-primary)] flex flex-col justify-center px-8">
          <nav className="space-y-1">
            {[...navLinks, { path: '/contact', label: 'Contact' }].map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-baseline gap-4 py-2 transition-colors ${
                  location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-white/50 hover:text-white'
                }`}
              >
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-3xl font-bold">{link.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <Link to="/thesis" className="btn-primary">
              Builder Thesis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}