import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  ChevronDown,
  Layers,
  Shield,
  Cpu,
  GitBranch,
  ExternalLink,
  Zap,
} from 'lucide-react';
import { SystemsIcon, PrinciplesIcon, BalanceIcon, FortressIcon } from '../components/CustomIcons';

const pillars = [
  {
    number: '01',
    title: 'Agentic Payments & Routing',
    product: 'P402',
    color: '#3B82F6',
    description: 'AI agents need native payment rails, intelligent model routing, and session-level spending governance to operate autonomously in the economy.',
    details: [
      'Routes across 300+ models (Claude Opus 4.6, GPT-5.4, Gemini 3 Pro, DeepSeek V3, Groq)',
      'Four optimization modes: cost, quality, speed, balanced',
      'Settles via x402 (HTTP 402) using gasless USDC on Base L2 with EIP-3009',
      'Implements Google A2A protocol with .well-known/agent.json discovery',
      'Session budgets and AP2 mandate governance for autonomous spending',
      'Published SDK (@p402/sdk) and CLI (@p402/cli)',
    ],
    link: 'https://p402.io',
    github: 'https://github.com/Z333Q/p402-protocol',
  },
  {
    number: '02',
    title: 'Algorithmic Portfolio Management',
    product: 'ReFi Trading',
    color: '#00D4AA',
    description: 'Retail traders and small fund managers need access to institutional-grade AI-driven strategies running in a self-custodied, non-custodial architecture.',
    details: [
      'Reinforcement learning agents with backtested 28% CAGR, 2.07 Sharpe ratio',
      'Zero-knowledge Value-at-Risk (zk-VaR) engine for cryptographic risk verification',
      '6-patent portfolio (1 USPTO filed, 5 drafted)',
      'Self-custodied execution via ERC-4337 account abstraction',
      'Targeting UAE ADGM Category 3A licensing',
      '$2.45M raise at $15M post-money, backed by $300K+ non-dilutive capital',
    ],
    link: 'https://refi.trading',
  },
  {
    number: '03',
    title: 'Automated Compliance & Verification',
    product: 'Cross-Cutting',
    color: '#F59E0B',
    description: 'Financial systems need compliance embedded in the architecture itself -- not bolted on as an afterthought. Trust should be a feature, not friction.',
    details: [
      'zk-VaR: zero-knowledge proofs that mathematically verify risk compliance before execution',
      'Cryptographic audit trails for every trade and transaction',
      'Regulatory-first design: ADGM Category 3A, SOC-2 preparation, CTA compliance',
      'No human oversight required -- the system proves its own compliance',
      'Multi-jurisdiction licensing strategy (UAE, EU, US)',
      'Paradigm shift: from "trust us" to "verify cryptographically"',
    ],
  },
];

const principles = [
  {
    icon: SystemsIcon,
    title: 'Systems-Level Thinking',
    description: 'P402 (payment layer) feeds ReFi Trading (application layer) feeds P402.shop (developer ecosystem). Composable components that scale organically -- like natural systems.',
  },
  {
    icon: PrinciplesIcon,
    title: 'First Principles Analysis',
    description: 'Strip away assumptions to fundamental truths. Why do agents need payment rails? Why must compliance be automated? We rebuild from physics and economics, not convention.',
  },
  {
    icon: BalanceIcon,
    title: 'Incentive Architecture',
    description: 'Users keep custody of their funds. Systems prove compliance cryptographically. Token incentives align node operators, developers, and users by default. When incentives align naturally, regulation becomes a feature.',
  },
  {
    icon: FortressIcon,
    title: 'Technical Moats',
    description: '6 patents (1 filed, 5 drafted). zk-VaR engine. A2A protocol implementation. Published SDK and CLI. First-mover on agent-to-agent commerce infrastructure. Hard problems, not marketing-driven differentiation.',
  },
];

const stackLayers = [
  {
    layer: 'Protocol',
    color: '#3B82F6',
    items: ['x402 payment standard', 'EIP-3009 authorization', 'Gasless USDC settlement on Base'],
  },
  {
    layer: 'Intelligence',
    color: '#60A5FA',
    items: ['Multi-provider routing (300+ models)', 'Session budgets & AP2 mandates', 'A2A agent discovery'],
  },
  {
    layer: 'Application',
    color: '#00D4AA',
    items: ['RL trading agents (28% CAGR)', 'zk-VaR risk verification', 'Self-custodied execution'],
  },
  {
    layer: 'Developer',
    color: '#22C55E',
    items: ['@p402/sdk & @p402/cli', 'A2A protocol integration', 'API marketplace (P402.shop)'],
  },
  {
    layer: 'Compliance',
    color: '#F59E0B',
    items: ['Zero-knowledge proofs', 'Cryptographic audit logs', 'ADGM, SOC-2, CTA licensing'],
  },
];

