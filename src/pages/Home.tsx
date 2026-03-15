import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Shield, Cpu, TrendingUp, BookOpen,
  Github, ChevronDown, CheckCircle, Layers
} from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';
import MolecularOrb from '../components/MolecularOrb';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

const trackRecord = [
  { value: '$1.2B+', label: 'Financial transactions architected' },
  { value: '3', label: 'Continents with deployed payment infrastructure' },
  { value: '46', label: 'Wireless banking patents commercialized' },
  { value: '20+', label: 'Years building financial infrastructure' },
];

const pillars = [
  {
    number: '01',
    label: 'Agentic Payments',
    product: 'P402.io',
    description:
      'Autonomous payment infrastructure for the agent economy. Routes across 300+ AI models, settles via x402 on Base L2, implements the Google A2A protocol for agent-to-agent discovery and commerce.',
    entity: 'Studio-Operated — Nature of Commerce LLC',
    entityColor: 'text-[var(--color-primary)]',
    accentColor: 'border-[var(--color-primary)]/30',
    glowColor: 'rgba(74, 144, 217, 0.06)',
    facts: ['Published @p402/sdk and @p402/cli on npm', '300+ models, 4 routing modes', 'Google A2A protocol', 'x402 gasless USDC settlement'],
    link: 'https://www.p402.io',
    githubLink: 'https://github.com/Z333Q/p402-protocol',
    icon: Cpu,
  },
  {
    number: '02',
    label: 'Algorithmic Portfolio Management',
    product: 'ReFi Trading',
    description:
      'Reinforcement learning trading agents with institutional-grade backtested performance. Self-custodied, non-custodial architecture. zk-VaR engine for zero-knowledge verified risk management. Co-founded with Daniel Oosthuyzen.',
    entity: 'Independent Entity — Co-Founded — Raising Seed Round',
    entityColor: 'text-emerald-400',
    accentColor: 'border-emerald-500/30',
    glowColor: 'rgba(52, 211, 153, 0.04)',
    facts: ['28% CAGR, 2.07 Sharpe (3yr backtest)', 'USPTO patent filed', 'zk-VaR risk verification', 'ADGM Category 3A licensing'],
    link: 'https://refi.trading',
    icon: TrendingUp,
    badge: 'USPTO Patent Filed',
  },
  {
    number: '03',
    label: 'Automated Compliance',
    product: 'Cross-Cutting Layer',
    description:
      'Compliance embedded in architecture, not bolted on after the fact. Zero-knowledge proofs allow a system to mathematically prove it is operating within risk parameters before execution. Trust should be a feature, not friction.',
    entity: 'Architecture — Embedded in P402 Protocol',
    entityColor: 'text-amber-400',
    accentColor: 'border-amber-500/30',
    glowColor: 'rgba(245, 158, 11, 0.04)',
    facts: ['zk-VaR: cryptographic risk proofs', 'Cryptographic audit trails', 'Regulatory-first: ADGM, SOC-2, CTA', 'No manual oversight required'],
    icon: Shield,
  },
];

const whyNow = [
  'AI agents are autonomous economic actors -- they need native payment infrastructure, not human rails adapted for machines',
  'Reinforcement learning and machine learning have matured to the point where hedge fund-grade algorithmic trading strategies can be compressed into the browser -- ReFi Trading is democratising institutional quant infrastructure that was previously inaccessible to retail traders and small fund managers',
  'Stablecoin regulatory clarity is emerging globally (MiCA, US legislation, ADGM)',
  'Zero-knowledge proof technology has matured to production-grade',
  'The Google A2A protocol creates an open standard for agent-to-agent commerce',
  'The convergence of capable agents + stablecoin rails + ZK maturity = the moment for this infrastructure',
];

