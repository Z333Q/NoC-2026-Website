import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ExternalLink, Copy, Check, Download, Gamepad2 } from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';
import MolecularOrb from '../components/MolecularOrb';

const EMAIL = 'zeshan@natureofcommerce.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/zeshanahmad';
const X_URL = 'https://x.com/NatureofCommerce';
const HEADSHOT = '/zeshan-ahmad-headshot.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

const momentum = [
  'September 14 to 16, 2026. Metergrade featured at Money20/20 Middle East in Riyadh.',
  'September 16 to 17, 2026. ReFi Trading named one of Canada\u2019s Top 100 AI Startups at ALL IN, Montreal, selected as a Top 10 startup by Osler, and presenting on the Pitch Stage.',
  'October 6, 2026. ReFi Trading featured at the Amii Startup Spotlight in Edmonton, kicking off Edmonton Startup Week.',
  '2026. Metergrade accepted into the NVIDIA Inception program.',
];

const questions = [
  {
    number: '1',
    title: 'What does it cost?',
    text: 'Machine work consumes real money at machine speed. Most organizations cannot attribute their AI spend to an accountable workload, and what cannot be attributed cannot be governed.',
  },
  {
    number: '2',
    title: 'Can it be proven safe?',
    text: '"Trust me" does not survive contact with regulators or markets. When software makes financial decisions, control has to be cryptographically provable, not promised in the terms of service.',
  },
  {
    number: '3',
    title: 'Who directs it?',
    text: 'Infrastructure without capable people is a liability. The durable skills of the AI era are product thinking, judgment, and taste: knowing what to build, and directing machines to build it.',
  },
];

const transmission = [
  {
    label: 'The boardroom',
    text: 'Designed and delivered a multi-day AI adoption programme for the leadership of a European banking group operating in Georgia. Separate tracks for IT leadership and back-office leadership, a combined cross-functional session, and more than forty bespoke materials covering AI strategy, platform and model selection, governance, and the shift from operational use of AI to transformational thinking about how work is structured. Corporate programmes are designed per engagement and delivered under the client\u2019s own brand.',
  },
  {
    label: 'The lecture hall',
    text: 'Professor at Kutaisi International University, teaching blockchain, AI-powered software development, and product thinking to computer science and MBA students. NVIDIA Deep Learning Institute certified educator.',
  },
  {
    label: 'The classroom',
    text: 'Curriculum architect for Steve Jobs American Academy in Tbilisi. Designed the framework for AI-Powered Product Development for Young Creators, a 52-module course for students aged twelve to sixteen that replaces traditional coding tracks with product discovery, AI-directed development, and a capstone that runs from the third module to Demo Day.',
  },
];

const shortBio =
  'Zeshan Ahmad builds the control layer for the machine economy: inventor of Metergrade, co-founder of ReFi Trading, and creator of the P402 agentic payments research. A professor at Kutaisi International University, he teaches AI-directed product thinking from the classroom to the boardroom. Twenty years in financial infrastructure across three continents.';

const fullBio =
  'Zeshan Ahmad is a technical founder and educator building the control layer for the machine economy. He is the inventor of Metergrade, the economic control plane for AI built for Azure and a member of the NVIDIA Inception program, and co-founder of ReFi Trading, named one of Canada\u2019s Top 100 AI Startups at ALL IN 2026 and a Top 10 selection by Osler. A professor at Kutaisi International University, he designs AI curricula from the school classroom through executive education. He has spent more than twenty years building financial infrastructure across three continents and is based in Edmonton, Canada.';

const contactLines = [
  { label: 'Venture and investment enquiries', subject: 'Venture%20enquiry' },
  { label: 'Speaking and press', subject: 'Speaking%20and%20press' },
  { label: 'Training and curriculum engagements', subject: 'Training%20enquiry' },
];

function CopyBioButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-white transition-colors"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? 'Copied' : 'Copy bio'}
    </button>
  );
}

