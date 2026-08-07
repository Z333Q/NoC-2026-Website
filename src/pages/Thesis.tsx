import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Cpu, TrendingUp, CheckCircle, ChevronDown,
  Layers, BookOpen, Github, ExternalLink, Lock
} from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

const pillars = [
  {
    number: '01',
    icon: Cpu,
    label: 'Agentic Payments and Routing',
    product: 'P402',
    color: 'text-[var(--color-primary)]',
    borderColor: 'border-[var(--color-primary)]/30',
    bgColor: 'rgba(74, 144, 217, 0.05)',
    problem:
      'AI agents need to pay for API calls, data feeds, compute resources, and services from other agents. Human payment infrastructure (Stripe, credit cards) was never designed for machines. $0.30 minimum fees destroy micropayment economics. There is no spending governance for autonomous actors.',
    solution:
      'P402 implements the x402 payment standard (HTTP 402 Payment Required). AI agents pay per request using gasless USDC on Base L2 via EIP-3009 authorization. The protocol routes across 300+ AI models with four optimization modes (cost, quality, speed, balanced). Session budgets and AP2 mandate governance enforce hard spending caps for autonomous agents. The Google A2A protocol enables agents to discover, negotiate with, and transact with other agents through standardized JSON-RPC communication.',
    proofPoints: [
      'Published SDK (@p402/sdk) and CLI (@p402/cli) on npm',
      'Open-source protocol: github.com/Z333Q/p402-protocol',
      'x402 is an open standard developed by Coinbase, supported by Cloudflare, Google, Vercel, and 60+ partners',
      'P402 is one of the early implementers of x402 + Google A2A',
    ],
    links: [
      { label: 'P402.io', href: 'https://www.p402.io', icon: undefined },
      { label: 'GitHub', href: 'https://github.com/Z333Q/p402-protocol', icon: Github },
    ],
  },
  {
    number: '02',
    icon: TrendingUp,
    label: 'Algorithmic Portfolio Management',
    product: 'ReFi Trading',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgColor: 'rgba(52, 211, 153, 0.04)',
    badge: 'USPTO Patent Filed',
    problem:
      'Institutional hedge funds deploy AI-driven strategies with reinforcement learning, zero-knowledge risk verification, and self-custodied execution. Retail traders and small fund managers have no access to this infrastructure. The "AI trading" market is full of wrappers that give people chatbots connected to broker APIs -- not genuine algorithmic portfolio management.',
    solution:
      'ReFi Trading is a strategy-as-a-service protocol. Reinforcement learning agents (not rule-based bots, not LLM wrappers) with backtested institutional-grade performance: 28% CAGR, 2.07 Sharpe ratio. The architecture is self-custodied and non-custodial -- users maintain control of their assets at all times. Average-reward RL optimizes for long-term sustainable performance rather than short-term spikes.',
    proofPoints: [
      'Patent filed with USPTO: "System and Method for Non-Custodial, Zero-Knowledge-Verified Reinforcement-Learning Trading" (5 additional patents drafted)',
      'zk-VaR (zero-knowledge Value-at-Risk) engine: every trade is cryptographically proven to comply with risk parameters before execution',
      'Co-founded with Daniel Oosthuyzen (CTO/Quant Engineer) -- the quantitative engineering complement to Zeshan\'s product and infrastructure expertise',
      'Targeting ADGM Category 3A licensing -- regulatory-first approach',
      'Backed by non-dilutive capital, tracked on Crunchbase',
    ],
    links: [
      { label: 'ReFi Trading', href: 'https://refi.trading', icon: undefined },
      { label: 'Research Blog', href: 'https://refi.trading/blog', icon: undefined },
    ],
  },
  {
    number: '03',
    icon: Shield,
    label: 'Automated Compliance and Verification',
    product: 'Cross-Cutting Layer',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    bgColor: 'rgba(245, 158, 11, 0.04)',
    problem:
      'Financial compliance today is "compliance by oversight" -- human compliance departments reviewing trades, filing reports, and conducting manual audits. This does not scale to autonomous agents executing thousands of transactions per second. It is also a massive cost center that excludes smaller players from regulated markets.',
    solution:
      'Compliance by architecture. Zero-knowledge proofs allow a system to mathematically prove it is operating within defined risk parameters without revealing the underlying data. Cryptographic audit trails provide tamper-proof records. The zk-VaR engine (used in ReFi Trading) and the x402 settlement verification (used in P402) are both instances of this principle.',
    proofPoints: [
      'zk-VaR: every trade proved compliant with risk parameters before execution -- no human reviewer needed',
      'Cryptographic audit logs: tamper-proof records for every transaction',
      'Regulatory-first design: ADGM Category 3A licensing in progress, SOC-2 preparation, CTA research',
      'Multi-jurisdiction licensing strategy: UAE, EU, US',
      'Paradigm shift: from "trust us" to "verify cryptographically"',
    ],
  },
];

