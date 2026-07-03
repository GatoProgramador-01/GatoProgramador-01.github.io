'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'

const categoryIcons: Record<string, string> = {
  Backend: '⚙️',
  Frontend: '🎨',
  'Cloud & DevOps': '☁️',
  'Bases de Datos': '🗄️',
  Databases: '🗄️',
  'IA / ML': '🤖',
  'AI / ML': '🤖',
  Herramientas: '🔧',
  Tools: '🔧',
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t.skills.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.skills.categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-5 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{categoryIcons[cat.name] ?? '💡'}</span>
                <h3 className="font-semibold text-white text-sm">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 border border-white/5 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
