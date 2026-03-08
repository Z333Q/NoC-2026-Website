import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/studio', label: 'Studio' },
  { path: '/advisory', label: 'Advisory' },
  { path: '/thesis', label: 'Thesis' },
  { path: '/about', label: 'About' },
  { path: '/insights', label: 'Insights' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-card py-3' : 'py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Nature of Commerce Home">
            <img
              src="/artboard_1.png"
              alt="Nature of Commerce Logo"
              className="w-10 h-10 transition-transform group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold tracking-tight">Nature of Commerce</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium ${
                  location.pathname === link.path ? 'active text-white' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-secondary text-sm py-2 px-5">
              Contact
            </Link>
            <Link to="/thesis" className="btn-primary text-sm py-2 px-5 flex items-center gap-2">
              <span>Builder Thesis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl" />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[var(--color-bg-secondary)] border-l border-[var(--color-border)] pt-24 px-8"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-semibold transition-colors ${
                        location.pathname === link.path
                          ? 'text-[var(--color-primary)]'
                          : 'text-white hover:text-[var(--color-primary)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[var(--color-border)] space-y-4">
                <Link
                  to="/contact"
                  className="block w-full text-center btn-secondary py-3"
                >
                  Contact
                </Link>
                <Link
                  to="/thesis"
                  className="block w-full text-center btn-primary py-3"
                >
                  <span>Builder Thesis</span>
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
