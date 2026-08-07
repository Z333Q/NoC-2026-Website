import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Github, BookOpen, Award,
  Cpu, TrendingUp, Building2, GraduationCap, Zap, Shield,
  Linkedin, MessageSquare, Repeat2, ThumbsUp
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

const careerPhases = [
  {
    era: '2024 – Present',
    role: 'Founder & Co-Founder',
    company: 'P402.io + ReFi Trading Inc',
    competency: 'Building the payment and trading infrastructure for the agent economy',
    description: 'P402: Autonomous payment rails for AI agents implementing x402, A2A protocol, and multi-provider routing across 300+ models. Published SDK and CLI. Co-founded ReFi Trading Inc with Daniel Oosthuyzen -- RL-driven trading platform with USPTO patent and zk-VaR engine.',
    icon: Cpu,
    tags: ['P402.io', 'ReFi Trading', 'USPTO Patent', 'agentic Finance'],
  },
  {
    era: '2020 – 2023',
    role: 'Protocol Architect & Builder',
    company: 'Web3 Infrastructure',
    competency: 'Deep tokenomics, on-chain infrastructure, and cryptographic systems',
    description: 'Outlier Ventures Accelerator alumni. Coindesk Consensus global finalist. Chainlink Build program. Web Summit. Designed tokenomics and on-chain infrastructure. Fan City (Puck.City), HazelHearts.xyz.',
    icon: Shield,
    tags: ['Outlier Ventures', 'Chainlink Build', 'Coindesk', 'Web Summit'],
  },
  {
    era: '2010 – 2021',
    role: 'Founder',
    company: 'E-Commerce & DTC',
    competency: 'Taken a product from zero to revenue to exit',
    description: 'CharityDreams.com celebrity auction platform -- $4M+ raised for charity. Partnerships with Fergie/Black Eyed Peas, Justin Bieber, and 50 Cent (Street Kings / UN initiative). Scaled DTC bedding brand to $4M+ in sales.',
    icon: Zap,
    tags: ['E-commerce', 'DTC', 'Charity Platform', 'Celebrity Partnerships'],
  },
  {
    era: '2009 – 2015',
    role: 'Senior Investment Officer',
    company: 'Peak Venture Partners, New York',
    competency: 'Understands institutional capital allocation from the inside',
    description: '$1.2B+ in transactions. E-Trade (largest shareholders), Summit Entertainment slate financing (later acquired by Lionsgate for $412M), Aman Resorts M&A ($350M+). Led real estate and CPG portfolio across multiple sectors.',
    icon: TrendingUp,
    tags: ['$1.2B+ Transactions', 'Private Equity', 'M&A', 'New York'],
  },
  {
    era: '2007 – 2009',
    role: 'Cross-Border Investment Advisory',
    company: 'Key Capital / Dubai Land Department',
    competency: 'Made opaque financial systems transparent and programmable',
    description: 'Architected software for UAE primary property developer, creating the pioneering online property title transaction system for the Dubai Land Department. Digitized a sovereign financial workflow -- enabled online real estate transactions for the first time.',
    icon: Building2,
    tags: ['GovTech', 'FinTech', 'Dubai', 'Sovereign Systems'],
  },
  {
    era: '2003 – 2007',
    role: 'VP Communications & Business Development',
    company: 'Symstream Technology Group, Melbourne',
    competency: 'Built payment rails from scratch in emerging markets',
    description: 'Deployed GSM-connected point-of-sale terminals enabling major banks to offer micro-banking services in remote areas without traditional banking infrastructure. Commercialized 46 patents for in-channel wireless communications. Early mobile money pioneer.',
    icon: Cpu,
    tags: ['46 Patents', 'Mobile Banking', 'Melbourne', 'GSM Infrastructure'],
  },
];

const credentials = [
  { label: 'NVIDIA DLI Certified Instructor', icon: Award },
  { label: 'Web Summit speaker', icon: Award },
  { label: 'Coindesk Consensus global finalist', icon: Award },
  { label: 'Outlier Ventures Accelerator alumni', icon: Award },
  { label: 'Chainlink Build program', icon: Award },
  { label: 'Web Summit 2026 Impact Startup Showcase finalist', icon: Award },
];

