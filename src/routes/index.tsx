import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { BookOpen, FlaskConical, Rocket, ArrowRight, ArrowDown } from 'lucide-react'
import { GoldBorderSVG } from '@/components/ui/GoldBorderSVG'
import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ParticleCanvas } from '@/components/ui/ParticleCanvas'

export const Route = createFileRoute('/')({
  component: HomePage,
})

/* ── Step arrow — light-background variant ───────────────────────────────── */
function StepArrow() {
  return (
    <>
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-center shrink-0 w-16">
        <div className="flex-1 h-[1.5px] bg-lab-black/15" />
        <ArrowRight size={22} className="text-lab-black/25 shrink-0 -ml-0.5" />
      </div>
      {/* Mobile: vertical */}
      <div className="md:hidden flex flex-col items-center py-3">
        <div className="w-[1.5px] h-10 bg-lab-black/15" />
        <ArrowDown size={22} className="text-lab-black/25 -mt-0.5" />
      </div>
    </>
  )
}

/* ── Scannable tag row — light-background cards ──────────────────────────── */
function LightTagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-4 border-t border-lab-black/10">
      {tags.map((tag, i, arr) => (
        <span key={tag} className="flex items-center gap-1.5">
          <span className="text-[11px] font-medium text-lab-charcoal/55">{tag}</span>
          {i < arr.length - 1 && (
            <span className="text-lab-black/20 text-[11px]" aria-hidden="true">·</span>
          )}
        </span>
      ))}
    </div>
  )
}

/* ── Outcomes content ────────────────────────────────────────────────────── */
const outcomes = [
  'Confidence using AI tools like Claude for work that actually matters',
  'Repeatable AI workflows you can bring to any class, job, or team',
  'The judgment to know when to trust AI and when not to',
  'Hands-on projects you can reference in interviews and on your resume',
]

