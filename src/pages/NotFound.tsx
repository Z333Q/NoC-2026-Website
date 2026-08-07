import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSeoMeta } from '../hooks/useSeoMeta';

export default function NotFound() {
  useSeoMeta({
    title: '404 — Page Not Found | Nature of Commerce',
    description: 'The page you are looking for does not exist. Return to the Nature of Commerce homepage.',
    canonical: 'https://natureofcommerce.com/404',
  });

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-8xl font-bold text-white/10 mb-4 font-display">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Head back to explore our research, thesis, and technology.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
