import { motion } from 'framer-motion'
import { Brain, Target, Rocket, Star } from 'lucide-react'

const points = [
  { icon: Brain, title: 'Deeper Understanding', desc: 'Socratic guidance helps students learn concepts, not just answers.' },
  { icon: Target, title: 'Personalized Paths', desc: 'Adaptive practice, goals, and reminders tailor to each learner.' },
  { icon: Rocket, title: 'Confidence & Momentum', desc: 'Quick help + mentor feedback keeps motivation high.' },
  { icon: Star, title: 'Real-World Readiness', desc: 'Mentor projects and feedback build practical skills early.' },
]

export default function Impact() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,146,60,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-bold text-white">How it transforms learning</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:.1,duration:.6}} className="mt-3 text-slate-300">A platform designed to nurture curiosity and build lifelong learners.</motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div key={p.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 p-2 text-slate-900">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
