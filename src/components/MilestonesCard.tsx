import React from 'react';
import { Lightbulb, HeartPulse, Wind, Flag } from 'lucide-react';
import { LifeMilestones } from '../types';

interface MilestonesCardProps {
  milestones: LifeMilestones;
}

export const MilestonesCard: React.FC<MilestonesCardProps> = ({ milestones }) => {
  return (
    <div
      id="milestones-card"
      className="glass-card rounded-2xl p-6 shadow-xl border border-slate-800/80"
    >
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center">
        <Lightbulb className="w-4 h-4 text-amber-400 mr-2 stroke-[2.2]" />
        Fun Life Milestones (Estimated)
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {/* Heartbeats */}
        <div className="flex items-start space-x-3.5 bg-[#0b1329] p-4 rounded-xl border border-slate-800/80 hover:border-rose-500/30 transition-all shadow-sm">
          <div className="text-rose-500 p-2 rounded-lg bg-rose-500/10 shrink-0">
            <HeartPulse className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="min-w-0">
            <div
              id="stat-heartbeats"
              className="text-base sm:text-lg font-bold text-white tracking-tight font-mono"
            >
              {milestones.heartbeats.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 mt-0.5 font-medium">
              Heartbeats taken
            </div>
          </div>
        </div>

        {/* Breaths */}
        <div className="flex items-start space-x-3.5 bg-[#0b1329] p-4 rounded-xl border border-slate-800/80 hover:border-teal-500/30 transition-all shadow-sm">
          <div className="text-teal-400 p-2 rounded-lg bg-teal-500/10 shrink-0">
            <Wind className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="min-w-0">
            <div
              id="stat-breaths"
              className="text-base sm:text-lg font-bold text-white tracking-tight font-mono"
            >
              {milestones.breaths.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 mt-0.5 font-medium">
              Breaths taken
            </div>
          </div>
        </div>

        {/* Days to 100th Birthday */}
        <div className="flex items-start space-x-3.5 bg-[#0b1329] p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/30 transition-all shadow-sm">
          <div className="text-indigo-400 p-2 rounded-lg bg-indigo-500/10 shrink-0">
            <Flag className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="min-w-0">
            <div
              id="stat-days-to-100"
              className="text-base sm:text-lg font-bold text-white tracking-tight font-mono"
            >
              {milestones.daysTo100.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 mt-0.5 font-medium">
              Days to 100th Birthday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
