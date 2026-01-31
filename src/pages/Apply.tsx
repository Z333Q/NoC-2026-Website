import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Rocket,
  CheckCircle,
  Loader2,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

const stages = ['Pre-Seed', 'Seed', 'Series A'];
const sectors = ['FinTech', 'Digital Commerce', 'AI/ML', 'HealthTech', 'Spatial Computing', 'Other'];
const fundingRanges = ['$25K - $50K', '$50K - $100K', '$100K - $250K', '$250K - $500K', '$500K+'];
const referralSources = ['Web Search', 'LinkedIn', 'Twitter', 'Referral', 'Conference/Event', 'Other'];

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

export default function Apply() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    linkedIn: '',
    companyName: '',
    website: '',
    stage: stages[0],
    sector: sectors[0],
    fundingRange: fundingRanges[1],
    pitchDeck: '',
    description: '',
    problem: '',
    traction: '',
    team: '',
    referralSource: referralSources[0],
    additionalInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('funding_applications')
        .insert([{
          founder_name: formData.founderName,
          email: formData.email,
          linkedin_url: formData.linkedIn,
          company_name: formData.companyName,
          website: formData.website,
          stage: formData.stage,
          sector: formData.sector,
          funding_range: formData.fundingRange,
          pitch_deck_url: formData.pitchDeck,
          description: formData.description,
          problem_statement: formData.problem,
          traction: formData.traction,
          team_info: formData.team,
          referral_source: formData.referralSource,
          additional_info: formData.additionalInfo,
        }]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error submitting your application. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-32 blueprint-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto px-6 text-center"
        >
          <div className="glass-card rounded-2xl p-12">
            <div className="w-20 h-20 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-[var(--color-success)]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Thank you for applying to Nature of Commerce. We'll review your application
              and get back to you within 2 weeks.
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Check your email for a confirmation message.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden blueprint-grid">
        <div className="glow-orb glow-orb-primary w-[600px] h-[600px] -top-48 right-0 opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="section-label mx-auto mb-6">
              <Rocket className="w-4 h-4" />
              Apply for Funding
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your <span className="text-gradient">Application</span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Building payment infrastructure, AI trading systems, or programmable money? Submit your application
              below. Most founders hear back within one week.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step >= s
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)]'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 rounded transition-all ${
                        step > s ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-bg-tertiary)]'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              {error && (
                <div className="mb-6 p-4 bg-[var(--color-error)]/10 border border-[var(--color-error)]/20 rounded-lg flex items-center gap-3 text-[var(--color-error)] text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {error}
                </div>
              )}

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Founder Information</h2>

                  <div>
                    <label htmlFor="founderName" className="input-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="founderName"
                      required
                      value={formData.founderName}
                      onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                      className="input-field"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="input-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="linkedIn" className="input-label">
                      LinkedIn Profile *
                    </label>
                    <input
                      type="url"
                      id="linkedIn"
                      required
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                      className="input-field"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label htmlFor="referralSource" className="input-label">
                      How did you hear about us?
                    </label>
                    <select
                      id="referralSource"
                      value={formData.referralSource}
                      onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                      className="input-field"
                    >
                      {referralSources.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Company Details</h2>

                  <div>
                    <label htmlFor="companyName" className="input-label">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="input-field"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="input-label">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="input-field"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="stage" className="input-label">
                        Stage *
                      </label>
                      <select
                        id="stage"
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className="input-field"
                      >
                        {stages.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sector" className="input-label">
                        Sector *
                      </label>
                      <select
                        id="sector"
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="input-field"
                      >
                        {sectors.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fundingRange" className="input-label">
                      Funding Amount Sought *
                    </label>
                    <select
                      id="fundingRange"
                      value={formData.fundingRange}
                      onChange={(e) => setFormData({ ...formData, fundingRange: e.target.value })}
                      className="input-field"
                    >
                      {fundingRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pitchDeck" className="input-label">
                      Pitch Deck URL
                    </label>
                    <input
                      type="url"
                      id="pitchDeck"
                      value={formData.pitchDeck}
                      onChange={(e) => setFormData({ ...formData, pitchDeck: e.target.value })}
                      className="input-field"
                      placeholder="https://docsend.com/... or Google Drive link"
                    />
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">
                      DocSend, Google Drive, or similar link
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Tell Us More</h2>

                  <div>
                    <label htmlFor="description" className="input-label">
                      One-line description of your company *
                    </label>
                    <input
                      type="text"
                      id="description"
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="input-field"
                      placeholder="We help X do Y by Z"
                    />
                  </div>

                  <div>
                    <label htmlFor="problem" className="input-label">
                      What problem are you solving? *
                    </label>
                    <textarea
                      id="problem"
                      required
                      rows={3}
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      className="input-field resize-none"
                      placeholder="Describe the problem and your solution"
                    />
                  </div>

                  <div>
                    <label htmlFor="traction" className="input-label">
                      Current traction
                    </label>
                    <textarea
                      id="traction"
                      rows={2}
                      value={formData.traction}
                      onChange={(e) => setFormData({ ...formData, traction: e.target.value })}
                      className="input-field resize-none"
                      placeholder="Users, revenue, partnerships, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="team" className="input-label">
                      Tell us about your team *
                    </label>
                    <textarea
                      id="team"
                      required
                      rows={2}
                      value={formData.team}
                      onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                      className="input-field resize-none"
                      placeholder="Founders, key hires, relevant experience"
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="input-label">
                      Anything else you'd like us to know?
                    </label>
                    <textarea
                      id="additionalInfo"
                      rows={2}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="input-field resize-none"
                      placeholder="Additional context, timeline, specific needs, etc."
                    />
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t border-[var(--color-border)]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary flex items-center gap-2"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
