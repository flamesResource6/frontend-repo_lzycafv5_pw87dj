import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const FloatingBadges = lazy(() => import('./FloatingBadges'))

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            ShikshaSetu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-lg sm:text-xl text-slate-200 max-w-prose"
          >
            Nurturing Every Mind, Guiding Every Step. An AI-powered learning bridge connecting students with mentors, smart study tools, and engaging experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#features" className="rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 px-5 py-3 font-semibold text-slate-900 shadow-lg">Explore features</a>
            <a href="#how" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-100">How it works</a>
          </motion.div>

          <Suspense fallback={<div className="mt-10 h-10 w-48 animate-pulse rounded-xl bg-white/10" />}>
            <FloatingBadges />
          </Suspense>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] w-full"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
