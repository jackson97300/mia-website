'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage, languages, Language } from '@/i18n/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find(l => l.code === language) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (code: Language) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-300/50 
                   border border-white/10 hover:border-mia-cyan/50 
                   transition-all duration-200"
        aria-label="Select language"
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.name}
          width={24}
          height={16}
          className="rounded-sm object-cover"
        />
        <ChevronDown 
          className={`w-4 h-4 text-light-400 transition-transform duration-200 
                    ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-44 py-2 
                       bg-dark-200/95 backdrop-blur-xl rounded-xl 
                       border border-white/10 shadow-xl z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 
                           text-left transition-colors duration-150
                           ${language === lang.code 
                             ? 'bg-mia-cyan/10 text-mia-cyan' 
                             : 'text-light-300 hover:bg-white/5 hover:text-white'
                           }`}
              >
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  width={24}
                  height={16}
                  className="rounded-sm object-cover"
                />
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <motion.div
                    layoutId="activeLang"
                    className="ml-auto w-2 h-2 rounded-full bg-mia-cyan"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
