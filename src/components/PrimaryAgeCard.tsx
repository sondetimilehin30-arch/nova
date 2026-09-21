import React from 'react';
import { AgeCalculationResult } from '../types';

interface PrimaryAgeCardProps {
  result: AgeCalculationResult;
}

export const PrimaryAgeCard: React.FC<PrimaryAgeCardProps> = ({ result }) => {
  const { bornDayOfWeek, bornFormatted, primaryAge } = result;

  return (
    <div
      id="primary-age-card"
      className="glass-card rounded-2xl p-6 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#0c162d]/90 via-[#0b1327]/80 to-[#0e1a38]/90 border border-slate-700/50"
    >
      {/* Header bar */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Primary Age
          </span>
          <h3 id="born-day-subtitle" className="text-xs font-medium text-slate-400 mt-0.5">
            Born on a {bornDayOfWeek}, {bornFormatted}
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30 shadow-sm">
          Exact Age
        </span>
      </div>

      {/* Main 3-box Grid */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 text-center my-2">
        <div
          id="stat-box-years"
          className="stat-box p-4 md:p-5 rounded-xl border border-slate-800/90 shadow-inner"
        >
          <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {primaryAge.years}
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
            Years
          </div>
        </div>

        <div
          id="stat-box-months"
          className="stat-box p-4 md:p-5 rounded-xl border border-slate-800/90 shadow-inner"
        >
          <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {primaryAge.months}
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
            Months
          </div>
        </div>

        <div
          id="stat-box-days"
          className="stat-box p-4 md:p-5 rounded-xl border border-slate-800/90 shadow-inner"
        >
          <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {primaryAge.days}
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
            Days
          </div>
        </div>
      </div>
    </div>
  );
};