/* ── Home page ───────────────────────────────────────────────────────────── */
function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const [gridOpacity, setGridOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const heroHeight = hero.offsetHeight
      const scrolled = window.scrollY
      const progress = Math.min(scrolled / heroHeight, 1)
      setGridOpacity(1 - progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Section 1 — Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-[#111111] flex items-center overflow-hidden"
      >
        {/* Grid substrate + particle network share one opacity wrapper so both fade on scroll */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: gridOpacity }}>
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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            Wake Forest University
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-display text-white mb-8"
          >
            AI is for everyone. Learn to use it to solve real problems.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl mb-12"
          >
            The AI Impact Clinic at Wake Forest teaches students across every major to use AI tools effectively, responsibly, and with purpose. 1.5 credit hours. No experience required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/course" className="btn-primary">
              Learn About the Course
              <ArrowRight size={18} />
            </Link>
            <Link to="/apply" className="btn-outline-dark">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — AI Impact Clinic Track (warm-surface, light cards, gold borders) */}
      <section className="bg-lab-warm-surface section-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-6">How it works</p>
            <h2 className="heading-section text-lab-black mb-14 text-3xl md:text-4xl">
              The AI Impact Clinic Track.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-stretch">

              {/* Card 1 — The Course (linked) */}
              <Link
                to="/course"
                className="flex-1 bg-white border-2 border-lab-gold rounded-xl p-6
                           motion-safe:transition-all motion-safe:duration-200
                           hover:bg-lab-gold-light/20 hover:ring-1 hover:ring-lab-gold
                           motion-safe:hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-lab-gold/10 flex items-center justify-center mb-4">
                  <BookOpen size={20} className="text-lab-gold" />
                </div>
                <p className="eyebrow mb-2">Step One · Fall</p>
                <h3 className="heading-card text-lab-black mb-2">AI Impact Clinic I (Fall)</h3>
                <p className="text-lab-charcoal text-base leading-relaxed">
                  A 1.5 credit hour, pass/fail lecture-style course open to students of every major. Build individual AI fluency through real skills and hands-on projects. No prior experience required.
                </p>
                <LightTagRow tags={['Pass / Fail', 'No coding experience required', '1.5 credit hours', '15 sessions']} />
              </Link>

              <StepArrow />

              {/* Card 2 — The Impact Clinic (linked) */}
              <Link
                to="/lab"
                className="flex-1 bg-white border-2 border-lab-gold rounded-xl p-6
                           motion-safe:transition-all motion-safe:duration-200
                           hover:bg-lab-gold-light/20 hover:ring-1 hover:ring-lab-gold
                           motion-safe:hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-lab-gold/10 flex items-center justify-center mb-4">
                  <FlaskConical size={20} className="text-lab-gold" />
                </div>
                <p className="eyebrow mb-2">Step Two · Spring</p>
                <h3 className="heading-card text-lab-black mb-2">AI Impact Clinic II (Spring)</h3>
                <p className="text-lab-charcoal text-base leading-relaxed">
                  A selective, hands-on, team-based course for students who complete the Fall Course. Work with a real partner organization to design and deploy an AI solution to a genuine business challenge.
                </p>
                <LightTagRow tags={['~20 students', '5 teams', 'Live client work']} />
              </Link>

              <StepArrow />

              {/* Card 3 — What you gain (not linked) */}
              <div className="flex-1 bg-white border-2 border-lab-gold rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-lab-gold/10 flex items-center justify-center mb-4">
                  <Rocket size={20} className="text-lab-gold" />
                </div>
                <p className="eyebrow mb-2">What You Gain</p>
                <h3 className="heading-card text-lab-black mb-2">Your future</h3>
                <p className="text-lab-charcoal text-base leading-relaxed">
                  Hands-on experience, real projects, and AI fluency that stands out on any resume and in any interview. Skills that carry into whatever you do next.
                </p>
              </div>

            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-14 flex flex-col items-center gap-3 text-center">
              <Link to="/apply" className="btn-primary">
                Apply Now
                <ArrowRight size={18} />
              </Link>
              <p className="text-lab-charcoal/50 text-sm">Open to all majors. No experience required.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3 — Student testimonials (black) */}
      <section className="bg-[#111111] section-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-5">Hear from prior students</p>
            <h2 className="heading-section text-white mb-10 text-3xl md:text-4xl">
              See what's possible.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              'Being able to work with a client, manage that relationship, and defend your ideas with stakeholders are skills that I would not have been able to learn in just the classroom setting.',
              'It was my first time working with a real client to solve a real business problem.',
              'Our team had a real client engagement. We were building a machine learning model to predict customer conversion, the kind of work where the output actually feeds a budget decision somewhere down the line.',
              'We built anomaly detection models for a financial services client. Three algorithms. Hundreds of features. Twenty-five years of historical data.',
            ].map((quote, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="h-full">
                <div
                  className="bg-white/[0.06] border border-lab-gold/50 rounded-xl p-8 h-full
                             flex flex-col justify-center
                             motion-safe:transition-all motion-safe:duration-200
                             motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                >
                  <p className="text-white/80 text-base leading-relaxed text-center">
                    <span className="text-lab-gold font-serif text-2xl select-none" aria-hidden="true">&ldquo;</span>
                    {quote}
                    <span className="text-lab-gold font-serif text-2xl select-none" aria-hidden="true">&rdquo;</span>
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="mt-8 text-white/30 text-xs leading-relaxed max-w-2xl">
            Quotes are drawn from reflections by Wake Forest MSBA students who completed the experiential learning program that the AI Impact Clinic is modeled after.
          </p>
        </div>
      </section>

      {/* Section 4 — Two-column editorial band */}
      <section className="bg-lab-gold-light border-t border-lab-gold section-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">

            {/* Left column */}
            <div className="flex-1 md:pr-12">
              <AnimatedSection>
                <h2 className="heading-section text-lab-black mb-6 text-3xl md:text-4xl">
                  AI fluency is the new baseline.
                </h2>
                <p className="text-lab-charcoal text-lg leading-relaxed">
                  In a few years, knowing how to work with AI won't be a bonus on your resume. It will be expected, in every field, for every role. The students who learn to use these tools well now will have a valuable edge that's hard to catch up to later.
                </p>
              </AnimatedSection>
            </div>

            {/* Divider: horizontal on mobile, vertical on desktop */}
            <div className="my-10 h-px md:my-0 md:h-auto md:w-px bg-lab-gold shrink-0" />

            {/* Right column */}
            <div className="flex-1 md:pl-12">
              <AnimatedSection delay={0.1}>
                <h2 className="heading-section text-lab-black mb-6 text-3xl md:text-4xl">
                  1.5 credit hours. No experience required.
                </h2>
                <p className="text-lab-charcoal text-lg leading-relaxed">
                  The course is 1.5 credit hours, pass/fail, and application-based. It's open to students of every major, with no prior experience needed. Just show up curious and ready to work.
                </p>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5 — Outcomes with GoldBorderSVG framing */}
      <section className="bg-white border-t border-lab-gold section-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl p-8 md:p-10">
            <GoldBorderSVG />
            <AnimatedSection>
              <h2 className="heading-section text-lab-black mb-8 text-3xl md:text-4xl">
                Real skills. Real projects. Something to talk about.
              </h2>
              <ul className="space-y-4 max-w-2xl">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 w-2 h-2 rounded-sm bg-lab-gold shrink-0" />
                    <span className="text-lab-charcoal text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
