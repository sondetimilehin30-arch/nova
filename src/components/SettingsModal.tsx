import React from 'react';
import { X, Sparkles, Activity, Wind, RotateCcw } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  restingBpm: number;
  breathsPerMin: number;
  onUpdateParams: (bpm: number, bpmBreaths: number) => void;
  onSelectPreset: (dob: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  restingBpm,
  breathsPerMin,
  onUpdateParams,
  onSelectPreset,
}) => {
  if (!isOpen) return null;

  const presets = [
    { name: 'Default Preview (Sep 21, 2001)', dob: '2001-09-21' },
    { name: 'Albert Einstein (Mar 14, 1879)', dob: '1879-03-14' },
    { name: 'Ada Lovelace (Dec 10, 1815)', dob: '1815-12-10' },
    { name: 'Turn of Millennium (Jan 1, 2000)', dob: '2000-01-01' },
    { name: 'Golden Age (Jan 1, 1970)', dob: '1970-01-01' },
  ];

  return (
    <div
      id="settings-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="settings-modal-dialog"
        className="glass-card w-full max-w-lg rounded-2xl p-6 shadow-2xl border border-slate-700/80 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-bold text-white">ChronoAge Analytics Settings</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 space-y-6">
          {/* Milestone parameters */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Biological Estimation Baselines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0b1329] p-3.5 rounded-xl border border-slate-800">
                <label className="text-xs text-slate-400 flex items-center mb-1.5 font-medium">
                  <Activity className="w-3.5 h-3.5 mr-1.5 text-rose-400" />
                  Avg Heart Rate (BPM)
                </label>
                <input
                  type="number"
                  min="40"
                  max="120"
                  value={restingBpm}
                  onChange={(e) => onUpdateParams(Number(e.target.value) || 70, breathsPerMin)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:border-sky-500 outline-none"
                />
              </div>

              <div className="bg-[#0b1329] p-3.5 rounded-xl border border-slate-800">
                <label className="text-xs text-slate-400 flex items-center mb-1.5 font-medium">
                  <Wind className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
                  Avg Breaths / Min
                </label>
                <input
                  type="number"
                  min="10"
                  max="30"
                  value={breathsPerMin}
                  onChange={(e) => onUpdateParams(restingBpm, Number(e.target.value) || 16)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:border-sky-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Quick presets */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Quick Historical & Milestone Presets
              </h4>
            </div>
            <div className="space-y-2">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    onSelectPreset(preset.dob);
                    onClose();
                  }}
                  className="w-full p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80 text-left text-xs font-medium text-slate-300 hover:text-white transition-all flex justify-between items-center"
                >
                  <span>{preset.name}</span>
                  <span className="text-sky-400 font-mono text-[11px]">Load DOB</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
          <button
            onClick={() => onUpdateParams(70, 16)}
            className="text-xs text-slate-400 hover:text-white flex items-center space-x-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
