import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Github, Shield, Cpu, TrendingUp,
  CheckCircle, Music, Eye, Layers, BookOpen, Building2
} from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

const stackLayers = [
  {
    number: '5',
    label: 'Developer Ecosystem',
    items: ['P402.shop — AI API marketplace', '@p402/sdk & @p402/cli on npm', 'Agent stack builder tool'],
  },
  {
    number: '4',
    label: 'Application',
    items: ['ReFi Trading — RL trading agents, self-custodied execution', 'Third-party builders on P402 infrastructure'],
  },
  {
    number: '3',
    label: 'Compliance',
    items: ['zk-VaR engine — zero-knowledge Value-at-Risk', 'Cryptographic audit logs', 'ADGM Category 3A, SOC-2, CTA'],
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
    entity: 'Studio-Operated — Nature of Commerce LLC',
    entityColor: 'text-[var(--color-primary)]',
    accentColor: 'border-[var(--color-primary)]/30',
    glowColor: 'rgba(74, 144, 217, 0.05)',
    icon: Cpu,
    facts: ['Published SDK & CLI on npm', '300+ models supported', '4 routing modes', 'Session budget enforcement'],
    tags: ['x402', 'A2A Protocol', 'Base L2', 'Agent Commerce'],
    link: 'https://www.p402.io',
    githubLink: 'https://github.com/Z333Q/p402-protocol',
    year: '2024',
    status: 'Active',
    statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    name: 'ReFi Trading',
    oneLiner: 'Wall-Street AI, radically accessible. Self-custodied AI trading with zero-knowledge risk proofs.',
    description:
      'Strategy-as-a-service protocol. Reinforcement learning agents (not rule-based bots, not LLM wrappers) with backtested institutional-grade performance: 28% CAGR, 2.07 Sharpe ratio. Self-custodied, non-custodial architecture -- users maintain control of their assets at all times. zk-VaR engine provides cryptographic proof that every trade complies with risk parameters before execution.',
    entity: 'Independent Entity — ReFi Trading Inc (Canada Federal) — Co-Founded',
    entityColor: 'text-emerald-400',
    accentColor: 'border-emerald-500/30',
    glowColor: 'rgba(52, 211, 153, 0.04)',
    icon: TrendingUp,
    facts: ['28% CAGR, 2.07 Sharpe (3yr backtest)', '1 USPTO patent filed, 5 drafted', 'zk-VaR engine', 'ADGM Category 3A licensing'],
    tags: ['AI Trading', 'Zero-Knowledge', 'ERC-4337', 'USPTO Patent'],
    link: 'https://refi.trading',
    dataRoom: 'Data room available on request',
    year: '2024',
    status: 'Raising Seed',
    statusColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    badge: 'USPTO Patent Filed',
    cofounder: 'Co-founded with Daniel Oosthuyzen (CTO/Quant Engineer)',
  },
  {
    name: 'RapMath',
    oneLiner: 'Master multiplication through music. Hip hop meets math education.',
    description:
      '"The Hip Hop Times Tables" -- an educational music project that teaches children multiplication through hip hop beats and positive lyrics. Available on Spotify and major streaming platforms. Originally executive produced as the Hip Hop Times Tables project in Melbourne (2003-2007), now revived and expanded as RapMath.',
    entity: 'Studio-Operated — Nature of Commerce LLC',
    entityColor: 'text-[var(--color-primary)]',
    accentColor: 'border-[var(--color-primary)]/20',
    glowColor: 'rgba(74, 144, 217, 0.03)',
    icon: Music,
    facts: ['Available on Spotify', 'Hip Hop Times Tables (Melbourne origin)', 'Math education through music', 'Streaming platforms'],
    tags: ['EdTech', 'Music', 'Education', 'Children'],
    link: 'https://www.rapmath.com',
    year: '2024',
    status: 'Active',
    statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    name: 'EYEcercise',
    oneLiner: 'Vision training RPG for Apple Vision Pro.',
    description:
      'Spatial computing health app built for visionOS. 9 AR exercises, AI coaching, RPG progression system, and structured training programs. Guides users through intentional movement patterns like smooth pursuit and saccades to maintain visual flexibility and reduce strain from extended screen use.',
    entity: 'Studio-Operated — Nature of Commerce LLC',
    entityColor: 'text-[var(--color-primary)]',
    accentColor: 'border-[var(--color-primary)]/20',
    glowColor: 'rgba(74, 144, 217, 0.03)',
    icon: Eye,
    facts: ['visionOS native', 'Meta Quest support', 'iOS & web apps', 'RPG progression system'],
    tags: ['VisionOS', 'Meta Quest', 'HealthTech', 'Spatial Computing'],
    link: 'https://eyecercise.com',
    year: '2024',
    status: 'Building',
    statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    name: 'Wholesome Linen',
    oneLiner: 'Organic baby and toddler bedding essentials from 100% European flax linen.',
    description:
      'DTC e-commerce brand specializing in handmade organic baby mattresses, bedding, and sleep essentials. OEKO-TEX Standard 100 certified -- no chemicals, dyes, or bleaches. European flax sourced from farms in Eastern Europe. Ships globally. Includes Eco Eve, an AI-powered pregnancy companion. Independent entity co-founded with Yuliia Ahmad.',
    entity: 'Independent Entity — Wholesome Linen LLC (Denver, CO) — Co-Founded',
    entityColor: 'text-emerald-400',
    accentColor: 'border-emerald-500/30',
    glowColor: 'rgba(52, 211, 153, 0.04)',
    icon: Layers,
    facts: ['OEKO-TEX Standard 100 certified', 'European flax linen', 'Ships globally', '10 years running'],
    tags: ['DTC', 'E-commerce', 'Organic', 'Baby & Toddler'],
    link: 'https://wholesomelinen.com',
    year: '2015',
    status: 'Active',
    statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    cofounder: 'Co-founded with Yuliia Ahmad',
  },
];

