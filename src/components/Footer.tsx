'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.services, href: '#features' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
  ]

  const legalLinks = [
    { label: t.footer.legal_terms, href: '/terms' },
    { label: t.footer.legal_privacy, href: '/privacy' },
    { label: t.footer.legal_mentions, href: '/legal' },
    { label: t.footer.legal_risk, href: '/risk' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative border-t border-white/10 bg-dark-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-dark.jpg"
                  alt="MIA IA SYSTEM"
                  fill
                  className="rounded-full object-cover border border-mia-gold/50"
                />
              </div>
              <span className="text-lg font-bold text-white">MIA IA SYSTEM</span>
            </div>
            <p className="text-light-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-light-400 hover:text-mia-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-light-400 hover:text-mia-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <a
              href="mailto:contact@mia-ia-system.com"
              className="text-light-400 hover:text-mia-cyan transition-colors text-sm flex items-center gap-2"
            >
              📧 contact@mia-ia-system.com
            </a>
            <a
              href="mailto:support@mia-ia-system.com"
              className="text-light-400 hover:text-mia-cyan transition-colors text-sm flex items-center gap-2 mt-2"
            >
              🛠️ support@mia-ia-system.com
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          {/* Copyright */}
          <p className="text-center text-light-500 text-sm mb-6">
            © {currentYear} MIA IA SYSTEM. {t.footer.rights}
          </p>

          {/* Risk Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-accent-warning/10 border border-accent-warning/30 
                          rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-accent-warning flex-shrink-0 mt-0.5" />
              <p className="text-accent-warning text-xs leading-relaxed">
                {t.footer.warning}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
