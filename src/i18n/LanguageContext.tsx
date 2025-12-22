'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

import fr from './fr.json'
import en from './en.json'
import es from './es.json'
import de from './de.json'

export type Language = 'fr' | 'en' | 'es' | 'de'

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '/flags/fr.svg' },
  { code: 'en', name: 'English', flag: '/flags/us.svg' },
  { code: 'es', name: 'Español', flag: '/flags/es.svg' },
  { code: 'de', name: 'Deutsch', flag: '/flags/de.svg' },
]

const translations = { fr, en, es, de }

type TranslationType = typeof fr

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationType
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Récupérer la langue depuis localStorage
    const savedLang = localStorage.getItem('mia-language') as Language
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang)
    } else {
      // Détecter la langue du navigateur
      const browserLang = navigator.language.split('-')[0] as Language
      if (translations[browserLang]) {
        setLanguageState(browserLang)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('mia-language', lang)
  }

  const t = translations[language]

  // Éviter le flash de contenu pendant l'hydratation
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'fr', setLanguage, t: fr }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTranslation() {
  const { t } = useLanguage()
  return t
}
