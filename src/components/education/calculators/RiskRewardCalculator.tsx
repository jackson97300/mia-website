'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  language?: string;
}

export default function RiskRewardCalculator({ language = 'fr' }: Props) {
  const [entryPrice, setEntryPrice] = useState(4500);
  const [stopLoss, setStopLoss] = useState(4490);
  const [takeProfit, setTakeProfit] = useState(4515);
  const [direction, setDirection] = useState<'long' | 'short'>('long');
  const [tickValue, setTickValue] = useState(12.5); // ES default
  const [contracts, setContracts] = useState(1);

  // Calculs
  const risk = direction === 'long' 
    ? (entryPrice - stopLoss) 
    : (stopLoss - entryPrice);
  
  const reward = direction === 'long' 
    ? (takeProfit - entryPrice) 
    : (entryPrice - takeProfit);

  const riskTicks = Math.abs(risk) / 0.25; // ES tick size
  const rewardTicks = Math.abs(reward) / 0.25;
  
  const riskDollars = riskTicks * tickValue * contracts;
  const rewardDollars = rewardTicks * tickValue * contracts;
  
  const rrRatio = risk > 0 ? reward / risk : 0;

  // Validation
  const isValidSetup = direction === 'long' 
    ? (stopLoss < entryPrice && takeProfit > entryPrice)
    : (stopLoss > entryPrice && takeProfit < entryPrice);

  // Textes
  const texts = {
    fr: {
      title: '🧮 Calculateur Risk/Reward',
      description: 'Calculez votre ratio risque/récompense avant chaque trade',
      direction: 'Direction',
      long: 'LONG (Achat)',
      short: 'SHORT (Vente)',
      entry: 'Prix d\'entrée',
      stopLoss: 'Stop Loss',
      takeProfit: 'Take Profit',
      contracts: 'Contrats',
      tickValue: 'Valeur du tick ($)',
      results: 'Résultats',
      risk: 'Risque',
      reward: 'Récompense',
      ratio: 'Ratio R:R',
      ticks: 'ticks',
      invalidSetup: '⚠️ Configuration invalide',
      invalidLong: 'Pour un LONG: SL < Entry < TP',
      invalidShort: 'Pour un SHORT: TP < Entry < SL',
      excellent: '✅ Excellent (≥1.5)',
      acceptable: '⚠️ Acceptable (1-1.5)',
      poor: '❌ Faible (<1)',
      winRateNeeded: 'Win Rate minimum pour être profitable:',
    },
    en: {
      title: '🧮 Risk/Reward Calculator',
      description: 'Calculate your risk/reward ratio before each trade',
      direction: 'Direction',
      long: 'LONG (Buy)',
      short: 'SHORT (Sell)',
      entry: 'Entry Price',
      stopLoss: 'Stop Loss',
      takeProfit: 'Take Profit',
      contracts: 'Contracts',
      tickValue: 'Tick Value ($)',
      results: 'Results',
      risk: 'Risk',
      reward: 'Reward',
      ratio: 'R:R Ratio',
      ticks: 'ticks',
      invalidSetup: '⚠️ Invalid setup',
      invalidLong: 'For LONG: SL < Entry < TP',
      invalidShort: 'For SHORT: TP < Entry < SL',
      excellent: '✅ Excellent (≥1.5)',
      acceptable: '⚠️ Acceptable (1-1.5)',
      poor: '❌ Poor (<1)',
      winRateNeeded: 'Minimum win rate to be profitable:',
    },
  };

  const t = texts[language as keyof typeof texts] || texts.fr;

  // Win rate nécessaire pour être profitable
  const minWinRate = rrRatio > 0 ? (1 / (1 + rrRatio)) * 100 : 100;

  return (
    <div className="bg-dark-200 rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
      <p className="text-light-400 text-sm mb-6">{t.description}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          {/* Direction */}
          <div>
            <label className="block text-sm text-light-400 mb-2">{t.direction}</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setDirection('long')}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  direction === 'long'
                    ? 'bg-accent-success text-dark'
                    : 'bg-dark-300 text-light-400 hover:bg-dark-400'
                }`}
              >
                📈 {t.long}
              </button>
              <button
                onClick={() => setDirection('short')}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  direction === 'short'
                    ? 'bg-accent-error text-white'
                    : 'bg-dark-300 text-light-400 hover:bg-dark-400'
                }`}
              >
                📉 {t.short}
              </button>
            </div>
          </div>

          {/* Entry Price */}
          <div>
            <label className="block text-sm text-light-400 mb-2">{t.entry}</label>
            <input
              type="number"
              value={entryPrice}
              onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)}
              step={0.25}
              className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:border-mia-cyan"
            />
          </div>

          {/* Stop Loss */}
          <div>
            <label className="block text-sm text-light-400 mb-2">{t.stopLoss}</label>
            <input
              type="number"
              value={stopLoss}
              onChange={(e) => setStopLoss(parseFloat(e.target.value) || 0)}
              step={0.25}
              className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-xl text-accent-error font-mono focus:outline-none focus:border-accent-error"
            />
          </div>

          {/* Take Profit */}
          <div>
            <label className="block text-sm text-light-400 mb-2">{t.takeProfit}</label>
            <input
              type="number"
              value={takeProfit}
              onChange={(e) => setTakeProfit(parseFloat(e.target.value) || 0)}
              step={0.25}
              className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-xl text-accent-success font-mono focus:outline-none focus:border-accent-success"
            />
          </div>

          {/* Contracts & Tick Value */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-light-400 mb-2">{t.contracts}</label>
              <input
                type="number"
                value={contracts}
                onChange={(e) => setContracts(parseInt(e.target.value) || 1)}
                min={1}
                className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:border-mia-cyan"
              />
            </div>
            <div>
              <label className="block text-sm text-light-400 mb-2">{t.tickValue}</label>
              <select
                value={tickValue}
                onChange={(e) => setTickValue(parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-xl text-white focus:outline-none focus:border-mia-cyan"
              >
                <option value={12.5}>ES ($12.50)</option>
                <option value={5}>NQ ($5.00)</option>
                <option value={5}>RTY ($5.00)</option>
                <option value={1.25}>MES ($1.25)</option>
                <option value={0.5}>MNQ ($0.50)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          {!isValidSetup ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center p-6 bg-accent-error/10 border border-accent-error/30 rounded-xl"
            >
              <span className="text-4xl mb-4">⚠️</span>
              <span className="text-accent-error font-bold text-lg mb-2">{t.invalidSetup}</span>
              <span className="text-light-400 text-sm text-center">
                {direction === 'long' ? t.invalidLong : t.invalidShort}
              </span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col"
            >
              <h4 className="text-lg font-bold text-white mb-4">{t.results}</h4>

              {/* Risk */}
              <div className="p-4 bg-accent-error/10 border border-accent-error/30 rounded-xl mb-3">
                <div className="flex justify-between items-center">
                  <span className="text-light-400">{t.risk}</span>
                  <div className="text-right">
                    <div className="text-accent-error font-bold text-lg">-${riskDollars.toFixed(2)}</div>
                    <div className="text-light-500 text-sm">{riskTicks} {t.ticks}</div>
                  </div>
                </div>
              </div>

              {/* Reward */}
              <div className="p-4 bg-accent-success/10 border border-accent-success/30 rounded-xl mb-3">
                <div className="flex justify-between items-center">
                  <span className="text-light-400">{t.reward}</span>
                  <div className="text-right">
                    <div className="text-accent-success font-bold text-lg">+${rewardDollars.toFixed(2)}</div>
                    <div className="text-light-500 text-sm">{rewardTicks} {t.ticks}</div>
                  </div>
                </div>
              </div>

              {/* R:R Ratio */}
              <div className={`p-4 rounded-xl mb-3 border ${
                rrRatio >= 1.5 ? 'bg-accent-success/20 border-accent-success/50' :
                rrRatio >= 1 ? 'bg-accent-warning/20 border-accent-warning/50' :
                'bg-accent-error/20 border-accent-error/50'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="text-light-400">{t.ratio}</span>
                  <div className="text-right">
                    <div className={`font-bold text-2xl ${
                      rrRatio >= 1.5 ? 'text-accent-success' :
                      rrRatio >= 1 ? 'text-accent-warning' :
                      'text-accent-error'
                    }`}>
                      1:{rrRatio.toFixed(2)}
                    </div>
                    <div className="text-sm">
                      {rrRatio >= 1.5 ? t.excellent :
                       rrRatio >= 1 ? t.acceptable :
                       t.poor}
                    </div>
                  </div>
                </div>
              </div>

              {/* Win Rate Needed */}
              <div className="p-4 bg-dark-300 rounded-xl mt-auto">
                <div className="text-sm text-light-400 mb-1">{t.winRateNeeded}</div>
                <div className="text-2xl font-bold text-mia-cyan">
                  {minWinRate.toFixed(1)}%
                </div>
                <div className="mt-2 h-2 bg-dark-400 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${minWinRate}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-mia-cyan rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Visual representation */}
      {isValidSetup && (
        <div className="mt-6 p-4 bg-dark-300 rounded-xl">
          <div className="relative h-12">
            {/* Line */}
            <div className="absolute inset-x-0 top-1/2 h-1 bg-white/20 rounded" />
            
            {/* Stop Loss */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-error rounded-full"
              style={{ left: direction === 'long' ? '10%' : '90%' }}
            >
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-accent-error whitespace-nowrap">
                SL: {stopLoss}
              </span>
            </motion.div>
            
            {/* Entry */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-mia-cyan rounded-full border-2 border-white"
              style={{ left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-mia-cyan whitespace-nowrap">
                Entry: {entryPrice}
              </span>
            </motion.div>
            
            {/* Take Profit */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-accent-success rounded-full"
              style={{ left: direction === 'long' ? '90%' : '10%' }}
            >
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-accent-success whitespace-nowrap">
                TP: {takeProfit}
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
