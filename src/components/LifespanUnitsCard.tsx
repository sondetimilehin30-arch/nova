import React from 'react';
import { ChartPie } from 'lucide-react';
import { LifespanUnits } from '../types';

interface LifespanUnitsCardProps {
  units: LifespanUnits;
}

export const LifespanUnitsCard: React.FC<LifespanUnitsCardProps> = ({ units }) => {
  const statItems = [
    { label: 'Total Months', value: units.totalMonths.toLocaleString(), id: 'total-months-val' },
    { label: 'Total Weeks', value: units.totalWeeks.toLocaleString(), id: 'total-weeks-val' },
    { label: 'Total Days', value: units.totalDays.toLocaleString(), id: 'total-days-val' },
    { label: 'Total Hours', value: units.totalHours.toLocaleString(), id: 'total-hours-val' },
    { label: 'Total Minutes', value: units.totalMinutes.toLocaleString(), id: 'total-minutes-val' },
    { label: 'Total Seconds', value: units.totalSeconds.toLocaleString(), id: 'total-seconds-val' },
  ];

  return (
    <div
      id="total-lifespan-card"
      className="glass-card rounded-2xl p-6 shadow-xl border border-slate-800/80"
    >
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center">
        <ChartPie className="w-4 h-4 text-sky-400 mr-2 stroke-[2.2]" />
        Total Lifespan Units
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {statItems.map((item) => (
          <div
            key={item.label}
            className="stat-box p-3.5 rounded-xl border border-slate-800/70 hover:border-slate-700 transition-colors shadow-sm"
          >
            <span className="text-xs text-slate-400 block font-medium">
              {item.label}
            </span>
            <div
              id={item.id}
              className="text-base sm:text-lg font-bold text-white mt-1 font-mono tracking-tight"
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
