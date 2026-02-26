import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  BookOpen,
  ExternalLink,
  Calendar,
  Tag,
  ArrowRight,
  Compass,
  Rss,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image_url: string | null;
  source_url: string;
  published_at: string;
  tags: string[];
}

const categories = ['All', 'Investment', 'Technology', 'FinTech', 'Research', 'Announcements'];

const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Tokenized Economies',
    excerpt: 'Exploring how tokenization is reshaping ownership, governance, and value creation in the digital age.',
    category: 'Investment',
    image_url: '/final-incredible-1-noc-blue.jpg',
    source_url: 'https://weexploreanddiscover.tumblr.com',
    published_at: '2025-12-15',
    tags: ['Tokenization', 'FinTech', 'Investment'],
  },
  {
    id: '2',
    title: 'First Principles in Venture Investing',
    excerpt: 'How we apply Cantillon\'s 1730 economic principles to modern venture capital decisions.',
    category: 'Investment',
    image_url: '/final-incredible-2-noc-blue.jpg',
    source_url: 'https://weexploreanddiscover.tumblr.com',
    published_at: '2025-11-20',
    tags: ['Philosophy', 'Investing', 'Strategy'],
  },
  {
    id: '3',
    title: 'FinTech Protocol Design Patterns',
    excerpt: 'Technical deep-dive into sustainable fintech architecture and tokenomics design.',
    category: 'Technology',
    image_url: '/final-incredible-3-noc-blue.jpg',
    source_url: 'https://weexploreanddiscover.tumblr.com',
    published_at: '2025-10-10',
    tags: ['FinTech', 'Technical', 'Smart Contracts'],
  },
  {
    id: '4',
    title: 'Announcing Launchpad Cohort 3',
    excerpt: 'Applications now open for our third accelerator cohort. Here\'s what we\'re looking for.',
    category: 'Announcements',
    image_url: '/final-incredible-4-noc-blue.jpg',
    source_url: 'https://weexploreanddiscover.tumblr.com',
    published_at: '2025-09-05',
    tags: ['Launchpad', 'Accelerator', 'Founders'],
  },
  {
    id: '5',
    title: 'AI and the Future of Trading',
    excerpt: 'How reinforcement learning and zero-knowledge proofs are transforming algorithmic trading.',
    category: 'Research',
    image_url: '/final-incredible-5-noc-blue.jpg',
    source_url: 'https://weexploreanddiscover.tumblr.com',
    published_at: '2025-08-22',
    tags: ['AI', 'Trading', 'ZK-Proofs'],
  },
  {
    id: '6',
    title: 'FinTech Regulatory Landscape 2026',
    excerpt: 'Navigating the evolving regulatory environment for blockchain and cryptocurrency projects.',
    category: 'Research',
    image_url: '/final-incredible-1-noc-blue.jpg',
    source_url: 'https://weexploreanddiscover.tumblr.com',
    published_at: '2025-07-15',
    tags: ['Regulation', 'Compliance', 'FinTech'],
  },
];

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={post.source_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group glass-card-interactive rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-video">
        {post.image_url ? (
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-primary)] flex items-center justify-center">
            <Compass className="w-12 h-12 text-[var(--color-primary)]/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
        <span className="absolute top-4 left-4 tag">
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.published_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>

        {/* PLACEHOLDER: Replace with actual blog post content from CMS */}
        <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-white/5 text-[var(--color-text-muted)] rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium group-hover:gap-3 transition-all">
          Read More
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
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
      } catch (err) {
        console.log('Using fallback posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = activeFilter === 'All'
    ? posts
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
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6">
              Thoughts on investing, technology, and building at the intersection of open finance, AI, and education.
            </p>
            {/* PLACEHOLDER: Update Tumblr link */}
            <a
              href="https://weexploreanddiscover.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:gap-3 transition-all"
            >
              <Rss className="w-4 h-4" />
              Follow on Tumblr
              <ArrowRight className="w-4 h-4" />
            </a>
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
                    ? 'bg-[var(--color-primary)] text-white'
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
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                  <div className="aspect-video bg-[var(--color-bg-tertiary)]" />
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Compass className="w-16 h-16 text-[var(--color-primary)]/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--color-text-secondary)] mb-2">
                No posts found
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
