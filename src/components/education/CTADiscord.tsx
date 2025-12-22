'use client';

import { motion } from 'framer-motion';
import { Zap, ExternalLink, Lock, Users, TrendingUp, Bell } from 'lucide-react';

interface Props {
  language?: string;
  variant?: 'full' | 'compact' | 'inline';
}

const DISCORD_URL = 'https://discord.gg/mia-ia-system';

export default function CTADiscord({ language = 'fr', variant = 'full' }: Props) {
  const texts = {
    fr: {
      title: 'Passez au niveau supérieur 🚀',
      subtitle: 'Rejoignez le Discord privé MIA',
      description: 'Accédez au contenu premium, aux signaux en temps réel et à la communauté de traders.',
      features: [
        { icon: TrendingUp, text: 'Signaux ML en temps réel' },
        { icon: Bell, text: 'Alertes niveaux MenthorQ' },
        { icon: Users, text: 'Communauté de traders actifs' },
        { icon: Lock, text: 'Formation avancée exclusive' },
      ],
      cta: 'Rejoindre le Discord',
      free: 'Accès gratuit limité',
      premium: 'Contenu Premium',
    },
    en: {
      title: 'Level Up 🚀',
      subtitle: 'Join the MIA Private Discord',
      description: 'Access premium content, real-time signals and the trading community.',
      features: [
        { icon: TrendingUp, text: 'Real-time ML signals' },
        { icon: Bell, text: 'MenthorQ level alerts' },
        { icon: Users, text: 'Active trader community' },
        { icon: Lock, text: 'Exclusive advanced training' },
      ],
      cta: 'Join Discord',
      free: 'Limited free access',
      premium: 'Premium Content',
    },
  };

  const t = texts[language as keyof typeof texts] || texts.fr;

  // Variant: Compact (pour sidebar ou inline)
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 bg-gradient-to-r from-accent-purple/20 to-accent-purple/5 border border-accent-purple/30 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-accent-purple/30 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-accent-purple" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">{t.premium}</div>
            <div className="text-xs text-light-400">{t.subtitle}</div>
          </div>
        </div>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2 bg-accent-purple hover:bg-accent-purple/80 text-white text-sm font-semibold rounded-lg transition-all"
        >
          {t.cta}
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    );
  }

  // Variant: Inline (dans le contenu)
  if (variant === 'inline') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="my-6 p-4 bg-accent-purple/10 border-l-4 border-accent-purple rounded-r-xl"
      >
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-accent-purple mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-sm font-bold text-white mb-1">
              🔐 {t.premium}
            </div>
            <p className="text-sm text-light-400 mb-3">
              {t.description}
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent-purple hover:text-accent-purple/80 font-semibold"
            >
              {t.cta} →
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  // Variant: Full (section complète)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-br from-accent-purple/20 via-dark-200 to-dark-300 border-2 border-accent-purple/30 rounded-2xl p-8"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-mia-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 bg-accent-purple/30 rounded-xl flex items-center justify-center">
            <Zap className="w-7 h-7 text-accent-purple" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{t.title}</h3>
            <p className="text-light-400">{t.subtitle}</p>
          </div>
        </div>

        <p className="text-light-300 mb-6 max-w-xl">
          {t.description}
        </p>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 bg-dark-300/50 rounded-lg"
            >
              <feature.icon className="w-5 h-5 text-accent-purple" />
              <span className="text-sm text-light-300">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-purple hover:bg-accent-purple/80 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-accent-purple/30"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            {t.cta}
            <ExternalLink className="w-5 h-5" />
          </a>
          <span className="text-sm text-light-500">
            👑 {t.premium}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