const trackRecord = [
  {
    era: '2009 – 2015',
    name: 'Peak Venture Partners',
    role: 'Senior Investment Officer',
    description: '$1.2B+ in transactions across institutional capital. E-Trade (major shareholders), Summit Entertainment slate financing (later acquired by Lionsgate, $412M), Aman Resorts M&A ($350M+), real estate and CPG portfolio.',
    tags: ['Private Equity', 'M&A', '$1.2B+'],
  },
  {
    era: '2007 – 2009',
    name: 'Key Capital / Dubai Land Department',
    role: 'Cross-Border Investment Advisory',
    description: 'Architected the pioneering online property title transaction system for the Dubai Land Department. Digitized a sovereign financial workflow. Created first online real estate transaction capability for the UAE.',
    tags: ['GovTech', 'FinTech', 'Dubai'],
  },
  {
    era: '2003 – 2007',
    name: 'Symstream Technology Group',
    role: 'VP Communications & Business Development',
    description: 'Melbourne-based fintech infrastructure. Deployed GSM-connected point-of-sale terminals enabling major banks to offer micro-banking services in remote areas. Commercialized 46 patents for in-channel wireless communications. Early mobile money pioneer.',
    tags: ['FinTech', '46 Patents', 'Mobile Banking', 'Melbourne'],
  },
  {
    era: '2010 – 2021',
    name: 'E-commerce & DTC',
    role: 'Founder',
    description: 'CharityDreams.com celebrity auction platform ($4M+ raised for charity, partnerships with Fergie/Black Eyed Peas, 50 Cent UN initiative). Scaled DTC bedding brand to $4M+ in sales. Successful exit 2021.',
    tags: ['E-commerce', 'DTC', '$4M Exit'],
  },
  {
    era: '2020 – 2023',
    name: 'Web3 Protocol Design',
    role: 'Builder & Protocol Architect',
    description: 'Outlier Ventures Accelerator alumni. Coindesk Consensus global finalist. Chainlink Build program. Fan City (Puck.City) -- sports fan engagement with cross-chain oracles. HazelHearts.xyz -- blockchain gaming with 2,000+ monthly users.',
    tags: ['Web3', 'Outlier Ventures', 'Chainlink Build', 'Coindesk'],
  },
];

