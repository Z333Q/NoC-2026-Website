import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, ChevronDown,
  BookOpen, Github, ExternalLink
} from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';
import { fadeUp } from '../lib/motion';

const pillars = [
  {
    number: '01',
    label: 'Agentic Payments and Routing',
    product: 'P402',
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
      { label: 'P402.io', href: 'https://www.p402.io' },
      { label: 'GitHub', href: 'https://github.com/Z333Q/p402-protocol', icon: Github },
    ],
  },
  {
    number: '02',
    label: 'Algorithmic Portfolio Management',
    product: 'ReFi Trading',
    badge: 'USPTO Patent Filed',
    problem:
      'Institutional hedge funds deploy AI-driven strategies with reinforcement learning, zero-knowledge risk verification, and self-custodied execution. Retail traders and small fund managers have no access to this infrastructure. The "AI trading" market is full of wrappers that give people chatbots connected to broker APIs -- not genuine algorithmic portfolio management.',
    solution:
      'ReFi Trading is a strategy-as-a-service protocol. Reinforcement learning agents (not rule-based bots, not LLM wrappers) with backtested institutional-grade performance: 28% CAGR, 2.07 Sharpe ratio. The architecture is self-custodied and non-custodial -- users maintain control of their assets at all times. Average-reward RL optimizes for long-term sustainable performance rather than short-term spikes.',
    proofPoints: [
      'Patent filed with USPTO: "System and Method for Non-Custodial, Zero-Knowledge-Verified Reinforcement-Learning Trading" (5 additional patents drafted)',
      'zk-VaR (zero-knowledge Value-at-Risk) engine: every trade is cryptographically proven to comply with risk parameters before execution',
      'Co-founded with Daniel Oosthuyzen (CTO/Quant Engineer)',
      'Targeting ADGM Category 3A licensing -- regulatory-first approach',
      'Backed by non-dilutive capital, tracked on Crunchbase',
    ],
    links: [
      { label: 'ReFi Trading', href: 'https://refi.trading' },
      { label: 'Research Blog', href: 'https://refi.trading/blog' },
    ],
  },
  {
    number: '03',
    label: 'Automated Compliance and Verification',
    product: 'Cross-Cutting Layer',
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
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-white font-semibold text-sm">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 text-[var(--color-text-secondary)] text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Thesis() {
  useSeoMeta({
    title: 'Builder Thesis | Nature of Commerce',
    description: 'Three interlocking infrastructure pillars for the agent economy: agentic payments (P402), algorithmic trading (ReFi Trading), and automated compliance via zero-knowledge proofs.',
    ogTitle: 'Builder Thesis | Nature of Commerce',
    ogDescription: 'The thesis behind Nature of Commerce: autonomous payment infrastructure, reinforcement learning trading, and cryptographic compliance -- built by the same team from first principles.',
    canonical: 'https://natureofcommerce.com/thesis',
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 blueprint-grid">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="section-label-minimal mb-8 block">Builder Thesis</span>
            <h1 className="hero-text max-w-3xl mb-8">
              Three Pillars, One Infrastructure
            </h1>
            <p className="body-large max-w-2xl mb-6">
              The next financial system will be built on autonomous agents that transact, trade, and verify
              using cryptographic infrastructure. We are building that infrastructure.
            </p>
            <p className="text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-10">
              AI agents need payment rails. Traders need institutional-grade algorithms. Financial systems need
              compliance embedded in the architecture itself. These three pillars are not separate products --
              they are interlocking layers of the same infrastructure, built by the same team, from first principles.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Context card */}
      <section className="border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="surface-card p-8 border-l-2 border-l-[var(--color-primary)]">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-6">
              The Agent Economy Context
            </p>
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Financial systems are transitioning from human-operated to agent-operated. AI agents are already
                capable of autonomous economic action -- they can research markets, execute trades, negotiate with
                other agents, and settle payments without human intervention. These agents are further accelerated
                by reinforcement learning systems that continuously improve their decision-making.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                But these agents are forced to use infrastructure designed for humans: credit card rails with
                $0.30 minimums, manual KYC processes, centralized custody, and compliance-by-oversight.
                This creates the infrastructure gap. Native payment rails, cryptographic compliance, and
                self-custodied execution are foundational requirements for the agent economy to function.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-border)]">
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
      </section>

      {/* Infrastructure Pillars */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="section-label-minimal mb-6 block">Infrastructure Pillars</span>
            <h2 className="display-text mb-6">Three interlocking pieces</h2>
            <p className="body-large">
              Not a payment router and a separate trading platform -- a vertically integrated stack.
            </p>
          </div>

          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="py-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                  <div className="flex-shrink-0 lg:w-56">
                    <span className="text-[var(--color-text-muted)] text-xs font-mono">{pillar.number}</span>
                    <div className="font-bold text-white text-2xl mt-1">{pillar.product}</div>
                    <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{pillar.label}</div>
                    {pillar.badge && (
                      <span className="inline-block mt-3 text-xs font-semibold text-[var(--color-warning)] border border-[var(--color-warning)]/20 rounded px-2 py-0.5">
                        {pillar.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="grid lg:grid-cols-2 gap-8 mb-6">
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

                    <div className="pt-6 border-t border-[var(--color-border)]">
                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                        Key Proof Points
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {pillar.proofPoints.map((point) => (
                          <div key={point} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
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
                              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
                            >
                              {'icon' in link && link.icon ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="section-label-minimal mb-6 block">Philosophy</span>
            <h2 className="display-text mb-6">Building principles</h2>
            <p className="body-large">
              The philosophical foundations that guide what we build and how we build it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
            {principles.map((p) => (
              <div key={p.number} className="bg-[var(--color-bg-secondary)] p-8">
                <div className="text-4xl font-bold text-[var(--color-primary)]/20 font-mono mb-4">
                  {p.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{p.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="section-label-minimal mb-6 block">Our Heritage</span>
            <h2 className="display-text mb-6">Bridging ancient wisdom with modern innovation</h2>
            <p className="body-large">
              Nature of Commerce is a long thread of thought which ties back to 1730.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col items-center">
              <img
                src="/natureofcommerce-book.jpeg"
                alt="Essai Sur La Nature Du Commerce En General -- 1st Edition (1755)"
                className="rounded-xl w-full max-w-sm mx-auto border border-[var(--color-border)]"
              />
              <div className="mt-6 text-center">
                <p className="text-white font-semibold text-sm">Essai Sur La Nature Du Commerce En General</p>
                <p className="text-[var(--color-text-muted)] text-xs mt-1">La Nature De Commerce Generale -- 1st Edition (1755)</p>
              </div>
            </div>

            <div>
              <div className="space-y-6 mb-8">
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  In 1730,{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Richard_Cantillon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:text-white transition-colors underline underline-offset-2"
                  >
                    Richard Cantillon
                  </a>{' '}
                  wrote a revolutionary essay titled <em>The Nature of Commerce</em> -- "la Nature du Commerce en General." This pioneering exploration of economic science and theory heralded groundbreaking concepts like entrepreneurs as risk bearers and artisans as value creators, providing novel insights into monetary theory and the establishment of a productive population.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  This treatise is widely credited as the first to describe in detail the science and theory of economics. The novel ideas put forth in his writings include the entrepreneur as the risk bearer, artisans as the value creators, while clearly defining monetary theory, spatial economics, theory of population growth, and cause and effect methodology.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Inspired by this rich legacy, at Nature of Commerce we endeavour to emulate Cantillon's pioneering spirit -- adapting age-old wisdom to create modern solutions and driving value in this digital economy.
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
                  Richard Cantillon -- Wikipedia
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-label-minimal mb-6 block">FAQ</span>
            <h2 className="display-text">Frequently asked questions</h2>
          </div>

          <div className="surface-card p-6 sm:p-8">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="display-text mb-6">See the same infrastructure gap?</h2>
          <p className="body-large mb-10 max-w-xl mx-auto">
            Whether you are a VC evaluating the agent economy, a technical partner building on x402,
            or an enterprise exploring autonomous settlement -- we should talk.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/stack" className="btn-secondary">
              See the Stack
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
