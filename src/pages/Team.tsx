import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Github, BookOpen, Award, GraduationCap
} from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';
import { fadeUp } from '../lib/motion';

const careerPhases = [
  {
    era: '2024 -- Present',
    role: 'Founder & Co-Founder',
    company: 'P402.io + ReFi Trading Inc',
    competency: 'Building the payment and trading infrastructure for the agent economy',
    description: 'P402: Autonomous payment rails for AI agents implementing x402, A2A protocol, and multi-provider routing across 300+ models. Published SDK and CLI. Co-founded ReFi Trading Inc with Daniel Oosthuyzen -- RL-driven trading platform with USPTO patent and zk-VaR engine.',
    tags: ['P402.io', 'ReFi Trading', 'USPTO Patent', 'Agentic Finance'],
  },
  {
    era: '2020 -- 2023',
    role: 'Protocol Architect & Builder',
    company: 'Web3 Infrastructure',
    competency: 'Deep tokenomics, on-chain infrastructure, and cryptographic systems',
    description: 'Outlier Ventures Accelerator alumni. Coindesk Consensus global finalist. Chainlink Build program. Web Summit. Designed tokenomics and on-chain infrastructure.',
    tags: ['Outlier Ventures', 'Chainlink Build', 'Coindesk', 'Web Summit'],
  },
  {
    era: '2010 -- 2021',
    role: 'Founder',
    company: 'E-Commerce & DTC',
    competency: 'Taken a product from zero to revenue to exit',
    description: 'CharityDreams.com celebrity auction platform -- $4M+ raised for charity. Partnerships with Fergie/Black Eyed Peas, Justin Bieber, and 50 Cent. Scaled DTC bedding brand to $4M+ in sales.',
    tags: ['E-commerce', 'DTC', 'Charity Platform'],
  },
  {
    era: '2009 -- 2015',
    role: 'Senior Investment Officer',
    company: 'Peak Venture Partners, New York',
    competency: 'Understands institutional capital allocation from the inside',
    description: '$1.2B+ in transactions. E-Trade (largest shareholders), Summit Entertainment slate financing (later acquired by Lionsgate for $412M), Aman Resorts M&A ($350M+).',
    tags: ['$1.2B+ Transactions', 'Private Equity', 'M&A'],
  },
  {
    era: '2007 -- 2009',
    role: 'Cross-Border Investment Advisory',
    company: 'Key Capital / Dubai Land Department',
    competency: 'Made opaque financial systems transparent and programmable',
    description: 'Architected software for UAE primary property developer, creating the pioneering online property title transaction system for the Dubai Land Department.',
    tags: ['GovTech', 'FinTech', 'Dubai'],
  },
  {
    era: '2003 -- 2007',
    role: 'VP Communications & Business Development',
    company: 'Symstream Technology Group, Melbourne',
    competency: 'Built payment rails from scratch in emerging markets',
    description: 'Deployed GSM-connected point-of-sale terminals enabling major banks to offer micro-banking services in remote areas. Commercialized 46 patents for in-channel wireless communications.',
    tags: ['46 Patents', 'Mobile Banking', 'Melbourne'],
  },
];

const credentials = [
  'NVIDIA DLI Certified Instructor',
  'Web Summit speaker',
  'Coindesk Consensus global finalist',
  'Outlier Ventures Accelerator alumni',
  'Chainlink Build program',
  'Web Summit 2026 Impact Startup Showcase finalist',
];

