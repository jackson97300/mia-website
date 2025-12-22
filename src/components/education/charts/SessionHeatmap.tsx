'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface SessionData {
  hour: string;
  session: string;
  volatility: number; // 0-100
  volume: number; // 0-100
  recommendation: 'excellent' | 'good' | 'avoid' | 'closed';
  description: {
    fr: string;
    en: string;
  };
}

// Données des sessions (heures Paris)
const sessionsData: SessionData[] = [
  { hour: '02:00', session: 'Asia', volatility: 15, volume: 20, recommendation: 'avoid', description: { fr: 'Marché asiatique - Volume faible', en: 'Asian market - Low volume' } },
  { hour: '04:00', session: 'Asia', volatility: 20, volume: 25, recommendation: 'avoid', description: { fr: 'Fin session asiatique', en: 'End of Asian session' } },
  { hour: '06:00', session: 'Pre-London', volatility: 30, volume: 35, recommendation: 'avoid', description: { fr: 'Pré-marché européen', en: 'European pre-market' } },
  { hour: '08:00', session: 'London', volatility: 65, volume: 70, recommendation: 'good', description: { fr: '🇬🇧 Ouverture London - Bonne volatilité', en: '🇬🇧 London Open - Good volatility' } },
  { hour: '09:00', session: 'London', volatility: 75, volume: 75, recommendation: 'excellent', description: { fr: '🇬🇧 Session London active', en: '🇬🇧 Active London session' } },
  { hour: '10:00', session: 'London', volatility: 70, volume: 70, recommendation: 'good', description: { fr: '🇬🇧 Milieu session London', en: '🇬🇧 Mid London session' } },
  { hour: '11:00', session: 'London', volatility: 55, volume: 55, recommendation: 'good', description: { fr: 'Transition London → US', en: 'London → US transition' } },
  { hour: '12:00', session: 'Transition', volatility: 40, volume: 45, recommendation: 'avoid', description: { fr: 'Pause déjeuner Europe', en: 'European lunch break' } },
  { hour: '13:00', session: 'Transition', volatility: 35, volume: 40, recommendation: 'avoid', description: { fr: 'Volume en baisse', en: 'Declining volume' } },
  { hour: '14:00', session: 'Pre-US', volatility: 45, volume: 50, recommendation: 'avoid', description: { fr: 'Attente ouverture US', en: 'Waiting for US open' } },
  { hour: '15:30', session: 'US Open', volatility: 90, volume: 95, recommendation: 'excellent', description: { fr: '🇺🇸 US OPEN - Volatilité maximale!', en: '🇺🇸 US OPEN - Maximum volatility!' } },
  { hour: '16:00', session: 'US Morning', volatility: 85, volume: 90, recommendation: 'excellent', description: { fr: '🇺🇸 US Morning - Excellente session', en: '🇺🇸 US Morning - Excellent session' } },
  { hour: '17:00', session: 'US Morning', volatility: 70, volume: 75, recommendation: 'good', description: { fr: '🇺🇸 Fin US Morning', en: '🇺🇸 End of US Morning' } },
  { hour: '18:00', session: 'Lunch Block', volatility: 35, volume: 40, recommendation: 'avoid', description: { fr: '⚠️ LUNCH BLOCK - Éviter!', en: '⚠️ LUNCH BLOCK - Avoid!' } },
  { hour: '19:00', session: 'Lunch Block', volatility: 30, volume: 35, recommendation: 'avoid', description: { fr: '⚠️ Range, faux signaux', en: '⚠️ Range, false signals' } },
  { hour: '20:00', session: 'Power Hour', volatility: 85, volume: 85, recommendation: 'excellent', description: { fr: '⚡ POWER HOUR - Session premium!', en: '⚡ POWER HOUR - Premium session!' } },
  { hour: '21:00', session: 'Power Hour', volatility: 80, volume: 80, recommendation: 'excellent', description: { fr: '⚡ Fin Power Hour', en: '⚡ End of Power Hour' } },
  { hour: '21:30', session: 'Hard Stop', volatility: 50, volume: 50, recommendation: 'avoid', description: { fr: '🛑 HARD STOP - Arrêter le trading', en: '🛑 HARD STOP - Stop trading' } },
  { hour: '22:00', session: 'After Hours', volatility: 25, volume: 30, recommendation: 'closed', description: { fr: 'After hours - Ne pas trader', en: 'After hours - Do not trade' } },
];

