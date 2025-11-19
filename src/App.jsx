import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = lazy(() => import('./components/Hero'))
const Features = lazy(() => import('./components/Features'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Impact = lazy(() => import('./components/Impact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="fixed inset-0 grid place-items-center bg-slate-950"><motion.div initial={{opacity:0}} animate={{opacity:1}} className="h-10 w-10 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" /></div>}>
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <Impact />
            <Footer />
          </main>
        </Suspense>
      </AnimatePresence>
    </div>
  )
}

export default App
