'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  Shield,
  ChevronDown,
  ChevronUp,
  Info,
  Ban,
  CheckCircle
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

// Types d'événements économiques
interface EconomicEvent {
  id: string
  time: string
  name: string
  nameEn: string
  impact: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  currency: string
  actual?: string
  forecast?: string
  previous?: string
}

// Données d'exemple (événements typiques)
const sampleEvents: EconomicEvent[] = [
  {
    id: '1',
    time: '14:30',
    name: 'Non-Farm Payrolls (NFP)',
    nameEn: 'Non-Farm Payrolls',
    impact: 'CRITICAL',
    currency: 'USD',
    forecast: '180K',
    previous: '175K'
  },
  {
    id: '2',
    time: '14:30',
    name: 'Taux de chômage',
    nameEn: 'Unemployment Rate',
    impact: 'CRITICAL',
    currency: 'USD',
    forecast: '3.8%',
    previous: '3.7%'
  },
  {
    id: '3',
    time: '20:00',
    name: 'Décision FOMC (Taux)',
    nameEn: 'FOMC Rate Decision',
    impact: 'CRITICAL',
    currency: 'USD',
    forecast: '5.50%',
    previous: '5.50%'
  },
  {
    id: '4',
    time: '14:30',
    name: 'IPC (Inflation)',
    nameEn: 'CPI (Inflation)',
    impact: 'CRITICAL',
    currency: 'USD',
    forecast: '3.2%',
    previous: '3.4%'
  },
  {
    id: '5',
    time: '15:45',
    name: 'ISM Manufacturing PMI',
    nameEn: 'ISM Manufacturing PMI',
    impact: 'HIGH',
    currency: 'USD',
    forecast: '48.5',
    previous: '47.8'
  },
  {
    id: '6',
    time: '16:00',
    name: 'Confiance des consommateurs',
    nameEn: 'Consumer Confidence',
    impact: 'HIGH',
    currency: 'USD',
    forecast: '104.5',
    previous: '102.0'
  },
  {
    id: '7',
    time: '14:30',
    name: 'Ventes au détail',
    nameEn: 'Retail Sales',
    impact: 'HIGH',
    currency: 'USD',
    forecast: '0.3%',
    previous: '0.1%'
  },
  {
    id: '8',
    time: '14:30',
    name: 'Inscriptions chômage',
    nameEn: 'Jobless Claims',
    impact: 'MEDIUM',
    currency: 'USD',
    forecast: '215K',
    previous: '210K'
  },
  {
    id: '9',
    time: '14:30',
    name: 'Balance commerciale',
    nameEn: 'Trade Balance',
    impact: 'MEDIUM',
    currency: 'USD',
    forecast: '-65.0B',
    previous: '-64.2B'
  }
]

// Configuration des niveaux d'impact
const impactConfig = {
  CRITICAL: {
    emoji: '🔴',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    label: 'CRITIQUE',
    labelEn: 'CRITICAL',
    minutesBefore: 15,
    minutesAfter: 30,
    blockTrading: true,
    description: 'Trading BLOQUÉ',
    descriptionEn: 'Trading BLOCKED'
  },
  HIGH: {
    emoji: '🟠',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    label: 'ÉLEVÉ',
    labelEn: 'HIGH',
    minutesBefore: 0,
    minutesAfter: 0,
    blockTrading: false,
    description: 'Trading normal',
    descriptionEn: 'Normal trading'
  },
  MEDIUM: {
    emoji: '🟡',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    label: 'MOYEN',
    labelEn: 'MEDIUM',
    minutesBefore: 0,
    minutesAfter: 0,
    blockTrading: false,
    description: 'Trading normal',
    descriptionEn: 'Normal trading'
  },
  LOW: {
    emoji: '🟢',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    label: 'FAIBLE',
    labelEn: 'LOW',
    minutesBefore: 0,
    minutesAfter: 0,
    blockTrading: false,
    description: 'Ignoré',
    descriptionEn: 'Ignored'
  }
}