export default function Stack() {
  useSeoMeta({
    title: 'Tech Stack | Nature of Commerce',
    description: 'The technology stack powering the Nature of Commerce portfolio. ReFi Trading and P402 Intelligence built on ERC-4337, zero-knowledge proofs, reinforcement learning, and the x402 payment standard.',
    ogTitle: 'Tech Stack | Nature of Commerce',
    ogDescription: 'Explore the open, verifiable technology stack behind Nature of Commerce portfolio companies: AI trading, ZK proofs, account abstraction, and agentic payment infrastructure.',
    canonical: 'https://natureofcommerce.com/stack',
  });
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[60vh] flex items-center blueprint-grid pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -top-20 right-0 opacity-15" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-8">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              What We Are Building
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="hero-text max-w-4xl mb-8">
            The Technology{' '}
            <span className="text-gradient">Stack</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="body-large max-w-2xl">
            Infrastructure that removes gatekeepers from financial systems. Every layer reinforces the others.
            Every company is built from first principles by the same team.
          </motion.p>
        </div>
      </section>

      <section className="section-padding border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <span className="section-label mb-6 block w-fit">Architecture</span>
            <h2 className="display-text mb-4">
              Five Layers,{' '}
              <span className="text-gradient">One Infrastructure</span>
            </h2>
            <p className="body-large max-w-2xl">
              Each layer reinforces the others. This is the full system being built.
            </p>
          </motion.div>

          <div className="space-y-3">
            {stackLayers.map((layer, i) => (
              <motion.div
                key={layer.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                <div className="flex items-center gap-4 sm:w-48 flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] font-bold text-lg">
                    {layer.number}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-white">
                    {layer.label}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {layer.items.map((item) => (
                    <span key={item} className="text-sm text-[var(--color-text-secondary)] glass-card px-3 py-1.5 rounded-lg border border-[var(--color-border)]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <span className="section-label mb-6 block w-fit">Active Ventures</span>
            <h2 className="display-text mb-4">
              What Is Being{' '}
              <span className="text-gradient">Built Now</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {activeVentures.map((venture, i) => {
              const Icon = venture.icon;
              return (
                <motion.div
                  key={venture.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={`glass-card-interactive rounded-2xl p-8 border ${venture.accentColor} flex flex-col`}
                  style={{ background: `linear-gradient(135deg, ${venture.glowColor} 0%, rgba(10,10,16,0.8) 100%)` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{venture.name}</h3>
                        <div className="text-xs text-[var(--color-text-muted)]">{venture.year}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${venture.statusColor}`}>
                      {venture.status}
                    </span>
                  </div>

                  {venture.badge && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold w-fit">
                      <Shield className="w-3 h-3" />
                      {venture.badge}
                    </div>
                  )}

                  <p className="text-[var(--color-primary)] text-sm font-semibold mb-3">{venture.oneLiner}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-1">
                    {venture.description}
                  </p>

                  {venture.cofounder && (
                    <p className="text-xs text-[var(--color-text-muted)] mb-4 italic">{venture.cofounder}</p>
                  )}

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {venture.facts.map((fact) => (
                      <div key={fact} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-[var(--color-text-muted)]">{fact}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {venture.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-[var(--color-border)]">
                    <div className={`text-xs font-semibold uppercase tracking-wider ${venture.entityColor}`}>
                      {venture.entity}
                    </div>
                    {venture.link && (
                      <a
                        href={venture.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </a>
                    )}
                    {venture.githubLink && (
                      <a
                        href={venture.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                  {venture.dataRoom && (
                    <p className="text-xs text-[var(--color-text-muted)] italic mt-3">{venture.dataRoom}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <span className="section-label mb-6 block w-fit">Track Record</span>
            <h2 className="display-text mb-4">
              20 Years of{' '}
              <span className="text-gradient">Financial Infrastructure</span>
            </h2>
            <p className="body-large max-w-2xl">
              The through-line: removing gatekeepers from financial systems using the best technology of each era.
            </p>
          </motion.div>

          <div className="space-y-4">
            {trackRecord.map((item, i) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card rounded-xl p-6 flex flex-col sm:flex-row gap-6"
              >
                <div className="sm:w-48 flex-shrink-0">
                  <div className="text-xs font-mono text-[var(--color-primary)] mb-1">{item.era}</div>
                  <div className="text-white font-bold text-lg leading-tight">{item.name}</div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <span className="section-label mb-6 block w-fit">Teaching & R&D</span>
            <h2 className="display-text mb-4">
              Kutaisi International{' '}
              <span className="text-gradient">University</span>
            </h2>
            <p className="body-large max-w-2xl mb-4">
              Not a separate activity -- an applied R&D lab and talent pipeline. Courses are directly
              informed by live company builds.
            </p>
            <a
              href="https://github.com/orgs/ZA-KIU-Classroom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-white transition-colors mb-8"
            >
              <Github className="w-4 h-4" />
              github.com/orgs/ZA-KIU-Classroom
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'AI-Powered Software Development', type: 'Elective, CS', link: 'https://github.com/ZA-KIU/AI-POWERED-SOFTWARE-DEV' },
              { title: 'Product Development for Software Engineers', type: 'Elective, CS', link: 'https://github.com/ZA-KIU/PRODUCT-DEV-FOR-SOFTWARE-ENGINEERS' },
              { title: 'Digital Disruption, Innovation & Transformation', type: 'Elective, MBA' },
              { title: 'Blockchain & Cryptography Fundamentals', type: 'Elective, CS (Previous)' },
            ].map((course, i) => (
              <motion.div
                key={course.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card rounded-xl p-5 flex flex-col"
              >
                <BookOpen className="w-5 h-5 text-[var(--color-primary)] mb-3" />
                <div className="text-white font-semibold text-sm mb-1 flex-1">{course.title}</div>
                <div className="text-[var(--color-text-muted)] text-xs mb-3">{course.type}</div>
                {course.link && (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View repo
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Layers className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-6" />
            <h2 className="display-text mb-6">
              See the{' '}
              <span className="text-gradient">Full Thesis</span>
            </h2>
            <p className="body-large mb-10 max-w-xl mx-auto">
              Why these three infrastructure pillars form an interlocking system -- and why the market timing is right.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/thesis" className="btn-primary flex items-center gap-2">
                <span>Read the Thesis</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