const principles = [
  {
    number: '1',
    title: 'Systems-Level Thinking',
    description:
      'We build composable components that reinforce each other. P402 (payment layer) feeds ReFi Trading (application layer) feeds P402.shop (developer ecosystem). Each piece scales the others -- like natural systems.',
  },
  {
    number: '2',
    title: 'First Principles Analysis',
    description:
      'We do not adapt existing systems. We ask what the agent economy actually requires and build from that answer. x402 exists because HTTP 402 has been reserved since 1997 -- the web always intended to have a native payment layer.',
  },
  {
    number: '3',
    title: 'Incentive Architecture',
    description:
      'Users keep custody. Systems prove compliance cryptographically. Token structures align long-term value creation with participation. Every design decision starts with: who benefits, and is that aligned with sustainable growth?',
  },
  {
    number: '4',
    title: 'Technical Moats',
    description:
      'Patent portfolio (1 USPTO filed, 5 drafted). zk-VaR engine. Published SDK/CLI. A2A protocol implementation. NVIDIA DLI certified instruction. These are not PowerPoint moats -- they are shipping code and legal protection.',
  },
];

const faqs = [
  {
    q: 'What is the relationship between P402 and ReFi Trading?',
    a: 'P402 is the protocol layer (payment infrastructure). ReFi Trading is the first major application built on that thesis (algorithmic trading with cryptographic compliance). They are separate entities with separate cap tables. P402 is studio-operated by Nature of Commerce LLC. ReFi Trading Inc is an independent Canadian federal corporation co-founded by Zeshan Ahmad and Daniel Oosthuyzen. Together they represent a full-stack thesis: whoever builds the infrastructure layer AND proves it with a killer application controls the paradigm.',
  },
  {
    q: 'What is the competitive moat?',
    a: 'Patent portfolio (1 filed, 5 drafted), zk-VaR engine, first-mover implementation on x402 + Google A2A protocol, regulatory-first with ADGM Category 3A licensing in progress, published open-source SDK/CLI, and 20 years of domain-specific infrastructure experience across payment hardware, sovereign financial digitization, and institutional capital.',
  },
  {
    q: 'What is the compliance approach?',
    a: 'Automated compliance via cryptographic verification, not manual oversight. The zk-VaR engine proves every trade complies with risk parameters before execution. Cryptographic audit logs provide tamper-proof records. Pursuing ADGM Category 3A licensing and preparing for SOC-2, building compliance into the product rather than around it.',
  },
  {
    q: 'What stage is the technology?',
    a: 'P402 SDK and CLI are published on npm. The open-source protocol is live on GitHub. ReFi Trading is raising a seed round, backed by non-dilutive capital, with ADGM licensing in progress. The reinforcement learning agents have been backtested over three years showing 28% CAGR and 2.07 Sharpe ratio.',
  },
  {
    q: 'How does the teaching relate?',
    a: 'The university courses at Kutaisi International University (AI-Powered Software Development, Product Development for Software Engineers, Blockchain & Cryptography) function as an R&D lab and talent pipeline. Course frameworks are directly informed by live company builds -- the same methodology taught in class is applied to building P402 and ReFi Trading.',
  },
  {
    q: 'What does founder-market fit look like?',
    a: '20 years building financial infrastructure. Payment hardware in rural markets (Symstream, 46 patents). Sovereign financial digitization (Dubai Land Department). Institutional capital allocation ($1.2B+ at Peak Venture Partners). E-commerce exit ($4M+). Web3 protocol design (Outlier Ventures, Chainlink Build). Now autonomous AI agent infrastructure (P402, ReFi Trading). The same through-line -- removing gatekeepers from financial systems -- using the best technology of each era.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-semibold">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[var(--color-primary)] flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border)] pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Thesis() {
  useSeoMeta({
    title: 'Investment Thesis | Nature of Commerce',
    description: 'Our investment thesis: the next wave of commerce is agent-native, cryptographically verifiable, and self-custodied. We back founders building this open financial infrastructure.',
    ogTitle: 'Investment Thesis | Nature of Commerce',
    ogDescription: 'Nature of Commerce invests in the convergence of AI agents, decentralized finance, and open financial infrastructure. Pre-seed and seed stage Web3 and DeFi startups.',
    canonical: 'https://natureofcommerce.com/thesis',
    keywords: 'investment thesis, agent economy, DeFi infrastructure, Web3 venture capital, agentic commerce, autonomous payments',
  });
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[70vh] flex items-center blueprint-grid pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-orb glow-orb-primary w-[600px] h-[600px] -top-20 -right-20 opacity-15" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-8">
              <span className="section-label">
                <BookOpen className="w-4 h-4" />
                Builder Thesis
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="hero-text mb-8">
              <span className="text-gradient">Three Pillars,</span>{' '}
              One Infrastructure
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="body-large mb-8">
              The next financial system will be built on autonomous agents that transact, trade, and verify
              using cryptographic infrastructure. We are building that infrastructure.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3} className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
              AI agents need payment rails. Traders need institutional-grade algorithms. Financial systems need
              compliance embedded in the architecture itself. These three pillars are not separate products --
              they are interlocking layers of the same infrastructure, built by the same team, from first principles.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="relative">
            <div className="glass-card rounded-2xl p-8 border border-[var(--color-primary)]/20">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  The Agent Economy Context
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Financial systems are transitioning from human-operated to agent-operated. AI agents are already
                capable of autonomous economic action -- they can research markets, execute trades, negotiate with
                other agents, and settle payments without human intervention.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                These agents are further accelerated by reinforcement learning and machine learning systems
                that continuously improve their decision-making through experience -- optimizing strategies,
                adapting to market conditions, and coordinating with other agents in real time.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                But these agents are forced to use infrastructure designed for humans: credit card rails with
                $0.30 minimums, manual KYC processes, centralized custody, and compliance-by-oversight.
                This creates the infrastructure gap. Native payment rails, cryptographic compliance, and
                self-custodied execution are foundational requirements for the agent economy to function.
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'A2A Protocol', sub: 'Google spec' },
                    { label: 'x402 Standard', sub: 'Coinbase-led' },
                    { label: 'zk-VaR', sub: 'ZK compliance' },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-white text-sm font-bold">{item.label}</div>
                      <div className="text-[var(--color-text-muted)] text-xs">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center max-w-3xl mx-auto">
            <span className="section-label mb-6 block w-fit mx-auto">Infrastructure Pillars</span>
            <h2 className="display-text mb-6">
              Three Interlocking{' '}
              <span className="text-gradient">Pieces</span>
            </h2>
            <p className="body-large">
              Not a payment router and a separate trading platform -- a vertically integrated stack.
            </p>
          </motion.div>

          <div className="space-y-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={`rounded-2xl p-8 border ${pillar.borderColor}`}
                  style={{ background: `linear-gradient(135deg, ${pillar.bgColor} 0%, rgba(10,10,16,0.9) 100%)` }}
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-6xl font-bold text-[var(--color-text-muted)]/20 font-mono leading-none">
                        {pillar.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-6 h-6 ${pillar.color}`} />
                        <span className={`text-xs font-bold uppercase tracking-widest ${pillar.color}`}>
                          {pillar.label}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{pillar.product}</h3>
                      {pillar.badge && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                          <Shield className="w-3 h-3" />
                          {pillar.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                        The Problem
                      </div>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                        {pillar.problem}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                        The Solution
                      </div>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                        {pillar.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                      Key Proof Points
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {pillar.proofPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 ${pillar.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-[var(--color-text-secondary)]">{point}</span>
                        </div>
                      ))}
                    </div>
                    {pillar.links && (
                      <div className="flex flex-wrap gap-4">
                        {pillar.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-sm ${pillar.color} hover:text-white transition-colors`}
                          >
                            {link.icon ? <link.icon className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center max-w-3xl mx-auto">
            <span className="section-label mb-6 block w-fit mx-auto">Philosophy</span>
            <h2 className="display-text mb-6">
              Building{' '}
              <span className="text-gradient">Principles</span>
            </h2>
            <p className="body-large">
              The philosophical foundations that guide what we build and how we build it.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card rounded-2xl p-8"
              >
                <div className="text-5xl font-bold text-[var(--color-primary)]/20 font-mono mb-4">
                  {p.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center max-w-3xl mx-auto">
            <span className="section-label mb-6 block w-fit mx-auto">Our Heritage</span>
            <h2 className="display-text mb-6">
              Bridging Ancient Wisdom{' '}
              <span className="text-gradient">with Modern Innovation</span>
            </h2>
            <p className="body-large">
              Nature of Commerce is a long thread of thought which ties back to 1730.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/natureofcommerce-book.jpeg"
                  alt="Essai Sur La Nature Du Commerce En General — La Nature De Commerce Generale 1st Edition (1755)"
                  loading="lazy"
                  className="relative rounded-2xl w-full max-w-sm mx-auto shadow-2xl border border-[var(--color-border)]"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-white font-semibold text-sm">Essai Sur La Nature Du Commerce En General</p>
                <p className="text-[var(--color-text-muted)] text-xs mt-1">La Nature De Commerce Generale — 1st Edition (1755)</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  In 1730,{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Richard_Cantillon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:text-white transition-colors underline underline-offset-2"
                  >
                    Richard Cantillon
                  </a>{' '}
                  wrote a revolutionary essay titled <em>The Nature of Commerce</em> — "la Nature du Commerce en Général." This pioneering exploration of economic science and theory heralded groundbreaking concepts like entrepreneurs as risk bearers and artisans as value creators, providing novel insights into monetary theory and the establishment of a productive population.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  This treatise is widely credited as the first to describe in detail the science and theory of economics. The novel ideas put forth in his writings include the entrepreneur as the risk bearer, artisans as the value creators, while clearly defining monetary theory, spatial economics, theory of population growth, and cause and effect methodology.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Inspired by this rich legacy, at Nature of Commerce we endeavour to emulate Cantillon's pioneering spirit — adapting age-old wisdom to create modern solutions and driving value in this digital economy.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://en.wikipedia.org/wiki/Richard_Cantillon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Richard Cantillon — Wikipedia
                </a>
                <a
                  href="https://cdn.mises.org/An%20Essay%20on%20Economic%20Theory_2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  Read the Essay (PDF)
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 text-center">
            <span className="section-label mb-6 block w-fit mx-auto">FAQ</span>
            <h2 className="display-text">
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <FaqItem q={faq.q} a={faq.a} />
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
              Let's Build{' '}
              <span className="text-gradient">Together</span>
            </h2>
            <p className="body-large mb-10 max-w-2xl mx-auto">
              Whether you are a VC evaluating the agent economy, a technical partner building on x402,
              or an enterprise exploring autonomous settlement -- if you see the same infrastructure gap,
              we should talk.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
