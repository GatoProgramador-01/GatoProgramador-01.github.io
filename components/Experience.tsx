'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-24 bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t.experience.title}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/50 via-teal-600/30 to-transparent" />

          <div className="space-y-10">
            {t.experience.jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-12 md:pl-0"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-4 w-3 h-3 rounded-full border-2 z-10 ${
                    job.featured
                      ? 'bg-violet-500 border-violet-400 shadow-lg shadow-violet-500/50'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                />

                <div
                  className={`md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'
                  }`}
                >
                  <div
                    className={`p-5 rounded-2xl border transition-all duration-300 ${
                      job.featured
                        ? 'bg-gradient-to-br from-violet-900/30 to-teal-900/20 border-violet-500/30 shadow-lg shadow-violet-900/20'
                        : 'bg-gray-900/60 border-white/5 hover:border-white/10'
                    }`}
                  >
                    {job.featured && (
                      <span className="inline-block text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1 mb-3">
                        {job.featuredLabel}
                      </span>
                    )}
                    <div className="flex flex-col gap-0.5 mb-3">
                      <span className="font-bold text-white text-base">{job.company}</span>
                      <span className="text-violet-300 text-sm font-medium">{job.role}</span>
                      <span className="text-gray-500 text-xs font-mono">{job.period} · {job.location}</span>
                    </div>
                    <ul className={`space-y-1.5 ${i % 2 !== 0 ? 'md:list-none' : ''}`}>
                      {job.highlights.map((h, j) => (
                        <li key={j} className="text-gray-400 text-sm flex gap-2 items-start md:text-left">
                          <span className="text-teal-500 mt-1 shrink-0">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
