import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Rocket,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Shield,
} from 'lucide-react';
import ParticleField from '../components/ParticleField';
import MolecularOrb from '../components/MolecularOrb';
import { OpenFiIcon, AINativeIcon, EdTechIcon, SpatialIcon } from '../components/CustomIcons';

const pillars = [
  {
    icon: OpenFiIcon,
    title: 'Agentic Payments & Routing',
    product: 'P402',
    color: '#3B82F6',
    description: 'Middleware intelligence layer routing 300+ AI models with x402 settlement, A2A protocol, and session governance. Published SDK and CLI.',
    url: 'https://p402.io',
  },
  {
    icon: AINativeIcon,
    title: 'Algorithmic Portfolio Management',
    product: 'ReFi Trading',
    color: '#00D4AA',
    description: 'RL agents with backtested 28% CAGR and 2.07 Sharpe. zk-VaR engine, 6-patent portfolio, self-custodied execution. Backed by non-dilutive capital.',
    url: 'https://refi.trading',
  },
  {
    icon: EdTechIcon,
    title: 'Applied Learning & R&D',
    product: 'Kutaisi International University',
    color: '#F59E0B',
    description: 'University courses in AI and product development that function as an R&D lab. Course frameworks directly informed by live company builds.',
  },
  {
    icon: SpatialIcon,
    title: 'Spatial Health',
    product: 'EYEcercise',
    color: '#06B6D4',
    description: 'Guided eye exercises for spatial computing. VisionOS, iOS, and Meta Quest. Built at the intersection of health and next-platform experiences.',
    url: 'https://eyecercise.com',
  },
];

