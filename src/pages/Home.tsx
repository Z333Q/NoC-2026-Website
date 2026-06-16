import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, BookOpen } from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';
import MolecularOrb from '../components/MolecularOrb';
import { fadeUp } from '../lib/motion';

const trackRecord = [
  { value: '$1.2B+', label: 'Transactions architected' },
  { value: '3', label: 'Continents deployed' },
  { value: '46', label: 'Patents commercialized' },
  { value: '20+', label: 'Years in financial infra' },
];

const flagship = {
  product: 'P402.io',
  label: 'Agentic Payments',
  description:
    'Autonomous payment infrastructure for the agent economy. Routes across 300+ AI models, settles via x402 on Base L2, implements the Google A2A protocol for agent-to-agent discovery and commerce.',
  entity: 'Studio-operated — Nature of Commerce LLC',
  facts: [
    '@p402/sdk and @p402/cli on npm',
    '300+ models, 4 routing modes',
    'Google A2A protocol',
    'x402 gasless USDC settlement',
  ],
  link: 'https://www.p402.io',
  githubLink: 'https://github.com/Z333Q/p402-protocol',
};

const ventures = [
  {
    number: '02',
    label: 'Algorithmic Portfolio Management',
    product: 'ReFi Trading',
    description:
      'Reinforcement learning trading agents with institutional-grade backtested performance. Self-custodied, non-custodial architecture. zk-VaR engine for zero-knowledge verified risk management. Co-founded with Daniel Oosthuyzen.',
    entity: 'Independent entity — Co-founded — Raising seed round',
    facts: ['28% CAGR, 2.07 Sharpe (3yr backtest)', 'USPTO patent filed', 'zk-VaR risk verification', 'ADGM Category 3A licensing'],
    link: 'https://refi.trading',
    badge: 'USPTO Patent Filed',
  },
  {
    number: '03',
    label: 'Automated Compliance',
    product: 'Cross-Cutting Layer',
    description:
      'Compliance embedded in architecture, not bolted on after the fact. Zero-knowledge proofs allow a system to mathematically prove it is operating within risk parameters before execution.',
    entity: 'Architecture — Embedded in P402 protocol',
    facts: ['zk-VaR: cryptographic risk proofs', 'Cryptographic audit trails', 'Regulatory-first: ADGM, SOC-2, CTA', 'No manual oversight required'],
  },
];

const whyNow = [
  'AI agents are autonomous economic actors. They need native payment infrastructure, not human rails adapted for machines.',
  'Reinforcement learning has matured to where hedge fund-grade trading strategies can run in the browser. ReFi Trading is democratising quant infrastructure previously inaccessible to retail traders.',
  'Stablecoin regulatory clarity is emerging globally (MiCA, US legislation, ADGM).',
  'Zero-knowledge proof technology has matured to production-grade.',
  'The Google A2A protocol creates an open standard for agent-to-agent commerce.',
  'The convergence of capable agents, stablecoin rails, and ZK maturity is the moment for this infrastructure.',
];

