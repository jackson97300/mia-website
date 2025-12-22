'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="section relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">{t.contact.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.contact.info_title}
              </h3>
              <p className="text-light-400 leading-relaxed">
                {t.contact.info_text}
              </p>
            </div>

            <div className="glass p-6 inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-mia-cyan/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-mia-cyan" />
              </div>
              <div>
                <div className="text-sm text-light-400">{t.contact.email}</div>
                <a href="mailto:contact@mia-ia-system.com" 
                   className="text-white hover:text-mia-cyan transition-colors">
                  contact@mia-ia-system.com
                </a>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="glass p-6">
              <h4 className="font-semibold text-white mb-2">{t.contact.newsletter}</h4>
              <p className="text-sm text-light-400 mb-4">
                {t.contact.newsletter_text}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t.contact.newsletter_placeholder}
                  className="flex-1 bg-dark-300 border border-white/10 rounded-lg px-4 py-2 
                           text-white placeholder-light-500 focus:outline-none 
                           focus:border-mia-cyan transition-colors"
                />
                <button className="btn-primary px-4 py-2">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-300 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-dark-300 border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder-light-500 focus:outline-none 
                           focus:border-mia-cyan transition-colors"
                  placeholder={t.contact.form.name_placeholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-300 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-dark-300 border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder-light-500 focus:outline-none 
                           focus:border-mia-cyan transition-colors"
                  placeholder={t.contact.form.email_placeholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-300 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-dark-300 border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder-light-500 focus:outline-none 
                           focus:border-mia-cyan transition-colors resize-none"
                  placeholder={t.contact.form.message_placeholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:opacity-50"
              >
                {status === 'loading' ? (
                  t.contact.form.sending
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t.contact.form.success}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.form.submit}
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-accent-error text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {t.contact.form.error}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
