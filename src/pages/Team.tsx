import { motion } from 'framer-motion';
import MolecularOrb from '../components/MolecularOrb';

export default function Team() {
  const careerPhases = [
    { era: '2015-2017', title: 'Early Exploration', description: 'Started building websites and exploring web technologies' },
    { era: '2017-2019', title: 'Full-Stack Era', description: 'Transitioned to full-stack development, working with Node.js and React' },
    { era: '2019-2021', title: 'AI Integration', description: 'Pioneered AI integration into web applications' },
    { era: '2021-present', title: 'AI Infrastructure', description: 'Building infrastructure and tools for AI-powered applications' }
  ];

  const cofounders = [
    { name: 'Alex Chen', role: 'CTO', bio: 'Infrastructure and AI systems expert' },
    { name: 'Sam Martinez', role: 'Head of Product', bio: 'Product strategy and user experience' },
    { name: 'Jordan Lee', role: 'VP Engineering', bio: 'Full-stack engineering and scaling' }
  ];

  const credentials = [
    { category: 'Speaking', items: ['AI Summit 2024', 'Web Summit 2023', 'ReactConf 2022'] },
    { category: 'Publications', items: ['MIT Technology Review', 'Nature Machine Intelligence', 'ACM Queue'] },
    { category: 'Awards', items: ['Tech Leader of the Year 2024', 'Innovation Award 2023', 'Developer Choice 2022'] }
  ];

  const teaching = [
    { course: 'Building with AI', institution: 'Stanford University' },
    { course: 'Full-Stack Web Development', institution: 'MIT OpenCourseWare' },
    { course: 'Infrastructure Design', institution: 'Berkeley Online' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
        <MolecularOrb />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Visionary builders pushing the boundaries of AI and web technology
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] p-12">
          <MolecularOrb />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">About Our Leadership</h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Our team brings together decades of experience in full-stack development, AI systems, and innovative product design. We're passionate about building tools that empower developers and organizations to harness the power of AI.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              What drives us is the belief that great technology should be accessible, intuitive, and transformative.
            </p>
          </div>
        </div>
      </section>

      {/* Career Phases */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Career Journey</h2>
        <div className="space-y-4">
          {careerPhases.map((phase, idx) => (
            <motion.div
              key={idx}
              className="row-hover p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] transition-all"
              whileHover={{ x: 8 }}
            >
              <div className="flex items-start gap-4">
                <span className="mono-label text-[var(--color-primary)]">{phase.era}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-[var(--color-text-secondary)]">{phase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Co-founders Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Co-Founders</h2>
        <div className="lg:grid-cols-3 gap-8 grid">
          {cofounders.map((founder, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
              <p className="text-[var(--color-primary)] font-semibold mb-3">{founder.role}</p>
              <p className="text-[var(--color-text-secondary)]">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Recognition & Credentials</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {credentials.map((cred, idx) => (
            <div key={idx}>
              <h3 className="mono-label !text-[var(--color-primary-light)] mb-6">{cred.category}</h3>
              <ul className="space-y-3">
                {cred.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[var(--color-text-secondary)]">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Teaching & Mentorship</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teaching.map((course, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-lg bg-[var(--color-bg-secondary)] hover:bg transition"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-semibold mb-2">{course.course}</h3>
              <p className="text-[var(--color-text-secondary)]">{course.institution}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Join Our Mission</h2>
        <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
          We're always looking for talented individuals who share our passion for building transformative AI-powered tools.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition btn-on-blue">
            Explore Careers
          </button>
          <button className="px-8 py-3 border border-[var(--color-border)] rounded-lg font-semibold hover:border-[var(--color-border-strong)] transition btn-on-blue-ghost">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}