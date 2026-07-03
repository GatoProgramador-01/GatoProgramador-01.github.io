import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Gato Programador | Javier Collipal — Backend Developer',
  description:
    'Portfolio de Javier Collipal (Gato Programador) — Desarrollador Backend Senior especializado en Python, Node.js, AWS y LLMs.',
  keywords: ['backend developer', 'python', 'nodejs', 'aws', 'llm', 'langchain', 'chile', 'remote'],
  authors: [{ name: 'Javier Collipal' }],
  openGraph: {
    title: 'Gato Programador | Javier Collipal',
    description: 'Senior Backend Developer — Python · Node.js · AWS · LLMs',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
