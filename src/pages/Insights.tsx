import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Clock, ArrowRight, BookOpen, Calendar, User, Linkedin } from 'lucide-react';
import { LinkedInFeed } from '../components/LinkedInFeed';
import { articles, sourceConfig, type ArticleCategory, type ArticleSource } from '../data/insightsData';
import { useSeoMeta } from '../hooks/useSeoMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

type FilterCategory = 'All' | ArticleCategory;
type FilterSource = 'All' | ArticleSource;

const categoryFilters: FilterCategory[] = ['All', 'Research', 'Technology', 'Protocol', 'Case Study'];
const sourceFilters: { value: FilterSource; label: string }[] = [
  { value: 'All', label: 'All Sources' },
  { value: 'refi_trading', label: 'ReFi Trading' },
  { value: 'p402_intelligence', label: 'P402 Intelligence' },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  const src = sourceConfig[article.source];
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index % 4}
    >
      <a
        href={article.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group glass-card-interactive rounded-2xl border ${src.borderColor} flex flex-col h-full overflow-hidden`}
        style={{ background: 'linear-gradient(135deg, rgba(20,20,32,0.8) 0%, rgba(10,10,16,0.9) 100%)' }}
        aria-label={`Read: ${article.title}`}
      >
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10]/80 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${src.bgColor} ${src.color} border ${src.borderColor} backdrop-blur-sm`}>
              {src.label}
            </span>
          </div>
          {article.series && (
            <div className="absolute bottom-3 left-3 text-xs text-white/70 font-mono bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
              {article.series} — Part {article.seriesPart}
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3 text-[var(--color-text-muted)] text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-white font-bold text-base mb-2 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-[var(--color-text-muted)] bg-white/5 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
              <User className="w-3 h-3" />
              {article.author}
            </span>
            <div className="flex items-center gap-1 text-sm text-[var(--color-primary)] group-hover:gap-2 transition-all">
              <span>Read</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [activeSource, setActiveSource] = useState<FilterSource>('All');

  useSeoMeta({
    title: 'Insights & Research | Nature of Commerce',
    description: 'Research, technical papers, and thought leadership from Nature of Commerce. AI trading infrastructure, agentic payments, zero-knowledge compliance, and market structure.',
    ogTitle: 'Insights & Research | Nature of Commerce',
    ogDescription: 'Technical papers and market research from Nature of Commerce. AI trading, agentic payments, ZK compliance, and digital commerce.',
    canonical: 'https://natureofcommerce.com/insights',
    ogType: 'blog',
    keywords: 'AI trading, agentic payments, zero-knowledge proofs, market structure, DeFi research, Web3 research',
  });

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://natureofcommerce.com/insights',
      name: 'Insights & Research — Nature of Commerce',
      description: 'Research, technical papers, and thought leadership from Nature of Commerce. Covering AI trading, agentic payments, zero-knowledge compliance, and market structure.',
      url: 'https://natureofcommerce.com/insights',
      publisher: { '@id': 'https://natureofcommerce.com/#organization' },
      hasPart: articles.map((a) => ({
        '@type': 'Article',
        headline: a.title,
        description: a.excerpt,
        author: { '@type': 'Person', name: a.author },
        datePublished: a.publishedDate,
        dateModified: a.publishedDate,
        url: a.sourceUrl,
        image: a.image,
        keywords: a.tags.join(', '),
        timeRequired: `PT${parseInt(a.readTime)}M`,
        publisher: { '@id': 'https://natureofcommerce.com/#organization' },
        mainEntityOfPage: a.sourceUrl,
      })),
    };

    let scriptTag = document.getElementById('insights-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'insights-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);

    return () => {
      const el = document.getElementById('insights-schema');
      if (el) el.remove();
    };
  }, []);

  const marketWarsSeries = articles.filter((a) => a.series === 'Market Wars').sort((a, b) => (a.seriesPart ?? 0) - (b.seriesPart ?? 0));

  const filtered = articles
    .filter((a) => {
      const catMatch = activeCategory === 'All' || a.category === activeCategory;
      const srcMatch = activeSource === 'All' || a.source === activeSource;
      return catMatch && srcMatch;
    })
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[50vh] flex items-center blueprint-grid pt-24" aria-label="Insights hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -top-20 right-0 opacity-15" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-8">
            <span className="section-label">
              <BookOpen className="w-4 h-4" />
              Insights & Research
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="hero-text max-w-4xl mb-8">
            Research &{' '}
            <span className="text-gradient">Analysis</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="body-large max-w-2xl">
            Technical papers, market research, and thought leadership from across the Nature of Commerce studio.
            Covering AI trading, agentic payments, zero-knowledge compliance, and market structure.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]" aria-label="Market Wars featured series">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Featured Series
              </div>
              <span className="text-[var(--color-text-muted)] text-xs">5-Part Series from ReFi Trading</span>
            </div>
            <h2 className="display-text mb-3">
              <span className="text-gradient">Market Wars</span>
            </h2>
            <p className="body-large max-w-2xl">
              A comprehensive exploration of the battle between retail and institutional traders --
              from historical origins to the future of autonomous finance.
            </p>
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {marketWarsSeries.map((article, i) => (
              <motion.article
                key={article.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group flex-shrink-0 w-72"
              >
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card-interactive rounded-xl border border-emerald-500/30 overflow-hidden h-full"
                  style={{ background: 'linear-gradient(135deg, rgba(52,211,153,0.04) 0%, rgba(10,10,16,0.9) 100%)' }}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 text-emerald-400 text-xs font-mono">Part {article.seriesPart} of 5</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold text-sm mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--color-text-muted)] text-xs">{article.readTime}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="All published articles">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
            <div>
              <span className="section-label mb-3 block w-fit">All Posts</span>
              <h2 className="display-text">
                Everything{' '}
                <span className="text-gradient">Published</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                {categoryFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveCategory(f)}
                    aria-pressed={activeCategory === f}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeCategory === f
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'glass-card text-[var(--color-text-muted)] hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by source">
                {sourceFilters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveSource(f.value)}
                    aria-pressed={activeSource === f.value}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeSource === f.value
                        ? 'bg-[var(--color-primary)]/20 border border-[var(--color-primary)] text-[var(--color-primary)]'
                        : 'glass-card text-[var(--color-text-muted)] hover:text-white'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[var(--color-text-muted)]">
              No articles match the selected filters.
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]" aria-label="Personal content">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl p-8 border border-[#0A66C2]/30"
            style={{ background: 'linear-gradient(135deg, rgba(10,102,194,0.08) 0%, rgba(10,10,16,0.95) 100%)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/20 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm block">Live from LinkedIn</span>
                  <span className="text-[var(--color-text-muted)] text-xs">Latest posts & updates</span>
                </div>
              </div>
              <a
                href="https://linkedin.com/in/zeshan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Follow on LinkedIn
              </a>
            </div>
            <LinkedInFeed className="overflow-hidden [&_.sk-ww-linkedin-profile-post]:grid [&_.sk-ww-linkedin-profile-post]:grid-cols-1 [&_.sk-ww-linkedin-profile-post]:sm:grid-cols-2 [&_.sk-ww-linkedin-profile-post]:lg:grid-cols-3 [&_.sk-ww-linkedin-profile-post]:gap-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="rounded-2xl p-8 border border-amber-500/20"
              style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(10,10,16,0.9) 100%)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                  Personal Blog
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Exploration & Discovery</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Adventures and reflections from around the world. Travel, culture, food, and the occasional philosophical tangent. Building is only part of the story.
              </p>
              <a
                href="https://weexploreanddiscover.tumblr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-white transition-colors font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Read the Blog
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="rounded-2xl p-8 border border-amber-500/20"
              style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(10,10,16,0.9) 100%)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                  TikTok
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Bagheera & Oreo</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-3">
                The real stars of the show.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Two dogs, zero understanding of financial infrastructure, maximum chaos. Bagheera handles
                security (barking at leaves). Oreo handles product (eating things that are not food).
              </p>
              <a
                href="https://tiktok.com/@bagheeandoreo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-white transition-colors font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                @bagheeandoreo on TikTok
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
