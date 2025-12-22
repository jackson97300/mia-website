// src/data/lessonContents.ts
// 35 leçons enrichies MIA IA System - Slugs corrigés

interface Section {
  title?: {
    fr: string;
    en: string;
  };
  content?: {
    fr: string[];
    en: string[];
  };
  bullets?: {
    fr: string[];
    en: string[];
  };
  component?: string;
  componentTitle?: {
    fr: string;
    en: string;
  };
  infoBox?: {
    type: 'tip' | 'warning' | 'premium';
    text: {
      fr: string;
      en: string;
    };
  };
}

interface LessonContent {
  sections: Section[];
}

export const lessonContents: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 1: FUTURES 101
  // ═══════════════════════════════════════════════════════════════
  'futures-101': {
    sections: [
      {
        title: {
          fr: 'Pourquoi les Futures ? Le problème qu\'ils résolvent',
          en: 'Why Futures? The problem they solve',
        },
        content: {
          fr: [
            'Si vous avez déjà day tradé des actions, vous connaissez ces frustrations: la règle PDT qui limite à 3 trades/semaine sous $25,000, les frais de shorting exorbitants, les gaps overnight qui ruinent vos stops. Les Futures éliminent TOUS ces problèmes.',
            'Un Future est simplement un contrat pour échanger un actif à un prix fixé, à une date future. Imaginez un agriculteur qui vend sa récolte de blé à l\'avance pour se protéger contre la baisse des prix. C\'est exactement le principe, sauf qu\'ici vous tradez des indices boursiers comme le S&P 500.',
            'La différence clé avec les actions? Vous ne possédez jamais rien. Vous spéculez sur la DIRECTION du prix. Le ES monte de 5000 à 5020? Vous gagnez 20 points × $50 = $1,000. Simple, efficace, et sans les contraintes des actions.',
          ],
          en: [
            'If you\'ve ever day traded stocks, you know these frustrations: the PDT rule limiting you to 3 trades/week under $25,000, exorbitant shorting fees, overnight gaps that ruin your stops. Futures eliminate ALL these problems.',
            'A Future is simply a contract to exchange an asset at a fixed price, at a future date. Imagine a farmer selling his wheat harvest in advance to protect against falling prices. That\'s exactly the principle, except here you trade stock indices like the S&P 500.',
            'The key difference from stocks? You never own anything. You speculate on price DIRECTION. ES goes from 5000 to 5020? You gain 20 points × $50 = $1,000. Simple, effective, and without stock constraints.',
          ],
        },
      },
      {
        title: {
          fr: 'L\'effet de levier: Puissance et danger',
          en: 'Leverage: Power and danger',
        },
        content: {
          fr: [
            'Voici où ça devient intéressant. Un contrat ES à 5000 points représente 5000 × $50 = $250,000 d\'exposition. Mais vous n\'avez besoin que de ~$15,000 de marge pour le contrôler. C\'est l\'effet de levier.',
            'Exemple concret: vous achetez 1 ES à 5000, il monte à 5020. Profit: $1,000, soit 6.7% sur votre marge en une journée. Mais attention - si le marché baisse de 20 points, vous perdez $1,000. L\'effet de levier amplifie TOUT: gains ET pertes.',
          ],
          en: [
            'Here\'s where it gets interesting. An ES contract at 5000 points represents 5000 × $50 = $250,000 in exposure. But you only need ~$15,000 margin to control it. That\'s leverage.',
            'Concrete example: you buy 1 ES at 5000, it rises to 5020. Profit: $1,000, or 6.7% on your margin in one day. But beware - if the market drops 20 points, you lose $1,000. Leverage amplifies EVERYTHING: gains AND losses.',
          ],
        },
        infoBox: {
          type: 'warning',
          text: {
            fr: '⚠️ Ne tradez JAMAIS avec de l\'argent que vous ne pouvez pas perdre. Règle d\'or: max 1-2% de risque par trade.',
            en: '⚠️ NEVER trade with money you can\'t afford to lose. Golden rule: max 1-2% risk per trade.',
          },
        },
      },
      {
        title: {
          fr: 'Les 3 Futures que MIA trade: ES, NQ, RTY',
          en: 'The 3 Futures MIA trades: ES, NQ, RTY',
        },
        bullets: {
          fr: [
            '📗 ES (E-mini S&P 500): Le roi des Futures. 500 plus grandes entreprises US. Le plus liquide au monde. Tick = $12.50',
            '📘 NQ (E-mini Nasdaq 100): La tech pure - Apple, Nvidia, Microsoft. 2-3x plus volatil que ES. Tick = $5.00',
            '📕 RTY (E-mini Russell 2000): 2000 small caps US. Moins liquide mais réagit différemment. Tick = $5.00',
          ],
          en: [
            '📗 ES (E-mini S&P 500): The king of Futures. 500 largest US companies. Most liquid in the world. Tick = $12.50',
            '📘 NQ (E-mini Nasdaq 100): Pure tech - Apple, Nvidia, Microsoft. 2-3x more volatile than ES. Tick = $5.00',
            '📕 RTY (E-mini Russell 2000): 2000 US small caps. Less liquid but reacts differently. Tick = $5.00',
          ],
        },
      },
      {
        title: {
          fr: 'Micro Futures: Commencez petit',
          en: 'Micro Futures: Start small',
        },
        content: {
          fr: [
            'Trop risqué de contrôler $250,000 en apprenant? Le CME a créé les Micro Futures - exactement les mêmes contrats mais 10x plus petits. MES = 1/10 du ES. Tick = $1.25. Marge ~$1,200.',
            'Mon conseil: tradez les Micros pendant 6-12 mois minimum jusqu\'à être régulièrement profitable. Ensuite seulement, passez aux E-mini.',
          ],
          en: [
            'Too risky to control $250,000 while learning? The CME created Micro Futures - exactly the same contracts but 10x smaller. MES = 1/10 of ES. Tick = $1.25. Margin ~$1,200.',
            'My advice: trade Micros for at least 6-12 months until consistently profitable. Only then move to E-mini.',
          ],
        },
        infoBox: {
          type: 'premium',
          text: {
            fr: '👑 MIA surveille ES, NQ, RTY 24h/24 et génère des signaux automatiques avec stop-loss et take-profit calculés dynamiquement.',
            en: '👑 MIA monitors ES, NQ, RTY 24/7 and generates automatic signals with dynamically calculated stop-loss and take-profit.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 2: TRADING SESSIONS
  // ═══════════════════════════════════════════════════════════════
  'trading-sessions': {
    sections: [
      {
        title: {
          fr: 'QUAND trader est aussi important que QUOI trader',
          en: 'WHEN to trade is as important as WHAT to trade',
        },
        content: {
          fr: [
            'Vous pouvez avoir la meilleure stratégie du monde - si vous tradez au mauvais moment, vous perdrez. Les Futures tradent 23h/24 mais toutes les heures ne se valent pas.',
            'Certaines sessions offrent volatilité et direction claire. D\'autres sont des pièges à pertes avec du "chop" et des faux signaux. MIA désactive automatiquement les signaux pendant les mauvaises heures.',
          ],
          en: [
            'You can have the best strategy in the world - if you trade at the wrong time, you\'ll lose. Futures trade 23h/24 but not all hours are equal.',
            'Some sessions offer volatility and clear direction. Others are loss traps with "chop" and false signals. MIA automatically disables signals during bad hours.',
          ],
        },
      },
      {
        title: {
          fr: '🇬🇧 Session Londres (08h-11h Paris)',
          en: '🇬🇧 London Session (08-11am Paris)',
        },
        content: {
          fr: [
            'L\'ouverture européenne réveille le marché après la nuit asiatique calme. Volatilité modérée (~70% du pic US), mouvements propres et directionnels. Excellente pour les traders matinaux.',
          ],
          en: [
            'The European open wakes the market after the quiet Asian night. Moderate volatility (~70% of US peak), clean and directional moves. Excellent for early bird traders.',
          ],
        },
        bullets: {
          fr: [
            '⏰ 08h00-11h00 Paris • Volatilité modérée-bonne',
            '📈 Breakouts matinaux, réactions aux overnight news',
            '✅ Idéal pour: Scalping, momentum, traders européens',
          ],
          en: [
            '⏰ 08:00-11:00 Paris • Moderate-good volatility',
            '📈 Morning breakouts, reactions to overnight news',
            '✅ Ideal for: Scalping, momentum, European traders',
          ],
        },
      },
      {
        title: {
          fr: '🇺🇸 US Open (15h30-17h Paris): LA session en or',
          en: '🇺🇸 US Open (15:30-17:00 Paris): THE golden session',
        },
        content: {
          fr: [
            'Si vous ne tradez qu\'une session, c\'est celle-ci. L\'ouverture de Wall Street concentre le maximum de volume, volatilité et opportunités. Les institutions passent leurs ordres, les algos s\'activent.',
            'Les 30 premières minutes peuvent être explosives: 20, 30, 50 points en quelques minutes. MIA adore cette session - c\'est là que le win rate est le plus élevé.',
          ],
          en: [
            'If you only trade one session, this is it. The Wall Street open concentrates maximum volume, volatility and opportunities. Institutions place orders, algos activate.',
            'The first 30 minutes can be explosive: 20, 30, 50 points in minutes. MIA loves this session - this is where win rate is highest.',
          ],
        },
        infoBox: {
          type: 'tip',
          text: {
            fr: '⭐ Conseil: Soyez prêt 10 min avant 15h30. Les meilleures opportunités arrivent souvent dans les 15 premières minutes.',
            en: '⭐ Tip: Be ready 10 min before 15:30. Best opportunities often come in the first 15 minutes.',
          },
        },
      },
      {
        title: {
          fr: '⚠️ Lunch Block (17h-20h): LE PIÈGE',
          en: '⚠️ Lunch Block (17:00-20:00): THE TRAP',
        },
        content: {
          fr: [
            'C\'est LA période la plus dangereuse. Les traders US sont partis manger, le volume chute de 50-60%, et le marché perd sa direction. Ce qui reste? Du bruit, du "chop", des mouvements erratiques.',
            'Plus de 60% des journées perdantes viennent de trades pris pendant le Lunch Block. MIA désactive les signaux pendant cette période.',
          ],
          en: [
            'This is THE most dangerous period. US traders are at lunch, volume drops 50-60%, and the market loses direction. What remains? Noise, "chop", erratic movements.',
            'Over 60% of losing days come from trades taken during the Lunch Block. MIA disables signals during this period.',
          ],
        },
        infoBox: {
          type: 'warning',
          text: {
            fr: '⚠️ Le Lunch Block est responsable de la majorité des pertes des débutants. FERMEZ VOS ÉCRANS.',
            en: '⚠️ The Lunch Block is responsible for most beginner losses. CLOSE YOUR SCREENS.',
          },
        },
      },
      {
        title: {
          fr: '⚡ Power Hour (20h-21h30)',
          en: '⚡ Power Hour (20:00-21:30)',
        },
        content: {
          fr: [
            'Après 3h de pause, le marché se réveille pour le sprint final. Les institutionnels ajustent leurs positions avant la clôture, créant un retour de volatilité souvent aussi intense que l\'ouverture.',
          ],
          en: [
            'After 3h of pause, the market wakes for the final sprint. Institutions adjust positions before close, creating a return of volatility often as intense as the open.',
          ],
        },
        bullets: {
          fr: [
            '⏰ 20h00-21h30 Paris • Volatilité ÉLEVÉE',
            '📈 Volume: 80-90% du pic journalier',
            '🎯 Breakouts de ranges, mouvements directionnels',
          ],
          en: [
            '⏰ 20:00-21:30 Paris • HIGH volatility',
            '📈 Volume: 80-90% of daily peak',
            '🎯 Range breakouts, directional moves',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 3: CANDLESTICK BASICS
  // ═══════════════════════════════════════════════════════════════
  'candlestick-basics': {
    sections: [
      {
        title: {
          fr: 'Les chandeliers racontent une histoire',
          en: 'Candlesticks tell a story',
        },
        content: {
          fr: [
            'Inventés il y a 300 ans par un trader de riz japonais, les chandeliers sont utilisés par tous les pros aujourd\'hui. Pourquoi? Parce qu\'ils ne montrent pas juste le prix - ils montrent QUI A GAGNÉ la bataille entre acheteurs et vendeurs.',
            'Chaque chandelier contient 4 infos: Open (début), Close (fin), High (max), Low (min). Le CORPS montre la distance Open-Close. Les MÈCHES montrent les High/Low atteints puis abandonnés.',
          ],
          en: [
            'Invented 300 years ago by a Japanese rice trader, candlesticks are used by all pros today. Why? Because they don\'t just show price - they show WHO WON the battle between buyers and sellers.',
            'Each candlestick contains 4 pieces of info: Open (start), Close (end), High (max), Low (min). The BODY shows the Open-Close distance. WICKS show Highs/Lows reached then abandoned.',
          ],
        },
      },
      {
        title: {
          fr: 'Bougies vertes vs rouges',
          en: 'Green vs red candles',
        },
        bullets: {
          fr: [
            '🟢 Grand corps vert = Domination forte des acheteurs',
            '🔴 Grand corps rouge = Domination forte des vendeurs',
            '📍 Petit corps = Bataille serrée, indécision',
            '📏 Longue mèche haute = Rejet des acheteurs',
            '📏 Longue mèche basse = Rejet des vendeurs',
          ],
          en: [
            '🟢 Large green body = Strong buyer domination',
            '🔴 Large red body = Strong seller domination',
            '📍 Small body = Close battle, indecision',
            '📏 Long upper wick = Buyer rejection',
            '📏 Long lower wick = Seller rejection',
          ],
        },
      },
      {
        title: {
          fr: 'Les 5 patterns essentiels',
          en: 'The 5 essential patterns',
        },
        content: {
          fr: [
            'DOJI: Corps minuscule, mèches des deux côtés. Indécision totale. Après une tendance, peut signaler un retournement.',
            'HAMMER: Petit corps en haut, longue mèche basse. Après une baisse = signal haussier.',
            'SHOOTING STAR: Inverse du hammer. Après une hausse = signal baissier.',
            'ENGULFING: Bougie 2 englobe complètement bougie 1. Signal de retournement.',
            'MARUBOZU: Long corps, pas de mèches. Domination totale, momentum très fort.',
          ],
          en: [
            'DOJI: Tiny body, wicks both sides. Total indecision. After a trend, can signal reversal.',
            'HAMMER: Small body at top, long lower wick. After decline = bullish signal.',
            'SHOOTING STAR: Opposite of hammer. After rise = bearish signal.',
            'ENGULFING: Candle 2 completely engulfs candle 1. Reversal signal.',
            'MARUBOZU: Long body, no wicks. Total domination, very strong momentum.',
          ],
        },
        infoBox: {
          type: 'tip',
          text: {
            fr: '💡 Quand une longue mèche "teste" un niveau MenthorQ puis est rejetée, c\'est exactement ce que MIA recherche.',
            en: '💡 When a long wick "tests" a MenthorQ level then gets rejected, that\'s exactly what MIA looks for.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 4: SUPPORT & RESISTANCE
  // ═══════════════════════════════════════════════════════════════
  'support-resistance': {
    sections: [
      {
        title: {
          fr: 'La psychologie derrière les S/R',
          en: 'The psychology behind S/R',
        },
        content: {
          fr: [
            'Les supports et résistances ne sont pas de la magie - c\'est de la psychologie des foules. Des milliers de traders ont acheté à 5000. Le prix remonte à 5000 après une baisse? Ils vendent pour "sortir flat".',
            'SUPPORT = niveau où les ACHETEURS défendent le prix (plancher). RÉSISTANCE = niveau où les VENDEURS défendent le prix (plafond).',
          ],
          en: [
            'Support and resistance aren\'t magic - it\'s crowd psychology. Thousands of traders bought at 5000. Price returns to 5000 after a drop? They sell to "get out flat".',
            'SUPPORT = level where BUYERS defend price (floor). RESISTANCE = level where SELLERS defend price (ceiling).',
          ],
        },
      },
      {
        title: {
          fr: 'Comment identifier un bon S/R',
          en: 'How to identify a good S/R',
        },
        bullets: {
          fr: [
            '📈 Support: Entrer long + Stop SOUS le support',
            '📉 Résistance: Entrer short + Stop AU-DESSUS de la résistance',
            '🔄 Support cassé → devient Résistance (et vice versa)',
            '🎯 Le RETEST du niveau cassé est souvent la meilleure entrée',
          ],
          en: [
            '📈 Support: Enter long + Stop BELOW support',
            '📉 Resistance: Enter short + Stop ABOVE resistance',
            '🔄 Broken support → becomes Resistance (and vice versa)',
            '🎯 The RETEST of broken level is often the best entry',
          ],
        },
      },
      {
        title: {
          fr: 'MenthorQ: Les S/R institutionnels',
          en: 'MenthorQ: Institutional S/R',
        },
        content: {
          fr: [
            'Les niveaux MenthorQ (GEX, HVL, etc.) sont des S/R d\'un niveau supérieur. Ils sont basés sur les positions OPTIONS des market makers, pas sur l\'historique des prix.',
            'MIA combine S/R classiques + niveaux MenthorQ. Quand ils coïncident = CONFLUENCE = probabilité de réaction maximale.',
          ],
          en: [
            'MenthorQ levels (GEX, HVL, etc.) are next-level S/R. They\'re based on market makers\' OPTIONS positions, not price history.',
            'MIA combines classic S/R + MenthorQ levels. When they coincide = CONFLUENCE = maximum reaction probability.',
          ],
        },
        infoBox: {
          type: 'premium',
          text: {
            fr: '👑 Le Discord Premium fournit quotidiennement les niveaux MenthorQ + S/R techniques combinés.',
            en: '👑 Premium Discord provides daily MenthorQ levels + combined technical S/R.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 5: VOLUME IMPORTANCE
  // ═══════════════════════════════════════════════════════════════
  'volume-importance': {
    sections: [
      {
        title: {
          fr: 'Le volume confirme (ou infirme) tout',
          en: 'Volume confirms (or denies) everything',
        },
        content: {
          fr: [
            'Le prix vous dit CE QUI s\'est passé. Le volume vous dit SI C\'EST VRAI. Un breakout avec volume massif? C\'est probablement réel. Un breakout avec volume faible? Méfiance - possible fakeout.',
            'Pensez au volume comme au nombre de "votes" derrière un mouvement. 1000 contrats qui poussent le prix = conviction forte. 100 contrats = conviction faible.',
          ],
          en: [
            'Price tells you WHAT happened. Volume tells you IF IT\'S TRUE. A breakout with massive volume? It\'s probably real. A breakout with low volume? Beware - possible fakeout.',
            'Think of volume as the number of "votes" behind a move. 1000 contracts pushing price = strong conviction. 100 contracts = weak conviction.',
          ],
        },
      },
      {
        title: {
          fr: 'Comment lire le volume',
          en: 'How to read volume',
        },
        bullets: {
          fr: [
            '📈 Hausse + Volume croissant = Tendance saine',
            '📈 Hausse + Volume décroissant = Essoufflement',
            '📉 Baisse + Volume massif = Capitulation possible',
            '🔄 Breakout + Volume 2-3x = Confirmation forte',
            '⚠️ Breakout + Volume faible = Fakeout probable',
          ],
          en: [
            '📈 Rise + Increasing volume = Healthy trend',
            '📈 Rise + Decreasing volume = Exhaustion',
            '📉 Drop + Massive volume = Possible capitulation',
            '🔄 Breakout + Volume 2-3x = Strong confirmation',
            '⚠️ Breakout + Low volume = Probable fakeout',
          ],
        },
        infoBox: {
          type: 'tip',
          text: {
            fr: '💡 MIA analyse le volume en temps réel. Un signal sur un niveau GEX + volume élevé = confluence optimale.',
            en: '💡 MIA analyzes volume in real-time. A signal at a GEX level + high volume = optimal confluence.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 6: RISK MANAGEMENT
  // ═══════════════════════════════════════════════════════════════
  'risk-management': {
    sections: [
      {
        title: {
          fr: 'La gestion du risque: Ce qui sépare les survivants',
          en: 'Risk management: What separates survivors',
        },
        content: {
          fr: [
            'Voici la vérité brutale: vous pouvez avoir raison 70% du temps et quand même perdre de l\'argent si votre gestion du risque est mauvaise.',
            'La règle #1: ne JAMAIS risquer plus de 1-2% de votre capital par trade. Avec un compte de $10,000, votre perte maximale par trade = $100-200. C\'est non négociable.',
          ],
          en: [
            'Here\'s the brutal truth: you can be right 70% of the time and still lose money if your risk management is bad.',
            'Rule #1: NEVER risk more than 1-2% of your capital per trade. With a $10,000 account, your max loss per trade = $100-200. This is non-negotiable.',
          ],
        },
      },
      {
        title: {
          fr: 'Stop Loss: Votre assurance vie',
          en: 'Stop Loss: Your life insurance',
        },
        content: {
          fr: [
            'Un stop loss est un ordre automatique qui ferme votre position si le prix va contre vous. C\'est votre assurance. JAMAIS de trade sans stop loss.',
            'Où placer le stop? Pas à une distance arbitraire. Placez-le là où votre analyse est INVALIDÉE. MIA calcule les stops dynamiquement basés sur la structure de marché.',
          ],
          en: [
            'A stop loss is an automatic order that closes your position if price goes against you. It\'s your insurance. NEVER trade without a stop loss.',
            'Where to place the stop? Not at an arbitrary distance. Place it where your analysis is INVALIDATED. MIA calculates stops dynamically based on market structure.',
          ],
        },
      },
      {
        title: {
          fr: 'Risk/Reward Ratio',
          en: 'Risk/Reward Ratio',
        },
        content: {
          fr: [
            'Le R:R compare ce que vous risquez vs ce que vous pouvez gagner. Risquer $100 pour gagner $200 = R:R de 1:2.',
            'Avec un R:R de 1:2, vous pouvez avoir tort 60% du temps et être profitable! C\'est la magie d\'un bon R:R.',
          ],
          en: [
            'R:R compares what you risk vs what you can gain. Risk $100 to gain $200 = 1:2 R:R.',
            'With a 1:2 R:R, you can be wrong 60% of the time and still be profitable! That\'s the magic of good R:R.',
          ],
        },
        bullets: {
          fr: [
            '🎯 Règle d\'or: Minimum R:R de 1:1.5, idéalement 1:2',
            '📊 Calcul: Si stop = 10 ticks, target minimum = 15-20 ticks',
            '⚠️ R:R < 1:1 = Vous devez avoir raison >50%',
            '✅ R:R 1:2 = Profitable même avec 40% de win rate',
          ],
          en: [
            '🎯 Golden rule: Minimum 1:1.5 R:R, ideally 1:2',
            '📊 Calculation: If stop = 10 ticks, minimum target = 15-20 ticks',
            '⚠️ R:R < 1:1 = You must be right >50%',
            '✅ 1:2 R:R = Profitable even with 40% win rate',
          ],
        },
        infoBox: {
          type: 'warning',
          text: {
            fr: '⚠️ Ne déplacez JAMAIS votre stop loss pour "donner plus de room". Si votre stop est touché, acceptez la perte.',
            en: '⚠️ NEVER move your stop loss to "give more room". If your stop is hit, accept the loss.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 7: TRADING PSYCHOLOGY
  // ═══════════════════════════════════════════════════════════════
  'trading-psychology': {
    sections: [
      {
        title: {
          fr: 'Votre pire ennemi: Vous-même',
          en: 'Your worst enemy: Yourself',
        },
        content: {
          fr: [
            'La stratégie compte pour 20% du succès. La psychologie compte pour 80%. Le FOMO, la revenge trading, l\'overtrading... ce sont ces démons qui vident les comptes.',
            'C\'est pourquoi les bots comme MIA ont un avantage: ils n\'ont pas d\'émotions. Ils exécutent le plan sans hésitation.',
          ],
          en: [
            'Strategy accounts for 20% of success. Psychology accounts for 80%. FOMO, revenge trading, overtrading... these are the demons that drain accounts.',
            'This is why bots like MIA have an advantage: they have no emotions. They execute the plan without hesitation.',
          ],
        },
      },
      {
        title: {
          fr: 'Les 4 tueurs de comptes',
          en: 'The 4 account killers',
        },
        content: {
          fr: [
            'FOMO: Le prix monte, vous n\'êtes pas dedans, vous achetez au sommet. Solution: Si vous avez raté l\'entrée, attendez le prochain setup.',
            'REVENGE TRADING: Vous venez de perdre, vous prenez un autre trade immédiatement. Solution: Après une perte, PAUSE de 15-30 minutes.',
            'OVERTRADING: Vous tradez par ennui. Solution: Définissez un nombre MAX de trades par jour (3-5).',
            'AVIDITÉ: Vous ne prenez pas vos profits. Solution: Respectez votre take profit.',
          ],
          en: [
            'FOMO: Price rises, you\'re not in, you buy at the top. Solution: If you missed the entry, wait for the next setup.',
            'REVENGE TRADING: You just lost, you take another trade immediately. Solution: After a loss, 15-30 minute PAUSE.',
            'OVERTRADING: You trade out of boredom. Solution: Define a MAX number of trades per day (3-5).',
            'GREED: You don\'t take profits. Solution: Respect your take profit.',
          ],
        },
      },
      {
        title: {
          fr: 'Le journal de trading',
          en: 'Trading journal',
        },
        content: {
          fr: [
            'Chaque trade, notez: setup, entrée, stop, target, résultat, et votre ÉTAT ÉMOTIONNEL. Après 100 trades, analysez. Vous découvrirez des patterns.',
            'Le journal transforme vos erreurs en leçons. Sans journal, vous répétez les mêmes erreurs indéfiniment.',
          ],
          en: [
            'Every trade, note: setup, entry, stop, target, result, and your EMOTIONAL STATE. After 100 trades, analyze. You\'ll discover patterns.',
            'The journal transforms your mistakes into lessons. Without a journal, you repeat the same mistakes indefinitely.',
          ],
        },
        infoBox: {
          type: 'tip',
          text: {
            fr: '💡 MIA élimine 90% des problèmes psychologiques en exécutant automatiquement.',
            en: '💡 MIA eliminates 90% of psychological problems by executing automatically.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 8: ORDER TYPES
  // ═══════════════════════════════════════════════════════════════
  'order-types': {
    sections: [
      {
        title: {
          fr: 'Les types d\'ordres',
          en: 'Order types',
        },
        content: {
          fr: [
            'Comprendre les types d\'ordres est essentiel pour exécuter votre stratégie correctement. Il existe 4 types principaux: Market, Limit, Stop, et Bracket.',
          ],
          en: [
            'Understanding order types is essential to execute your strategy correctly. There are 4 main types: Market, Limit, Stop, and Bracket.',
          ],
        },
      },
      {
        title: {
          fr: 'Market, Limit, Stop, Bracket',
          en: 'Market, Limit, Stop, Bracket',
        },
        bullets: {
          fr: [
            '🚀 MARKET: Exécution garantie, prix variable. Pour: urgences, breakouts rapides',
            '🎯 LIMIT: Prix garanti, exécution variable. Pour: entrées précises sur S/R',
            '🛑 STOP: Déclenche Market à un niveau. Pour: stop loss, breakout entries',
            '📦 BRACKET: Entrée + SL + TP automatiques. Pour: trading structuré (MIA)',
          ],
          en: [
            '🚀 MARKET: Guaranteed execution, variable price. For: emergencies, fast breakouts',
            '🎯 LIMIT: Guaranteed price, variable execution. For: precise entries on S/R',
            '🛑 STOP: Triggers Market at a level. For: stop loss, breakout entries',
            '📦 BRACKET: Automatic entry + SL + TP. For: structured trading (MIA)',
          ],
        },
        infoBox: {
          type: 'premium',
          text: {
            fr: '👑 MIA utilise des Bracket Orders sophistiqués avec SL/TP calculés dynamiquement.',
            en: '👑 MIA uses sophisticated Bracket Orders with dynamically calculated SL/TP.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 9: GAMMA EXPOSURE
  // ═══════════════════════════════════════════════════════════════
  'gamma-exposure': {
    sections: [
      {
        title: {
          fr: 'Le Gamma: L\'arme secrète des institutionnels',
          en: 'Gamma: The institutional secret weapon',
        },
        content: {
          fr: [
            'Le Gamma Exposure (GEX) est l\'exposition gamma des market makers sur les options. C\'est CE QUI FAIT BOUGER le marché. Comprendre le GEX, c\'est voir ce que 95% des traders ne voient pas.',
            'Quand le prix approche de certains strikes, les market makers DOIVENT hedger leurs positions. Ce hedging crée des flux massifs qui poussent le prix dans des directions prévisibles.',
          ],
          en: [
            'Gamma Exposure (GEX) is market makers\' gamma exposure on options. It\'s WHAT MOVES the market. Understanding GEX is seeing what 95% of traders don\'t see.',
            'When price approaches certain strikes, market makers MUST hedge their positions. This hedging creates massive flows that push price in predictable directions.',
          ],
        },
      },
      {
        title: {
          fr: 'Comment le GEX influence le prix',
          en: 'How GEX influences price',
        },
        content: {
          fr: [
            'Imaginez un market maker qui a vendu des CALL options à 5000. Quand le prix monte vers 5000, il doit ACHETER des futures pour hedger. Cette pression acheteuse pousse le prix encore plus haut.',
            'L\'inverse avec les PUT. C\'est pourquoi les zones de forte GEX agissent comme des aimants ou des murs.',
          ],
          en: [
            'Imagine a market maker who sold CALL options at 5000. When price rises toward 5000, they must BUY futures to hedge. This buying pressure pushes price even higher.',
            'The opposite with PUTs. This is why high GEX zones act as magnets or walls.',
          ],
        },
        bullets: {
          fr: [
            '📈 Call Resistance: Zone de résistance due aux CALLS',
            '📉 Put Support: Zone de support due aux PUTS',
            '🧲 Le prix est "attiré" vers ces niveaux puis rebondit',
            '💥 Un break déclenche un hedging massif → mouvement accéléré',
          ],
          en: [
            '📈 Call Resistance: Resistance zone due to CALLS',
            '📉 Put Support: Support zone due to PUTS',
            '🧲 Price is "attracted" to these levels then bounces',
            '💥 A break triggers massive hedging → accelerated move',
          ],
        },
        infoBox: {
          type: 'premium',
          text: {
            fr: '👑 MIA intègre les niveaux GEX en temps réel pour générer ses signaux.',
            en: '👑 MIA integrates GEX levels in real-time to generate its signals.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 10: HIGH VOLUME LEVELS
  // ═══════════════════════════════════════════════════════════════
  'high-volume-levels': {
    sections: [
      {
        title: {
          fr: 'Le HVL: Le niveau le plus important',
          en: 'HVL: The most important level',
        },
        content: {
          fr: [
            'Le HVL (High Volume Level) est LE niveau le plus important fourni par MenthorQ. C\'est le strike où le MAXIMUM de volume d\'options a été tradé.',
            'Pensez au HVL comme au "centre de gravité" du marché. Le prix a tendance à être attiré vers le HVL et à osciller autour.',
          ],
          en: [
            'The HVL (High Volume Level) is THE most important level provided by MenthorQ. It\'s the strike where MAXIMUM options volume was traded.',
            'Think of HVL as the market\'s "center of gravity". Price tends to be attracted to HVL and oscillate around it.',
          ],
        },
      },
      {
        title: {
          fr: 'Trading avec le HVL',
          en: 'Trading with HVL',
        },
        bullets: {
          fr: [
            '🎯 HVL = Centre de gravité du jour',
            '📈 Prix > HVL: Biais haussier, chercher des longs',
            '📉 Prix < HVL: Biais baissier, chercher des shorts',
            '🔄 Test du HVL + rebond = Signal fort',
            '💥 Cassure du HVL avec volume = Changement de régime',
          ],
          en: [
            '🎯 HVL = Day\'s center of gravity',
            '📈 Price > HVL: Bullish bias, look for longs',
            '📉 Price < HVL: Bearish bias, look for shorts',
            '🔄 HVL test + bounce = Strong signal',
            '💥 HVL break with volume = Regime change',
          ],
        },
        infoBox: {
          type: 'tip',
          text: {
            fr: '💡 Le HVL change chaque jour. Vérifiez-le chaque matin via MenthorQ.',
            en: '💡 HVL changes every day. Check it every morning via MenthorQ.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 11: OPTIONS IMPACT
  // ═══════════════════════════════════════════════════════════════
  'options-impact': {
    sections: [
      {
        title: {
          fr: 'Comment les options impactent les Futures',
          en: 'How options impact Futures',
        },
        content: {
          fr: [
            'Les options représentent des TRILLIONS de dollars de positions. Leur impact sur les Futures est massif et souvent sous-estimé par les traders particuliers.',
            'Le hedging des market makers, les expirations, le gamma squeeze... tout cela crée des mouvements que vous ne pouvez comprendre qu\'en analysant les options.',
          ],
          en: [
            'Options represent TRILLIONS of dollars in positions. Their impact on Futures is massive and often underestimated by retail traders.',
            'Market maker hedging, expirations, gamma squeeze... all this creates moves you can only understand by analyzing options.',
          ],
        },
      },
      {
        title: {
          fr: 'Mécanismes clés',
          en: 'Key mechanisms',
        },
        bullets: {
          fr: [
            '🔄 Delta Hedging: MMs ajustent leurs positions Futures selon le delta des options',
            '📅 Expirations: Les vendredis d\'expiration créent des mouvements particuliers',
            '💥 Gamma Squeeze: Feedback loop où le hedging amplifie le mouvement',
            '🧲 Pinning: Le prix est "épinglé" à certains strikes vers l\'expiration',
          ],
          en: [
            '🔄 Delta Hedging: MMs adjust Futures positions based on options delta',
            '📅 Expirations: Expiration Fridays create particular moves',
            '💥 Gamma Squeeze: Feedback loop where hedging amplifies the move',
            '🧲 Pinning: Price is "pinned" to certain strikes toward expiration',
          ],
        },
        infoBox: {
          type: 'premium',
          text: {
            fr: '👑 MIA intègre l\'analyse des flows d\'options pour anticiper les mouvements.',
            en: '👑 MIA integrates options flow analysis to anticipate moves.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 12: MARKET MAKERS
  // ═══════════════════════════════════════════════════════════════
  'market-makers': {
    sections: [
      {
        title: {
          fr: 'Qui sont les Market Makers?',
          en: 'Who are Market Makers?',
        },
        content: {
          fr: [
            'Les Market Makers (MMs) sont les institutions qui fournissent la liquidité au marché. Ils cotent en permanence des prix bid/ask et gagnent le spread. En contrepartie, ils prennent des risques qu\'ils doivent hedger.',
            'Comprendre comment les MMs hedgent leurs positions est LA CLÉ pour anticiper les mouvements du marché. C\'est ce que MenthorQ révèle.',
          ],
          en: [
            'Market Makers (MMs) are institutions that provide liquidity to the market. They continuously quote bid/ask prices and earn the spread. In return, they take risks they must hedge.',
            'Understanding how MMs hedge their positions is THE KEY to anticipating market moves. This is what MenthorQ reveals.',
          ],
        },
      },
      {
        title: {
          fr: 'Le hedging des MMs',
          en: 'MM hedging',
        },
        content: {
          fr: [
            'Quand un MM vend une option CALL, il devient short delta. Pour rester neutre, il doit acheter des Futures. Plus le prix monte vers le strike, plus il doit acheter.',
            'Ce hedging obligatoire crée des flux prévisibles. C\'est pourquoi les niveaux GEX fonctionnent: ils montrent où le hedging sera le plus intense.',
          ],
          en: [
            'When an MM sells a CALL option, they become short delta. To stay neutral, they must buy Futures. The more price rises toward strike, the more they must buy.',
            'This mandatory hedging creates predictable flows. This is why GEX levels work: they show where hedging will be most intense.',
          ],
        },
        bullets: {
          fr: [
            '📈 MM vend CALL → Doit acheter Futures si prix monte',
            '📉 MM vend PUT → Doit vendre Futures si prix baisse',
            '🔄 Ce hedging crée des feedback loops',
            '🎯 Niveaux GEX = Où le hedging est maximum',
          ],
          en: [
            '📈 MM sells CALL → Must buy Futures if price rises',
            '📉 MM sells PUT → Must sell Futures if price drops',
            '🔄 This hedging creates feedback loops',
            '🎯 GEX levels = Where hedging is maximum',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 13: VWAP INTRADAY
  // ═══════════════════════════════════════════════════════════════
  'vwap-intraday': {
    sections: [
      {
        title: {
          fr: 'VWAP: Le prix moyen institutionnel',
          en: 'VWAP: The institutional average price',
        },
        content: {
          fr: [
            'Le VWAP (Volume Weighted Average Price) est le prix moyen pondéré par le volume. C\'est LE niveau que regardent les institutionnels pour évaluer leurs exécutions.',
            'Prix au-dessus du VWAP = acheteurs en contrôle. Prix en-dessous = vendeurs en contrôle. Le VWAP reset chaque jour.',
          ],
          en: [
            'VWAP (Volume Weighted Average Price) is the volume-weighted average price. It\'s THE level institutions look at to evaluate their executions.',
            'Price above VWAP = buyers in control. Price below = sellers in control. VWAP resets daily.',
          ],
        },
      },
      {
        title: {
          fr: 'Les bandes VWAP',
          en: 'VWAP Bands',
        },
        content: {
          fr: [
            'Les bandes VWAP (±1σ, ±2σ) montrent les zones de sur-extension. Prix à la bande +2σ = très étendu, probable retour vers le VWAP.',
            'MIA utilise les bandes VWAP pour identifier les trades de "mean reversion".',
          ],
          en: [
            'VWAP bands (±1σ, ±2σ) show overextension zones. Price at +2σ band = very extended, likely return to VWAP.',
            'MIA uses VWAP bands to identify "mean reversion" trades.',
          ],
        },
        bullets: {
          fr: [
            '📊 VWAP = Prix moyen pondéré par volume',
            '📈 Prix > VWAP = Acheteurs en contrôle',
            '📉 Prix < VWAP = Vendeurs en contrôle',
            '🔄 Bandes ±2σ = Zones de sur-extension',
            '🎯 Confluence VWAP + niveau GEX = Signal très fort',
          ],
          en: [
            '📊 VWAP = Volume weighted average price',
            '📈 Price > VWAP = Buyers in control',
            '📉 Price < VWAP = Sellers in control',
            '🔄 ±2σ bands = Overextension zones',
            '🎯 VWAP + GEX level confluence = Very strong signal',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 14: ORDERFLOW
  // ═══════════════════════════════════════════════════════════════
  'orderflow': {
    sections: [
      {
        title: {
          fr: 'L\'OrderFlow: Voir SOUS le prix',
          en: 'OrderFlow: See UNDER the price',
        },
        content: {
          fr: [
            'Le prix vous montre CE QUI s\'est passé. L\'OrderFlow vous montre POURQUOI. C\'est la radiographie du marché: chaque trade exécuté, chaque ordre dans le carnet.',
            'L\'OrderFlow révèle ce que les chandeliers cachent. Une bougie verte peut cacher une absorption massive par des vendeurs.',
          ],
          en: [
            'Price shows you WHAT happened. OrderFlow shows you WHY. It\'s the market\'s X-ray: every trade executed, every order in the book.',
            'OrderFlow reveals what candlesticks hide. A green candle can hide massive absorption by sellers.',
          ],
        },
      },
      {
        title: {
          fr: 'Delta: Acheteurs vs Vendeurs',
          en: 'Delta: Buyers vs Sellers',
        },
        content: {
          fr: [
            'Le DELTA est la différence entre le volume acheté au Ask et le volume vendu au Bid. Delta positif = plus d\'acheteurs agressifs. Delta négatif = plus de vendeurs agressifs.',
            'Mais attention: si le prix ne monte pas malgré un delta positif, c\'est de l\'ABSORPTION - signal de retournement.',
          ],
          en: [
            'DELTA is the difference between volume bought at Ask and volume sold at Bid. Positive delta = more aggressive buyers. Negative delta = more aggressive sellers.',
            'But beware: if price doesn\'t rise despite positive delta, it\'s ABSORPTION - reversal signal.',
          ],
        },
        bullets: {
          fr: [
            '📊 DELTA = Volume Ask - Volume Bid',
            '📈 Delta + avec hausse = Tendance saine',
            '📉 Delta - avec baisse = Tendance saine',
            '⚠️ Delta + SANS hausse = Absorption bearish',
            '⚠️ Delta - SANS baisse = Absorption bullish',
          ],
          en: [
            '📊 DELTA = Ask Volume - Bid Volume',
            '📈 + Delta with rise = Healthy trend',
            '📉 - Delta with drop = Healthy trend',
            '⚠️ + Delta WITHOUT rise = Bearish absorption',
            '⚠️ - Delta WITHOUT drop = Bullish absorption',
          ],
        },
        infoBox: {
          type: 'premium',
          text: {
            fr: '👑 MIA analyse le delta en temps réel pour confirmer ses signaux.',
            en: '👑 MIA analyzes delta in real-time to confirm its signals.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 15: POSITIVE NEGATIVE GAMMA
  // ═══════════════════════════════════════════════════════════════
  'positive-negative-gamma': {
    sections: [
      {
        title: {
          fr: 'Gamma Positif vs Négatif',
          en: 'Positive vs Negative Gamma',
        },
        content: {
          fr: [
            'Quand les MMs ont une exposition gamma POSITIVE, leur hedging STABILISE le marché: si le prix monte, ils vendent; s\'il baisse, ils achètent. Résultat: le marché range.',
            'Quand les MMs ont une exposition gamma NÉGATIVE, leur hedging AMPLIFIE les mouvements. Résultat: mouvements explosifs.',
          ],
          en: [
            'When MMs have POSITIVE gamma exposure, their hedging STABILIZES the market: if price rises, they sell; if it drops, they buy. Result: market ranges.',
            'When MMs have NEGATIVE gamma exposure, their hedging AMPLIFIES moves. Result: explosive moves.',
          ],
        },
      },
      {
        title: {
          fr: 'Identifier le régime',
          en: 'Identifying the regime',
        },
        bullets: {
          fr: [
            '🟢 Gamma POSITIF: Marché stable, range, faible volatilité. Stratégie: Mean reversion',
            '🔴 Gamma NÉGATIF: Marché explosif, trending. Stratégie: Momentum',
            '🔄 Gamma Flip: Niveau où le régime change',
            '📊 MenthorQ fournit le niveau de Gamma Flip quotidien',
          ],
          en: [
            '🟢 POSITIVE Gamma: Stable market, range, low volatility. Strategy: Mean reversion',
            '🔴 NEGATIVE Gamma: Explosive market, trending. Strategy: Momentum',
            '🔄 Gamma Flip: Level where regime changes',
            '📊 MenthorQ provides daily Gamma Flip level',
          ],
        },
        infoBox: {
          type: 'warning',
          text: {
            fr: '⚠️ Trader une stratégie de range en gamma négatif = pertes garanties.',
            en: '⚠️ Trading a range strategy in negative gamma = guaranteed losses.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 16: GEX LEVELS 1-10
  // ═══════════════════════════════════════════════════════════════
  'gex-levels-1-10': {
    sections: [
      {
        title: {
          fr: 'Les 10 niveaux GEX',
          en: 'The 10 GEX levels',
        },
        content: {
          fr: [
            'MenthorQ fournit 10 niveaux GEX classés par force décroissante. GEX 1 est le niveau avec le PLUS de gamma exposure - le plus fiable. GEX 10 est le plus faible.',
            'MIA utilise un scoring: GEX 1-2 = Score 3 (Fort), GEX 3-5 = Score 2 (Moyen), GEX 6-10 = Score 1 (Faible).',
          ],
          en: [
            'MenthorQ provides 10 GEX levels ranked by decreasing strength. GEX 1 is the level with MOST gamma exposure - most reliable. GEX 10 is weakest.',
            'MIA uses a scoring system: GEX 1-2 = Score 3 (Strong), GEX 3-5 = Score 2 (Medium), GEX 6-10 = Score 1 (Weak).',
          ],
        },
      },
      {
        title: {
          fr: 'Confluences',
          en: 'Confluences',
        },
        bullets: {
          fr: [
            '🥇 GEX 1-2: Score 3 (FORT) - Réactions très probables',
            '🥈 GEX 3-5: Score 2 (MOYEN) - Bonnes réactions avec confirmation',
            '🥉 GEX 6-10: Score 1 (FAIBLE) - Besoin de plus de confluence',
            '💎 Confluence: Plusieurs niveaux empilés = Zone premium',
            '🎯 MIA ne trade que les zones Score 3 ou forte confluence',
          ],
          en: [
            '🥇 GEX 1-2: Score 3 (STRONG) - Reactions very likely',
            '🥈 GEX 3-5: Score 2 (MEDIUM) - Good reactions with confirmation',
            '🥉 GEX 6-10: Score 1 (WEAK) - Need more confluence',
            '💎 Confluence: Multiple stacked levels = Premium zone',
            '🎯 MIA only trades Score 3 zones or high confluence',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 17: BLIND SPOTS TRADING
  // ═══════════════════════════════════════════════════════════════
  'blind-spots-trading': {
    sections: [
      {
        title: {
          fr: 'Blind Spots: Les niveaux cachés',
          en: 'Blind Spots: The hidden levels',
        },
        content: {
          fr: [
            'Les Blind Spots sont des zones de réaction CACHÉES que 95% des traders ne voient pas. Ils sont calculés en analysant la CORRÉLATION entre différents actifs (SPX, SPY, ES).',
            'BL 1 = le plus fort. BL 10 = le plus faible. Ne mettez JAMAIS vos stops juste au-delà d\'un Blind Spot.',
          ],
          en: [
            'Blind Spots are HIDDEN reaction zones that 95% of traders don\'t see. They\'re calculated by analyzing CORRELATION between different assets (SPX, SPY, ES).',
            'BL 1 = strongest. BL 10 = weakest. NEVER put your stops just beyond a Blind Spot.',
          ],
        },
      },
      {
        title: {
          fr: 'Trading avec les Blind Spots',
          en: 'Trading with Blind Spots',
        },
        bullets: {
          fr: [
            '👁️ Blind Spots = Convergence de niveaux cross-market',
            '🥇 BL 1-3: Les plus fiables, forte probabilité de réaction',
            '🔍 95% des traders ne voient pas ces niveaux',
            '⚠️ Ne jamais mettre de stop juste au-delà d\'un Blind Spot',
            '⚡ Mouvements souvent rapides car peu anticipés',
          ],
          en: [
            '👁️ Blind Spots = Cross-market level convergence',
            '🥇 BL 1-3: Most reliable, high reaction probability',
            '🔍 95% of traders don\'t see these levels',
            '⚠️ Never put stops just beyond a Blind Spot',
            '⚡ Often fast moves as few anticipate them',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 18: 0DTE OPTIONS IMPACT
  // ═══════════════════════════════════════════════════════════════
  '0dte-options-impact': {
    sections: [
      {
        title: {
          fr: '0DTE: La révolution du trading moderne',
          en: '0DTE: The modern trading revolution',
        },
        content: {
          fr: [
            'Les options 0DTE (Zero Days To Expiration) expirent LE JOUR MÊME. Leur volume a explosé, représentant une part MASSIVE du marché. Le gamma des 0DTE est EXTRÊME.',
            'Le gamma augmente exponentiellement quand l\'expiration approche. Les mouvements de hedging sont donc beaucoup plus violents.',
          ],
          en: [
            '0DTE (Zero Days To Expiration) options expire THE SAME DAY. Their volume has exploded, representing a MASSIVE share of the market. 0DTE gamma is EXTREME.',
            'Gamma increases exponentially as expiration approaches. Hedging moves are therefore much more violent.',
          ],
        },
      },
      {
        title: {
          fr: 'Impact intraday',
          en: 'Intraday impact',
        },
        bullets: {
          fr: [
            '⚡ 0DTE = Options expirant le jour même, gamma extrême',
            '📈 Volume 0DTE en explosion',
            '🎯 Niveaux 0DTE = Zones de réaction intraday cruciales',
            '🕐 Vers 20h-21h Paris: Gamma squeeze possible',
            '💥 Mouvements peuvent être très violents',
          ],
          en: [
            '⚡ 0DTE = Options expiring same day, extreme gamma',
            '📈 0DTE volume exploding',
            '🎯 0DTE levels = Crucial intraday reaction zones',
            '🕐 Around 2-3pm ET: Possible gamma squeeze',
            '💥 Moves can be very violent',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 19: CALL RESISTANCE PUT SUPPORT
  // ═══════════════════════════════════════════════════════════════
  'call-resistance-put-support': {
    sections: [
      {
        title: {
          fr: 'Call Resistance & Put Support',
          en: 'Call Resistance & Put Support',
        },
        content: {
          fr: [
            'Call Resistance: Le niveau où la concentration de CALL options crée une résistance naturelle. Quand le prix approche, les MMs vendent des Futures pour hedger, créant une pression vendeuse.',
            'Put Support: Le niveau où la concentration de PUT options crée un support naturel. Quand le prix approche, les MMs achètent des Futures pour hedger, créant une pression acheteuse.',
          ],
          en: [
            'Call Resistance: The level where CALL options concentration creates natural resistance. When price approaches, MMs sell Futures to hedge, creating selling pressure.',
            'Put Support: The level where PUT options concentration creates natural support. When price approaches, MMs buy Futures to hedge, creating buying pressure.',
          ],
        },
      },
      {
        title: {
          fr: 'Trading ces niveaux',
          en: 'Trading these levels',
        },
        bullets: {
          fr: [
            '📈 Call Resistance = Plafond créé par le gamma des CALLS',
            '📉 Put Support = Plancher créé par le gamma des PUTS',
            '🎯 MenthorQ fournit ces niveaux quotidiennement',
            '💥 Cassure = Hedging accéléré = Mouvement explosif',
            '🔄 Entre les deux = Zone de range probable',
          ],
          en: [
            '📈 Call Resistance = Ceiling created by CALL gamma',
            '📉 Put Support = Floor created by PUT gamma',
            '🎯 MenthorQ provides these levels daily',
            '💥 Break = Accelerated hedging = Explosive move',
            '🔄 Between the two = Likely range zone',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 20: DELTA EXPOSURE DEX
  // ═══════════════════════════════════════════════════════════════
  'delta-exposure-dex': {
    sections: [
      {
        title: {
          fr: 'Delta Exposure (DEX)',
          en: 'Delta Exposure (DEX)',
        },
        content: {
          fr: [
            'Le DEX (Delta Exposure) mesure l\'exposition directionnelle nette des market makers. Positif = les MMs sont net long delta. Négatif = les MMs sont net short delta.',
            'Le DEX donne un biais directionnel pour la journée. DEX positif = biais haussier. DEX négatif = biais baissier.',
          ],
          en: [
            'DEX (Delta Exposure) measures market makers\' net directional exposure. Positive = MMs are net long delta. Negative = MMs are net short delta.',
            'DEX gives a directional bias for the day. Positive DEX = bullish bias. Negative DEX = bearish bias.',
          ],
        },
      },
      {
        title: {
          fr: 'Utilisation du DEX',
          en: 'Using DEX',
        },
        bullets: {
          fr: [
            '📈 DEX positif = Plus de delta long, biais haussier',
            '📉 DEX négatif = Plus de delta short, biais baissier',
            '🌊 Trader dans la direction du DEX = "vent dans le dos"',
            '🔄 Utilisé par MIA comme filtre directionnel',
            '⚠️ N\'est PAS un signal de trade, juste un biais',
          ],
          en: [
            '📈 Positive DEX = More long delta, bullish bias',
            '📉 Negative DEX = More short delta, bearish bias',
            '🌊 Trading in DEX direction = "wind at your back"',
            '🔄 Used by MIA as directional filter',
            '⚠️ NOT a trade signal, just a bias',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 21: EXPECTED MOVE RANGE
  // ═══════════════════════════════════════════════════════════════
  'expected-move-range': {
    sections: [
      {
        title: {
          fr: 'Expected Move: Les bornes du jour',
          en: 'Expected Move: The day\'s boundaries',
        },
        content: {
          fr: [
            'MenthorQ calcule le range attendu basé sur la volatilité implicite des options. 1D Min = prix minimum probable. 1D Max = prix maximum probable. 68% de chances de rester dans ce range.',
            'Ces niveaux vous donnent les "bornes" probables de la journée. Utile pour définir vos targets.',
          ],
          en: [
            'MenthorQ calculates the expected range based on implied volatility of options. 1D Min = probable minimum price. 1D Max = probable maximum price. 68% chance of staying within this range.',
            'These levels give you the probable "boundaries" for the day. Useful for setting targets.',
          ],
        },
      },
      {
        title: {
          fr: 'Trading avec le Expected Move',
          en: 'Trading with Expected Move',
        },
        bullets: {
          fr: [
            '📊 1D Range = Range attendu avec 68% de probabilité',
            '🔺 1D Max atteint → Probable résistance, prendre profits',
            '🔻 1D Min atteint → Probable support, prendre profits',
            '💥 Cassure du range = Move exceptionnel ou piège',
            '🎯 Utiliser pour définir targets réalistes',
          ],
          en: [
            '📊 1D Range = Expected range with 68% probability',
            '🔺 1D Max reached → Probable resistance, take profits',
            '🔻 1D Min reached → Probable support, take profits',
            '💥 Range break = Exceptional move or trap',
            '🎯 Use to set realistic targets',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 22: HVL GAMMA FLIP
  // ═══════════════════════════════════════════════════════════════
  'hvl-gamma-flip': {
    sections: [
      {
        title: {
          fr: 'HVL & Gamma Flip',
          en: 'HVL & Gamma Flip',
        },
        content: {
          fr: [
            'Le HVL (High Volume Level) et le Gamma Flip sont deux niveaux clés qui définissent le "caractère" du marché pour la journée.',
            'Le Gamma Flip est le niveau où le gamma passe de positif à négatif. Au-dessus = gamma positif (stabilisation). En-dessous = gamma négatif (amplification).',
          ],
          en: [
            'HVL (High Volume Level) and Gamma Flip are two key levels that define the market\'s "character" for the day.',
            'Gamma Flip is the level where gamma switches from positive to negative. Above = positive gamma (stabilization). Below = negative gamma (amplification).',
          ],
        },
      },
      {
        title: {
          fr: 'Importance combinée',
          en: 'Combined importance',
        },
        bullets: {
          fr: [
            '🎯 HVL = Centre de gravité, biais directionnel',
            '🔄 Gamma Flip = Changement de régime volatilité',
            '📈 Prix > les deux = Conditions optimales pour longs',
            '📉 Prix < les deux = Conditions optimales pour shorts',
            '⚠️ Prix entre les deux = Zone d\'incertitude',
          ],
          en: [
            '🎯 HVL = Center of gravity, directional bias',
            '🔄 Gamma Flip = Volatility regime change',
            '📈 Price > both = Optimal conditions for longs',
            '📉 Price < both = Optimal conditions for shorts',
            '⚠️ Price between = Uncertainty zone',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 23: DEALER HEDGING MECHANICS
  // ═══════════════════════════════════════════════════════════════
  'dealer-hedging-mechanics': {
    sections: [
      {
        title: {
          fr: 'Mécanique du hedging des dealers',
          en: 'Dealer hedging mechanics',
        },
        content: {
          fr: [
            'Le delta hedging est LE mécanisme qui fait bouger le marché. Quand un dealer vend une option CALL, il devient "short delta". Pour rester neutre, il doit acheter des futures.',
            'C\'est pourquoi les niveaux GEX fonctionnent: ils représentent où ce hedging sera le plus intense.',
          ],
          en: [
            'Delta hedging is THE mechanism that moves the market. When a dealer sells a CALL option, they become "short delta". To stay neutral, they must buy futures.',
            'This is why GEX levels work: they represent where this hedging will be most intense.',
          ],
        },
      },
      {
        title: {
          fr: 'Feedback loops',
          en: 'Feedback loops',
        },
        content: {
          fr: [
            'Le hedging crée des FEEDBACK LOOPS. Prix monte → Dealers achètent pour hedger → Prix monte encore. C\'est le "gamma squeeze".',
            'Ces loops sont particulièrement violentes en gamma négatif et près des gros strikes 0DTE.',
          ],
          en: [
            'Hedging creates FEEDBACK LOOPS. Price rises → Dealers buy to hedge → Price rises more. That\'s the "gamma squeeze".',
            'These loops are particularly violent in negative gamma and near large 0DTE strikes.',
          ],
        },
        bullets: {
          fr: [
            '🔄 Delta Hedging = Dealers ajustent pour rester neutres',
            '📈 Prix monte + Call gamma = Dealers achètent = Prix monte plus',
            '📉 Prix baisse + Put gamma = Dealers vendent = Prix baisse plus',
            '💥 Gamma Squeeze = Feedback loop extrême',
          ],
          en: [
            '🔄 Delta Hedging = Dealers adjust to stay neutral',
            '📈 Price up + Call gamma = Dealers buy = Price up more',
            '📉 Price down + Put gamma = Dealers sell = Price down more',
            '💥 Gamma Squeeze = Extreme feedback loop',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 24: GAMMA WALLS MAGNETS
  // ═══════════════════════════════════════════════════════════════
  'gamma-walls-magnets': {
    sections: [
      {
        title: {
          fr: 'Gamma Walls: Les murs invisibles',
          en: 'Gamma Walls: The invisible walls',
        },
        content: {
          fr: [
            'Un Gamma Wall est un niveau avec une concentration MASSIVE de gamma. C\'est comme un mur invisible que le prix a du mal à franchir.',
            'Contrairement aux S/R techniques, les Gamma Walls sont basés sur des positions réelles avec de l\'argent derrière.',
          ],
          en: [
            'A Gamma Wall is a level with MASSIVE gamma concentration. It\'s like an invisible wall that price struggles to break through.',
            'Unlike technical S/R, Gamma Walls are based on real positions with real money behind them.',
          ],
        },
      },
      {
        title: {
          fr: 'Niveaux magnétiques',
          en: 'Magnetic levels',
        },
        content: {
          fr: [
            'Certains niveaux agissent comme des AIMANTS. Le prix est attiré vers eux, surtout vers la fin de journée (pinning).',
            'Le "pinning" se produit quand le prix oscille autour d\'un niveau vers l\'expiration.',
          ],
          en: [
            'Certain levels act like MAGNETS. Price is attracted to them, especially toward end of day (pinning).',
            '"Pinning" occurs when price oscillates around a level toward expiration.',
          ],
        },
        bullets: {
          fr: [
            '🧱 Gamma Wall = Concentration massive, dur à casser',
            '🧲 Niveau Magnétique = Prix attiré vers ce niveau',
            '📌 Pinning = Prix oscille autour d\'un strike',
            '⚡ Cassure d\'un Gamma Wall = Move explosif',
          ],
          en: [
            '🧱 Gamma Wall = Massive concentration, hard to break',
            '🧲 Magnetic Level = Price attracted to this level',
            '📌 Pinning = Price oscillates around strike',
            '⚡ Gamma Wall break = Explosive move',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 25: VIX VVIX VOLATILITY
  // ═══════════════════════════════════════════════════════════════
  'vix-vvix-volatility': {
    sections: [
      {
        title: {
          fr: 'VIX: Le thermomètre de la peur',
          en: 'VIX: The fear thermometer',
        },
        content: {
          fr: [
            'Le VIX mesure la volatilité implicite des options SPX. VIX monte = peur. VIX baisse = complaisance. Le VIX est TOUJOURS inversé par rapport au ES.',
            'VIX < 15: Complaisance. VIX 15-20: Normal. VIX 20-30: Stress. VIX > 30: Panique.',
          ],
          en: [
            'VIX measures implied volatility of SPX options. VIX rises = fear. VIX drops = complacency. VIX is ALWAYS inverse to ES.',
            'VIX < 15: Complacency. VIX 15-20: Normal. VIX 20-30: Stress. VIX > 30: Panic.',
          ],
        },
      },
      {
        title: {
          fr: 'VVIX: Indicateur avancé',
          en: 'VVIX: Leading indicator',
        },
        bullets: {
          fr: [
            '😱 VIX = Volatilité implicite SPX, inverse au ES',
            '📊 VIX < 15: Complaisance | 15-20: Normal | > 30: Panique',
            '🔮 VVIX = Volatilité du VIX, indicateur avancé',
            '⚠️ VVIX spike avant VIX = Mouvement à venir',
            '💡 MIA ajuste les stops selon le niveau VIX',
          ],
          en: [
            '😱 VIX = SPX implied volatility, inverse to ES',
            '📊 VIX < 15: Complacency | 15-20: Normal | > 30: Panic',
            '🔮 VVIX = VIX volatility, leading indicator',
            '⚠️ VVIX spike before VIX = Coming move',
            '💡 MIA adjusts stops based on VIX level',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 26: OPTION GREEKS TRADERS
  // ═══════════════════════════════════════════════════════════════
  'option-greeks-traders': {
    sections: [
      {
        title: {
          fr: 'Les Greeks pour les traders Futures',
          en: 'Greeks for Futures traders',
        },
        content: {
          fr: [
            'Même si vous ne tradez QUE des futures, comprendre les Greeks est crucial car ils expliquent POURQUOI le marché bouge.',
            'Vous n\'avez pas besoin de calculs complexes. Juste de comprendre les concepts.',
          ],
          en: [
            'Even if you ONLY trade futures, understanding Greeks is crucial because they explain WHY the market moves.',
            'You don\'t need complex calculations. Just understanding the concepts.',
          ],
        },
      },
      {
        title: {
          fr: 'Les 4 Greeks à connaître',
          en: 'The 4 Greeks to know',
        },
        bullets: {
          fr: [
            'Δ DELTA: Sensibilité prix. Base du hedging',
            'Γ GAMMA: Accélération du delta. Crée les niveaux GEX',
            '🌀 VANNA: Delta/Volatilité. Hedging quand VIX bouge',
            '⏰ CHARM: Delta/Temps. Explique le 0DTE effect',
          ],
          en: [
            'Δ DELTA: Price sensitivity. Base of hedging',
            'Γ GAMMA: Delta acceleration. Creates GEX levels',
            '🌀 VANNA: Delta/Volatility. Hedging when VIX moves',
            '⏰ CHARM: Delta/Time. Explains the 0DTE effect',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 27: REGIME BASED TRADING
  // ═══════════════════════════════════════════════════════════════
  'regime-based-trading': {
    sections: [
      {
        title: {
          fr: 'Régimes de marché',
          en: 'Market regimes',
        },
        content: {
          fr: [
            'Le marché alterne entre différents "régimes": Risk-On (actions montent), Risk-Off (fuite vers les valeurs refuge), Range (consolidation), Trending (tendance directionnelle).',
            'Une stratégie qui marche en trending échoue en range. L\'adaptation au régime est CRUCIALE.',
          ],
          en: [
            'The market alternates between different "regimes": Risk-On (stocks rise), Risk-Off (flight to safety), Range (consolidation), Trending (directional trend).',
            'A strategy that works in trending fails in range. Regime adaptation is CRUCIAL.',
          ],
        },
      },
      {
        title: {
          fr: 'Identifier le régime',
          en: 'Identifying the regime',
        },
        bullets: {
          fr: [
            '🟢 RISK-ON: VIX bas, acheter les dips',
            '🔴 RISK-OFF: VIX haut, vendre rallies',
            '📊 RANGE: Fade les extrêmes, mean reversion',
            '🚀 TRENDING: Suivre momentum, breakouts',
            '🔄 MIA adapte automatiquement selon le régime',
          ],
          en: [
            '🟢 RISK-ON: Low VIX, buy dips',
            '🔴 RISK-OFF: High VIX, sell rallies',
            '📊 RANGE: Fade extremes, mean reversion',
            '🚀 TRENDING: Follow momentum, breakouts',
            '🔄 MIA automatically adapts based on regime',
          ],
        },
        infoBox: {
          type: 'premium',
          text: {
            fr: '👑 Le Dashboard MIA affiche le régime actuel détecté.',
            en: '👑 The MIA Dashboard displays the current detected regime.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 28: MONEY MANAGEMENT
  // ═══════════════════════════════════════════════════════════════
  'money-management': {
    sections: [
      {
        title: {
          fr: 'Money Management: La clé du succès',
          en: 'Money Management: The key to success',
        },
        content: {
          fr: [
            'Le money management va au-delà du simple risk management. C\'est comment vous gérez votre capital globalement: taille de position, allocation, drawdown maximum.',
            'La règle des 2%: Ne jamais risquer plus de 2% de votre capital total sur un seul trade. Avec $10,000, max $200 de risque par trade.',
          ],
          en: [
            'Money management goes beyond simple risk management. It\'s how you manage your capital overall: position size, allocation, maximum drawdown.',
            'The 2% rule: Never risk more than 2% of your total capital on a single trade. With $10,000, max $200 risk per trade.',
          ],
        },
      },
      {
        title: {
          fr: 'Règles de money management',
          en: 'Money management rules',
        },
        bullets: {
          fr: [
            '💰 Règle des 2%: Max 2% du capital par trade',
            '📉 Daily Stop: Arrêter après -3% du capital journalier',
            '📊 Position sizing: Adapter la taille selon la conviction',
            '🔄 Scale in/out: Entrer et sortir progressivement',
            '⚠️ Ne jamais moyenner à la baisse sur les pertes',
          ],
          en: [
            '💰 2% Rule: Max 2% of capital per trade',
            '📉 Daily Stop: Stop after -3% of daily capital',
            '📊 Position sizing: Adapt size based on conviction',
            '🔄 Scale in/out: Enter and exit progressively',
            '⚠️ Never average down on losses',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 29: CORRELATION INTERMARCHES
  // ═══════════════════════════════════════════════════════════════
  'correlation-intermarches': {
    sections: [
      {
        title: {
          fr: 'Corrélations inter-marchés',
          en: 'Inter-market correlations',
        },
        content: {
          fr: [
            'ES, NQ et RTY bougent souvent ensemble mais pas toujours de la même façon. Les divergences de corrélation sont des signaux puissants.',
            'NQ fait un nouveau high mais ES ne suit pas? Le rally tech est peut-être un piège.',
          ],
          en: [
            'ES, NQ and RTY often move together but not always the same way. Correlation divergences are powerful signals.',
            'NQ makes a new high but ES doesn\'t follow? The tech rally might be a trap.',
          ],
        },
      },
      {
        title: {
          fr: 'Corrélations clés',
          en: 'Key correlations',
        },
        bullets: {
          fr: [
            '🔗 ES/NQ: Corrélation positive, NQ 2-3x plus volatil',
            '📉 ES/Bonds (ZB): Généralement inverse',
            '😱 ES/VIX: Toujours inverse',
            '⚠️ Divergence de corrélation = Alerte',
            '✅ Corrélation confirmée = Signal plus fiable',
          ],
          en: [
            '🔗 ES/NQ: Positive correlation, NQ 2-3x more volatile',
            '📉 ES/Bonds (ZB): Generally inverse',
            '😱 ES/VIX: Always inverse',
            '⚠️ Correlation divergence = Alert',
            '✅ Confirmed correlation = More reliable signal',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 30: ECONOMIC CALENDAR
  // ═══════════════════════════════════════════════════════════════
  'economic-calendar': {
    sections: [
      {
        title: {
          fr: 'Calendrier économique',
          en: 'Economic calendar',
        },
        content: {
          fr: [
            'Les news économiques majeures (FOMC, NFP, CPI) créent des mouvements violents et imprévisibles. Règle #1: NE TRADEZ PAS pendant les 30 minutes autour de l\'annonce.',
            'MIA désactive automatiquement les signaux pendant les événements majeurs.',
          ],
          en: [
            'Major economic news (FOMC, NFP, CPI) creates violent and unpredictable moves. Rule #1: DON\'T TRADE during the 30 minutes around the announcement.',
            'MIA automatically disables signals during major events.',
          ],
        },
      },
      {
        title: {
          fr: 'Événements à connaître',
          en: 'Events to know',
        },
        bullets: {
          fr: [
            '🔴 FOMC, NFP, CPI, GDP: ÉVITER absolument',
            '🟡 Jobless Claims, PMI: Prudence',
            '📅 Vérifier calendrier économique chaque matin',
            '⏰ Pas de trade 30 min avant/après annonces majeures',
            '🛑 MIA désactive les signaux automatiquement',
          ],
          en: [
            '🔴 FOMC, NFP, CPI, GDP: ABSOLUTELY avoid',
            '🟡 Jobless Claims, PMI: Caution',
            '📅 Check economic calendar every morning',
            '⏰ No trades 30 min before/after major announcements',
            '🛑 MIA disables signals automatically',
          ],
        },
        infoBox: {
          type: 'warning',
          text: {
            fr: '⚠️ Les news peuvent créer des gaps de 50+ points en quelques secondes.',
            en: '⚠️ News can create 50+ point gaps in seconds.',
          },
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 31: JOURNALING BACKTESTING
  // ═══════════════════════════════════════════════════════════════
  'journaling-backtesting': {
    sections: [
      {
        title: {
          fr: 'Journal de trading & Backtesting',
          en: 'Trading journal & Backtesting',
        },
        content: {
          fr: [
            'Le backtesting consiste à tester une stratégie sur des données historiques. ESSENTIEL avant de risquer de l\'argent réel.',
            'Le journal transforme vos erreurs en leçons. Sans journal, vous répétez les mêmes erreurs.',
          ],
          en: [
            'Backtesting is testing a strategy on historical data. ESSENTIAL before risking real money.',
            'The journal transforms your mistakes into lessons. Without a journal, you repeat the same mistakes.',
          ],
        },
      },
      {
        title: {
          fr: 'Métriques clés',
          en: 'Key metrics',
        },
        bullets: {
          fr: [
            '📊 Win Rate: % gagnants. MIA cible 55-65%',
            '💰 Profit Factor: Gains/Pertes. MIA cible >1.5',
            '📉 Max Drawdown: Perte max. MIA cible <15%',
            '📈 Sharpe Ratio: Rendement/Risque. MIA cible >1.2',
            '⚠️ Attention à l\'overfitting',
          ],
          en: [
            '📊 Win Rate: % winners. MIA targets 55-65%',
            '💰 Profit Factor: Gains/Losses. MIA targets >1.5',
            '📉 Max Drawdown: Max loss. MIA targets <15%',
            '📈 Sharpe Ratio: Return/Risk. MIA targets >1.2',
            '⚠️ Beware overfitting',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 32: MULTI TIMEFRAME ANALYSIS
  // ═══════════════════════════════════════════════════════════════
  'multi-timeframe-analysis': {
    sections: [
      {
        title: {
          fr: 'Analyse multi-timeframe',
          en: 'Multi-timeframe analysis',
        },
        content: {
          fr: [
            'Regarder un seul timeframe, c\'est comme regarder un arbre sans voir la forêt. L\'analyse multi-timeframe vous donne le contexte complet.',
            'Règle générale: identifier la tendance sur le TF supérieur, trouver l\'entrée sur le TF inférieur.',
          ],
          en: [
            'Looking at a single timeframe is like looking at a tree without seeing the forest. Multi-timeframe analysis gives you the complete context.',
            'General rule: identify trend on higher TF, find entry on lower TF.',
          ],
        },
      },
      {
        title: {
          fr: 'Structure recommandée',
          en: 'Recommended structure',
        },
        bullets: {
          fr: [
            '📊 Daily/4H: Direction générale, niveaux clés',
            '⏱️ 1H/30min: Structure intermédiaire, setups',
            '🔍 5min/1min: Entrées précises, timing',
            '🎯 Alignement des TF = Signal plus fort',
            '⚠️ Jamais d\'entrée contre le TF supérieur',
          ],
          en: [
            '📊 Daily/4H: General direction, key levels',
            '⏱️ 1H/30min: Intermediate structure, setups',
            '🔍 5min/1min: Precise entries, timing',
            '🎯 TF alignment = Stronger signal',
            '⚠️ Never enter against higher TF',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 33: LIQUIDITY SWEEPS
  // ═══════════════════════════════════════════════════════════════
  'liquidity-sweeps': {
    sections: [
      {
        title: {
          fr: 'Liquidity Sweeps: La chasse aux stops',
          en: 'Liquidity Sweeps: Stop hunting',
        },
        content: {
          fr: [
            'Les "liquidity pools" sont des zones où de nombreux stops sont regroupés. Les gros joueurs chassent ces zones.',
            'Le "stop hunt" est une pratique courante: le prix pousse vers une zone de liquidité, déclenche les stops, puis reverse.',
          ],
          en: [
            'Liquidity pools are zones where many stops are grouped. Big players hunt these zones.',
            '"Stop hunt" is common practice: price pushes toward a liquidity zone, triggers stops, then reverses.',
          ],
        },
      },
      {
        title: {
          fr: 'Éviter les pièges',
          en: 'Avoiding traps',
        },
        bullets: {
          fr: [
            '🎯 Liquidity = Accumulation de stops',
            '🔺 Au-dessus des highs = Stops des shorts',
            '🔻 En-dessous des lows = Stops des longs',
            '🏹 Stop Hunt = Prix chasse puis reverse',
            '💡 Attendre le hunt puis entrer dans le reversal',
          ],
          en: [
            '🎯 Liquidity = Accumulation of stops',
            '🔺 Above highs = Short stops',
            '🔻 Below lows = Long stops',
            '🏹 Stop Hunt = Price hunts then reverses',
            '💡 Wait for hunt then enter on reversal',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 34: MARKET PROFILE
  // ═══════════════════════════════════════════════════════════════
  'market-profile': {
    sections: [
      {
        title: {
          fr: 'Market Profile & Volume Profile',
          en: 'Market Profile & Volume Profile',
        },
        content: {
          fr: [
            'Le Volume Profile montre la distribution du volume par NIVEAU DE PRIX. Vous voyez où le marché a passé le plus de temps et échangé le plus de volume.',
            'Les HVN (High Volume Nodes) agissent comme des aimants. Les LVN (Low Volume Nodes) sont des zones de "vide" que le prix traverse rapidement.',
          ],
          en: [
            'Volume Profile shows volume distribution by PRICE LEVEL. You see where the market spent the most time and traded the most volume.',
            'HVN (High Volume Nodes) act as magnets. LVN (Low Volume Nodes) are "void" zones that price crosses quickly.',
          ],
        },
      },
      {
        title: {
          fr: 'POC et Value Area',
          en: 'POC and Value Area',
        },
        bullets: {
          fr: [
            '📊 Volume Profile = Distribution par prix',
            '🎯 POC = Point de contrôle, prix "équitable"',
            '📐 Value Area (VAH/VAL) = 70% du volume',
            '🚀 LVN = Zone de vide, prix traverse vite',
            '🧲 HVN = Zone d\'aimant, prix attiré',
          ],
          en: [
            '📊 Volume Profile = Distribution by price',
            '🎯 POC = Point of control, "fair" price',
            '📐 Value Area (VAH/VAL) = 70% of volume',
            '🚀 LVN = Void zone, price crosses fast',
            '🧲 HVN = Magnet zone, price attracted',
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 35: FIBONACCI EXTENSIONS
  // ═══════════════════════════════════════════════════════════════
  'fibonacci-extensions': {
    sections: [
      {
        title: {
          fr: 'Extensions Fibonacci',
          en: 'Fibonacci Extensions',
        },
        content: {
          fr: [
            'Les extensions Fibonacci projettent des objectifs de prix au-delà du mouvement initial. Les niveaux clés: 127.2%, 161.8%, 200%, 261.8%.',
            'Utilisées pour définir des take profits lorsque le prix casse un range ou une structure précédente.',
          ],
          en: [
            'Fibonacci extensions project price targets beyond the initial move. Key levels: 127.2%, 161.8%, 200%, 261.8%.',
            'Used to set take profits when price breaks a range or previous structure.',
          ],
        },
      },
      {
        title: {
          fr: 'Niveaux clés',
          en: 'Key levels',
        },
        bullets: {
          fr: [
            '📏 127.2%: Premier objectif conservateur',
            '🎯 161.8%: Le "golden ratio", objectif principal',
            '📈 200%: Extension double, fort mouvement',
            '💥 261.8%: Extension extrême, rare',
            '🔄 Confluence avec GEX = Zone de réaction forte',
          ],
          en: [
            '📏 127.2%: First conservative target',
            '🎯 161.8%: The "golden ratio", main target',
            '📈 200%: Double extension, strong move',
            '💥 261.8%: Extreme extension, rare',
            '🔄 Confluence with GEX = Strong reaction zone',
          ],
        },
      },
    ],
  },

};
