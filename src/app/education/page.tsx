'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ChevronRight, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { lessons, categories, educationTranslations, getLessonsByCategory } from '@/data/lessons';

// URLs externes
const DISCORD_URL = 'https://discord.gg/mia-ia-system';
const DASHBOARD_URL = 'https://dashboard.mia-ia-system.com';

export default function EducationPage() {
  const { language } = useLanguage();
  const t = educationTranslations[language as keyof typeof educationTranslations] || educationTranslations.fr;
  const [activeCategory, setActiveCategory] = useState<'all' | 'beginner' | 'intermediate'>('all');

  const beginnerLessons = getLessonsByCategory('beginner');
  const intermediateLessons = getLessonsByCategory('intermediate');

  const filteredLessons = activeCategory === 'all' 
    ? lessons 
    : lessons.filter(l => l.category === activeCategory);

  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0);

  return (
    <main className="min-h-screen bg-dark pt-24 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mia-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mia-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mia-cyan/10 border border-mia-cyan/30 rounded-full text-mia-cyan text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            <span>{lessons.length} {t.lessons} • {totalDuration} {t.minutes}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">{t.title.split(' ')[0]} </span>
            <span className="text-gradient">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <p className="text-xl text-light-400 max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-mia-cyan">{beginnerLessons.length}</div>
              <div className="text-sm text-light-500">{t.beginner}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mia-gold">{intermediateLessons.length}</div>
              <div className="text-sm text-light-500">{t.intermediate}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-success">100%</div>
              <div className="text-sm text-light-500">{t.free}</div>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {(['all', 'beginner', 'intermediate'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-mia-cyan text-dark shadow-lg shadow-mia-cyan/30'
                  : 'bg-dark-200 text-light-400 hover:bg-dark-300 hover:text-white'
              }`}
            >
              {cat === 'all' ? t.allLessons : cat === 'beginner' ? t.beginner : t.intermediate}
            </button>
          ))}
        </motion.div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredLessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={`/education/${lesson.slug}`}>
                <div className="card-glass p-6 rounded-2xl hover:shadow-glow-cyan transition-all duration-300 group h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{lesson.icon}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lesson.category === 'beginner' 
                          ? 'bg-mia-cyan/20 text-mia-cyan' 
                          : 'bg-mia-gold/20 text-mia-gold'
                      }`}>
                        {lesson.category === 'beginner' ? t.beginner : t.intermediate}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-mia-cyan transition-colors">
                    {lesson.title[language as keyof typeof lesson.title] || lesson.title.fr}
                  </h3>
                  <p className="text-light-400 text-sm mb-4 flex-grow">
                    {lesson.description[language as keyof typeof lesson.description] || lesson.description.fr}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4 text-sm text-light-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {lesson.duration} {t.minutes}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        lesson.level === 'easy' ? 'bg-accent-success/20 text-accent-success' :
                        lesson.level === 'medium' ? 'bg-accent-warning/20 text-accent-warning' :
                        'bg-accent-error/20 text-accent-error'
                      }`}>
                        {lesson.level === 'easy' ? '●' : lesson.level === 'medium' ? '●●' : '●●●'}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-light-500 group-hover:text-mia-cyan group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Discord CTA */}
          <div className="card-glass p-8 rounded-2xl border-2 border-accent-purple/30 hover:border-accent-purple/60 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-accent-purple/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-accent-purple" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{t.joinDiscord} 👑</h3>
                <p className="text-light-400 mb-4">{t.discordCTA}</p>
                <ul className="text-sm text-light-500 space-y-1 mb-4">
                  <li>✓ Signaux ML en temps réel</li>
                  <li>✓ Niveaux MenthorQ quotidiens</li>
                  <li>✓ Communauté de traders</li>
                  <li>✓ Formation avancée</li>
                </ul>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold rounded-xl transition-all"
                >
                  {t.joinDiscord}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Dashboard CTA */}
          <div className="card-glass p-8 rounded-2xl border-2 border-mia-cyan/30 hover:border-mia-cyan/60 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-mia-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-mia-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{t.tryDashboard} 📊</h3>
                <p className="text-light-400 mb-4">{t.dashboardCTA}</p>
                <ul className="text-sm text-light-500 space-y-1 mb-4">
                  <li>✓ Données ES, NQ, RTY en direct</li>
                  <li>✓ Sessions de trading</li>
                  <li>✓ Interface professionnelle</li>
                  <li>✓ 100% gratuit</li>
                </ul>
                <a
                  href={DASHBOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-mia-cyan to-mia-cyan-dark text-dark font-semibold rounded-xl hover:shadow-lg hover:shadow-mia-cyan/30 transition-all"
                >
                  {t.tryDashboard}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
