import { motion } from 'framer-motion'
import { Bot, Users, CheckCircle2, Mic, Video, FileUp, LayoutGrid, BarChart3, Calendar, Shield, Wand2, MessageSquare, Trophy } from 'lucide-react'

const features = [
  { icon: Bot, title: 'Smart Study Chatbot', desc: 'Instant, AI-powered doubt solving tailored to your syllabus with sources and practice questions.' },
  { icon: Users, title: 'Mentor Connect', desc: 'Find real-world mentors by subject, language, or interests and send connection requests.' },
  { icon: CheckCircle2, title: 'Mentor Approval Flow', desc: 'Mentors can accept or reject requests and manage students easily.' },
  { icon: Mic, title: 'Voice Tutor Mode', desc: 'Talk and listen to your AI mentor with natural, expressive voice.' },
  { icon: Video, title: 'Video Sessions', desc: '1:1 or group video with screen share and whiteboard.' },
  { icon: FileUp, title: 'File & Media Support', desc: 'Upload notes, images, and videos with safe previews and downloads.' },
  { icon: LayoutGrid, title: 'Student Dashboard', desc: 'Personalized subjects, recent chats, goals, and quick actions.' },
  { icon: BarChart3, title: 'Learning Analytics', desc: 'Visual insights on progress, accuracy, and engagement over time.' },
  { icon: Calendar, title: 'Session Scheduler', desc: 'Book sessions that auto-sync with your calendar and reminders.' },
  { icon: Shield, title: 'Secure OTP Login', desc: 'Phone-based authentication with rate limiting and fraud checks.' },
  { icon: Wand2, title: 'Content Moderation', desc: 'AI filters for harmful content, privacy leaks, and spam.' },
  { icon: Trophy, title: 'Gamified Rewards', desc: 'Earn badges and points for consistency and mastery.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-bold text-white">Core features</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:.1,duration:.6}} className="mt-3 text-slate-300">Everything students and mentors need for a modern, safe, and engaging learning journey.</motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.03}} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 p-2 text-slate-900 shadow-lg">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
