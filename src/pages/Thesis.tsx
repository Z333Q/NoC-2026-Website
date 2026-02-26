import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Users,
  ChevronDown,
} from 'lucide-react';
import { SystemsIcon, PrinciplesIcon, BalanceIcon, FortressIcon } from '../components/CustomIcons';

const principles = [
  {
    icon: SystemsIcon,
    title: 'Systems-Level Thinking',
    description: 'Like natural systems, the best technologies achieve efficiency through simple, composable components that scale organically.',
  },
  {
    icon: PrinciplesIcon,
    title: 'First Principles Analysis',
    description: 'Strip away assumptions to fundamental truths. The best founders question industry conventions and rebuild from physics and economics.',
  },
  {
    icon: BalanceIcon,
    title: 'Incentive Architecture',
    description: 'Back companies where all stakeholders win by default. When incentives align naturally, regulation and trust become features, not friction.',
  },
  {
    icon: FortressIcon,
    title: 'Technical Moats',
    description: 'We invest in hard technical problems—patents, novel algorithms, network effects—not marketing-driven differentiation.',
  },
];

const stages = [
  {
    stage: 'Pre-Seed',
    check: 'Early Stage',
    ownership: 'Formation',
    focus: 'Idea validation, team formation, early MVP',
  },
  {
    stage: 'Seed',
    check: 'Growth Stage',
    ownership: 'Expansion',
    focus: 'Product-market fit, initial traction, key hires',
  },
  {
    stage: 'Scale',
    check: 'Later Stage',
    ownership: 'Maturity',
    focus: 'Scale support for top performers',
  },
];

const faqs = [
  {
    question: 'What stage companies do you work with?',
    answer: 'We work with technical founders at all stages—from early concept through growth. The ideal timing varies: early-stage founders benefit from architecture advisory, while growth-stage companies often need fractional technical leadership or strategic guidance.',
  },
  {
    question: 'What sectors do you focus on?',
    answer: 'Four core areas: (1) Open Finance -- AI trading, stablecoin payments, and tokenized financial rails, (2) AI-Native Products -- applied AI for trading agents and developer tools, (3) EdTech & Applied Learning -- technical education in AI, blockchain, and product development, and (4) Spatial & Emerging Platforms -- VisionOS, Meta Quest, and next-platform experiences. If you\'re building in these spaces, we want to talk.',
  },
  {
    question: 'How do your advisory engagements work?',
    answer: 'We offer flexible engagement models from short-term architecture sprints (1-2 weeks) to embedded fractional advisory (3-6 months). Most engagements start with a discovery call to understand your needs, followed by a scoped proposal. Pricing varies based on engagement type and duration.',
  },
  {
    question: 'What makes your approach different?',
    answer: 'We\'re operators, not just advisors. We\'ve built the systems you\'re building—from AI trading infrastructure to payment protocols. You get hands-on technical support from founders who\'ve scaled FinTech platforms, not generic business advice.',
  },
  {
    question: 'Do you take equity or advisory shares?',
    answer: 'Our advisory services are typically compensated through professional fees. For deeper, longer-term partnerships involving embedded technical leadership, we may discuss equity arrangements, but this is evaluated case-by-case based on the engagement scope.',
  },
  {
    question: 'Who should reach out?',
    answer: 'Technical founders building in open finance, AI-native products, EdTech, or spatial computing who value operator expertise. We work best with teams that have budget for professional services and are ready to move quickly. If you need hand-holding, we\'re not the right fit. If you need battle-tested operators to help you execute faster -- let\'s talk.',
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
          className={`w-5 h-5 text-[var(--color-primary)] transition-transform ${
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

import { useState } from 'react';

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
                Investment Philosophy
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Thesis</span>
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                We back founders solving hard technical problems in open finance, applied AI,
                spatial computing, and education technology.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Our thesis: AI agents need payment rails. Traders need algorithmic infrastructure. Learners need
                technical depth from operators. We invest in the protocols, platforms, and systems enabling this
                shift -- companies building foundational technology, not features.
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
                  Our guiding principle for sustainable innovation
                </p>
              </div>
            </motion.div>
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
              The philosophical foundations that guide our investment decisions.
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
              <TrendingUp className="w-4 h-4" />
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Company <span className="text-gradient-static">Development</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage, i) => (
              <AnimatedSection key={stage.stage}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 text-center"
                >
                  <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
                    {stage.stage}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold">{stage.check}</div>
                      <div className="text-sm text-[var(--color-text-muted)]">Company Phase</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{stage.ownership}</div>
                      <div className="text-sm text-[var(--color-text-muted)]">Development Stage</div>
                    </div>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {stage.focus}
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
              If you're building something that aligns with our thesis,
              we'd love to hear from you.
            </p>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                  <span>Work With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto mt-6 text-center">
                For institutional inquiries, contact us directly
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
