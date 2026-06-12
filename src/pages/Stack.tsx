import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Github, Shield, CheckCircle,
  BookOpen
} from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';
import { fadeUp } from '../lib/motion';

const stackLayers = [
  {
    number: '5',
    label: 'Developer Ecosystem',
    items: ['P402.shop -- AI API marketplace', '@p402/sdk & @p402/cli on npm', 'Agent stack builder tool'],
  },
  {
    number: '4',
    label: 'Application',
    items: ['ReFi Trading -- RL trading agents, self-custodied execution', 'Third-party builders on P402 infrastructure'],
  },
  {
    number: '3',
    label: 'Compliance',
    items: ['zk-VaR engine -- zero-knowledge Value-at-Risk', 'Cryptographic audit logs', 'ADGM Category 3A, SOC-2, CTA'],
  },
  {
    number: '2',
    label: 'Intelligence',
    items: ['Multi-provider routing (300+ models)', 'Session budgets, AP2 mandate governance', 'A2A agent-to-agent protocol (Google spec)'],
  },
  {
    number: '1',
    label: 'Protocol',
    items: ['x402 payment standard (HTTP 402)', 'EIP-3009 gasless USDC settlement on Base L2', 'Cryptographic verification'],
  },
];

const activeVentures = [
  {
    name: 'P402.io',
    oneLiner: 'AI payment router. Route across 300+ models, pay per request in USDC on Base.',
    description:
      'Middleware intelligence layer between AI applications and LLM providers. Handles intelligent multi-provider routing (cost/quality/speed/balanced), on-chain micropayment settlement via x402, and spending guardrails for autonomous agents. Implements Google A2A spec for agent-to-agent discovery and commerce.',
    entity: 'Studio-Operated -- Nature of Commerce LLC',
    facts: ['Published SDK & CLI on npm', '300+ models supported', '4 routing modes', 'Session budget enforcement'],
    tags: ['x402', 'A2A Protocol', 'Base L2', 'Agent Commerce'],
    link: 'https://www.p402.io',
    githubLink: 'https://github.com/Z333Q/p402-protocol',
    year: '2024',
    status: 'Active',
  },
  {
    name: 'ReFi Trading',
    oneLiner: 'Wall-Street AI, radically accessible. Self-custodied AI trading with zero-knowledge risk proofs.',
    description:
      'Strategy-as-a-service protocol. Reinforcement learning agents (not rule-based bots, not LLM wrappers) with backtested institutional-grade performance: 28% CAGR, 2.07 Sharpe ratio. Self-custodied, non-custodial architecture. zk-VaR engine provides cryptographic proof that every trade complies with risk parameters before execution.',
    entity: 'Independent Entity -- ReFi Trading Inc (Canada Federal) -- Co-Founded',
    facts: ['28% CAGR, 2.07 Sharpe (3yr backtest)', '1 USPTO patent filed, 5 drafted', 'zk-VaR engine', 'ADGM Category 3A licensing'],
    tags: ['AI Trading', 'Zero-Knowledge', 'ERC-4337', 'USPTO Patent'],
    link: 'https://refi.trading',
    dataRoom: 'Data room available on request',
    year: '2024',
    status: 'Raising Seed',
    badge: 'USPTO Patent Filed',
    cofounder: 'Co-founded with Daniel Oosthuyzen (CTO/Quant Engineer)',
  },
  {
    name: 'RapMath',
    oneLiner: 'Master multiplication through music. Hip hop meets math education.',
    description:
      '"The Hip Hop Times Tables" -- an educational music project that teaches children multiplication through hip hop beats and positive lyrics. Available on Spotify and major streaming platforms.',
    entity: 'Studio-Operated -- Nature of Commerce LLC',
    facts: ['Available on Spotify', 'Hip Hop Times Tables (Melbourne origin)', 'Math education through music', 'Streaming platforms'],
    tags: ['EdTech', 'Music', 'Education'],
    link: 'https://www.rapmath.com',
    year: '2024',
    status: 'Active',
  },
  {
    name: 'EYEcercise',
    oneLiner: 'Vision training RPG for Apple Vision Pro.',
    description:
      'Spatial computing health app built for visionOS. 9 AR exercises, AI coaching, RPG progression system, and structured training programs.',
    entity: 'Studio-Operated -- Nature of Commerce LLC',
    facts: ['visionOS native', 'Meta Quest support', 'iOS & web apps', 'RPG progression system'],
    tags: ['VisionOS', 'HealthTech', 'Spatial Computing'],
    link: 'https://eyecercise.com',
    year: '2024',
    status: 'Building',
  },
  {
    name: 'Wholesome Linen',
    oneLiner: 'Organic baby and toddler bedding essentials from 100% European flax linen.',
    description:
      'DTC e-commerce brand specializing in handmade organic baby mattresses, bedding, and sleep essentials. OEKO-TEX Standard 100 certified. European flax sourced from farms in Eastern Europe. Ships globally.',
    entity: 'Independent Entity -- Wholesome Linen LLC (Denver, CO) -- Co-Founded',
    facts: ['OEKO-TEX Standard 100 certified', 'European flax linen', 'Ships globally', '10 years running'],
    tags: ['DTC', 'E-commerce', 'Organic'],
    link: 'https://wholesomelinen.com',
    year: '2015',
    status: 'Active',
    cofounder: 'Co-founded with Yuliia Ahmad',
  },
];

