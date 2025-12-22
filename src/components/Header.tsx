'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ExternalLink, LogIn, UserPlus, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageContext'
import LanguageSelector from './LanguageSelector'

// URL du Dashboard MIA
const DASHBOARD_URL = 'https://dashboard.mia-ia-system.com'

// Traductions
const authTranslations = {
  fr: { login: 'Connexion', register: 'Inscription', education: 'Education' },
  en: { login: 'Login', register: 'Sign up', education: 'Education' },
  es: { login: 'Iniciar sesion', register: 'Registrarse', education: 'Educacion' },
  de: { login: 'Anmelden', register: 'Registrieren', education: 'Bildung' },
}

export default function Header() {
  const { t, language } = useLanguage()
  
  // States
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Traductions auth
  const authT = authTranslations[language as keyof typeof authTranslations] || authTranslations.fr

  // Liens de navigation (scroll)
  const scrollLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#features', label: t.nav.services },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  // Effet scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'features', 'pricing', 'faq', 'contact']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fonction de navigation smooth scroll
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/90 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo - retour accueil */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo-dark.jpg"
                alt="MIA IA SYSTEM"
                fill
                className="rounded-full object-cover border-2 border-mia-gold/60 shadow-glow-gold transition-all duration-300 group-hover:border-mia-gold group-hover:scale-105"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-gradient hidden sm:block">
              MIA IA SYSTEM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Accueil & Services */}
            {scrollLinks.slice(0, 2).map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : 'text-light-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mia-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            
            {/* EDUCATION - Lien vers page /education */}
            <Link
              href="/education"
              className="relative text-sm font-medium text-light-400 hover:text-mia-cyan transition-colors duration-200 flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              {authT.education}
            </Link>
            
            {/* Tarifs, FAQ, Contact */}
            {scrollLinks.slice(2).map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : 'text-light-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mia-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right side: Language + Auth + Dashboard */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-light-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              {authT.login}
            </Link>
            
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-dark-200 border border-white/10 hover:border-mia-cyan/50 hover:bg-dark-100 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              {authT.register}
            </Link>
            
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-flex items-center gap-2"
            >
              {t.nav.dashboard || 'Dashboard'}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile: Language + Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSelector />
            <button
              type="button"
              className="p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {/* Accueil & Services mobile */}
                {scrollLinks.slice(0, 2).map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-mia-cyan/10 text-mia-cyan'
                        : 'text-light-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                
                {/* Education mobile */}
                <Link
                  href="/education"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 w-full text-left px-4 py-3 rounded-lg text-light-400 hover:bg-mia-cyan/10 hover:text-mia-cyan transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  {authT.education}
                </Link>
                
                {/* Tarifs, FAQ, Contact mobile */}
                {scrollLinks.slice(2).map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-mia-cyan/10 text-mia-cyan'
                        : 'text-light-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="border-t border-white/10 my-2"></div>
                
                {/* Auth mobile */}
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg text-light-400 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  {authT.login}
                </Link>
                
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg text-light-400 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <UserPlus className="w-5 h-5" />
                  {authT.register}
                </Link>
                
                {/* Dashboard mobile */}
                <div className="pt-4 px-4">
                  <a
                    href={DASHBOARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-sm inline-flex items-center justify-center gap-2"
                  >
                    {t.nav.dashboard || 'Dashboard'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
