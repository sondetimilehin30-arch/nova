import React from 'react';
import { WesternZodiac, ChineseZodiac } from '../types';

interface ZodiacCardsProps {
  western: WesternZodiac;
  chinese: ChineseZodiac;
}

export const ZodiacCards: React.FC<ZodiacCardsProps> = ({ western, chinese }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Western Zodiac Card */}
      <div
        id="western-zodiac-card"
        className="glass-card rounded-2xl p-5 shadow-xl flex items-center space-x-4 border border-slate-800/80 hover:border-slate-700/80 transition-all"
      >
        <div
          id="western-zodiac-badge"
          className={`w-14 h-14 rounded-2xl ${western.iconBg} flex items-center justify-center text-2xl font-bold shrink-0 shadow-sm`}
        >
          <span>{western.symbol}</span>
        </div>
        <div className="min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
            Western Zodiac
          </span>
          <h4
            id="western-zodiac-name"
            className="text-lg font-bold text-white tracking-tight mt-0.5"
          >
            {western.name}
          </h4>
          <p
            id="western-zodiac-dates"
            className="text-xs text-slate-400 mt-0.5 font-medium"
          >
            {western.dates}
          </p>
        </div>
      </div>

      {/* Chinese Zodiac Card */}
      <div
        id="chinese-zodiac-card"
        className="glass-card rounded-2xl p-5 shadow-xl flex items-center space-x-4 border border-slate-800/80 hover:border-slate-700/80 transition-all"
      >
        <div
          id="chinese-zodiac-badge"
          className={`w-14 h-14 rounded-2xl ${chinese.iconBg} flex items-center justify-center text-2xl font-bold shrink-0 shadow-sm`}
        >
          <span>{chinese.animal}</span>
        </div>
        <div className="min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
            Chinese Zodiac
          </span>
          <h4
            id="chinese-zodiac-name"
            className="text-lg font-bold text-white tracking-tight mt-0.5"
          >
            {chinese.name}
          </h4>
          <p
            id="chinese-zodiac-trait"
            className="text-xs text-slate-400 mt-0.5 font-medium"
          >
            {chinese.trait}
          </p>
        </div>
      </div>
    </div>
  );
};