const trackRecord = [
  {
    era: '2009 -- 2015',
    name: 'Peak Venture Partners',
    role: 'Senior Investment Officer',
    description: '$1.2B+ in transactions across institutional capital. E-Trade (major shareholders), Summit Entertainment slate financing (later acquired by Lionsgate, $412M), Aman Resorts M&A ($350M+), real estate and CPG portfolio.',
    tags: ['Private Equity', 'M&A', '$1.2B+'],
  },
  {
    era: '2007 -- 2009',
    name: 'Key Capital / Dubai Land Department',
    role: 'Cross-Border Investment Advisory',
    description: 'Architected the pioneering online property title transaction system for the Dubai Land Department. Digitized a sovereign financial workflow.',
    tags: ['GovTech', 'FinTech', 'Dubai'],
  },
  {
    era: '2003 -- 2007',
    name: 'Symstream Technology Group',
    role: 'VP Communications & Business Development',
    description: 'Melbourne-based fintech infrastructure. Deployed GSM-connected point-of-sale terminals enabling major banks to offer micro-banking services in remote areas. Commercialized 46 patents for in-channel wireless communications.',
    tags: ['FinTech', '46 Patents', 'Mobile Banking'],
  },
  {
    era: '2010 -- 2021',
    name: 'E-commerce & DTC',
    role: 'Founder',
    description: 'CharityDreams.com celebrity auction platform ($4M+ raised for charity). Scaled DTC bedding brand to $4M+ in sales. Successful exit 2021.',
    tags: ['E-commerce', 'DTC', '$4M Exit'],
  },
  {
    era: '2020 -- 2023',
    name: 'Web3 Protocol Design',
    role: 'Builder & Protocol Architect',
    description: 'Outlier Ventures Accelerator alumni. Coindesk Consensus global finalist. Chainlink Build program. Fan City (Puck.City), HazelHearts.xyz.',
    tags: ['Web3', 'Outlier Ventures', 'Chainlink Build'],
  },
];

