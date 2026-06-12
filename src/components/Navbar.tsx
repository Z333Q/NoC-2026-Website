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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)]'
            : 'py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/artboard_1.png" alt="Nature of Commerce" className="h-8 w-8" />
            <span className="hidden sm:block text-sm font-semibold tracking-tight">Nature of Commerce</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-medium ${location.pathname === link.path ? 'active text-white' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="nav-link font-medium">Contact</Link>
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
            {[...navLinks, { path: '/contact', label: 'Contact' }].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-3xl font-bold py-2 ${
                  location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-white/50 hover:text-white'
                } transition-colors`}
              >
                {link.label}
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