export default function Team() {
  useSeoMeta({
    title: 'Team | Nature of Commerce',
    description: 'Meet the team behind Nature of Commerce. Zeshan Ahmad, Managing Partner — technical founder and Professor of Blockchain with 20+ years in emerging technology and strategic finance.',
    ogTitle: 'Team | Nature of Commerce',
    ogDescription: 'Meet Zeshan Ahmad and the Nature of Commerce team. Technical founders investing in the future of Web3, DeFi, and agentic commerce.',
    canonical: 'https://natureofcommerce.com/about',
  });
  return (
    <main className="overflow-hidden">
      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="glass-card rounded-2xl p-6 mb-6">
                  <img
                    src="/zeshan-bio-photo-2022-square.jpg"
                    alt="Zeshan Ahmad"
                    className="w-full aspect-square object-cover rounded-xl mb-6"
                  />
                  <h2 className="text-2xl font-bold text-white mb-1">Zeshan Ahmad</h2>
                  <p className="text-[var(--color-primary)] text-sm font-semibold mb-4">
                    Founder, Nature of Commerce
                  </p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                    Professor and technical founder with 20+ years building financial infrastructure. The same through-line --
                    removing gatekeepers from financial systems -- in every era.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://linkedin.com/in/zeshanahmad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors glass-card px-3 py-2 rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Z333Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors glass-card px-3 py-2 rounded-lg"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                      Recognition
                    </span>
                  </div>
                  <div className="space-y-3">
                    {credentials.map((c) => (
                      <div key={c.label} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                        <span className="text-[var(--color-text-secondary)] text-sm">{c.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 mt-6 border border-[#0A66C2]/20" style={{ background: 'linear-gradient(135deg, rgba(10,102,194,0.06) 0%, rgba(10,10,16,0.95) 100%)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/20 flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    </div>
                    <span className="text-sm font-semibold text-white">LinkedIn Activity</span>
                  </div>
                  <div className="space-y-3 mb-5">
                    {[
                      { icon: MessageSquare, text: 'Agentic commerce & x402' },
                      { icon: Repeat2, text: 'DeFi & AI infrastructure' },
                      { icon: ThumbsUp, text: 'P402 & ReFi updates' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2.5">
                        <item.icon className="w-3.5 h-3.5 text-[#0A66C2]/70 flex-shrink-0" />
                        <span className="text-[var(--color-text-muted)] text-xs">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://linkedin.com/in/zeshanahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    Follow on LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                <span className="section-label mb-6 block w-fit">Founder-Market Fit</span>
                <h2 className="display-text mb-6">
                  The{' '}
                  <span className="text-gradient">Through-Line</span>
                </h2>
                <p className="body-large mb-4">
                  Every era, same mission: remove the gatekeepers between participants and financial systems.
                  The technology changes. The mission does not.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  P402 and ReFi Trading are not a pivot or a new direction. They are the logical continuation
                  of 20 years of work -- now with the most capable tools (zero-knowledge proofs, RL agents,
                  stablecoin settlement) ever available for this task.
                </p>
              </motion.div>

              <div className="space-y-4">
                {careerPhases.map((phase, i) => {
                  const Icon = phase.icon;
                  return (
                    <motion.div
                      key={phase.era}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      className="glass-card rounded-xl p-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="sm:w-36 flex-shrink-0">
                          <div className="text-xs font-mono text-[var(--color-primary)] mb-1">{phase.era}</div>
                          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-[var(--color-primary)]" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold text-base mb-0.5">{phase.company}</div>
                          <div className="text-[var(--color-text-muted)] text-xs mb-2">{phase.role}</div>
                          <div className="text-[var(--color-primary)] text-sm font-semibold italic mb-3">
                            "{phase.competency}"
                          </div>
                          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-3">
                            {phase.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {phase.tags.map((tag) => (
                              <span key={tag} className="tag text-xs">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <span className="section-label mb-6 block w-fit">Team</span>
            <h2 className="display-text mb-4">
              The{' '}
              <span className="text-gradient">Co-Founders</span>
            </h2>
            <p className="body-large max-w-2xl">
              Independent ventures, each with its own co-founder. Complementary expertise across finance,
              engineering, and commerce.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-[var(--color-primary)]/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src="/zeshan-bio-photo-2022-square.jpg"
                  alt="Zeshan Ahmad"
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Zeshan Ahmad</h3>
                  <p className="text-[var(--color-primary)] text-sm">CEO / Product</p>
                  <p className="text-[var(--color-text-muted)] text-xs">Founder, Nature of Commerce LLC · Co-Founder, ReFi Trading Inc · Builder, P402 Protocol & MathRap.com</p>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                20+ years building financial infrastructure across payment hardware (Symstream), sovereign
                digital systems (Dubai Land Department), institutional capital ($1.2B+ at Peak Venture Partners),
                and Web3 protocol design. Product architect and infrastructure builder for the agent economy.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Product Architecture', 'Agentic Finance', 'Institutional Capital', 'Regulatory Strategy'].map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="glass-card rounded-2xl p-8 border border-emerald-500/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src="/dan-refi-trading.jpg"
                  alt="Daniel Oosthuyzen"
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Daniel Oosthuyzen</h3>
                  <p className="text-emerald-400 text-sm">CTO / Quant Engineer</p>
                  <p className="text-[var(--color-text-muted)] text-xs">Co-Founder, ReFi Trading Inc</p>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                Quantitative engineer whose modeling expertise drives the reinforcement learning trading
                algorithms and risk engine at the core of ReFi Trading. The quantitative engineering
                complement to Zeshan's product and infrastructure background -- a genuinely complementary
                founding pair.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  'RL trading agent architecture (28% CAGR, 2.07 Sharpe backtested)',
                  'zk-VaR engine design and implementation',
                  'Algorithmic strategy design and backtesting framework',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                    <span className="text-[var(--color-text-muted)] text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Quant Engineering', 'RL Algorithms', 'Risk Modeling', 'Backtesting'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <span className="section-label mb-6 block w-fit">Teaching & Research</span>
            <h2 className="display-text mb-4">
              Kutaisi International{' '}
              <span className="text-gradient">University</span>
            </h2>
            <p className="body-large max-w-2xl">
              An applied R&D lab, not a side activity. The same methodology taught in class is applied
              to build P402 and ReFi Trading. NVIDIA DLI certified instructor.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'AI-Powered Software Development', status: 'Current', link: 'https://github.com/ZA-KIU/AI-POWERED-SOFTWARE-DEV' },
              { title: 'Product Development for Software Engineers', status: 'Current', link: 'https://github.com/ZA-KIU/PRODUCT-DEV-FOR-SOFTWARE-ENGINEERS' },
              { title: 'Digital Disruption, Innovation & Transformation', status: 'Current (MBA)', link: 'https://github.com/ZA-KIU-Classroom/DDIT-S26' },
              { title: 'Blockchain & Cryptography Fundamentals', status: 'Previous' },
            ].map((course, i) => (
              <motion.div
                key={course.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card rounded-xl p-5"
              >
                <GraduationCap className="w-5 h-5 text-[var(--color-primary)] mb-3" />
                <div className="text-white font-semibold text-sm mb-1">{course.title}</div>
                <div className="text-[var(--color-text-muted)] text-xs mb-3">{course.status}</div>
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

      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="section-label mb-6 block w-fit">Advisory</span>
              <h2 className="display-text mb-6">
                Work{' '}
                <span className="text-gradient">With Zeshan</span>
              </h2>
              <p className="body-large mb-6">
                Selective advisory for early-stage founders building at the intersection of AI, fintech,
                and Web3. Informed by 20 years of building and the same methodology taught at KIU and
                applied to P402 and ReFi Trading.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Not a productized service. Not a consulting agency. If you are building in this space
                and there is a genuine opportunity to work together, reach out.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Technical architecture review for agentic finance products',
                  'Product development methodology for AI-native infrastructure',
                  'Regulatory strategy for token-based and open finance systems',
                  'Network introductions (investors, technical talent, ecosystem partners)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-2" />
                    <span className="text-[var(--color-text-secondary)] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="glass-card rounded-2xl p-8 border border-[var(--color-primary)]/20"
            >
              <BookOpen className="w-8 h-8 text-[var(--color-primary)] mb-6" />
              <blockquote className="text-white text-2xl font-bold leading-tight mb-4">
                "What would nature do?"
              </blockquote>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                The guiding principle for sustainable infrastructure. Natural systems are composable,
                efficient, and self-reinforcing. Every design decision should trace back to first principles,
                not convention.
              </p>
              <div className="pt-6 border-t border-[var(--color-border)]">
                <div className="text-[var(--color-text-muted)] text-sm">
                  <span className="text-white font-semibold">Zeshan Ahmad</span>
                  <br />
                  Founder, Nature of Commerce LLC
                  <br />
                  Kutaisi, Georgia
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="display-text mb-6">
              Let's Build{' '}
              <span className="text-gradient">Together</span>
            </h2>
            <p className="body-large mb-10 max-w-2xl mx-auto">
              Whether you are a VC evaluating the agent economy, a technical partner building on x402,
              or an enterprise exploring autonomous settlement -- if you see the same infrastructure gap,
              we should talk.
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
