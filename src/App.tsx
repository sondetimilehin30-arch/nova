/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { InputPanel } from './components/InputPanel';
import { PrimaryAgeCard } from './components/PrimaryAgeCard';
import { BirthdayCountdownCard } from './components/BirthdayCountdownCard';
import { ZodiacCards } from './components/ZodiacCards';
import { LifespanUnitsCard } from './components/LifespanUnitsCard';
import { MilestonesCard } from './components/MilestonesCard';
import { SettingsModal } from './components/SettingsModal';
import { calculateFullResults } from './utils/calculator';
import { Cake } from 'lucide-react';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('chronoage_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default dark as shown in screenshot
  });

  // Input states - initialized to match the screenshot
  const [dob, setDob] = useState<string>('2001-09-21');
  const [targetDate, setTargetDate] = useState<string>('2026-09-21');

  // Live timer tick
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date());

  // Biological parameters
  const [restingBpm, setRestingBpm] = useState<number>(70);
  const [breathsPerMin, setBreathsPerMin] = useState<number>(16);

  // Settings modal
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Apply dark mode class to root HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('chronoage_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('chronoage_theme', 'light');
    }
  }, [darkMode]);

  // Live ticking interval (1 second)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate full results
  const calculationResult = useMemo(() => {
    if (!dob || !targetDate) return null;
    const res = calculateFullResults(dob, targetDate, currentTime);

    // If custom BPM / Breaths were adjusted, update milestones proportionally
    if (restingBpm !== 70 || breathsPerMin !== 16) {
      const totalDays = res.lifespanUnits.totalDays;
      res.milestones.heartbeats = Math.floor(totalDays * 24 * 60 * restingBpm);
      res.milestones.breaths = Math.floor(totalDays * 24 * 60 * breathsPerMin);
    }
    return res;
  }, [dob, targetDate, currentTime, restingBpm, breathsPerMin]);

  const handleResetToToday = useCallback(() => {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    setTargetDate(`${y}-${m}-${d}`);
  }, []);

  const handleCalculate = useCallback(() => {
    // Triggers recalculation (reactive via state)
    setCurrentTime(new Date());
  }, []);

  const handleUpdateParams = useCallback((bpm: number, breaths: number) => {
    setRestingBpm(bpm);
    setBreathsPerMin(breaths);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-between selection:bg-sky-500 selection:text-white relative overflow-x-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#060b18] text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
    >
      {/* Ambient background light orbs */}
      <div className="fixed top-0 left-1/4 w-[28rem] h-[28rem] bg-sky-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 right-1/4 w-[28rem] h-[28rem] bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Header */}
      <Header
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-2 flex-grow z-10 flex flex-col lg:flex-row gap-6">
        {/* Left Column: Input Panel & Share */}
        <InputPanel
          dob={dob}
          targetDate={targetDate}
          onDobChange={setDob}
          onTargetDateChange={setTargetDate}
          onResetToToday={handleResetToToday}
          onCalculate={handleCalculate}
          calculationResult={calculationResult}
        />

        {/* Right Column: Analytics Dashboard */}
        <section className="w-full lg:w-7/12 flex flex-col gap-6">
          {calculationResult ? (
            <div id="results-dashboard" className="flex flex-col gap-6">
              {/* Primary Age (Years, Months, Days) */}
              <PrimaryAgeCard result={calculationResult} />

              {/* Next Birthday Countdown */}
              <BirthdayCountdownCard countdown={calculationResult.countdown} />

              {/* Zodiac Signs (Western & Chinese) */}
              <ZodiacCards
                western={calculationResult.westernZodiac}
                chinese={calculationResult.chineseZodiac}
              />

              {/* Total Lifespan Units */}
              <LifespanUnitsCard units={calculationResult.lifespanUnits} />

              {/* Fun Life Milestones */}
              <MilestonesCard milestones={calculationResult.milestones} />
            </div>
          ) : (
            /* Empty State / Initial Prompt */
            <div
              id="placeholder-state"
              className="glass-card rounded-2xl p-10 text-center flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="w-20 h-20 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4 text-3xl animate-pulse">
                <Cake className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to Calculate
              </h3>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed">
                Select your date of birth on the left panel to unlock your age breakdown,
                zodiac sign, birthday countdown, and comprehensive lifetime statistics!
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 border-t border-slate-800/80 mt-10 z-10 text-center text-xs text-slate-500">
        <p>
          © 2026 ChronoAge. Clean, modern client-side age calculation without tracking or databases.
        </p>
      </footer>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        restingBpm={restingBpm}
        breathsPerMin={breathsPerMin}
        onUpdateParams={handleUpdateParams}
        onSelectPreset={(newDob) => setDob(newDob)}
      />
    </div>
  );
}
