import { useState } from 'react'
import { Menu, X, GraduationCap, MessageSquare, UserRound } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: '3D Preview', href: '#hero' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-orange-500/20 to-amber-400/20 blur-md group-hover:opacity-100 opacity-0 transition" />
                <div className="relative rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 p-2 text-white shadow-lg">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-white font-bold tracking-tight">ShikshaSetu</div>
                <div className="text-xs text-orange-200/80">Nurturing Every Mind, Guiding Every Step</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-slate-200/90 hover:text-white transition">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 transition">
                <UserRound className="w-4 h-4" /> Login
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                <MessageSquare className="w-4 h-4" /> Try Smart Tutor
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-white/10"
              >
                <div className="px-4 py-3 space-y-3">
                  {navItems.map((n) => (
                    <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-xl bg-white/5 px-3 py-2 text-slate-200">
                      {n.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
