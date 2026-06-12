import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '../lib/motion';

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2 bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)]'
            : 'py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Nature of Commerce Home">
            <motion.img
              src="/artboard_1.png"
              alt="Nature of Commerce Logo"
              className="h-9 w-9"
              whileHover={{ rotate: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
            <div className="hidden sm:block">
              <span className={`font-semibold tracking-tight transition-all duration-500 ${scrolled ? 'text-sm' : 'text-base'}`}>
                Nature of Commerce
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'active text-white bg-white/[0.04]'
                    : 'hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors px-4 py-2">
              Contact
            </Link>
            <Link to="/thesis" className="btn-primary text-sm py-2.5 px-5 flex items-center gap-2">
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[var(--color-bg-primary)]/98 backdrop-blur-2xl" />
            <div className="relative h-full flex flex-col justify-center px-8">
              <motion.nav
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-2"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={staggerItem}>
                    <Link
                      to={link.path}
                      className={`block text-4xl font-bold py-3 transition-colors ${
                        location.pathname === link.path
                          ? 'text-[var(--color-primary)]'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={staggerItem}>
                  <Link
                    to="/contact"
                    className="block text-4xl font-bold py-3 text-white/60 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-8 border-t border-[var(--color-border)]"
              >
                <Link
                  to="/thesis"
                  className="btn-primary inline-flex items-center gap-2 text-base"
                >
                  <span>Builder Thesis</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
