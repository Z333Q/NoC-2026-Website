import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, ArrowRight, BookOpen, Calendar, User } from 'lucide-react';
import { articles, sourceConfig, type ArticleCategory, type ArticleSource } from '../data/insightsData';
import { useSeoMeta } from '../hooks/useSeoMeta';
import { fadeUp } from '../lib/motion';

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

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const src = sourceConfig[article.source];
  return (
    <article>
      <a
        href={article.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group surface-card flex flex-col h-full overflow-hidden"
        aria-label={`Read: ${article.title}`}
      >
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/70 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${src.bgColor} ${src.color} border ${src.borderColor}`}>
              {src.label}
            </span>
          </div>
          {article.series && (
            <div className="absolute bottom-3 left-3 text-xs text-white/70 font-mono bg-black/50 px-2 py-0.5 rounded">
              {article.series} -- Part {article.seriesPart}
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

          <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
            <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
              <User className="w-3 h-3" />
              {article.author}
            </span>
            <div className="flex items-center gap-1 text-sm text-[var(--color-primary)]">
              Read <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [activeSource, setActiveSource] = useState<FilterSource>('All');

  useSeoMeta({
    title: 'Insights & Research | Nature of Commerce',
    description: 'Research, technical papers, and thought leadership from Nature of Commerce. Covering AI trading infrastructure, agentic payments, zero-knowledge compliance, and market structure.',
    ogTitle: 'Insights & Research | Nature of Commerce',
    ogDescription: 'Technical papers and market research from the Nature of Commerce studio.',
    canonical: 'https://natureofcommerce.com/insights',
  });

  const marketWarsSeries = articles
    .filter((a) => a.series === 'Market Wars')
    .sort((a, b) => (a.seriesPart ?? 0) - (b.seriesPart ?? 0));

  const filtered = articles
    .filter((a) => {
      const catMatch = activeCategory === 'All' || a.category === activeCategory;
      const srcMatch = activeSource === 'All' || a.source === activeSource;
      return catMatch && srcMatch;
    })
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 blueprint-grid">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="section-label-minimal mb-8 block">
              <BookOpen className="w-4 h-4" />
              Insights & Research
            </span>
            <h1 className="hero-text max-w-4xl mb-8">Research & Analysis</h1>
            <p className="body-large max-w-2xl">
              Technical papers, market research, and thought leadership from across the Nature of Commerce studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Wars Series */}
      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Featured Series</span>
              <span className="text-[var(--color-text-muted)] text-xs">5-Part Series from ReFi Trading</span>
            </div>
            <h2 className="display-text mb-3">Market Wars</h2>
            <p className="body-large max-w-2xl">
              A comprehensive exploration of the battle between retail and institutional traders --
              from historical origins to the future of autonomous finance.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {marketWarsSeries.map((article) => {
              const src = sourceConfig[article.source];
              return (
                <article key={article.id} className="flex-shrink-0 w-72">
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block surface-card overflow-hidden h-full"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 text-[var(--color-primary)] text-xs font-mono">Part {article.seriesPart} of 5</div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--color-text-muted)] text-xs">{article.readTime}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
            <div>
              <span className="section-label-minimal mb-3 block">All Posts</span>
              <h2 className="display-text">Everything published</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                {categoryFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveCategory(f)}
                    aria-pressed={activeCategory === f}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      activeCategory === f
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white'
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
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      activeSource === f.value
                        ? 'bg-[var(--color-primary)]/20 border border-[var(--color-primary)] text-[var(--color-primary)]'
                        : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[var(--color-text-muted)]">
              No articles match the selected filters.
            </div>
          )}
        </div>
      </section>

      {/* Personal content */}
      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="surface-card p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 block">
                Personal Blog
              </span>
              <h3 className="text-xl font-bold text-white mb-3">Exploration & Discovery</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Adventures and reflections from around the world with my wife{' '}
                <a
                  href="https://linkedin.com/in/yulkin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:text-white transition-colors underline underline-offset-2"
                >
                  Yuliia
                </a>
                . Travel, culture, food, and the occasional philosophical tangent.
              </p>
              <a
                href="https://weexploreanddiscover.tumblr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-white transition-colors text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Read the Blog
              </a>
            </div>

            <div className="surface-card p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 block">
                TikTok
              </span>
              <h3 className="text-xl font-bold text-white mb-3">Bagheera & Oreo</h3>
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
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-white transition-colors text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                @bagheeandoreo on TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
