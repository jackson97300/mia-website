// src/data/lessons.ts
// 35 leçons complètes - 16 Débutant + 19 Intermédiaire

export interface Lesson {
  id: number;
  slug: string;
  title: {
    fr: string;
    en: string;
    es?: string;
    de?: string;
  };
  description: {
    fr: string;
    en: string;
    es?: string;
    de?: string;
  };
  duration: number;
  level: 'easy' | 'medium' | 'hard';
  category: 'beginner' | 'intermediate' | 'premium';
  icon: string;
  topics: string[];
}

export const lessons: Lesson[] = [
  // ═══════════════════════════════════════════════════════════════
  // DÉBUTANT (16 leçons)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 1,
    slug: 'futures-101',
    title: { fr: 'Les Futures US: ES, NQ, RTY', en: 'US Futures: ES, NQ, RTY' },
    description: { fr: 'Découvrez les 3 marchés Futures principaux et leurs caractéristiques.', en: 'Discover the 3 main Futures markets and their characteristics.' },
    duration: 10,
    level: 'easy',
    category: 'beginner',
    icon: '📊',
    topics: ['Futures', 'ES', 'NQ', 'RTY']
  },
  {
    id: 2,
    slug: 'trading-sessions',
    title: { fr: 'Les Sessions de Trading', en: 'Trading Sessions' },
    description: { fr: 'Quand trader ? London, US Open, Power Hour - optimisez votre timing.', en: 'When to trade? London, US Open, Power Hour - optimize your timing.' },
    duration: 12,
    level: 'easy',
    category: 'beginner',
    icon: '⏰',
    topics: ['Sessions', 'Timing', 'London', 'US Open']
  },
  {
    id: 3,
    slug: 'candlestick-basics',
    title: { fr: 'Lecture des Chandeliers', en: 'Candlestick Reading' },
    description: { fr: 'Apprenez à lire les bougies japonaises et leurs patterns de base.', en: 'Learn to read Japanese candlesticks and their basic patterns.' },
    duration: 15,
    level: 'easy',
    category: 'beginner',
    icon: '🕯️',
    topics: ['Candlestick', 'Doji', 'Engulfing', 'Hammer']
  },
  {
    id: 4,
    slug: 'support-resistance',
    title: { fr: 'Support & Résistance', en: 'Support & Resistance' },
    description: { fr: 'Les niveaux clés où le prix réagit - fondamentaux du trading.', en: 'Key levels where price reacts - trading fundamentals.' },
    duration: 12,
    level: 'easy',
    category: 'beginner',
    icon: '📈',
    topics: ['Support', 'Resistance', 'Levels', 'Price Action']
  },
  {
    id: 5,
    slug: 'volume-importance',
    title: { fr: "L'Importance du Volume", en: 'Volume Importance' },
    description: { fr: 'Le volume confirme les mouvements - apprenez à le lire.', en: 'Volume confirms movements - learn to read it.' },
    duration: 10,
    level: 'easy',
    category: 'beginner',
    icon: '📶',
    topics: ['Volume', 'Confirmation', 'Analysis']
  },
  {
    id: 6,
    slug: 'risk-management',
    title: { fr: 'Gestion du Risque', en: 'Risk Management' },
    description: { fr: 'Protégez votre capital - la règle #1 du trading professionnel.', en: 'Protect your capital - rule #1 of professional trading.' },
    duration: 20,
    level: 'easy',
    category: 'beginner',
    icon: '🛡️',
    topics: ['Risk', 'Stop Loss', 'Position Size', 'Capital']
  },
  {
    id: 7,
    slug: 'trading-psychology',
    title: { fr: 'Psychologie du Trading', en: 'Trading Psychology' },
    description: { fr: 'Maîtrisez vos émotions pour des décisions rationnelles.', en: 'Master your emotions for rational decisions.' },
    duration: 15,
    level: 'easy',
    category: 'beginner',
    icon: '🧠',
    topics: ['Psychology', 'Emotions', 'Discipline', 'Mindset']
  },
  {
    id: 8,
    slug: 'order-types',
    title: { fr: "Types d'Ordres", en: 'Order Types' },
    description: { fr: 'Market, Limit, Stop - choisissez le bon ordre pour chaque situation.', en: 'Market, Limit, Stop - choose the right order for each situation.' },
    duration: 12,
    level: 'easy',
    category: 'beginner',
    icon: '📝',
    topics: ['Orders', 'Market', 'Limit', 'Stop']
  },
  {
    id: 9,
    slug: 'journaling-backtesting',
    title: { fr: 'Journal de Trading & Backtesting', en: 'Trading Journal & Backtesting' },
    description: { fr: 'Documentez vos trades et testez vos stratégies.', en: 'Document your trades and test your strategies.' },
    duration: 18,
    level: 'easy',
    category: 'beginner',
    icon: '📔',
    topics: ['Journal', 'Backtesting', 'Review', 'Improvement']
  },
  {
    id: 10,
    slug: 'economic-calendar',
    title: { fr: 'Calendrier Économique & News', en: 'Economic Calendar & News' },
    description: { fr: 'Impact des annonces économiques sur les marchés.', en: 'Impact of economic announcements on markets.' },
    duration: 16,
    level: 'easy',
    category: 'beginner',
    icon: '📰',
    topics: ['Economic', 'News', 'FOMC', 'NFP', 'CPI']
  },
  {
    id: 11,
    slug: 'multi-timeframe-analysis',
    title: { fr: 'Analyse Multi-Timeframes', en: 'Multi-Timeframe Analysis' },
    description: { fr: 'Combinez plusieurs timeframes pour des entrées précises.', en: 'Combine multiple timeframes for precise entries.' },
    duration: 14,
    level: 'easy',
    category: 'beginner',
    icon: '🔭',
    topics: ['Timeframes', 'HTF', 'LTF', 'Confluence']
  },
  {
    id: 12,
    slug: 'call-resistance-put-support',
    title: { fr: 'Call Resistance & Put Support', en: 'Call Resistance & Put Support' },
    description: { fr: 'Comment les options créent des niveaux de support et résistance.', en: 'How options create support and resistance levels.' },
    duration: 16,
    level: 'easy',
    category: 'beginner',
    icon: '📍',
    topics: ['Options', 'Call', 'Put', 'Levels']
  },
  {
    id: 13,
    slug: 'hvl-gamma-flip',
    title: { fr: 'HVL - Le Niveau du Flip Gamma', en: 'HVL - Gamma Flip Level' },
    description: { fr: 'Le niveau pivot qui change le comportement du marché.', en: 'The pivot level that changes market behavior.' },
    duration: 18,
    level: 'easy',
    category: 'beginner',
    icon: '⚡',
    topics: ['HVL', 'Gamma', 'Flip', 'Pivot']
  },
  {
    id: 14,
    slug: 'positive-negative-gamma',
    title: { fr: 'Gamma Positif vs Négatif', en: 'Positive vs Negative Gamma' },
    description: { fr: 'Comment le gamma influence la volatilité et les mouvements.', en: 'How gamma influences volatility and movements.' },
    duration: 20,
    level: 'easy',
    category: 'beginner',
    icon: '🔄',
    topics: ['Gamma', 'Positive', 'Negative', 'Volatility']
  },
  {
    id: 15,
    slug: '0dte-options-impact',
    title: { fr: '0DTE Options & Leur Impact', en: '0DTE Options & Their Impact' },
    description: { fr: "L'explosion des options 0DTE et leur effet sur les marchés.", en: 'The explosion of 0DTE options and their effect on markets.' },
    duration: 15,
    level: 'easy',
    category: 'beginner',
    icon: '⏰',
    topics: ['0DTE', 'Options', 'Expiration', 'Gamma']
  },
  {
    id: 16,
    slug: 'expected-move-range',
    title: { fr: 'Expected Move & Range du Jour', en: 'Expected Move & Daily Range' },
    description: { fr: 'Calculez le range attendu pour la journée.', en: 'Calculate the expected range for the day.' },
    duration: 14,
    level: 'easy',
    category: 'beginner',
    icon: '📏',
    topics: ['Expected Move', 'Range', 'Volatility', 'Daily']
  },
  
  // ═══════════════════════════════════════════════════════════════
  // INTERMÉDIAIRE (19 leçons)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 17,
    slug: 'gamma-exposure',
    title: { fr: 'Introduction au Gamma Exposure (GEX)', en: 'Introduction to Gamma Exposure (GEX)' },
    description: { fr: "Comprendre l'impact du gamma des options sur les prix.", en: 'Understanding the impact of options gamma on prices.' },
    duration: 18,
    level: 'medium',
    category: 'intermediate',
    icon: '⚡',
    topics: ['GEX', 'Gamma', 'Options', 'Exposure']
  },
  {
    id: 18,
    slug: 'high-volume-levels',
    title: { fr: 'High Volume Levels (HVL)', en: 'High Volume Levels (HVL)' },
    description: { fr: 'Les niveaux où le volume institutionnel est concentré.', en: 'Levels where institutional volume is concentrated.' },
    duration: 15,
    level: 'medium',
    category: 'intermediate',
    icon: '🧲',
    topics: ['HVL', 'Volume', 'Institutional', 'Levels']
  },
  {
    id: 19,
    slug: 'options-impact',
    title: { fr: 'Options & Impact sur les Prix', en: 'Options & Price Impact' },
    description: { fr: 'Comment les options influencent les mouvements du sous-jacent.', en: 'How options influence underlying movements.' },
    duration: 20,
    level: 'medium',
    category: 'intermediate',
    icon: '🎯',
    topics: ['Options', 'Impact', 'Greeks', 'Flow']
  },
  {
    id: 20,
    slug: 'market-makers',
    title: { fr: 'Market Makers & Liquidité', en: 'Market Makers & Liquidity' },
    description: { fr: 'Le rôle des market makers et leur influence sur les prix.', en: 'The role of market makers and their influence on prices.' },
    duration: 15,
    level: 'medium',
    category: 'intermediate',
    icon: '🏦',
    topics: ['Market Makers', 'Liquidity', 'Spread', 'Flow']
  },
  {
    id: 21,
    slug: 'vwap-intraday',
    title: { fr: 'VWAP & Niveaux Intraday', en: 'VWAP & Intraday Levels' },
    description: { fr: 'Le prix moyen pondéré par le volume - niveau institutionnel clé.', en: 'Volume Weighted Average Price - key institutional level.' },
    duration: 15,
    level: 'medium',
    category: 'intermediate',
    icon: '📉',
    topics: ['VWAP', 'Intraday', 'Institutional', 'Average']
  },
  {
    id: 22,
    slug: 'orderflow',
    title: { fr: "OrderFlow & Flux d'Ordres", en: 'OrderFlow & Order Flow' },
    description: { fr: "Analysez le flux d'ordres pour anticiper les mouvements.", en: 'Analyze order flow to anticipate movements.' },
    duration: 25,
    level: 'medium',
    category: 'intermediate',
    icon: '📊',
    topics: ['OrderFlow', 'Delta', 'DOM', 'Footprint']
  },
  {
    id: 23,
    slug: 'money-management',
    title: { fr: 'Money Management Avancé', en: 'Advanced Money Management' },
    description: { fr: 'Techniques avancées de gestion de capital et de risque.', en: 'Advanced capital and risk management techniques.' },
    duration: 22,
    level: 'medium',
    category: 'intermediate',
    icon: '💰',
    topics: ['Money Management', 'Kelly', 'Scaling', 'Risk']
  },
  {
    id: 24,
    slug: 'correlation-intermarches',
    title: { fr: 'Corrélations Intermarchés', en: 'Intermarket Correlations' },
    description: { fr: 'Relations entre ES, NQ, bonds, dollar et leur utilisation.', en: 'Relationships between ES, NQ, bonds, dollar and their use.' },
    duration: 20,
    level: 'medium',
    category: 'intermediate',
    icon: '🔗',
    topics: ['Correlation', 'Intermarket', 'Bonds', 'Dollar']
  },
  {
    id: 25,
    slug: 'liquidity-sweeps',
    title: { fr: 'Liquidity Sweeps & Stop Hunts', en: 'Liquidity Sweeps & Stop Hunts' },
    description: { fr: 'Comment les institutionnels chassent la liquidité.', en: 'How institutions hunt for liquidity.' },
    duration: 22,
    level: 'medium',
    category: 'intermediate',
    icon: '🎣',
    topics: ['Liquidity', 'Sweeps', 'Stop Hunt', 'Manipulation']
  },
  {
    id: 26,
    slug: 'market-profile',
    title: { fr: 'Market Profile & TPO Charts', en: 'Market Profile & TPO Charts' },
    description: { fr: 'Analysez la structure du marché avec le Market Profile.', en: 'Analyze market structure with Market Profile.' },
    duration: 24,
    level: 'medium',
    category: 'intermediate',
    icon: '📊',
    topics: ['Market Profile', 'TPO', 'Value Area', 'POC']
  },
  {
    id: 27,
    slug: 'fibonacci-extensions',
    title: { fr: 'Fibonacci & Extensions de Prix', en: 'Fibonacci & Price Extensions' },
    description: { fr: 'Utilisez Fibonacci pour identifier les targets et retracements.', en: 'Use Fibonacci to identify targets and retracements.' },
    duration: 18,
    level: 'medium',
    category: 'intermediate',
    icon: '🌀',
    topics: ['Fibonacci', 'Extensions', 'Retracements', 'Targets']
  },
  {
    id: 28,
    slug: 'gex-levels-1-10',
    title: { fr: 'GEX Levels 1-10 Expliqués', en: 'GEX Levels 1-10 Explained' },
    description: { fr: 'Comprendre et utiliser les 10 niveaux GEX de MenthorQ.', en: 'Understanding and using the 10 GEX levels from MenthorQ.' },
    duration: 22,
    level: 'medium',
    category: 'intermediate',
    icon: '🎯',
    topics: ['GEX', 'Levels', 'MenthorQ', 'Trading']
  },
  {
    id: 29,
    slug: 'blind-spots-trading',
    title: { fr: 'Blind Spots - Zones Cachées', en: 'Blind Spots - Hidden Zones' },
    description: { fr: 'Les zones sans gamma où le prix peut accélérer.', en: 'Zones without gamma where price can accelerate.' },
    duration: 20,
    level: 'medium',
    category: 'intermediate',
    icon: '👁️',
    topics: ['Blind Spots', 'Gamma', 'Acceleration', 'Zones']
  },
  {
    id: 30,
    slug: 'delta-exposure-dex',
    title: { fr: 'Delta Exposure (DEX)', en: 'Delta Exposure (DEX)' },
    description: { fr: "L'exposition directionnelle des options et son impact.", en: 'Directional exposure of options and its impact.' },
    duration: 24,
    level: 'medium',
    category: 'intermediate',
    icon: '📈',
    topics: ['DEX', 'Delta', 'Directional', 'Exposure']
  },
  {
    id: 31,
    slug: 'dealer-hedging-mechanics',
    title: { fr: 'Comment les Dealers Hedgent', en: 'How Dealers Hedge' },
    description: { fr: 'Comprendre le hedging des market makers et son impact.', en: 'Understanding market maker hedging and its impact.' },
    duration: 25,
    level: 'hard',
    category: 'intermediate',
    icon: '🏦',
    topics: ['Dealers', 'Hedging', 'Gamma', 'Delta']
  },
  {
    id: 32,
    slug: 'gamma-walls-magnets',
    title: { fr: 'Gamma Walls & Niveaux Magnétiques', en: 'Gamma Walls & Magnetic Levels' },
    description: { fr: 'Les murs de gamma qui attirent ou repoussent le prix.', en: 'Gamma walls that attract or repel price.' },
    duration: 18,
    level: 'medium',
    category: 'intermediate',
    icon: '🧲',
    topics: ['Gamma Walls', 'Magnetic', 'Levels', 'Pin']
  },
  {
    id: 33,
    slug: 'vix-vvix-volatility',
    title: { fr: 'VIX & VVIX - Indices de Volatilité', en: 'VIX & VVIX - Volatility Indices' },
    description: { fr: 'Mesurer et anticiper la volatilité du marché.', en: 'Measure and anticipate market volatility.' },
    duration: 22,
    level: 'medium',
    category: 'intermediate',
    icon: '📊',
    topics: ['VIX', 'VVIX', 'Volatility', 'Fear']
  },
  {
    id: 34,
    slug: 'option-greeks-traders',
    title: { fr: 'Les Greeks pour Traders Futures', en: 'Greeks for Futures Traders' },
    description: { fr: 'Delta, Gamma, Theta, Vega - essentiels même pour les Futures.', en: 'Delta, Gamma, Theta, Vega - essential even for Futures.' },
    duration: 26,
    level: 'hard',
    category: 'intermediate',
    icon: '🔢',
    topics: ['Greeks', 'Delta', 'Gamma', 'Theta', 'Vega']
  },
  {
    id: 35,
    slug: 'regime-based-trading',
    title: { fr: 'Trading par Régime de Marché', en: 'Regime-Based Trading' },
    description: { fr: 'Adaptez votre stratégie au régime actuel du marché.', en: 'Adapt your strategy to the current market regime.' },
    duration: 22,
    level: 'hard',
    category: 'intermediate',
    icon: '🎭',
    topics: ['Regime', 'Trending', 'Ranging', 'Volatile']
  }
];

