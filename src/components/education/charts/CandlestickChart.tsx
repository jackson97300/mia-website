'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Candle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

// Données exemple pour l'éducation
const sampleCandles: Candle[] = [
  { time: '09:30', open: 4520, high: 4535, low: 4515, close: 4530 },
  { time: '09:35', open: 4530, high: 4545, low: 4525, close: 4540 },
  { time: '09:40', open: 4540, high: 4550, low: 4530, close: 4535 },
  { time: '09:45', open: 4535, high: 4540, low: 4510, close: 4515 },
  { time: '09:50', open: 4515, high: 4525, low: 4505, close: 4520 },
  { time: '09:55', open: 4520, high: 4545, low: 4518, close: 4542 },
  { time: '10:00', open: 4542, high: 4560, low: 4540, close: 4555 },
  { time: '10:05', open: 4555, high: 4565, low: 4550, close: 4560 },
  { time: '10:10', open: 4560, high: 4570, low: 4545, close: 4548 },
  { time: '10:15', open: 4548, high: 4555, low: 4535, close: 4540 },
];

interface Props {
  title?: string;
  description?: string;
  interactive?: boolean;
}

export default function CandlestickChart({ title, description, interactive = true }: Props) {
  const [selectedCandle, setSelectedCandle] = useState<Candle | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const minPrice = Math.min(...sampleCandles.map(c => c.low)) - 10;
  const maxPrice = Math.max(...sampleCandles.map(c => c.high)) + 10;
  const priceRange = maxPrice - minPrice;

  const chartHeight = 300;
  const chartWidth = 600;
  const candleWidth = 40;
  const candleGap = 15;

  const priceToY = (price: number) => {
    return chartHeight - ((price - minPrice) / priceRange) * chartHeight;
  };

  return (
    <div className="bg-dark-200 rounded-2xl p-6 border border-white/10">
      {title && (
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-light-400 text-sm mb-4">{description}</p>
      )}

      {/* Chart */}
      <div className="relative overflow-x-auto">
        <svg 
          width={chartWidth} 
          height={chartHeight + 40} 
          className="mx-auto"
        >
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
            const y = ratio * chartHeight;
            const price = maxPrice - ratio * priceRange;
            return (
              <g key={i}>
                <line
                  x1={40}
                  y1={y}
                  x2={chartWidth - 10}
                  y2={y}
                  stroke="#1e293b"
                  strokeDasharray="4,4"
                />
                <text
                  x={35}
                  y={y + 4}
                  fill="#64748b"
                  fontSize={10}
                  textAnchor="end"
                >
                  {price.toFixed(0)}
                </text>
              </g>
            );
          })}

          {/* Candles */}
          {sampleCandles.map((candle, index) => {
            const x = 50 + index * (candleWidth + candleGap);
            const isGreen = candle.close >= candle.open;
            const bodyTop = priceToY(Math.max(candle.open, candle.close));
            const bodyBottom = priceToY(Math.min(candle.open, candle.close));
            const bodyHeight = Math.max(bodyBottom - bodyTop, 2);
            const isHovered = hoveredIndex === index;

            return (
              <g 
                key={index}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  if (interactive) setSelectedCandle(candle);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  if (interactive) setSelectedCandle(null);
                }}
                style={{ cursor: interactive ? 'pointer' : 'default' }}
              >
                {/* Wick */}
                <line
                  x1={x + candleWidth / 2}
                  y1={priceToY(candle.high)}
                  x2={x + candleWidth / 2}
                  y2={priceToY(candle.low)}
                  stroke={isGreen ? '#00C853' : '#FF5252'}
                  strokeWidth={2}
                />
                
                {/* Body */}
                <rect
                  x={x}
                  y={bodyTop}
                  width={candleWidth}
                  height={bodyHeight}
                  fill={isGreen ? '#00C853' : '#FF5252'}
                  opacity={isHovered ? 1 : 0.8}
                  rx={2}
                />

                {/* Time label */}
                <text
                  x={x + candleWidth / 2}
                  y={chartHeight + 20}
                  fill="#64748b"
                  fontSize={9}
                  textAnchor="middle"
                >
                  {candle.time}
                </text>

                {/* Hover highlight */}
                {isHovered && (
                  <rect
                    x={x - 5}
                    y={0}
                    width={candleWidth + 10}
                    height={chartHeight}
                    fill="white"
                    opacity={0.05}
                    rx={4}
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Tooltip / Info */}
      {selectedCandle && interactive && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-dark-300 rounded-xl border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-light-500">Open:</span>
              <span className="ml-2 text-white font-mono">{selectedCandle.open}</span>
            </div>
            <div>
              <span className="text-light-500">High:</span>
              <span className="ml-2 text-accent-success font-mono">{selectedCandle.high}</span>
            </div>
            <div>
              <span className="text-light-500">Low:</span>
              <span className="ml-2 text-accent-error font-mono">{selectedCandle.low}</span>
            </div>
            <div>
              <span className="text-light-500">Close:</span>
              <span className={`ml-2 font-mono ${selectedCandle.close >= selectedCandle.open ? 'text-accent-success' : 'text-accent-error'}`}>
                {selectedCandle.close}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent-success rounded" />
          <span className="text-light-400">Haussier (Close &gt; Open)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent-error rounded" />
          <span className="text-light-400">Baissier (Close &lt; Open)</span>
        </div>
      </div>
    </div>
  );
}
