'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import EconomicCalendar from '@/components/EconomicCalendar'
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

function CalendarPageContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-dark-100">
      {/* Header simplifié */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-100/80 backdrop-blur-xl border-b border-white/10">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Retour */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-light-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">{t.calendar?.back || 'Retour'}</span>
              </Link>
              <div className="h-6 w-px bg-white/20" />
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo-dark.jpg"
                    alt="MIA IA SYSTEM"
                    fill
                    className="rounded-full object-cover border border-mia-gold/50"
                  />
                </div>
                <span className="font-bold text-white">MIA IA SYSTEM</span>
              </Link>
            </div>

            {/* Language Selector */}
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📅 <span className="text-gradient">{t.calendar?.page_title || 'Calendrier Économique'}</span>
            </h1>
            <p className="text-xl text-light-400 max-w-3xl">
              {t.calendar?.page_subtitle || 'Visualisez les événements économiques majeurs et comprenez comment MIA protège automatiquement votre capital pendant les annonces à fort impact.'}
            </p>
          </motion.div>

          <EconomicCalendar />
        </div>
      </main>

      {/* Footer simplifié */}
      <footer className="border-t border-white/10 py-8">
        <div className="container-custom text-center">
          <p className="text-light-500 text-sm">
            © {new Date().getFullYear()} MIA IA SYSTEM. {t.footer?.rights || 'Tous droits réservés.'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default function CalendarPage() {
  return (
    <LanguageProvider>
      <CalendarPageContent />
    </LanguageProvider>
  )
}