interface Props {
  language?: string;
  title?: string;
}

export default function SessionHeatmap({ language = 'fr', title }: Props) {
  const [hoveredSession, setHoveredSession] = useState<SessionData | null>(null);

  const getColor = (recommendation: string, intensity: number) => {
    switch (recommendation) {
      case 'excellent':
        return `rgba(0, 200, 83, ${0.3 + (intensity / 100) * 0.7})`;
      case 'good':
        return `rgba(0, 180, 220, ${0.3 + (intensity / 100) * 0.5})`;
      case 'avoid':
        return `rgba(255, 179, 0, ${0.2 + (intensity / 100) * 0.3})`;
      case 'closed':
        return 'rgba(100, 116, 139, 0.3)';
      default:
        return 'rgba(100, 116, 139, 0.2)';
    }
  };

  const getBorderColor = (recommendation: string) => {
    switch (recommendation) {
      case 'excellent':
        return '#00C853';
      case 'good':
        return '#00B4DC';
      case 'avoid':
        return '#FFB300';
      case 'closed':
        return '#64748b';
      default:
        return '#64748b';
    }
  };

  return (
    <div className="bg-dark-200 rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2">
        {title || (language === 'fr' ? '📅 Sessions de Trading (Heures Paris)' : '📅 Trading Sessions (Paris Time)')}
      </h3>
      <p className="text-light-400 text-sm mb-6">
        {language === 'fr' 
          ? 'Survolez pour voir les détails de chaque session'
          : 'Hover to see details of each session'
        }
      </p>

      {/* Heatmap Grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2 mb-6">
        {sessionsData.map((session, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredSession(session)}
            onMouseLeave={() => setHoveredSession(null)}
            className="relative cursor-pointer"
          >
            <div
              className="p-3 rounded-lg border-2 transition-all"
              style={{
                backgroundColor: getColor(session.recommendation, session.volatility),
                borderColor: hoveredSession === session ? getBorderColor(session.recommendation) : 'transparent',
              }}
            >
              <div className="text-center">
                <div className="text-xs font-bold text-white">{session.hour}</div>
                <div className="text-[10px] text-light-400 truncate">{session.session}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Box */}
      <div className="min-h-[80px]">
        {hoveredSession ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: getColor(hoveredSession.recommendation, 30),
              borderColor: getBorderColor(hoveredSession.recommendation),
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-white">
                {hoveredSession.hour} - {hoveredSession.session}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                hoveredSession.recommendation === 'excellent' ? 'bg-accent-success/30 text-accent-success' :
                hoveredSession.recommendation === 'good' ? 'bg-mia-cyan/30 text-mia-cyan' :
                hoveredSession.recommendation === 'avoid' ? 'bg-accent-warning/30 text-accent-warning' :
                'bg-light-500/30 text-light-400'
              }`}>
                {hoveredSession.recommendation === 'excellent' ? '⭐ EXCELLENT' :
                 hoveredSession.recommendation === 'good' ? '✓ BON' :
                 hoveredSession.recommendation === 'avoid' ? '⚠️ ÉVITER' :
                 '✗ FERMÉ'}
              </span>
            </div>
            <p className="text-light-300">
              {hoveredSession.description[language as keyof typeof hoveredSession.description] || hoveredSession.description.fr}
            </p>
            <div className="flex gap-6 mt-3 text-sm">
              <div>
                <span className="text-light-500">Volatilité:</span>
                <span className="ml-2 text-white font-mono">{hoveredSession.volatility}%</span>
              </div>
              <div>
                <span className="text-light-500">Volume:</span>
                <span className="ml-2 text-white font-mono">{hoveredSession.volume}%</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="p-4 rounded-xl bg-dark-300 border border-white/10 text-center text-light-500">
            {language === 'fr' 
              ? '👆 Survolez une case pour voir les détails'
              : '👆 Hover a cell to see details'
            }
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-accent-success/60" />
          <span className="text-light-400">Excellent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-mia-cyan/60" />
          <span className="text-light-400">Bon</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-accent-warning/40" />
          <span className="text-light-400">Éviter</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-light-500/30" />
          <span className="text-light-400">Fermé</span>
        </div>
      </div>
    </div>
  );
}
