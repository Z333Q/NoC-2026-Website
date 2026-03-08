import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  BookOpen,
  ExternalLink,
  Calendar,
  Tag,
  Compass,
  Rss,
  ArrowRight,
  Clock,
  Zap,
  FileText,
  Heart,
  ChevronRight,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { fallbackPosts } from '../data/insightsData';
import type { BlogPost } from '../types/insights';

const categories = ['All', 'Research', 'Technology', 'Protocol', 'Case Study', 'Personal'];

const SOURCE_CONFIG: Record<string, { label: string; color: string; icon: typeof Zap }> = {
  refi: { label: 'ReFi.Trading', color: '#00D4AA', icon: Zap },
  p402: { label: 'P402 Intelligence', color: '#3B82F6', icon: FileText },
  personal: { label: 'Personal Blog', color: '#F59E0B', icon: Heart },
};

function SourceBadge({ source }: { source: string }) {
  const config = SOURCE_CONFIG[source] || SOURCE_CONFIG.refi;
  const Icon = config.icon;

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
      style={{
        color: config.color,
        backgroundColor: `${config.color}15`,
        borderColor: `${config.color}30`,
      }}
    >
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={post.source_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card-interactive rounded-2xl overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[16/9]">
        {post.image_url ? (
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-primary)] flex items-center justify-center">
            <Compass className="w-12 h-12 text-[var(--color-primary)]/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/20 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="tag">{post.category}</span>
          {post.series_name && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm">
              Series
            </span>
          )}
        </div>

        <div className="absolute top-4 right-4">
          <SourceBadge source={post.source || 'refi'} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.published_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          {post.read_time && (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.read_time}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 bg-white/5 text-[var(--color-text-muted)] rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium group-hover:gap-3 transition-all mt-auto">
          Read More
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
}

function MarketWarsSeries({ posts }: { posts: BlogPost[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const seriesPosts = posts
    .filter((p) => p.series_name === 'Market Wars')
    .sort((a, b) => (a.series_order || 0) - (b.series_order || 0));

  if (seriesPosts.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4AA]/5 via-transparent to-[#00D4AA]/3" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
              style={{
                color: '#00D4AA',
                backgroundColor: 'rgba(0,212,170,0.1)',
                border: '1px solid rgba(0,212,170,0.25)',
              }}
            >
              <Zap className="w-3 h-3" />
              Featured Series
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              5-Part Series from ReFi.Trading
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Market Wars</h2>
          <p className="text-[var(--color-text-secondary)] text-sm mb-6 max-w-2xl">
            A comprehensive exploration of the battle between retail and institutional
            traders -- from historical origins to the future of autonomous finance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {seriesPosts.map((post, i) => (
              <a
                key={post.id}
                href={post.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#00D4AA]/30 hover:bg-[#00D4AA]/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold shrink-0"
                    style={{
                      backgroundColor: 'rgba(0,212,170,0.15)',
                      color: '#00D4AA',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                    {post.read_time}
                  </span>
                </div>
                <h4 className="text-sm font-semibold leading-tight group-hover:text-[#00D4AA] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)] group-hover:text-[#00D4AA] mt-auto transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PersonalBlogCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16"
    >
      <div className="glass-panel rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 via-transparent to-[#F59E0B]/3" />

        <div className="relative z-10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
                  style={{
                    color: '#F59E0B',
                    backgroundColor: 'rgba(245,158,11,0.1)',
                    border: '1px solid rgba(245,158,11,0.25)',
                  }}
                >
                  <Heart className="w-3 h-3" />
                  Personal
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Exploration & Discovery
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                Adventures and reflections from around the world with my wife Yuliia.
                Life beyond the terminal -- travel, culture, food, and the occasional
                philosophical tangent.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://weexploreanddiscover.tumblr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:gap-3"
                  style={{
                    backgroundColor: 'rgba(245,158,11,0.1)',
                    color: '#F59E0B',
                    border: '1px solid rgba(245,158,11,0.25)',
                  }}
                >
                  <Rss className="w-4 h-4" />
                  Read the Blog
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com/bagheeandoreo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:text-white transition-all"
                >
                  <BagheeOreoIcon />
                  Baghee & Oreo on TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BagheeOreoIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1V9.01a6.36 6.36 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.64a8.26 8.26 0 0 0 4.84 1.55V6.74a4.83 4.83 0 0 1-1.08-.05Z" />
    </svg>
  );
}

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false });

        if (error) throw error;
        if (data && data.length > 0) {
          setPosts(data);
        }
      } catch {
        console.log('Using fallback posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = activeFilter === 'All'
    ? posts.filter((p) => p.category !== 'Personal')
    : posts.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden blueprint-grid">
        <div className="glow-orb glow-orb-primary w-[600px] h-[600px] -top-48 right-0 opacity-20" />

        <div ref={headerRef} className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="section-label mx-auto mb-6">
              <BookOpen className="w-4 h-4" />
              Insights & Research
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Ideas</span> & Analysis
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-8">
              Research, analysis, and technical papers from across the Nature of Commerce
              studio -- covering AI trading, agentic payments, zero-knowledge compliance,
              and market structure.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://refi.trading/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                style={{ color: '#00D4AA' }}
              >
                <Rss className="w-4 h-4" />
                ReFi.Trading Blog
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="w-px h-4 bg-[var(--color-border)]" />
              <a
                href="https://www.p402.io/intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                style={{ color: '#3B82F6' }}
              >
                <FileText className="w-4 h-4" />
                P402 Intelligence
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            <Tag className="w-4 h-4 text-[var(--color-text-muted)] mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-[var(--color-primary)] text-white shadow-[0_0_20px_rgba(74,144,217,0.3)]'
                    : 'bg-white/5 text-[var(--color-text-secondary)] hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          {!loading && activeFilter === 'All' && (
            <MarketWarsSeries posts={posts} />
          )}

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                  <div className="aspect-[16/9] bg-[var(--color-bg-tertiary)]" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-[var(--color-bg-tertiary)] rounded w-1/4" />
                    <div className="h-6 bg-[var(--color-bg-tertiary)] rounded w-3/4" />
                    <div className="h-4 bg-[var(--color-bg-tertiary)] rounded w-full" />
                    <div className="h-4 bg-[var(--color-bg-tertiary)] rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredPosts.map((post, index) => (
                  <PostCard key={post.id} post={post} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {!loading && filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <Compass className="w-16 h-16 text-[var(--color-primary)]/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--color-text-secondary)] mb-2">
                No posts found
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Try selecting a different category
              </p>
            </motion.div>
          )}

          {!loading && activeFilter === 'All' && <PersonalBlogCard />}
        </div>
      </section>
    </div>
  );
}