export default function Home() {
  useSeoMeta({
    title: 'Nature of Commerce — Zeshan Ahmad',
    description:
      'Professor, technical founder, and infrastructure architect. Building P402 (agentic payments) and co-founding ReFi Trading (algorithmic portfolio management). 20+ years creating access to global financial markets.',
    ogTitle: 'Nature of Commerce — Zeshan Ahmad',
    ogDescription:
      'Professor and technical founder building autonomous payment and trading infrastructure. P402, ReFi Trading, and applied research at Kutaisi International University.',
    canonical: 'https://natureofcommerce.com/',
  });

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[88vh] flex items-end pb-24 pt-32 blueprint-grid">
        <div className="absolute top-12 right-0 opacity-40 pointer-events-none hidden lg:block">
          <MolecularOrb size={420} delay={0} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="section-label-minimal mb-10 block">Builder Studio</span>
            <h1 className="hero-text max-w-5xl mb-10">
              Build technology
              <br />
              that creates{' '}
              <span className="text-[var(--color-primary)]">opportunity</span>
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 max-w-5xl">
              <div>
                <p className="body-large max-w-md mb-3">
                  20 years of creating access to global markets.
                </p>
                <p className="mono-label">
                  Payments &middot; Trading &middot; Education &middot; Ownership
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Link to="/stack" className="btn-primary">
                  See the Stack <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/thesis" className="btn-secondary">
                  <BookOpen className="w-4 h-4" />
                  Read the Thesis
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TRACK RECORD ===== */}
      <section className="border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 py-5 border-b border-[var(--color-border)]">
            <img
              src="/zeshan-bio-photo-2022-square.jpg"
              alt="Zeshan Ahmad"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-[var(--color-text-muted)] text-sm">
              <Link to="/about" className="text-[var(--color-text-secondary)] link-underline">
                Zeshan Ahmad
              </Link>{' '}
              &mdash; Professor and technical founder. Mobile payments, sovereign systems,
              institutional capital, autonomous commerce.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--color-border)]">
            {trackRecord.map((item) => (
              <div key={item.label} className="py-10 px-6 first:pl-0">
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLAGSHIP: P402 ===== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-12">
            <span className="section-label-minimal">Flagship</span>
            <span className="mono-label">01 / The Infrastructure Stack</span>
          </div>
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="display-text mb-2">{flagship.product}</h2>
              <p className="mono-label mb-6">{flagship.label}</p>
              <p className="body-large mb-8">{flagship.description}</p>
              <ul className="space-y-2.5 mb-8">
                {flagship.facts.map((fact) => (
                  <li
                    key={fact}
                    className="flex items-baseline gap-3 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="text-[var(--color-primary)] font-mono text-xs">+</span>
                    {fact}
                  </li>
                ))}
              </ul>
              <p className="mono-label mb-6">{flagship.entity}</p>
              <div className="flex gap-5">
                <a
                  href={flagship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-primary)] link-underline inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  p402.io
                </a>
                <a
                  href={flagship.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-text-muted)] link-underline inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="frame">
              <div className="frame-bar">p402.io — payment console</div>
              <img src="/screenshot-p402.png" alt="P402 payment console interface" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VENTURE INDEX: 02 / 03 ===== */}
      <section className="pb-[var(--space-section)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-y border-[var(--color-border)] divide-y divide-[var(--color-border)]">
            {ventures.map((venture) => (
              <div key={venture.number} className="row-hover py-10 lg:px-6 lg:-mx-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  <div className="flex-shrink-0 lg:w-56">
                    <span className="mono-label">{venture.number}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{venture.product}</h3>
                    <p className="mono-label mt-1">{venture.label}</p>
                    {venture.badge && (
                      <span className="inline-block mt-3 text-xs font-semibold text-[var(--color-primary-light)] border border-[var(--color-border-strong)] rounded px-2 py-0.5">
                        {venture.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                      {venture.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-5">
                      {venture.facts.map((fact) => (
                        <div
                          key={fact}
                          className="flex items-baseline gap-3 text-sm text-[var(--color-text-muted)]"
                        >
                          <span className="text-[var(--color-primary)] font-mono text-xs">+</span>
                          {fact}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <p className="mono-label">{venture.entity}</p>
                      {venture.link && (
                        <a
                          href={venture.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--color-primary)] link-underline inline-flex items-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Visit site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEACHING ===== */}
      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            <div>
              <span className="section-label-minimal mb-6 block">Teaching &amp; R&amp;D</span>
              <h2 className="display-text mb-6">The classroom is the lab</h2>
              <p className="body-large mb-8">
                Active researcher and educator at Kutaisi International University, teaching
                AI-Powered Software Development, Product Development, Blockchain &amp; Cryptography,
                and Digital Disruption. NVIDIA DLI certified instructor.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  'AI-Powered Software Development',
                  'Product Development for Software Engineers',
                  'Digital Disruption, Innovation & Transformation (MBA)',
                  'Blockchain & Cryptography Fundamentals',
                ].map((course) => (
                  <div
                    key={course}
                    className="flex items-baseline gap-3 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="text-[var(--color-primary)] font-mono text-xs">+</span>
                    {course}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'AI Course', href: 'https://github.com/ZA-KIU/AI-POWERED-SOFTWARE-DEV' },
                  { label: 'Product Dev', href: 'https://github.com/ZA-KIU/PRODUCT-DEV-FOR-SOFTWARE-ENGINEERS' },
                  { label: 'DDIT', href: 'https://github.com/ZA-KIU-Classroom/DDIT-S26' },
                ].map((repo) => (
                  <a
                    key={repo.label}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors border border-[var(--color-border)] hover:border-[var(--color-border-strong)] rounded-md px-3 py-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    {repo.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="surface-card p-8 border-l-2 border-l-[var(--color-primary)]">
              <p className="mono-label mb-6 !text-[var(--color-primary)]">The Loop</p>
              <div className="space-y-6">
                {[
                  {
                    n: '1',
                    title: 'Build live',
                    desc: 'P402 and ReFi Trading are built in real time using the same methodology taught in class.',
                  },
                  {
                    n: '2',
                    title: 'Teach the method',
                    desc: 'Course frameworks mirror the actual build process. Students learn on real infrastructure patterns.',
                  },
                  {
                    n: '3',
                    title: 'Feed the pipeline',
                    desc: 'Students become contributors. The classroom becomes a talent pipeline and R&D lab.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <span className="text-[var(--color-primary)] font-mono text-sm w-5 flex-shrink-0">
                      {item.n}.
                    </span>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY NOW ===== */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label-minimal mb-6 block">Market Timing</span>
          <h2 className="display-text mb-8">Why now</h2>
          <p className="body-large mb-12">
            AI agents are becoming autonomous economic actors. They need native payment
            infrastructure, not human payment rails adapted for machines. The convergence has
            arrived.
          </p>
          <ol className="space-y-6">
            {whyNow.map((point, i) => (
              <li
                key={i}
                className="flex gap-5 text-[var(--color-text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--color-primary)] font-mono text-sm flex-shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="pb-[var(--space-section)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-l-2 border-[var(--color-primary)] pl-8 lg:pl-12">
            <p className="pull-quote mb-6">We are not learning on the job.</p>
            <p className="body-large max-w-2xl">
              20 years building this exact type of infrastructure: payment hardware, sovereign
              financial digitization, institutional capital, protocol design, using the best
              technology of each era. The market just caught up.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA: the one bold field of brand color ===== */}
      <section className="bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-6 section-padding-tight">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-white/70 mb-5">
                Contact
              </p>
              <h2 className="display-text text-white mb-5">
                See the same infrastructure gap?
              </h2>
              <p className="text-white/85 text-lg leading-relaxed">
                Whether you are a VC evaluating the agent economy, a technical partner building on
                x402, or an enterprise exploring autonomous settlement, we should talk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link to="/contact" className="btn-on-blue">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/thesis" className="btn-on-blue-ghost">
                <BookOpen className="w-4 h-4" />
                Read the Thesis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