export default function Home() {
  useSeoMeta({
    title: 'Nature of Commerce | Agentic Payments, Algorithmic Trading & Web3 Infrastructure',
    description: 'Nature of Commerce builds and funds the infrastructure stack for the autonomous agent economy. P402 agentic payments (x402 protocol), ReFi Trading algorithmic portfolio management, and ZK compliance architecture. 20+ years of financial infrastructure experience.',
    ogTitle: 'Nature of Commerce | Builder Studio for the Agent Economy',
    ogDescription: 'Building P402 agentic payment infrastructure, ReFi Trading algorithmic strategies, and ZK compliance architecture. Pre-seed and seed investment in Web3, DeFi, and agentic commerce founders.',
    canonical: 'https://natureofcommerce.com/',
  });

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen flex items-center blueprint-grid pt-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 opacity-60">
            <MolecularOrb size={520} delay={0} />
          </div>
          <div className="absolute -bottom-40 -left-40 opacity-30">
            <MolecularOrb size={380} delay={1.5} />
          </div>
          <div
            className="glow-orb w-[500px] h-[500px] top-1/2 -translate-y-1/2 right-0 opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(74,144,217,0.35) 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-8">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Builder Studio
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="hero-text max-w-5xl mb-8">
            Build Technology That Creates{' '}
            <span className="text-gradient">Opportunity</span>
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="max-w-2xl mb-6">
            <p className="body-large">
              20 years of creating access to global markets.
            </p>
            <p className="text-[var(--color-text-secondary)] text-base mt-3 tracking-widest font-medium uppercase text-sm">
              Payments.&nbsp;&nbsp; Trading.&nbsp;&nbsp; Education.&nbsp;&nbsp; Ownership.
            </p>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3} className="text-base text-[var(--color-primary-light)] max-w-xl mb-12 leading-relaxed font-medium tracking-wide">
            The mechanics of participation.&nbsp; The nature of commerce.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="flex flex-wrap gap-4 items-center">
            <Link to="/stack" className="btn-primary flex items-center gap-2">
              <span>See the Stack</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/thesis" className="btn-secondary flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Read the Thesis</span>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] text-xs"
          >
            <span>Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <img
              src="/zeshan-bio-photo-2022-square.jpg"
              alt="Zeshan Ahmad"
              className="w-9 h-9 rounded-full object-cover opacity-80 flex-shrink-0"
            />
            <p className="text-[var(--color-text-muted)] text-sm leading-snug">
              <a href="https://linkedin.com/in/zeshan" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Zeshan Ahmad</a>
              {' '}— Professor and technical founder with 20+ years building financial infrastructure across mobile payments, sovereign systems, institutional capital, cryptographic compliance, and autonomous commerce.{' '}
              <Link to="/about" className="text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] transition-colors underline underline-offset-2 decoration-dotted">
                full bio
              </Link>
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trackRecord.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="stat-card glass-card rounded-xl"
              >
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <span className="section-label mb-6 block w-fit">The Infrastructure Stack</span>
            <h2 className="display-text max-w-3xl mb-6">
              Three Pillars,{' '}
              <span className="text-gradient">One System</span>
            </h2>
            <p className="body-large max-w-2xl">
              Not separate products. Interlocking layers of the same infrastructure, built by the same team,
              from first principles. AI agents need payment rails. Traders need institutional-grade algorithms.
              Financial systems need compliance embedded in the architecture.
            </p>
          </motion.div>

          <div className="space-y-6">
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
                  className={`glass-card-interactive rounded-2xl p-8 border ${pillar.accentColor}`}
                  style={{ background: `linear-gradient(135deg, ${pillar.glowColor} 0%, rgba(10,10,16,0.8) 100%)` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-shrink-0 lg:w-64">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-bold text-[var(--color-text-muted)]/30 font-mono">
                          {pillar.number}
                        </span>
                        <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
                        {pillar.label}
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{pillar.product}</div>
                      {pillar.badge && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                          <Shield className="w-3 h-3" />
                          {pillar.badge}
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 text-lg">
                        {pillar.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {pillar.facts.map((fact) => (
                          <div key={fact} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[var(--color-text-secondary)]">{fact}</span>
                          </div>
                        ))}
                      </div>
                      <div className={`text-xs font-semibold uppercase tracking-wider ${pillar.entityColor} mb-4`}>
                        {pillar.entity}
                      </div>
                      {(pillar.link || pillar.githubLink) && (
                        <div className="flex flex-wrap gap-4">
                          {pillar.link && (
                            <a
                              href={pillar.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit site
                            </a>
                          )}
                          {pillar.githubLink && (
                            <a
                              href={pillar.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="section-label mb-6 block w-fit">Teaching & R&D</span>
              <h2 className="display-text mb-6">
                The Classroom Is{' '}
                <span className="text-gradient">the Lab</span>
              </h2>
              <p className="body-large mb-8">
                Active researcher and educator at Kutaisi International University, teaching
                AI-Powered Software Development, Product Development, Blockchain &amp; Cryptography,
                and Digital Disruption. NVIDIA DLI certified instructor. Courses informed by live
                company builds -- the same frameworks applied in the classroom are used to build
                P402 and ReFi Trading.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'AI-Powered Software Development',
                  'Product Development for Software Engineers',
                  'Digital Disruption, Innovation & Transformation (MBA)',
                  'Blockchain & Cryptography Fundamentals',
                ].map((course) => (
                  <div key={course} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span className="text-[var(--color-text-secondary)] text-sm">{course}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/ZA-KIU/AI-POWERED-SOFTWARE-DEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors glass-card px-4 py-2 rounded-lg"
                >
                  <Github className="w-4 h-4" />
                  AI Course Repo
                </a>
                <a
                  href="https://github.com/ZA-KIU/PRODUCT-DEV-FOR-SOFTWARE-ENGINEERS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors glass-card px-4 py-2 rounded-lg"
                >
                  <Github className="w-4 h-4" />
                  Product Dev Repo
                </a>
                <a
                  href="https://github.com/ZA-KIU-Classroom/DDIT-S26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors glass-card px-4 py-2 rounded-lg"
                >
                  <Github className="w-4 h-4" />
                  DDIT Repo
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="glass-card rounded-2xl p-8 border border-[var(--color-border)]">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    The Loop
                  </span>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Build live',
                      desc: 'P402 and ReFi Trading are built in real time using the same product development methodology taught in class.',
                    },
                    {
                      step: '2',
                      title: 'Teach the method',
                      desc: 'Course frameworks at KIU mirror the actual build process -- students learn on real infrastructure patterns, not hypothetical projects.',
                    },
                    {
                      step: '3',
                      title: 'Feed the pipeline',
                      desc: 'Students become contributors. The classroom becomes a talent pipeline and R&D lab for the studio.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)] text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">{item.title}</div>
                        <div className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto">
            <span className="section-label mb-6 block w-fit">Market Timing</span>
            <h2 className="display-text mb-8">
              Why{' '}
              <span className="text-gradient">Now</span>
            </h2>
            <p className="body-large mb-12">
              AI agents are becoming autonomous economic actors capable of transacting, trading,
              and verifying without human intervention. These agents need native payment infrastructure --
              not human payment rails adapted for machines. The convergence has arrived.
            </p>
            <div className="space-y-4 mb-12">
              {whyNow.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex items-start gap-4 glass-card rounded-xl p-5"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)] text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
            <div className="glass-card rounded-2xl p-8 border border-[var(--color-primary)]/20">
              <div className="flex items-start gap-4">
                <Layers className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white text-lg font-semibold mb-2">
                    We are not learning on the job.
                  </p>
                  <p className="text-[var(--color-text-secondary)]">
                    20 years building this exact type of infrastructure -- payment hardware, sovereign
                    financial digitization, institutional capital, protocol design -- using the best
                    technology of each era. The market just caught up.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="display-text mb-6">
              See the Same{' '}
              <span className="text-gradient">Infrastructure Gap?</span>
            </h2>
            <p className="body-large mb-12 max-w-2xl mx-auto">
              Whether you are a VC evaluating the agent economy, a technical partner building on x402,
              or an enterprise exploring autonomous settlement -- we should talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/thesis" className="btn-secondary flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Read the Thesis</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
