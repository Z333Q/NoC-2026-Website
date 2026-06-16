import { useState } from 'react';
import { motion } from 'framer-motion';
import MolecularOrb from '../components/MolecularOrb';

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'The Future of AI-Powered Development',
      excerpt: 'Exploring how AI is reshaping the way we build software and design systems.',
      date: '2024-12-15',
      tags: ['AI', 'Development'],
      featured: true,
      series: 'AI Futures'
    },
    {
      id: 2,
      title: 'Building Scalable Infrastructure',
      excerpt: 'Best practices for designing infrastructure that grows with your application.',
      date: '2024-11-20',
      tags: ['Infrastructure', 'Scale'],
      featured: false,
      series: 'Engineering'
    },
    {
      id: 3,
      title: 'React Performance Optimization',
      excerpt: 'Deep dive into optimizing React applications for production performance.',
      date: '2024-10-10',
      tags: ['React', 'Performance'],
      featured: false,
      series: 'Web Tech'
    },
    {
      id: 4,
      title: 'AI Agents: Architecture and Design',
      excerpt: 'Understanding the architecture behind modern AI agent systems.',
      date: '2024-09-05',
      tags: ['AI', 'Architecture'],
      featured: true,
      series: 'AI Futures'
    }
  ];

  const topics = ['AI', 'Development', 'Infrastructure', 'React', 'Performance', 'Architecture'];

  const personalContent = [
    {
      platform: 'Blog',
      title: 'Technical Deep Dives',
      description: 'In-depth articles exploring cutting-edge technologies and practices',
      link: '#'
    },
    {
      platform: 'TikTok',
      title: 'Tech Tips & Tricks',
      description: 'Quick insights and demonstrations of powerful development techniques',
      link: '#'
    }
  ];

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.tags.includes(activeFilter));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
        <MolecularOrb />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Insights & Articles</h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Thoughts on technology, AI, and the future of development
          </p>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="mono-label !text-[var(--color-primary)] mb-6">Featured Series</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.filter(a => a.featured).map((article) => (
              <motion.article
                key={article.id}
                className="p-8 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
                whileHover={{ y: -4 }}
              >
                <span className="inline-block mono-label text-[var(--color-primary)] mb-4">{article.series}</span>
                <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">{article.excerpt}</p>
                <div className="flex gap-2 flex-wrap">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg transition hover:border-[var(--color-border-strong)] ${
              activeFilter === 'all'
                ? 'bg-[var(--color-primary)] text-white'
                : 'border border-[var(--color-border)] text-[var(--color-text-secondary)]'
            }`}
          >
            All Articles
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveFilter(topic)}
              className={`px-4 py-2 rounded-lg transition hover:border-[var(--color-border-strong)] ${
                activeFilter === topic
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'border border-[var(--color-border)] text-[var(--color-text-secondary)]'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <motion.article
              key={article.id}
              className="p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
              whileHover={{ y: -4 }}
            >
              <span className="text-sm text-[var(--color-text-secondary)]">{article.date}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">{article.excerpt}</p>
              <div className="flex gap-2 flex-wrap">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Personal Content Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="mono-label mb-8">Personal Content</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {personalContent.map((content, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-2xl font-bold mb-2">{content.platform}</h3>
                <p className="text-[var(--color-primary)] font-semibold mb-3">{content.title}</p>
                <p className="text-[var(--color-text-secondary)] mb-6">{content.description}</p>
                <a href={content.link} className="link-underline text-[var(--color-primary)]">
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Subscribe to get the latest insights and articles delivered to your inbox
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)]"
          />
          <button className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}