export default function Home() {
  useSeoMeta({
    title: 'Nature of Commerce | Zeshan Ahmad. The Control Layer for the Machine Economy',
    description:
      'Commerce is changing its nature. Zeshan Ahmad builds the control layer for the machine economy, inventor of Metergrade, co-founder of ReFi Trading, creator of P402, and educator teaching AI-directed product thinking from the classroom to the boardroom.',
    canonical: 'https://natureofcommerce.com/',
    keywords: 'Zeshan Ahmad, Nature of Commerce, Metergrade, ReFi Trading, P402, machine economy, agentic payments, AI control plane',
  });

  return (
    <main className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center blueprint-grid pt-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 opacity-50">
            <MolecularOrb size={520} delay={0} />
          </div>
          <div
            className="glow-orb w-[500px] h-[500px] top-1/2 -translate-y-1/2 right-0 opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(74,144,217,0.35) 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-sm font-medium tracking-wide text-[var(--color-text-secondary)] mb-6"
          >
            Zeshan Ahmad
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="hero-text-large max-w-[16ch] mb-8"
          >
            Commerce is changing its <span className="text-gradient">nature.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="body-large max-w-[52ch] mb-12"
          >
            AI agents now spend, trade, and decide at machine speed. I build the control layer for the
            machine economy, and I train the people who will direct it.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#thesis" className="btn-primary flex items-center gap-2">
              <span>The thesis</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#work" className="btn-secondary flex items-center gap-2">
              <span>The work</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: MOMENTUM TICKER */}
      <section id="signals" className="py-8 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-5 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-primary)]" />
          </span>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Latest momentum
          </h2>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[var(--color-bg-secondary)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[var(--color-bg-secondary)] to-transparent" />
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
          >
            {[...momentum, ...momentum].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]/70 flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE THESIS */}
      <section id="thesis" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="display-text max-w-4xl mb-16"
          >
            An economy of autonomous actors has three questions to answer.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {questions.map((q, i) => (
              <motion.div
                key={q.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="text-5xl font-bold text-[var(--color-primary)]/30 font-mono mb-5">{q.number}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{q.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{q.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-white text-center max-w-3xl mx-auto mt-20"
          >
            Everything I build and teach answers one of these three.
          </motion.p>
        </div>
      </section>

      {/* SECTION 4: THE PROOF */}
      <section id="work" className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mb-20">
            <h2 className="display-text mb-6">The work</h2>
            <p className="body-large">
              Three ventures, each an answer. Each operates as its own entity with its own team and roadmap.
            </p>
          </motion.div>

          {/* Metergrade */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-start mb-24"
          >
            <div className="lg:col-span-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Question one, answered.
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Metergrade</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Inventor. Metergrade Inc is an independent company.
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Metergrade is the economic control plane for AI, built for Azure. It meters what every AI
                workload costs, grades every proposed change against the organization’s own quality
                thresholds, and ships proven improvements as Azure API Management policy through the
                controls teams already trust. Nothing new sits in the request path, and nothing ships
                without a passing grade.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-[var(--color-text-secondary)]">NVIDIA Inception member.</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Featured at Money20/20 Middle East, Riyadh, September 2026.</p>
              </div>
              <a
                href="https://metergrade.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                metergrade.com
              </a>
            </div>
          </motion.div>

          {/* ReFi Trading (alternating) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-start mb-24"
          >
            <div className="lg:col-span-8 lg:order-2">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                ReFi Trading is an AI-powered trading platform built on reinforcement learning agents that
                adapt strategies in real time. Every trade executes inside cryptographically verified risk
                limits enforced through zero-knowledge proofs, in a secure, non-custodial wallet.
                Autonomous trading with safety proven at the protocol level.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-[var(--color-text-secondary)]">Canada’s Top 100 AI Startups, ALL IN 2026.</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Top 10 selection by Osler, Pitch Stage, Montreal.</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Featured at the Amii Startup Spotlight, Edmonton Startup Week 2026.</p>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="https://play.refi.trading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  play.refi.trading
                </a>
                <a
                  href="https://game.refi.trading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
                >
                  <Gamepad2 className="w-4 h-4" />
                  Man vs Machine: play the game
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 lg:order-1">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Question two, answered.
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">ReFi Trading</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Co-founder.</p>
            </div>
          </motion.div>

          {/* Man vs Machine game callout */}
          <motion.a
            href="https://game.refi.trading"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative block overflow-hidden rounded-2xl border border-[var(--color-primary)]/30 p-8 md:p-10 mb-24"
            style={{ background: 'linear-gradient(135deg, rgba(74,144,217,0.12) 0%, rgba(10,10,16,0.85) 60%)' }}
          >
            <div
              className="glow-orb w-[360px] h-[360px] -top-24 -right-24 opacity-30 group-hover:opacity-50 transition-opacity"
              style={{ background: 'radial-gradient(circle, rgba(74,144,217,0.5) 0%, transparent 70%)' }}
            />
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 flex items-center justify-center">
                <Gamepad2 className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Try it yourself
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Man vs Machine
                </h3>
                <p className="text-[var(--color-text-secondary)] max-w-xl">
                  Trade against ReFi Trading&rsquo;s reinforcement learning agent and see whether human
                  instinct can beat the machine. A two-minute way to feel the thesis in action.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold group-hover:text-white transition-colors">
                <span>Play now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* P402 (subordinate) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl border-t border-[var(--color-border)] pt-12"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
              Where the questions converge.
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">P402</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-5">Creator.</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              P402 is protocol research in agentic payments built on the x402 pattern: rails that let
              autonomous agents transact, settle, and prove compliance without a human in the loop. At the
              point of payment, cost, safety, and human oversight meet. This research is the connective
              tissue of the portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: THE TRANSMISSION */}
      <section id="teaching" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mb-16">
            <h2 className="display-text mb-6">The teaching</h2>
            <p className="body-large">
              Question three cannot be answered with software. It is answered with people. I teach the same
              discipline at every altitude, and each level sharpens the others.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {transmission.map((entry, i) => (
              <motion.div
                key={entry.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`relative pl-8 pb-12 border-l border-[var(--color-border)] ${i === transmission.length - 1 ? 'border-l-transparent' : ''}`}
              >
                <span className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                <h3 className="text-xl font-bold text-white mb-3">{entry.label}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{entry.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-white text-center max-w-3xl mx-auto mt-8"
          >
            The same idea, taught from age twelve to the executive floor: direct the machine, don’t compete with it.
          </motion.p>
        </div>
      </section>

      {/* SECTION 6: THE PERSON */}
      <section id="about" className="section-padding bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1">
              <img
                src={HEADSHOT}
                alt="Zeshan Ahmad"
                width={480}
                height={600}
                loading="lazy"
                className="w-full max-w-xs rounded-2xl object-cover border border-[var(--color-border)]"
              />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="md:col-span-2 max-w-2xl">
              <h2 className="display-text mb-8">About</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Zeshan Ahmad has spent more than twenty years building financial infrastructure across three
                continents: payments and financial systems first, then decentralized finance, now the agent
                economy. The arc is consistent. Each generation of commerce needed its trust layer built, and
                he built for all three.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                The name is three centuries old. Richard Cantillon’s 1730 Essai sur la Nature du Commerce
                en Général was the first treatise to describe commerce as a system and the entrepreneur
                as its risk-bearer. The nature of commerce is changing again: its newest actors are machines.
                Nature of Commerce LLC exists to build the trust layer for that transition.
              </p>
              <p className="text-[var(--color-text-muted)] text-sm mb-6">
                Based in Edmonton, Canada. Nature of Commerce LLC is registered in Wyoming, USA.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-white transition-colors">
                  X
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PRESS AND SPEAKING */}
      <section id="press" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mb-12">
            <h2 className="display-text mb-6">Press and speaking</h2>
            <p className="body-large">Introducing Zeshan on stage or in print? Use these bios verbatim.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Short bio (50 words)</span>
                <CopyBioButton text={shortBio} />
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{shortBio}</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Full bio (100 words)</span>
                <CopyBioButton text={fullBio} />
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{fullBio}</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a
              href={HEADSHOT}
              download
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              Headshot: download
            </a>
            <span className="text-[var(--color-text-muted)]">
              Press enquiries:{' '}
              <a href={`mailto:${EMAIL}?subject=Speaking%20and%20press`} className="text-[var(--color-primary)] hover:text-white transition-colors">
                {EMAIL}
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT */}
      <section id="contact" className="section-padding bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="display-text mb-10">
            Contact
          </motion.h2>

          <div className="divide-y divide-[var(--color-border)]">
            {contactLines.map((line, i) => (
              <motion.a
                key={line.subject}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                href={`mailto:${EMAIL}?subject=${line.subject}`}
                className="group flex items-center justify-between py-5 text-lg text-[var(--color-text-secondary)] hover:text-white transition-colors"
              >
                <span>{line.label}</span>
                <ArrowRight className="w-5 h-5 text-[var(--color-primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </motion.a>
            ))}
          </div>

          <p className="text-[var(--color-text-muted)] text-sm mt-8">{EMAIL}</p>
        </div>
      </section>
    </main>
  );
}