const faqs = [
  {
    question: 'What is the relationship between P402 and ReFi Trading?',
    answer: 'P402 is the protocol layer -- payment rails, model routing, and agent governance for the agentic economy. ReFi Trading is the first application proving the thesis -- an AI trading platform that uses P402\'s infrastructure for settlement and compliance. They are interlocking pieces of the same infrastructure stack.',
  },
  {
    question: 'What is the competitive moat?',
    answer: '6 patents (1 USPTO filed, 5 drafted), a proprietary zk-VaR engine for cryptographic risk verification, first-mover implementation of the Google A2A agent-to-agent protocol, and a regulatory-first approach with ADGM Category 3A licensing in progress. The stack is vertically integrated from protocol to application.',
  },
  {
    question: 'What is the compliance approach?',
    answer: 'Automated compliance via cryptographic verification, not manual oversight. The zk-VaR engine uses zero-knowledge proofs to mathematically prove every trade complies with risk parameters before execution. This is paired with multi-jurisdiction licensing (UAE ADGM, SOC-2 preparation, CTA compliance) to create a regulatory-first architecture.',
  },
  {
    question: 'What stage is the technology?',
    answer: 'P402 SDK and CLI are published and live. ReFi Trading is raising a $2.45M seed at $15M post-money, with $300K+ in non-dilutive capital already secured. ADGM Category 3A licensing is in progress. The reinforcement learning agents have been backtested over three years showing 28% CAGR and 2.07 Sharpe ratio.',
  },
  {
    question: 'How does the teaching relate to the products?',
    answer: 'The university courses at Kutaisi International University (AI-Powered Software Development, Product Development for Software Engineers) function as an R&D lab and talent pipeline. The course frameworks are directly informed by live company builds -- the same product development methodology taught in class is applied to building ReFi Trading and P402.',
  },
  {
    question: 'What does founder-market fit look like?',
    answer: '20 years building financial infrastructure across payment hardware (Symstream), sovereign digital systems (Dubai Land Department), institutional capital ($1.2B+ at Peak Venture Partners), DTC e-commerce ($4M+ exit), and now autonomous AI agents. The throughline: building systems that move value at the edges of traditional finance.',
  },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold pr-8">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--color-primary)] transition-transform shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-[var(--color-text-secondary)] leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
}

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl p-8 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: `radial-gradient(circle at top right, ${pillar.color}, transparent 60%)`,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span
            className="text-4xl font-bold opacity-20"
            style={{ color: pillar.color }}
          >
            {pillar.number}
          </span>
          <div>
            <h3 className="text-xl font-bold">{pillar.title}</h3>
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: pillar.color }}
            >
              {pillar.product}
            </span>
          </div>
        </div>

        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          {pillar.description}
        </p>

        <ul className="space-y-3 mb-6">
          {pillar.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: pillar.color, boxShadow: `0 0 8px ${pillar.color}` }}
              />
              <span className="text-sm text-[var(--color-text-secondary)]">{detail}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {pillar.link && (
            <a
              href={pillar.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
              style={{ color: pillar.color }}
            >
              <ExternalLink className="w-4 h-4" />
              Visit {pillar.product}
            </a>
          )}
          {pillar.github && (
            <a
              href={pillar.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Thesis() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden blueprint-grid">
        <div className="glow-orb glow-orb-primary w-[600px] h-[600px] top-0 right-0 opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label mb-6">
                <BookOpen className="w-4 h-4" />
                Builder Thesis
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Three <span className="text-gradient">Infrastructure</span> Pillars
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                We are building the infrastructure stack for autonomous finance:
                agentic payments, algorithmic portfolio management, and automated compliance.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-8">
                AI agents need payment rails. Traders need institutional-grade algorithms.
                Financial systems need compliance embedded in the architecture itself.
                These three pillars are not separate products -- they are interlocking layers
                of the same infrastructure, built by the same team, from first principles.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/final-incredible-2-noc-blue.jpg"
                alt="Sacred geometry representing natural order in commerce"
                className="w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[var(--color-primary)] italic text-lg font-medium">
                  "What would nature do?"
                </p>
                <p className="text-[var(--color-text-muted)] text-sm mt-2">
                  Our guiding principle for sustainable infrastructure
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-6">
            <div className="section-label mb-6">
              <Zap className="w-4 h-4" />
              The Agent Economy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl">
              Why <span className="text-gradient-static">Now</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
              GPT-5.4, Claude Opus 4.6, and Gemini 3.1 are not research projects -- they are
              autonomous economic actors that need infrastructure to transact, settle, and verify.
              The convergence of frontier model capabilities, stablecoin regulatory clarity, and
              zero-knowledge proof maturity creates the window for this infrastructure stack.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-8">
            <div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 via-transparent to-[#3B82F6]/3" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[var(--color-primary)]" />
                  Agent-to-Agent Protocol Layer
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                  The future is not just agents paying for services -- it is agents discovering,
                  negotiating with, and transacting with other agents over standardized protocols.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Discovery', detail: 'Google A2A with .well-known/agent.json' },
                    { label: 'Communication', detail: 'JSON-RPC 2.0 protocol standard' },
                    { label: 'Settlement', detail: 'x402 gasless USDC on Base L2' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                      <div className="text-sm font-semibold text-[var(--color-primary)] mb-1">{item.label}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Infrastructure <span className="text-gradient-static">Pillars</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
              Three interlocking pieces of infrastructure -- not a payment router
              and a separate trading platform, but a vertically integrated stack.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core <span className="text-gradient-static">Principles</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
              The philosophical foundations that guide what we build and how we build it.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, i) => (
              <AnimatedSection key={principle.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 h-full"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 blueprint-grid-dense">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label mx-auto mb-6">
              <Layers className="w-4 h-4" />
              Architecture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology <span className="text-gradient-static">Stack</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Five layers of composable infrastructure. Each layer reinforces
              the others. This is the full system we are building.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-3">
            {stackLayers.map((layer, i) => (
              <AnimatedSection key={layer.layer}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 relative overflow-hidden group hover:border-[var(--color-border-hover)] transition-all"
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-32 shrink-0">
                      <span
                        className="text-sm font-bold uppercase tracking-wider"
                        style={{ color: layer.color }}
                      >
                        {layer.layer}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1.5 rounded-md bg-white/5 text-[var(--color-text-secondary)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient-static">Questions</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="glow-orb glow-orb-primary w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Shield className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
              Whether you are a VC, technical partner, or potential customer --
              if you see the same infrastructure gap we do, we should talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                <span>Work With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
