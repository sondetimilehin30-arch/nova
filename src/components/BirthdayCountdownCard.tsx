import React from 'react';
import { Gift } from 'lucide-react';
import { CountdownBreakdown } from '../types';

interface BirthdayCountdownCardProps {
  countdown: CountdownBreakdown;
}

export const BirthdayCountdownCard: React.FC<BirthdayCountdownCardProps> = ({
  countdown,
}) => {
  return (
    <div
      id="next-birthday-card"
      className="glass-card rounded-2xl p-6 shadow-xl border-l-4 border-l-sky-500 relative overflow-hidden"
    >
      {/* Subtle top-right glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-white flex items-center text-sm md:text-base">
          <Gift className="w-5 h-5 text-sky-400 mr-2.5 stroke-[2.2]" />
          Next Birthday Countdown
        </h4>
        <span
          id="next-bday-day-name"
          className="text-xs font-medium text-slate-400"
        >
          {countdown.dayName}
        </span>
      </div>

      {/* 5-Block Countdown Grid */}
      <div className="grid grid-cols-5 gap-2 md:gap-3 text-center">
        <div className="bg-[#0b1329] p-3 rounded-xl border border-slate-800/80 shadow-sm">
          <div className="text-xl md:text-2xl font-black text-sky-400 font-mono tracking-tight">
            {countdown.months}
          </div>
          <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400 mt-1">
            Months
          </div>
        </div>

        <div className="bg-[#0b1329] p-3 rounded-xl border border-slate-800/80 shadow-sm">
          <div className="text-xl md:text-2xl font-black text-sky-400 font-mono tracking-tight">
            {countdown.days}
          </div>
          <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400 mt-1">
            Days
          </div>
        </div>

        <div className="bg-[#0b1329] p-3 rounded-xl border border-slate-800/80 shadow-sm">
          <div className="text-xl md:text-2xl font-black text-sky-400 font-mono tracking-tight">
            {String(countdown.hours).padStart(2, '0')}
          </div>
          <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400 mt-1">
            Hours
          </div>
        </div>

        <div className="bg-[#0b1329] p-3 rounded-xl border border-slate-800/80 shadow-sm">
          <div className="text-xl md:text-2xl font-black text-sky-400 font-mono tracking-tight">
            {String(countdown.mins).padStart(2, '0')}
          </div>
          <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400 mt-1">
            Mins
          </div>
        </div>

        <div className="bg-[#0b1329] p-3 rounded-xl border border-slate-800/80 shadow-sm">
          <div className="text-xl md:text-2xl font-black text-sky-400 font-mono tracking-tight">
            {String(countdown.secs).padStart(2, '0')}
          </div>
          <div className="text-[10px] md:text-xs uppercase font-bold text-slate-400 mt-1">
            Secs
          </div>
        </div>
      </div>
    </div>
  );
};
