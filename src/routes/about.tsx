import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ParticleCanvas } from '@/components/ui/ParticleCanvas'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const institutions = [
  {
    group: 'Wake Forest Department of Computer Science',
    faculty: [
      { name: 'Paúl Pauca', title: 'Professor of Computer Science' },
      { name: 'Errin Fulp', title: 'Professor of Computer Science' },
    ],
  },
  {
    group: 'Wake Forest School of Business',
    faculty: [
      { name: 'Shannon McKeen', title: 'Professor of the Practice' },
    ],
  },
  {
    group: 'The Office of the Provost',
    faculty: [
      { name: 'William Fleeson', title: 'Associate Provost for AI Initiatives' },
    ],
  },
]

function AboutPage() {
  return (
    <>
      {/* Page header — dark with grid */}
      <section className="relative py-32 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <ParticleCanvas />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            The Initiative
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-display text-white mb-6"
          >
            What is the AI Impact Clinic?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/60 text-xl max-w-xl leading-relaxed"
          >
            The AI Impact Clinic helps students across every major build real fluency with AI and put
            it to work on genuine problems. It starts with a fall course open to all majors, and
            continues into a selective spring practicum where student teams partner with real
            organizations.
          </motion.p>
        </div>
      </section>

      {/* Part of something bigger */}
      <section className="bg-lab-off-white border-t border-lab-gold section-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-5">Part of something bigger</p>
            <h2 className="heading-section text-lab-black mb-6">
              Part of something bigger.
            </h2>
            <p className="text-lab-charcoal text-lg leading-relaxed max-w-2xl mb-10">
              The AI Impact Clinic is one of three pilot initiatives in AI for Human Flourishing, a
              university-wide effort led by Wake Forest's Office of the Provost to help students,
              faculty, and staff engage with AI thoughtfully and responsibly.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <AnimatedSection delay={0.05}>
              <div className="bg-white border border-lab-warm-gray rounded-xl p-8 h-full flex flex-col">
                <h3 className="heading-card text-lab-black mb-3">AI Compass</h3>
                <p className="text-lab-charcoal leading-relaxed">
                  Explores the ethical, societal, and health questions AI raises, and strengthens
                  interdisciplinary research across the university.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white border border-lab-warm-gray rounded-xl p-8 h-full flex flex-col">
                <h3 className="heading-card text-lab-black mb-3">AI Teaching Studio</h3>
                <p className="text-lab-charcoal leading-relaxed">
                  Examines how AI is reshaping teaching and learning, with a focus on strengthening
                  critical thinking, curiosity, and judgment.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Link
                to="/course"
                className="group block bg-lab-gold-light/15 border border-lab-gold rounded-xl p-8 h-full flex flex-col
                           motion-safe:transition-all motion-safe:duration-200
                           motion-safe:hover:-translate-y-1 hover:bg-lab-gold-light/25"
              >
                <h3 className="heading-card text-lab-black mb-3">AI Impact Clinic</h3>
                <p className="text-lab-charcoal leading-relaxed flex-1">
                  Connects students and faculty with real partners to build practical AI solutions
                  through hands-on, real-world projects.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lab-gold
                                 mt-4 group-hover:text-lab-gold-dark transition-colors duration-200">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            </AnimatedSection>

          </div>

          <AnimatedSection delay={0.2}>
            <p className="text-lab-charcoal text-base leading-relaxed">
              As a pilot-stage program, the Clinic is just getting started, and we're excited to see
              how it grows alongside the rest of the initiative.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two linking cards */}
      <section className="bg-white border-t border-lab-warm-gray section-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <AnimatedSection>
              <Link
                to="/course"
                className="group block bg-lab-gold-light/15 border border-lab-gold rounded-xl p-8
                           motion-safe:transition-all motion-safe:duration-200
                           motion-safe:hover:-translate-y-1 hover:bg-lab-gold-light/25"
              >
                <p className="eyebrow mb-4">Fall</p>
                <h2 className="heading-card text-lab-black mb-3">The Course</h2>
                <p className="text-lab-charcoal leading-relaxed">
                  A 1.5 credit hour, pass/fail course open to every major. The starting point of
                  the AI Impact Clinic.
                </p>
                {/* Scannable tags */}
                <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-4 border-t border-lab-gold/20">
                  {['15 sessions', 'Pass / Fail', 'No coding experience required', '1.5 credit hours'].map((tag, i, arr) => (
                    <span key={tag} className="flex items-center gap-1.5">
                      <span className="text-[11px] font-medium text-lab-charcoal/55">{tag}</span>
                      {i < arr.length - 1 && <span className="text-lab-gold/35 text-[11px]" aria-hidden="true">·</span>}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lab-gold
                                 mt-4 group-hover:text-lab-gold-dark transition-colors duration-200">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Link
                to="/lab"
                className="group block bg-lab-gold-light/15 border border-lab-gold rounded-xl p-8
                           motion-safe:transition-all motion-safe:duration-200
                           motion-safe:hover:-translate-y-1 hover:bg-lab-gold-light/25"
              >
                <p className="eyebrow mb-4">Spring</p>
                <h2 className="heading-card text-lab-black mb-3">The AI Impact Clinic</h2>
                <p className="text-lab-charcoal leading-relaxed">
                  A selective continuation where student teams partner with real local organizations
                  to build and deploy AI solutions.
                </p>
                {/* Scannable tags */}
                <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-4 border-t border-lab-gold/20">
                  {['~20 students', '5 teams', 'Live client work'].map((tag, i, arr) => (
                    <span key={tag} className="flex items-center gap-1.5">
                      <span className="text-[11px] font-medium text-lab-charcoal/55">{tag}</span>
                      {i < arr.length - 1 && <span className="text-lab-gold/35 text-[11px]" aria-hidden="true">·</span>}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lab-gold
                                 mt-4 group-hover:text-lab-gold-dark transition-colors duration-200">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Who's Behind It */}
      <section className="bg-white border-t border-lab-warm-gray section-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-8">Who's Behind It</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {institutions.map((inst, i) => (
                <AnimatedSection key={inst.group} delay={i * 0.08} className="h-full">
                  <div className="h-full bg-lab-off-white border border-lab-warm-gray rounded-xl p-8 flex flex-col">
                    <p className="text-lab-black font-semibold text-base leading-snug mb-5">
                      {inst.group}
                    </p>
                    <ul className="space-y-4">
                      {inst.faculty.map((person) => (
                        <li key={person.name}>
                          <p className="text-lab-black font-semibold text-sm leading-snug">
                            {person.name}
                          </p>
                          <p className="text-lab-medium-gray text-sm leading-snug mt-0.5">
                            {person.title}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="text-lab-charcoal text-base leading-relaxed">
              The AI Impact Clinic is led by faculty across Computer Science and the School of
              Business, as part of Wake Forest's AI for Human Flourishing initiative.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Apply CTA — dark */}
      <section className="bg-[#111111] section-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="heading-section text-white mb-4">
              Applications are open.
            </h2>
            <p className="text-white/60 text-lg mb-10">
              All majors welcome. No experience required.
            </p>
            <Link to="/apply" className="btn-primary">
              Apply Now
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