export const categories = ['beginner', 'intermediate', 'premium'] as const;

export const educationTranslations = {
  fr: {
    title: 'Éducation Trading',
    subtitle: 'Maîtrisez le trading des Futures avec nos leçons complètes',
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    premium: 'Premium',
    free: 'Gratuit',
    duration: 'Durée',
    minutes: 'min',
    lessons: 'leçons',
    sections: 'sections',
    startLesson: 'Commencer',
    continueLesson: 'Continuer',
    completed: 'Terminé',
    locked: 'Verrouillé',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    previousLesson: 'Leçon précédente',
    nextLesson: 'Leçon suivante',
    allLessons: 'Toutes les leçons',
    backToEducation: "Retour à l'éducation",
    joinDiscord: 'Rejoindre le Discord',
    tryDashboard: 'Essayer le Dashboard',
    dashboardCTA: 'Accédez au dashboard MIA pour voir les niveaux en temps réel.',
    discordCTA: 'Rejoignez la communauté pour des signaux et discussions.',
  },
  en: {
    title: 'Trading Education',
    subtitle: 'Master Futures trading with our complete lessons',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    premium: 'Premium',
    free: 'Free',
    duration: 'Duration',
    minutes: 'min',
    lessons: 'lessons',
    sections: 'sections',
    startLesson: 'Start',
    continueLesson: 'Continue',
    completed: 'Completed',
    locked: 'Locked',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    previousLesson: 'Previous Lesson',
    nextLesson: 'Next Lesson',
    allLessons: 'All Lessons',
    backToEducation: 'Back to Education',
    joinDiscord: 'Join Discord',
    tryDashboard: 'Try Dashboard',
    dashboardCTA: 'Access the MIA dashboard to see real-time levels.',
    discordCTA: 'Join the community for signals and discussions.',
  },
  es: {
    title: 'Educación Trading',
    subtitle: 'Domina el trading de Futuros con nuestras lecciones completas',
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    premium: 'Premium',
    free: 'Gratis',
    duration: 'Duración',
    minutes: 'min',
    lessons: 'lecciones',
    sections: 'secciones',
    startLesson: 'Empezar',
    continueLesson: 'Continuar',
    completed: 'Completado',
    locked: 'Bloqueado',
    back: 'Volver',
    next: 'Siguiente',
    previous: 'Anterior',
    previousLesson: 'Lección anterior',
    nextLesson: 'Lección siguiente',
    allLessons: 'Todas las lecciones',
    backToEducation: 'Volver a Educación',
    joinDiscord: 'Unirse a Discord',
    tryDashboard: 'Probar Dashboard',
    dashboardCTA: 'Accede al dashboard de MIA para ver niveles en tiempo real.',
    discordCTA: 'Únete a la comunidad para señales y discusiones.',
  },
  de: {
    title: 'Trading Ausbildung',
    subtitle: 'Meistern Sie Futures-Trading mit unseren kompletten Lektionen',
    beginner: 'Anfänger',
    intermediate: 'Fortgeschritten',
    premium: 'Premium',
    free: 'Kostenlos',
    duration: 'Dauer',
    minutes: 'Min',
    lessons: 'Lektionen',
    sections: 'Abschnitte',
    startLesson: 'Starten',
    continueLesson: 'Fortsetzen',
    completed: 'Abgeschlossen',
    locked: 'Gesperrt',
    back: 'Zurück',
    next: 'Weiter',
    previous: 'Vorherige',
    previousLesson: 'Vorherige Lektion',
    nextLesson: 'Nächste Lektion',
    allLessons: 'Alle Lektionen',
    backToEducation: 'Zurück zur Ausbildung',
    joinDiscord: 'Discord beitreten',
    tryDashboard: 'Dashboard testen',
    dashboardCTA: 'Greifen Sie auf das MIA-Dashboard zu, um Echtzeit-Levels zu sehen.',
    discordCTA: 'Treten Sie der Community für Signale und Diskussionen bei.',
  }
};

export const getLessonBySlug = (slug: string): Lesson | undefined => {
  return lessons.find(lesson => lesson.slug === slug);
};

export const getLessonsByCategory = (category: 'beginner' | 'intermediate' | 'premium'): Lesson[] => {
  return lessons.filter(lesson => lesson.category === category);
};

export const getNextLesson = (currentSlug: string): Lesson | null => {
  const currentIndex = lessons.findIndex(l => l.slug === currentSlug);
  return currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;
};

export const getPreviousLesson = (currentSlug: string): Lesson | null => {
  const currentIndex = lessons.findIndex(l => l.slug === currentSlug);
  return currentIndex > 0 ? lessons[currentIndex - 1] : null;
};