export default function Team() {
  useSeoMeta({
    title: 'About | Nature of Commerce',
    description: 'Zeshan Ahmad -- professor, technical founder, and infrastructure architect. 20+ years building financial infrastructure across payment hardware, sovereign systems, institutional capital, and autonomous commerce.',
    ogTitle: 'About | Nature of Commerce',
    ogDescription: 'Meet Zeshan Ahmad and the team behind Nature of Commerce. Technical founders building autonomous payment and trading infrastructure.',
    canonical: 'https://natureofcommerce.com/about',
  });

  return (
    <main>
      {/* Bio section */}
      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <div className="surface-card p-6">
                  <img
                    src="/zeshan-bio-photo-2022-square.jpg"
                    alt="Zeshan Ahmad"
                    className="w-full aspect-square object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold text-white mb-1">Zeshan Ahmad</h2>
                  <p className="text-[var(--color-primary)] text-sm font-semibold mb-4">
                    Founder, Nature of Commerce
                  </p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                    Professor and technical founder with 20+ years building financial infrastructure. The same through-line --
                    removing gatekeepers from financial systems -- in every era.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://linkedin.com/in/zeshanahmad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors border border-[var(--color-border)] px-3 py-2 rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4" />LinkedIn
                    </a>
                    <a
                      href="https://github.com/Z333Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors border border-[var(--color-border)] px-3 py-2 rounded-lg"
                    >
                      <Github className="w-4 h-4" />GitHub
                    </a>
                  </div>
                </div>

                <div className="surface-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-5 h-5 text-[var(--color-warning)]" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-warning)]">
                      Recognition
                    </span>
                  </div>
                  <div className="space-y-3">
                    {credentials.map((c) => (
                      <div key={c} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[var(--color-warning)] flex-shrink-0 mt-2" />
                        <span className="text-[var(--color-text-secondary)] text-sm">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <span className="section-label-minimal mb-6 block">Founder-Market Fit</span>
                <h2 className="display-text mb-6">The through-line</h2>
                <p className="body-large mb-4">
                  Every era, same mission: remove the gatekeepers between participants and financial systems.
                  The technology changes. The mission does not.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  P402 and ReFi Trading are not a pivot or a new direction. They are the logical continuation
                  of 20 years of work -- now with the most capable tools (zero-knowledge proofs, RL agents,
                  stablecoin settlement) ever available for this task.
                </p>
              </div>

              <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                {careerPhases.map((phase) => (
                  <div key={phase.era} className="py-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="sm:w-36 flex-shrink-0">
                        <div className="text-xs font-mono text-[var(--color-primary)] mb-1">{phase.era}</div>
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders */}
      <section className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-label-minimal mb-6 block">Team</span>
            <h2 className="display-text mb-4">The co-founders</h2>
            <p className="body-large max-w-2xl">
              Independent ventures, each with its own co-founder. Complementary expertise across finance,
              engineering, and commerce.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="surface-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <img src="/zeshan-bio-photo-2022-square.jpg" alt="Zeshan Ahmad" className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white">Zeshan Ahmad</h3>
                  <p className="text-[var(--color-primary)] text-sm">CEO / Product</p>
                  <p className="text-[var(--color-text-muted)] text-xs">Nature of Commerce LLC -- ReFi Trading Inc -- P402 Protocol</p>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                20+ years building financial infrastructure across payment hardware (Symstream), sovereign
                digital systems (Dubai Land Department), institutional capital ($1.2B+ at Peak Venture Partners),
                and Web3 protocol design.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Product Architecture', 'Agentic Finance', 'Institutional Capital', 'Regulatory Strategy'].map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </div>

            <div className="surface-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <img src="/DrYuliiav2.jpeg" alt="Yuliia Barbashova-Ahmad" className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white">Yuliia Barbashova-Ahmad</h3>
                  <p className="text-[var(--color-primary)] text-sm">Co-Founder</p>
                  <p className="text-[var(--color-text-muted)] text-xs">Wholesome Linen LLC -- MBBS (MD Candidate)</p>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                MD candidate with a focus on neonatology and SIDS research. Her clinical background in infant
                sleep environment and safety directly informs Wholesome Linen -- a 10-year DTC brand
                specializing in OEKO-TEX certified organic baby and toddler bedding.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  'MBBS -- Neonatology & SIDS research focus',
                  'Infant sleep environment & safety advocate',
                  'DTC brand building & operations (10 years)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-2" />
                    <span className="text-[var(--color-text-muted)] text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <a href="https://linkedin.com/in/yulkin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />LinkedIn
              </a>
            </div>

            <div className="surface-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <img src="/dan-refi-trading.jpg" alt="Daniel Oosthuyzen" className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white">Daniel Oosthuyzen</h3>
                  <p className="text-[var(--color-primary)] text-sm">CTO / Quant Engineer</p>
                  <p className="text-[var(--color-text-muted)] text-xs">Co-Founder, ReFi Trading Inc</p>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                Quantitative engineer whose modeling expertise drives the reinforcement learning trading
                algorithms and risk engine at the core of ReFi Trading. The quantitative engineering
                complement to Zeshan's product and infrastructure background.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  'RL trading agent architecture (28% CAGR, 2.07 Sharpe backtested)',
                  'zk-VaR engine design and implementation',
                  'Algorithmic strategy design and backtesting framework',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-2" />
                    <span className="text-[var(--color-text-muted)] text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Quant Engineering', 'RL Algorithms', 'Risk Modeling', 'Backtesting'].map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-label-minimal mb-6 block">Teaching & Research</span>
            <h2 className="display-text mb-4">Kutaisi International University</h2>
            <p className="body-large max-w-2xl">
              An applied R&D lab, not a side activity. The same methodology taught in class is applied
              to build P402 and ReFi Trading. NVIDIA DLI certified instructor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
            {[
              { title: 'AI-Powered Software Development', status: 'Current', link: 'https://github.com/ZA-KIU/AI-POWERED-SOFTWARE-DEV' },
              { title: 'Product Development for Software Engineers', status: 'Current', link: 'https://github.com/ZA-KIU/PRODUCT-DEV-FOR-SOFTWARE-ENGINEERS' },
              { title: 'Digital Disruption, Innovation & Transformation', status: 'Current (MBA)', link: 'https://github.com/ZA-KIU-Classroom/DDIT-S26' },
              { title: 'Blockchain & Cryptography Fundamentals', status: 'Previous' },
            ].map((course) => (
              <div key={course.title} className="bg-[var(--color-bg-primary)] p-5 flex flex-col">
                <GraduationCap className="w-5 h-5 text-[var(--color-primary)] mb-3" />
                <div className="text-white font-semibold text-sm mb-1 flex-1">{course.title}</div>
                <div className="text-[var(--color-text-muted)] text-xs mb-3">{course.status}</div>
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

      {/* Advisory + Quote */}
      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label-minimal mb-6 block">Advisory</span>
              <h2 className="display-text mb-6">Work with Zeshan</h2>
              <p className="body-large mb-6">
                Selective advisory for early-stage founders building at the intersection of AI, fintech,
                and Web3.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Not a productized service. Not a consulting agency. If you are building in this space
                and there is a genuine opportunity to work together, reach out.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  'Technical architecture review for agentic finance products',
                  'Product development methodology for AI-native infrastructure',
                  'Regulatory strategy for token-based and open finance systems',
                  'Network introductions (investors, technical talent, ecosystem partners)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-2" />
                    <span className="text-[var(--color-text-secondary)] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="surface-card p-8 border-l-2 border-l-[var(--color-primary)]">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-[var(--color-border)]">
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
            <Link to="/thesis" className="btn-secondary">
              <BookOpen className="w-4 h-4" />
              Read the Thesis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
