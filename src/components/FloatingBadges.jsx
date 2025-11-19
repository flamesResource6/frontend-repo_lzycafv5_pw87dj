import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Trophy, Headphones, Bot } from 'lucide-react'

const items = [
  { icon: Bot, text: 'Smart Study Chatbot' },
  { icon: Headphones, text: 'Voice Tutor Mode' },
  { icon: ShieldCheck, text: 'Secure OTP Login' },
  { icon: Trophy, text: 'Gamified Rewards' },
  { icon: Sparkles, text: 'AI Moderation' },
]

export default function FloatingBadges() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      {items.map(({ icon: Icon, text }, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100"
        >
          <Icon className="w-4 h-4 text-amber-300" />
          {text}
        </motion.div>
      ))}
    </div>
  )
}