export default function EconomicCalendar() {
  const { t, language } = useLanguage()
  const [selectedImpact, setSelectedImpact] = useState<string>('ALL')
  const [showLegend, setShowLegend] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Mise à jour de l'heure toutes les secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Filtrer les événements
  const filteredEvents = selectedImpact === 'ALL' 
    ? sampleEvents 
    : sampleEvents.filter(e => e.impact === selectedImpact)

  // Grouper par niveau d'impact
  const criticalEvents = sampleEvents.filter(e => e.impact === 'CRITICAL')
  const highEvents = sampleEvents.filter(e => e.impact === 'HIGH')
  const mediumEvents = sampleEvents.filter(e => e.impact === 'MEDIUM')

  const isEnglish = language === 'en'

  return (
    <div className="space-y-8">
      {/* Header avec heure actuelle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Calendar className="w-7 h-7 text-mia-cyan" />
              {t.calendar?.title || 'Calendrier Économique'}
            </h2>
            <p className="text-light-400 mt-1">
              {t.calendar?.subtitle || 'Événements impactant ES, NQ, RTY (Futures US)'}
            </p>
          </div>
          <div className="glass px-6 py-3 flex items-center gap-3">
            <Clock className="w-5 h-5 text-mia-gold" />
            <div>
              <div className="text-xs text-light-400">{t.calendar?.current_time || 'Heure actuelle (Paris)'}</div>
              <div className="text-xl font-mono text-white">
                {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Légende des niveaux d'impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass overflow-hidden"
      >
        <button
          onClick={() => setShowLegend(!showLegend)}
          className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-mia-cyan" />
            <span className="font-semibold text-white">
              {t.calendar?.legend_title || "Comment MIA gère les annonces économiques"}
            </span>
          </div>
          {showLegend ? (
            <ChevronUp className="w-5 h-5 text-light-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-light-400" />
          )}
        </button>

        {showLegend && (
          <div className="p-4 pt-0 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {Object.entries(impactConfig).map(([key, config]) => (
                <div
                  key={key}
                  className={`${config.bgColor} ${config.borderColor} border rounded-xl p-4`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{config.emoji}</span>
                    <span className={`font-bold ${config.color}`}>
                      {isEnglish ? config.labelEn : config.label}
                    </span>
                  </div>
                  {config.blockTrading ? (
                    <div className="flex items-center gap-2 text-sm">
                      <Ban className="w-4 h-4 text-red-500" />
                      <span className="text-red-400">
                        -{config.minutesBefore}min / +{config.minutesAfter}min
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-400">
                        {isEnglish ? config.descriptionEn : config.description}
                      </span>
                    </div>
                  )}
                  <p className="text-xs text-light-500 mt-2">
                    {key === 'CRITICAL' && (isEnglish ? 'FOMC, NFP, CPI' : 'FOMC, NFP, IPC')}
                    {key === 'HIGH' && (isEnglish ? 'GDP, ISM, Retail Sales' : 'PIB, ISM, Ventes détail')}
                    {key === 'MEDIUM' && (isEnglish ? 'Jobless Claims' : 'Inscriptions chômage')}
                    {key === 'LOW' && (isEnglish ? 'Minor reports' : 'Rapports mineurs')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Filtre */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'].map((impact) => (
          <button
            key={impact}
            onClick={() => setSelectedImpact(impact)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedImpact === impact
                ? 'bg-mia-cyan text-dark-100'
                : 'bg-white/5 text-light-400 hover:bg-white/10'
            }`}
          >
            {impact === 'ALL' ? (t.calendar?.filter_all || 'Tous') : 
              (isEnglish ? impactConfig[impact as keyof typeof impactConfig].labelEn : 
                impactConfig[impact as keyof typeof impactConfig].label)}
          </button>
        ))}
      </motion.div>

      {/* Liste des événements par catégorie */}
      <div className="space-y-6">
        {/* Événements CRITIQUES */}
        {(selectedImpact === 'ALL' || selectedImpact === 'CRITICAL') && criticalEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold text-white">
                🔴 {t.calendar?.critical_title || 'CRITIQUE - Trading BLOQUÉ'}
              </h3>
            </div>
            <div className="glass border border-red-500/30 overflow-hidden">
              <div className="bg-red-500/10 px-4 py-2 border-b border-red-500/30">
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  {t.calendar?.critical_warning || 'MIA bloque automatiquement le trading 15 min avant et 30 min après ces événements'}
                </p>
              </div>
              <div className="divide-y divide-white/10">
                {criticalEvents.map((event) => (
                  <div key={event.id} className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-mono text-white bg-dark-300 px-3 py-1 rounded">
                          {event.time}
                        </div>
                        <div>
                          <div className="font-semibold text-white">
                            {isEnglish ? event.nameEn : event.name}
                          </div>
                          <div className="text-sm text-light-400 flex items-center gap-2">
                            <span className="text-mia-gold">{event.currency}</span>
                            {event.forecast && (
                              <>
                                <span>•</span>
                                <span>{t.calendar?.forecast || 'Prévu'}: {event.forecast}</span>
                              </>
                            )}
                            {event.previous && (
                              <>
                                <span>•</span>
                                <span>{t.calendar?.previous || 'Précédent'}: {event.previous}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-red-500 text-sm font-medium">
                        -15min / +30min
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Événements HIGH */}
        {(selectedImpact === 'ALL' || selectedImpact === 'HIGH') && highEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-white">
                🟠 {t.calendar?.high_title || 'ÉLEVÉ - Trading normal'}
              </h3>
            </div>
            <div className="glass border border-orange-500/30 overflow-hidden">
              <div className="divide-y divide-white/10">
                {highEvents.map((event) => (
                  <div key={event.id} className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-mono text-white bg-dark-300 px-3 py-1 rounded">
                          {event.time}
                        </div>
                        <div>
                          <div className="font-semibold text-white">
                            {isEnglish ? event.nameEn : event.name}
                          </div>
                          <div className="text-sm text-light-400 flex items-center gap-2">
                            <span className="text-mia-gold">{event.currency}</span>
                            {event.forecast && (
                              <>
                                <span>•</span>
                                <span>{t.calendar?.forecast || 'Prévu'}: {event.forecast}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-green-500 text-sm font-medium flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        OK
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Événements MEDIUM */}
        {(selectedImpact === 'ALL' || selectedImpact === 'MEDIUM') && mediumEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold text-white">
                🟡 {t.calendar?.medium_title || 'MOYEN - Trading normal'}
              </h3>
            </div>
            <div className="glass border border-yellow-500/30 overflow-hidden">
              <div className="divide-y divide-white/10">
                {mediumEvents.map((event) => (
                  <div key={event.id} className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-mono text-white bg-dark-300 px-3 py-1 rounded">
                          {event.time}
                        </div>
                        <div>
                          <div className="font-semibold text-white">
                            {isEnglish ? event.nameEn : event.name}
                          </div>
                          <div className="text-sm text-light-400 flex items-center gap-2">
                            <span className="text-mia-gold">{event.currency}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-green-500 text-sm font-medium flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        OK
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Widget externe Investing.com */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-mia-cyan" />
          {t.calendar?.live_calendar || 'Calendrier en temps réel'}
        </h3>
        <p className="text-light-400 mb-4">
          {t.calendar?.live_description || 'Consultez le calendrier économique complet sur Investing.com pour les données en temps réel.'}
        </p>
        <a
          href="https://fr.investing.com/economic-calendar/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
        >
          {t.calendar?.open_investing || 'Ouvrir Investing.com'}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>

      {/* Explication du système */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass p-6 border border-mia-cyan/30"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <Shield className="w-6 h-6 text-mia-cyan" />
          {t.calendar?.protection_title || 'Protection automatique MIA'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-3xl">📊</div>
            <h4 className="font-semibold text-white">{t.calendar?.step1_title || 'Détection'}</h4>
            <p className="text-sm text-light-400">
              {t.calendar?.step1_text || 'MIA analyse le calendrier économique toutes les 2 heures et identifie les événements à fort impact.'}
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">⏰</div>
            <h4 className="font-semibold text-white">{t.calendar?.step2_title || 'Blocage préventif'}</h4>
            <p className="text-sm text-light-400">
              {t.calendar?.step2_text || '15 minutes avant un événement ⭐⭐⭐, MIA stoppe automatiquement tout nouveau trade pour protéger votre capital.'}
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">✅</div>
            <h4 className="font-semibold text-white">{t.calendar?.step3_title || 'Reprise sécurisée'}</h4>
            <p className="text-sm text-light-400">
              {t.calendar?.step3_text || '30 minutes après l\'annonce, une fois la volatilité stabilisée, MIA reprend le trading normalement.'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
