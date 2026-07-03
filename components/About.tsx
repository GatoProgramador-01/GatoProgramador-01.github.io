'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: avatar placeholder + badges */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-violet-600 to-teal-600 flex items-center justify-center text-6xl shadow-2xl shadow-violet-900/40">
              🐱
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-900 border border-white/5">
                <span className="text-teal-400">🎓</span>
                <span className="text-gray-300 text-sm">{t.about.education}</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-900 border border-white/5">
                <span className="text-violet-400">🌐</span>
                <span className="text-gray-300 text-sm">{t.about.english}</span>
              </div>
              <a
                href="https://cert.efset.org/dzNDWG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-900 border border-white/5 hover:border-violet-500/30 transition-colors group"
              >
                <span className="text-yellow-400">🏅</span>
                <span className="text-gray-300 text-sm group-hover:text-violet-300 transition-colors">EF SET Certificate →</span>
              </a>
            </div>
          </div>

          {/* Right: text */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-white">{t.about.title}</h2>
            <p className="text-gray-400 leading-relaxed">{t.about.p1}</p>
            <p className="text-gray-400 leading-relaxed">{t.about.p2}</p>
            <p className="text-gray-400 leading-relaxed">{t.about.p3}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
