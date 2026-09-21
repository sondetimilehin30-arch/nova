import React from 'react';
import { Hourglass, Sun, Moon, Settings } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleTheme,
  onOpenSettings,
}) => {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center z-10">
      {/* Brand & Logo */}
      <div className="flex items-center space-x-3.5">
        <div
          id="chronoage-logo"
          className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/25 ring-1 ring-white/20"
        >
          <Hourglass className="w-5 h-5 text-white stroke-[2.2]" />
        </div>
        <div>
          <h1 className="font-extrabold text-xl md:text-2xl tracking-tight text-white dark:text-white">
            ChronoAge
          </h1>
          <p className="text-xs text-slate-400 font-medium tracking-normal">
            Precision Life Analytics
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2.5">
        <button
          id="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-slate-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-400" />
          )}
        </button>

        <button
          id="settings-btn"
          onClick={onOpenSettings}
          aria-label="Application Settings"
          className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-slate-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          title="Custom Parameters & Presets"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
