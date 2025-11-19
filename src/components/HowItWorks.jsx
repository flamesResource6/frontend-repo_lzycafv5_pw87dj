import { motion } from 'framer-motion'
import { Phone, Bot, Users2, CalendarCheck2, Sparkles, ShieldCheck } from 'lucide-react'

const steps = [
  { icon: Phone, title: 'Login with OTP', desc: 'Simple, secure phone-based login to get started in seconds.' },
  { icon: Bot, title: 'Ask the Smart Tutor', desc: 'Type or speak your doubt. Get step-by-step explanations with practice.' },
  { icon: Users2, title: 'Connect with Mentors', desc: 'Send a request, mentors approve, and your learning bridge is formed.' },
  { icon: CalendarCheck2, title: 'Book Sessions', desc: 'Plan 1:1 mentoring, group study, or revision sprints with reminders.' },
  { icon: ShieldCheck, title: 'Safe by Design', desc: 'AI moderation protects your chats and files while keeping privacy.' },
  { icon: Sparkles, title: 'Grow with Insights', desc: 'Analytics, goals, and achievements keep your journey on track.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-bold text-white">How ShikshaSetu works</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:.1,duration:.6}} className="mt-3 text-slate-300">A smooth, guided journey from doubt to mastery.</motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-2 text-amber-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