const ventures = [
  {
    name: 'ReFi Trading',
    category: 'AI Trading',
    description: 'Algorithmic portfolio management with RL agents, zk-VaR compliance engine, and 6-patent portfolio. Backed by non-dilutive capital, raising institutional seed round.',
    status: 'Active',
    screenshot: '/screenshot-refi.png',
    brandColor: '#00D4AA',
    url: 'https://refi.trading',
  },
  {
    name: 'P402',
    category: 'Agent Infrastructure',
    description: 'Middleware intelligence layer routing 300+ AI models with x402 settlement, A2A protocol, and session governance. Published SDK and CLI.',
    status: 'Active',
    screenshot: '/screenshot-p402.png',
    brandColor: '#3B82F6',
    url: 'https://p402.io',
  },
  {
    name: 'EYEcercise',
    category: 'Spatial Health',
    description: 'Guided eye exercises for spatial computing. VisionOS, iOS, and Meta Quest compatible.',
    status: 'Building',
    screenshot: '/screenshot-eyecercise.png',
    brandColor: '#06B6D4',
    url: 'https://eyecercise.com',
  },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField className="opacity-60" particleCount={80} connectionDistance={120} />

        <div className="absolute inset-0 mesh-gradient" />

        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px]">
          <MolecularOrb size={600} />
        </div>

        <div className="absolute bottom-1/4 -left-48 w-[400px] h-[400px] opacity-50">
          <MolecularOrb size={400} delay={2} />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-label mb-8"
            >
              <Shield className="w-4 h-4" />
              Infrastructure for Autonomous Finance
            </motion.div>

            <h1 className="hero-text-large mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block text-gradient"
              >
                First Principles.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-white"
              >
                Lasting Impact.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="body-large max-w-2xl mb-12"
            >
              We build the infrastructure stack for autonomous finance --
              agentic payments, algorithmic trading, and automated compliance.
              From protocol to application, from first principles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/thesis" className="btn-primary flex items-center justify-center gap-3 group">
                <span>Read the Builder Thesis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/studio" className="btn-secondary flex items-center justify-center gap-2">
                <span>Explore the Studio</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border border-[var(--color-border)] rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-[var(--color-primary)] rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-20">
            <h2 className="display-text mb-6">
              The <span className="text-gradient-static">Stack</span>
            </h2>
            <p className="body-large">
              Four interlocking pillars of infrastructure. AI agents need payment rails.
              Traders need institutional-grade algorithms. Financial systems need compliance
              embedded in the architecture. And courses informed by live company builds
              keep the R&D pipeline flowing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="glass-card-interactive rounded-2xl p-10 h-full card-spotlight"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${pillar.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                    </motion.div>
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: pillar.color }}
                      >
                        {pillar.product}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  {pillar.url && (
                    <a
                      href={pillar.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                      style={{ color: pillar.color }}
                    >
                      Visit {pillar.product}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 molecular-grid" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-30">
          <MolecularOrb size={500} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="section-label mb-6">
                <Rocket className="w-4 h-4" />
                Studio Companies
              </div>
              <h2 className="display-text">
                What We're <span className="text-gradient-static">Building</span>
              </h2>
            </div>
            <Link
              to="/studio"
              className="flex items-center gap-2 text-[var(--color-primary)] hover:gap-4 transition-all font-semibold text-lg group"
            >
              View All
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {ventures.map((venture, i) => (
              <AnimatedSection key={venture.name}>
                <motion.a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12 }}
                  className="block glass-card-interactive rounded-3xl overflow-hidden group h-full"
                >
                  <div className="relative h-52 overflow-hidden bg-[var(--color-bg-primary)]">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at center, ${venture.brandColor} 0%, transparent 70%)`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-3xl font-bold tracking-tight"
                        style={{ color: venture.brandColor }}
                      >
                        {venture.name}
                      </span>
                    </div>
                    <img
                      src={venture.screenshot}
                      alt={`${venture.name} screenshot`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="tag backdrop-blur-md">{venture.category}</span>
                      <span className={`tag backdrop-blur-md ${
                        venture.status === 'Active'
                          ? 'bg-[var(--color-success)]/30 text-[var(--color-success)] border-[var(--color-success)]/30'
                          : 'bg-[var(--color-warning)]/30 text-[var(--color-warning)] border-[var(--color-warning)]/30'
                      }`}>
                        {venture.status}
                      </span>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, ${venture.brandColor}, transparent)` }}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                      {venture.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {venture.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-[var(--color-primary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <motion.div
                  className="absolute -inset-3 rounded-[2rem]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(74,144,217,0.3) 0%, transparent 40%, transparent 60%, rgba(74,144,217,0.3) 100%)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  className="absolute -inset-px rounded-3xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['-100% 0%', '200% 0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
                <motion.div
                  className="relative z-10 rounded-3xl overflow-hidden bg-[var(--color-bg-secondary)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/first-principles.webp"
                    alt="First Principles Design Philosophy"
                    className="w-full rounded-3xl"
                  />
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--color-primary)]/50 rounded-tl-3xl"
                      initial={{ opacity: 0, x: -10, y: -10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--color-primary)]/50 rounded-tr-3xl"
                      initial={{ opacity: 0, x: 10, y: -10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--color-primary)]/50 rounded-bl-3xl"
                      initial={{ opacity: 0, x: -10, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--color-primary)]/50 rounded-br-3xl"
                      initial={{ opacity: 0, x: 10, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[var(--color-primary)]/10 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                className="section-label mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GraduationCap className="w-4 h-4" />
                Teaching & R&D
              </motion.div>
              <h2 className="display-text mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  Courses{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-gradient-static inline-block"
                >
                  Informed
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  {' '}by{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gradient-static inline-block"
                >
                  Live Builds
                </motion.span>
              </h2>
              <motion.p
                className="body-large mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                The same product development methodology used to build ReFi Trading and P402
                is taught at Kutaisi International University. The classroom is the R&D lab.
                The products are the curriculum.
              </motion.p>

              <ul className="space-y-5 mb-10">
                {[
                  'AI-Powered Software Development',
                  'Product Development for Software Engineers',
                  'Digital Disruption, Innovation & Transformation (MBA)',
                  'Nvidia Deep Learning Certified Instruction',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-[var(--color-primary)]"
                      whileInView={{
                        boxShadow: [
                          '0 0 0px var(--color-primary)',
                          '0 0 15px var(--color-primary)',
                          '0 0 8px var(--color-primary)',
                        ],
                      }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                    <span className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to="/about" className="btn-primary inline-flex items-center gap-3 group">
                  <span>Meet the Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <ParticleField className="opacity-40" particleCount={50} connectionDistance={100} />
        <div className="absolute inset-0 mesh-gradient" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(74,144,217,0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <motion.h2
              className="hero-text mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block"
              >
                See the Same
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
                className="text-gradient block"
              >
                Infrastructure Gap
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                ?
              </motion.span>
            </motion.h2>
            <motion.p
              className="body-large mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Whether you are a VC, technical partner, or potential customer --
              if autonomous finance needs infrastructure you know how to build,
              we should talk.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-3 group">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/thesis" className="btn-secondary flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Read the Thesis</span>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
