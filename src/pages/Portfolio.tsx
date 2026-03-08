import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Filter, ArrowUpRight, Rocket, Globe } from 'lucide-react';
import ParticleField from '../components/ParticleField';

const categories = ['All', 'Active', 'Building', 'Exited', 'Open Finance', 'AI-Native', 'Spatial', 'EdTech'];

const portfolio = [
  {
    id: 1,
    name: 'ReFi.Trading',
    category: 'Open Finance',
    fund: 'Studio Built',
    stage: 'Co-Founded',
    status: 'Active',
    year: '2025',
    tagline: 'Wall-Street AI, Radically Accessible',
    description: 'Institutional-grade AI trading with self-custodied execution. zk-VaR engine, 6-patent portfolio, and RL agents with 28% CAGR.',
    longDescription: 'Algorithmic portfolio management platform powered by reinforcement learning agents with backtested 28% CAGR and 2.07 Sharpe ratio. Features a proprietary zk-VaR engine (zero-knowledge Value-at-Risk) for cryptographic risk verification, 6-patent portfolio (1 USPTO filed, 5 drafted), and self-custodied execution via ERC-4337. Raising $2.45M seed at $15M post-money. Targeting UAE ADGM Category 3A licensing with SOC-2 preparation.',
    features: [
      'zk-VaR cryptographic risk engine',
      '6-patent portfolio (1 filed)',
      '28% CAGR, 2.07 Sharpe (3yr)',
      'ADGM Category 3A licensing',
    ],
    screenshot: '/screenshot-refi.png',
    brandColor: '#00D4AA',
    tags: ['AI Trading', 'FinTech', 'Zero-Knowledge', 'USPTO Patent'],
    website: 'https://refi.trading',
    featured: true,
  },
  {
    id: 2,
    name: 'P402 Router',
    category: 'Open Finance',
    fund: 'Studio Built',
    stage: 'Launched',
    status: 'Active',
    year: '2024',
    tagline: 'Middleware Intelligence for the Agentic Economy',
    description: 'Routes across 300+ AI models with session budgets, AP2 mandate governance, and x402 settlement on Base.',
    longDescription: 'P402 is a middleware intelligence layer that routes across 300+ AI models (Claude Opus 4.6, GPT-5.4, Gemini 3 Pro, DeepSeek V3, Groq) with four optimization modes (cost, quality, speed, balanced). Implements the Google A2A agent-to-agent protocol with .well-known/agent.json discovery, provides session budgets and AP2 mandate governance for autonomous spending, and settles via x402 (HTTP 402 Payment Required) using gasless USDC on Base L2 with EIP-3009. Published SDK (@p402/sdk) and CLI (@p402/cli).',
    features: [
      '300+ model routing (4 modes)',
      'Google A2A protocol',
      '@p402/sdk & @p402/cli',
      'x402 gasless settlement',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#3B82F6',
    tags: ['x402', 'A2A Protocol', 'Base L2', 'Agent Commerce', '300+ Models'],
    website: 'https://p402.io',
    featured: true,
  },
  {
    id: 3,
    name: 'P402.shop',
    category: 'AI-Native',
    fund: 'Studio Built',
    stage: 'Launched',
    status: 'Active',
    year: '2024',
    tagline: 'AI API Marketplace & Stack Builder',
    description: 'Compare 50+ AI APIs, build optimized stacks, and save up to 30% on AI infrastructure costs.',
    longDescription: 'P402.shop is a web-based marketplace helping developers discover and evaluate 50+ AI APIs including GPT-5.4, Claude Opus 4.6, Gemini 3.1, and Llama 4. Features include side-by-side comparison tools, AI-powered recommendation wizard, cost calculators showing ROI potential, and pay-per-call pricing eliminating subscription overhead.',
    features: [
      '50+ AI APIs compared',
      '30% average savings',
      'Pay-per-call pricing',
      'Stack builder tool',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#3B82F6',
    tags: ['AI APIs', 'Developer Tools', 'Cost Optimization'],
    website: 'https://p402.shop',
    featured: false,
  },
  {
    id: 4,
    name: 'EYEcercise',
    category: 'Spatial',
    fund: 'Studio Built',
    stage: 'In Development',
    status: 'Building',
    year: '2024',
    tagline: 'Spatial Computing Eye Health',
    description: 'AR/VR application for Apple VisionPro using Unity AI engine. Guided eye exercises combat digital eye strain.',
    longDescription: 'EYEcercise delivers intentional movement patterns like smooth pursuit and saccades to maintain visual flexibility and reduce strain. Features depth shifting focus training, smooth pursuit tracking, and peripheral awareness expansion. Built with React, Framer Motion, and Unity for cross-platform deployment on VisionOS, iOS, and Meta Quest.',
    features: [
      'VisionOS native',
      'Meta Quest support',
      'iOS & web apps',
      'Unity AI engine',
    ],
    screenshot: '/screenshot-eyecercise.png',
    brandColor: '#06B6D4',
    tags: ['VisionOS', 'Meta Quest', 'HealthTech', 'Unity'],
    website: 'https://eyecercise.com',
    featured: false,
  },
  {
    id: 5,
    name: 'Fan City / Puck.City',
    category: 'Open Finance',
    fund: 'Studio Built',
    stage: 'Launched',
    status: 'Active',
    year: '2022',
    tagline: 'Sports Fan FinTech Engagement Platform',
    description: 'Next-generation sports tech staking platform for fan engagement using cross-chain oracles.',
    longDescription: 'Platform architect for sports fan engagement and fintech platform. Completed Outlier Ventures accelerator (Q4 2022) and selected for Chainlink Build program. Enables fans to stake, engage, and earn through decentralized sports prediction markets.',
    features: [
      'Outlier Ventures accelerator',
      'Chainlink Build program',
      'Cross-chain oracles',
      'Staking platform',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#FF6B35',
    tags: ['Sports Tech', 'FinTech', 'Chainlink', 'Blockchain'],
    website: 'https://puck.city',
    featured: false,
  },
  {
    id: 6,
    name: 'HazelHearts.xyz',
    category: 'Open Finance',
    fund: 'Studio Built',
    stage: 'Launched',
    status: 'Active',
    year: '2022',
    tagline: 'Blockchain Gaming with Real-World Rewards',
    description: 'Web3-based farming simulation with AI agent architecture, launched 1,000 generative NFTs via Polygon.',
    longDescription: 'Blockchain gaming platform featuring real-world rewards and AI agent architecture. Successfully launched 1,000 generative NFTs on Polygon network and reached 2,000 monthly active users within first three months. Gamified reward systems with authenticated asset transactions.',
    features: [
      '1,000 NFTs launched',
      '2,000+ monthly users',
      'AI agent architecture',
      'Real-world rewards',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#9B59B6',
    tags: ['Gaming', 'NFTs', 'Polygon', 'AI Agents'],
    website: 'https://hazelhearts.xyz',
    featured: false,
  },
  {
    id: 7,
    name: 'Wholesome Linen',
    category: 'Previous',
    fund: 'Co-Founded',
    stage: 'Exited 2021',
    status: 'Exited',
    year: '2015-2021',
    tagline: 'Sustainable DTC Bedding Brand',
    description: 'Co-founded and scaled two direct-to-consumer bedding brands to $4M+ in sales before successful exit.',
    longDescription: 'Direct-to-consumer e-commerce venture using sustainable materials. Scaled to $4M+ in sales over six years and secured features in major architectural and lifestyle publications. Successfully exited in 2021.',
    features: [
      '$4M+ in sales',
      'Featured in major publications',
      'Sustainable materials',
      'Successful exit 2021',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#2ECC71',
    tags: ['E-commerce', 'DTC', 'Sustainable', 'Exit'],
    website: '#',
    featured: false,
  },
  {
    id: 8,
    name: 'Peak Venture Partners',
    category: 'Previous',
    fund: 'Track Record',
    stage: 'Investment Officer',
    status: 'Exited',
    year: '2009-2015',
    tagline: 'Private Equity Investment',
    description: 'Generated $1.2B+ wealth for investors across real estate, CPG, technology, media, and fintech sectors.',
    longDescription: 'Senior Investment Officer at private equity firm. Led $328M M&A transaction for Aman Resorts luxury hotel chain, Summit Entertainment investment (later acquired by Lionsgate for $412M), and managed real estate and CPG portfolio.',
    features: [
      '$1.2B+ wealth generated',
      '$328M Aman Resorts deal',
      'Summit Entertainment ($412M exit)',
      'Multi-sector portfolio',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#34495E',
    tags: ['Private Equity', 'M&A', 'Real Estate', 'Media'],
    website: '#',
    featured: false,
  },
  {
    id: 9,
    name: 'CharityDreams.com',
    category: 'Previous',
    fund: 'Track Record',
    stage: 'Project Lead',
    status: 'Exited',
    year: '2010',
    tagline: 'Celebrity Charity Auction Platform',
    description: 'Led celebrity charity auction platform generating $4 million for various charitable causes.',
    longDescription: 'Project leadership for online celebrity charity auction platform. Successfully generated $4 million through auctions featuring experiences with celebrities and athletes, benefiting various humanitarian causes worldwide.',
    features: [
      '$4M raised for charity',
      'Celebrity partnerships',
      'Online auction platform',
      'Global impact',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#E74C3C',
    tags: ['Charity', 'E-commerce', 'Social Impact', 'Celebrity'],
    website: '#',
    featured: false,
  },
  {
    id: 10,
    name: 'Key Capital Partners',
    category: 'Previous',
    fund: 'Track Record',
    stage: 'Consultant',
    status: 'Exited',
    year: '2007-2009',
    tagline: 'Cross-Border Investment Advisory',
    description: 'Pioneered online property title transaction system for Dubai Land Department, digitizing real estate processes.',
    longDescription: 'Cross-border investment advisory and management consulting. Architected software for UAE primary property developer, creating pioneering online property title transaction system that digitized land title records and enabled online real estate transactions for Dubai Land Department.',
    features: [
      'Dubai Land Department system',
      'Property title digitization',
      'Online transactions',
      'Government partnership',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#16A085',
    tags: ['Real Estate', 'GovTech', 'Dubai', 'Software'],
    website: '#',
    featured: false,
  },
  {
    id: 11,
    name: 'Symstream Technology Group',
    category: 'Previous',
    fund: 'Track Record',
    stage: 'VP Comms/BizDev',
    status: 'Exited',
    year: '2005-2007',
    tagline: 'Banking Infrastructure for Emerging Markets',
    description: 'Wireless connectivity enabling mobile banking in rural areas. Brought modern financial services to underserved populations.',
    longDescription: 'VP Communications and Business Development at Melbourne-based FinTech infrastructure company. Deployed GSM-connected point-of-sale terminals enabling major banks to offer micro-banking services in remote areas without traditional banking infrastructure. Early pioneer in mobile money and financial inclusion technology.',
    features: [
      'Rural banking connectivity',
      'GSM wireless modems',
      'Micro-banking enablement',
      'Financial inclusion',
    ],
    screenshot: '/screenshot-p402.png',
    brandColor: '#27AE60',
    tags: ['FinTech', 'Telecom', 'Financial Inclusion', 'Melbourne'],
    website: '#',
    featured: false,
  },
];

function PortfolioCard({ company, index }: { company: typeof portfolio[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12 }}
      className={`block glass-card-interactive rounded-3xl overflow-hidden group ${
        company.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className={`relative ${company.featured ? 'h-64' : 'h-48'} overflow-hidden bg-[var(--color-bg-primary)]`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at center, ${company.brandColor} 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-3xl font-bold tracking-tight"
            style={{ color: company.brandColor }}
          >
            {company.name}
          </span>
        </div>
        <img
          src={company.screenshot}
          alt={`${company.name} screenshot`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/20 to-transparent" />
        <motion.div
          className="absolute top-5 left-5 flex flex-wrap gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <span className="tag backdrop-blur-md">{company.category}</span>
          <span className="tag backdrop-blur-md">{company.stage}</span>
          <span className={`tag backdrop-blur-md ${
            company.status === 'Active'
              ? 'bg-[var(--color-success)]/30 text-[var(--color-success)] border-[var(--color-success)]/30'
              : 'bg-[var(--color-warning)]/30 text-[var(--color-warning)] border-[var(--color-warning)]/30'
          }`}>
            {company.status}
          </span>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, ${company.brandColor}, transparent)` }}
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
        />
      </div>

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <motion.h3
              className="text-2xl font-bold group-hover:text-[var(--color-primary)] transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {company.name}
            </motion.h3>
            <motion.p
              className="text-sm font-medium mt-1"
              style={{ color: company.brandColor }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {company.tagline}
            </motion.p>
          </div>
          <span className="text-[var(--color-text-muted)] text-sm">{company.year}</span>
        </div>

        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          {company.featured ? company.longDescription : company.description}
        </p>

        {company.features && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {company.features.map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: company.brandColor }}
                  animate={isInView ? {
                    boxShadow: [
                      `0 0 0px ${company.brandColor}`,
                      `0 0 8px ${company.brandColor}`,
                      `0 0 4px ${company.brandColor}`,
                    ],
                  } : {}}
                  transition={{ delay: index * 0.1 + 0.6 + i * 0.05, duration: 0.6 }}
                />
                <span className="text-xs text-[var(--color-text-muted)]">{feature}</span>
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {company.tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="text-xs px-3 py-1 bg-white/5 text-[var(--color-text-muted)] rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.5 + i * 0.03 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[var(--color-primary)] font-medium opacity-0 group-hover:opacity-100 transition-all">
          <span>Visit Website</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const filteredPortfolio = activeFilter === 'All'
    ? portfolio
    : activeFilter === 'Active' || activeFilter === 'Building' || activeFilter === 'Exited'
    ? portfolio.filter((c) => c.status === activeFilter)
    : portfolio.filter((c) => c.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden">
        <ParticleField className="opacity-40" particleCount={60} />
        <div className="absolute inset-0 mesh-gradient" />

        <div ref={headerRef} className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-label mx-auto mb-8"
            >
              <Rocket className="w-4 h-4" />
              Studio Companies
            </motion.div>
            <h1 className="hero-text mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gradient inline-block"
              >
                The Studio
              </motion.span>
            </h1>
            <motion.p
              className="body-large max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Companies we've built and are building. From open finance infrastructure to spatial computing,
              these are ventures created with first principles thinking.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <Filter className="w-4 h-4 text-[var(--color-text-muted)] mr-2" />
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                initial={{ opacity: 0, y: 10 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-[var(--color-primary)] text-white shadow-[0_0_20px_rgba(74,144,217,0.3)]'
                    : 'bg-white/5 text-[var(--color-text-secondary)] hover:bg-white/10 hover:text-white border border-transparent hover:border-[var(--color-border)]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {filteredPortfolio.map((company, index) => (
                <PortfolioCard key={company.id} company={company} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPortfolio.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Globe className="w-16 h-16 text-[var(--color-primary)]/30 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[var(--color-text-secondary)] mb-2">
                No ventures in this category
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Try selecting a different filter
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