export default function Stack() {
  useSeoMeta({
    title: 'Stack | Nature of Commerce',
    description: 'The technology stack and active ventures behind Nature of Commerce. P402 agentic payments, ReFi Trading algorithmic portfolio management, and 20 years of financial infrastructure experience.',
    ogTitle: 'Stack | Nature of Commerce',
    ogDescription: 'Active ventures and track record. P402 (agentic payments), ReFi Trading (algorithmic trading), RapMath, EYEcercise, Wholesome Linen, and 20 years building financial infrastructure.',
    canonical: 'https://natureofcommerce.com/stack',
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 blueprint-grid">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="section-label-minimal mb-8 block">What We Are Building</span>
            <h1 className="hero-text max-w-4xl mb-8">The Technology Stack</h1>
            <p className="body-large max-w-2xl">
              Infrastructure that removes gatekeepers from financial systems. Every layer reinforces the others.
              Every company is built from first principles by the same team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-label-minimal mb-6 block">Architecture</span>
            <h2 className="display-text mb-4">Five layers, one infrastructure</h2>
            <p className="body-large max-w-2xl">
              Each layer reinforces the others. This is the full system being built.
            </p>
          </div>

          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {stackLayers.map((layer) => (
              <div key={layer.number} className="py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-4 sm:w-52 flex-shrink-0">
                  <span className="text-[var(--color-primary)] font-bold text-lg font-mono w-8">{layer.number}</span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-white">
                    {layer.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="text-sm text-[var(--color-text-secondary)] surface-card px-3 py-1.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Ventures */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-label-minimal mb-6 block">Active Ventures</span>
            <h2 className="display-text mb-4">What is being built now</h2>
          </div>

          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {activeVentures.map((venture) => (
              <div key={venture.name} className="py-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-shrink-0 lg:w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{venture.name}</h3>
                      <span className="text-xs text-[var(--color-text-muted)]">{venture.year}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[var(--color-primary)]">{venture.status}</span>
                    </div>
                    {venture.badge && (
                      <span className="inline-block text-xs font-semibold text-[var(--color-warning)] border border-[var(--color-warning)]/20 rounded px-2 py-0.5">
                        <Shield className="w-3 h-3 inline mr-1" />
                        {venture.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-[var(--color-primary)] text-sm font-semibold mb-2">{venture.oneLiner}</p>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                      {venture.description}
                    </p>
                    {venture.cofounder && (
                      <p className="text-xs text-[var(--color-text-muted)] mb-4 italic">{venture.cofounder}</p>
                    )}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {venture.facts.map((fact) => (
                        <div key={fact} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-[var(--color-text-muted)]">{fact}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {venture.tags.map((tag) => (
                        <span key={tag} className="tag text-xs">{tag}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--color-border)]">
                      <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                        {venture.entity}
                      </span>
                      {venture.link && (
                        <a href={venture.link} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors">
                          <ExternalLink className="w-4 h-4" />Visit
                        </a>
                      )}
                      {venture.githubLink && (
                        <a href={venture.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors">
                          <Github className="w-4 h-4" />GitHub
                        </a>
                      )}
                    </div>
                    {venture.dataRoom && (
                      <p className="text-xs text-[var(--color-text-muted)] italic mt-3">{venture.dataRoom}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-label-minimal mb-6 block">Track Record</span>
            <h2 className="display-text mb-4">20 years of financial infrastructure</h2>
            <p className="body-large max-w-2xl">
              The through-line: removing gatekeepers from financial systems using the best technology of each era.
            </p>
          </div>

          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {trackRecord.map((item) => (
              <div key={item.name} className="py-6 flex flex-col sm:flex-row gap-6">
                <div className="sm:w-48 flex-shrink-0">
                  <div className="text-xs font-mono text-[var(--color-primary)] mb-1">{item.era}</div>
                  <div className="text-white font-bold leading-tight">{item.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">{item.role}</div>
                </div>
                <div className="flex-1">
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-label-minimal mb-6 block">Teaching & R&D</span>
            <h2 className="display-text mb-4">Kutaisi International University</h2>
            <p className="body-large max-w-2xl mb-4">
              Not a separate activity -- an applied R&D lab and talent pipeline. Courses are directly
              informed by live company builds.
            </p>
            <a
              href="https://github.com/orgs/ZA-KIU-Classroom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              github.com/orgs/ZA-KIU-Classroom
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
            {[
              { title: 'AI-Powered Software Development', type: 'Elective, CS', link: 'https://github.com/ZA-KIU/AI-POWERED-SOFTWARE-DEV' },
              { title: 'Product Development for Software Engineers', type: 'Elective, CS', link: 'https://github.com/ZA-KIU/PRODUCT-DEV-FOR-SOFTWARE-ENGINEERS' },
              { title: 'Digital Disruption, Innovation & Transformation', type: 'Elective, MBA' },
              { title: 'Blockchain & Cryptography Fundamentals', type: 'Elective, CS (Previous)' },
            ].map((course) => (
              <div key={course.title} className="bg-[var(--color-bg-primary)] p-5 flex flex-col">
                <BookOpen className="w-5 h-5 text-[var(--color-primary)] mb-3" />
                <div className="text-white font-semibold text-sm mb-1 flex-1">{course.title}</div>
                <div className="text-[var(--color-text-muted)] text-xs mb-3">{course.type}</div>
                {course.link && (
                  <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[var(--color-primary)] hover:text-white transition-colors">
                    <Github className="w-3.5 h-3.5" />View repo
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="display-text mb-6">Read the full thesis</h2>
          <p className="body-large mb-10 max-w-xl mx-auto">
            Why these three infrastructure pillars form an interlocking system -- and why the market timing is right.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/thesis" className="btn-primary">
              Read the Thesis <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
