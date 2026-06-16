import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Calendar,
  CheckCircle,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { GrowthIcon, NetworkIcon, CodeIcon, StrategyIcon, FortressIcon, InnovationIcon } from '../components/CustomIcons';

const programPhases = [
  {
    week: 'Week 1-2',
    title: 'Discovery',
    description: 'Deep dive into your vision, technical requirements, and strategic positioning.',
    activities: ['Technical Audit', 'Market Analysis', 'Architecture Review'],
  },
  {
    week: 'Week 3-4',
    title: 'Design',
    description: 'System architecture design and technical framework development.',
    activities: ['System Design', 'Tokenomics', 'Security Planning'],
  },
  {
    week: 'Week 5-8',
    title: 'Implementation',
    description: 'Hands-on development support and technical execution.',
    activities: ['Development Support', 'Code Review', 'Testing Strategy'],
  },
  {
    week: 'Week 9-10',
    title: 'Optimization',
    description: 'Performance tuning, security hardening, and go-to-market strategy.',
    activities: ['Performance Tuning', 'Security Audit', 'GTM Planning'],
  },
  {
    week: 'Week 11-12',
    title: 'Launch Support',
    description: 'Production deployment support and post-launch monitoring.',
    activities: ['Deployment', 'Monitoring', 'Optimization'],
  },
];

const benefits = [
  {
    icon: CodeIcon,
    title: 'Architecture Sprint',
    description: 'Technical architecture review, system design, security considerations, and scalability planning.',
  },
  {
    icon: StrategyIcon,
    title: 'Strategy Workshop',
    description: 'Go-to-market planning, tokenomics design, competitive positioning, and business model validation.',
  },
  {
    icon: GrowthIcon,
    title: 'Build Partnership',
    description: 'Embedded technical leadership over 8-12 weeks for hands-on product development support.',
  },
  {
    icon: NetworkIcon,
    title: 'Fractional Advisory',
    description: 'Ongoing technical guidance for funded startups requiring operator-level expertise.',
  },
  {
    icon: FortressIcon,
    title: 'Regulatory Navigation',
    description: 'Legal structure guidance and compliance support for open finance and token-based systems.',
  },
  {
    icon: InnovationIcon,
    title: 'Network Access',
    description: 'Introductions to technical talent, strategic partners, and ecosystem players.',
  },
];

const requirements = [
  'Founders building in open finance, AI-native products, EdTech, or spatial computing',
  'Technical teams requiring operator-level expertise',
  'Funded startups needing fractional technical leadership',
  'Companies with budget for professional advisory services',
  'Global teams welcome (remote collaboration supported)',
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

export default function Launchpad() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden blueprint-grid">
        <div className="glow-orb glow-orb-primary w-[600px] h-[600px] -top-48 left-1/4 opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="section-label mb-6">
              <Rocket className="w-4 h-4" />
              Technical Advisory Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Advisory</span> Services
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              Work with operators who have built what you are building. 20+ years across
              payment infrastructure, institutional capital, and AI-native products.
              Architecture, strategy, and execution support for technical founders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                <span>Book a Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#services" className="btn-secondary flex items-center justify-center">
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Service <span className="text-gradient-static">Offerings</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
              Hands-on technical advisory from operators who've built payment infrastructure,
              AI trading systems, and agentic commerce protocols. Not theory -- live builds.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 blueprint-grid-dense">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label mx-auto mb-6">
              <Calendar className="w-4 h-4" />
              Typical Engagement
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              12-Week <span className="text-gradient-static">Partnership</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)]" />

            <div className="space-y-12">
              {programPhases.map((phase, i) => (
                <AnimatedSection key={phase.week}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-[var(--color-primary)] animate-pulse-glow" />

                    <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <span className="text-[var(--color-primary)] text-sm font-medium">{phase.week}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-3">{phase.title}</h3>
                      <p className="text-[var(--color-text-secondary)] mb-4">{phase.description}</p>
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {phase.activities.map((activity) => (
                          <span key={activity} className="tag">{activity}</span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:block flex-1" />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who We <span className="text-gradient-static">Work With</span>
              </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8">
                We partner with technical founders building infrastructure for autonomous finance,
                agentic commerce, and AI-native products. Operator expertise, not slide decks.
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-secondary)]">{req}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-[var(--color-primary)]" />
                  <span className="text-sm text-[var(--color-text-muted)]">
                    Flexible engagements — scheduled within days
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to Partner?</h3>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  If you're solving hard technical problems in financial infrastructure and need operator-level guidance,
                  let's talk. Most initial consultations scheduled within 48 hours.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
