import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Linkedin,
  ArrowRight,
  GraduationCap,
  Briefcase,
  BookOpen,
} from 'lucide-react';
import ParticleField from '../components/ParticleField';

const team = [
  {
    name: 'Zeshan Ahmad',
    role: 'Managing Partner',
    bio: 'Technical founder with 20+ years building financial infrastructure. Co-founded ReFi.Trading (USPTO patent for AI trading systems), deployed mobile banking to rural markets at Symstream, and led $1.2B+ in transactions at Peak Venture Partners. Professor at Kutaisi International University teaching AI, blockchain, and product development.',
    image: '/zeshan-bio-photo-2022-square.jpg',
    additionalImages: [
      '/zeshan-degamefi.webp',
      '/555681785_10161866851656408_4519368290982062114_n.jpg',
    ],
    linkedin: 'https://linkedin.com/in/zeshan',
    experience: [
      'Generated $1.2B+ in transactions and wealth at Peak Venture Partners (M&A, venture capital)',
      'USPTO patent: ZK-verified AI trading system (28% CAGR, 2.07 Sharpe backtested)',
      'Deployed mobile banking infrastructure to underserved markets (Symstream, Melbourne)',
      'Outlier Ventures and Chainlink Build Program Alumni',
      'Scaled e-commerce brand to $4M+ revenue before successful exit',
      'Nvidia Deep Learning Certified Instructor',
      'Finalist: Web Summit 2026 Impact Startup Showcase & Coindesk Consensus Pitchfest 2023',
    ],
    teaching: [
      {
        course: 'AI Powered Software Development',
        type: 'Elective, Computer Sciences',
        status: 'Current',
      },
      {
        course: 'Product Development for Software Engineers',
        type: 'Elective, Computer Sciences',
        status: 'Current',
      },
      {
        course: 'Digital Disruption, Innovation and Transformation',
        type: 'Elective, MBA',
        status: 'Current',
      },
      {
        course: 'Cryptography, Blockchain and Smart Contracts Fundamentals',
        type: 'Elective, Computer Sciences',
        status: 'Previously',
      },
    ],
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

export default function Team() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden">
        <ParticleField className="opacity-40" particleCount={50} />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="section-label mx-auto mb-8">
              <Users className="w-4 h-4" />
              Leadership
            </div>
            <h1 className="hero-text mb-8">
              Meet the <span className="text-gradient">Team</span>
            </h1>
            <p className="body-large max-w-2xl mx-auto">
              Experienced operators and investors building at the intersection of
              technology and finance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {team.map((member, i) => (
              <AnimatedSection key={member.name}>
                <div className={`grid lg:grid-cols-2 gap-16 items-start ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="relative aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[var(--color-primary)]/20 -z-10" />
                    </motion.div>
                  </div>

                  <div>
                    <motion.h2
                      className="text-4xl lg:text-5xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {member.name}
                    </motion.h2>
                    <p className="text-[var(--color-primary)] text-xl font-medium mb-6">
                      {member.role}
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                      {member.bio}
                    </p>

                    <div className="mb-8">
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                        <Briefcase className="w-4 h-4" />
                        Experience
                      </h4>
                      <ul className="space-y-3">
                        {member.experience.map((exp) => (
                          <li key={exp} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 shadow-[0_0_8px_var(--color-primary)]" />
                            <span className="text-[var(--color-text-secondary)]">{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {member.teaching && (
                      <div className="mb-8">
                        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                          <GraduationCap className="w-4 h-4" />
                          Academic - Kutaisi International University
                        </h4>
                        <div className="space-y-4">
                          {member.teaching.map((course) => (
                            <div
                              key={course.course}
                              className="glass-card rounded-xl p-4"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h5 className="font-semibold text-white mb-1">
                                    {course.course}
                                  </h5>
                                  <p className="text-sm text-[var(--color-text-muted)]">
                                    {course.type}
                                  </p>
                                </div>
                                <span className={`tag text-xs ${
                                  course.status === 'Current'
                                    ? 'bg-[var(--color-success)]/20 text-[var(--color-success)] border-[var(--color-success)]/30'
                                    : 'bg-white/5 text-[var(--color-text-muted)] border-white/10'
                                }`}>
                                  {course.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {member.linkedin && member.linkedin !== '#' && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:gap-3 transition-all font-medium"
                      >
                        <Linkedin className="w-5 h-5" />
                        Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </div>

                {member.additionalImages && member.additionalImages.length > 0 && (
                  <AnimatedSection className="mt-16">
                    <div className="grid grid-cols-2 gap-6">
                      {member.additionalImages.map((img, idx) => (
                        <motion.div
                          key={img}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="relative aspect-square rounded-2xl overflow-hidden"
                        >
                          <img
                            src={img}
                            alt={`${member.name} ${idx + 2}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)]/60 via-transparent to-transparent" />
                        </motion.div>
                      ))}
                    </div>
                  </AnimatedSection>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="section-label mx-auto mb-8">
              <BookOpen className="w-4 h-4" />
              Join Us
            </div>
            <h2 className="display-text mb-8">
              Let's Build <span className="text-gradient-static">Together</span>
            </h2>
            <p className="body-large mb-12">
              Whether you're a founder, investor, or industry expert, we'd love to connect
              and explore opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="btn-primary flex items-center justify-center gap-3 group">
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center justify-center">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
