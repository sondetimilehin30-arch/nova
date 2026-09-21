import React, { useState } from 'react';
import { CalendarDays, Calculator, Copy, Share2, Check } from 'lucide-react';
import { AgeCalculationResult } from '../types';

interface InputPanelProps {
  dob: string;
  targetDate: string;
  onDobChange: (val: string) => void;
  onTargetDateChange: (val: string) => void;
  onResetToToday: () => void;
  onCalculate: () => void;
  calculationResult: AgeCalculationResult | null;
}

export const InputPanel: React.FC<InputPanelProps> = ({
  dob,
  targetDate,
  onDobChange,
  onTargetDateChange,
  onResetToToday,
  onCalculate,
  calculationResult,
}) => {
  const [copied, setCopied] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const generateSummaryText = () => {
    if (!calculationResult) return '';
    const { primaryAge, lifespanUnits, westernZodiac, chineseZodiac, bornFormatted } = calculationResult;
    return `ChronoAge Precision Life Analytics
───────────────────────────
🎂 Born: ${bornFormatted}
⏳ Exact Age: ${primaryAge.years} Years, ${primaryAge.months} Months, ${primaryAge.days} Days
✨ Western Zodiac: ${westernZodiac.name} (${westernZodiac.symbol} ${westernZodiac.dates})
🐉 Chinese Zodiac: ${chineseZodiac.name} (${chineseZodiac.animal} - ${chineseZodiac.trait})
📊 Total Days Lived: ${lifespanUnits.totalDays.toLocaleString()} days
💓 Estimated Heartbeats: ${calculationResult.milestones.heartbeats.toLocaleString()}
───────────────────────────
Calculated via ChronoAge`;
  };

  const handleCopySummary = async () => {
    const text = generateSummaryText();
    if (!text) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShareMsg('Unable to copy to clipboard');
      setTimeout(() => setShareMsg(null), 2500);
    }
  };

  const handleShareResult = async () => {
    const text = generateSummaryText();
    if (!text) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My ChronoAge Precision Summary',
          text,
        });
      } catch {
        // User canceled or failed, fallback to copy
        handleCopySummary();
      }
    } else {
      handleCopySummary();
      setShareMsg('Summary copied to clipboard!');
      setTimeout(() => setShareMsg(null), 2500);
    }
  };

  return (
    <section className="w-full lg:w-5/12 flex flex-col gap-6">
      {/* Enter Details Card */}
      <div
        id="enter-details-card"
        className="glass-card rounded-2xl p-6 shadow-2xl relative overflow-hidden"
      >
        {/* Glow accent */}
        <div className="absolute -right-8 -top-8 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        <h2 className="text-xl font-bold mb-5 flex items-center text-white">
          <CalendarDays className="w-5 h-5 text-sky-400 mr-2.5 stroke-[2.2]" />
          Enter Details
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCalculate();
          }}
          className="space-y-5"
        >
          {/* Date of Birth */}
          <div>
            <label
              htmlFor="dob-input"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
            >
              Date of Birth
            </label>
            <div className="relative">
              <input
                id="dob-input"
                type="date"
                value={dob}
                onChange={(e) => onDobChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0b1329] border border-slate-700/80 text-white font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Calculate Age As Of */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="target-date-input"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400"
              >
                Calculate Age As Of
              </label>
              <button
                type="button"
                id="reset-today-btn"
                onClick={onResetToToday}
                className="text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium hover:underline focus:outline-none"
              >
                Reset to Today
              </button>
            </div>
            <div className="relative">
              <input
                id="target-date-input"
                type="date"
                value={targetDate}
                onChange={(e) => onTargetDateChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0b1329] border border-slate-700/80 text-white font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            type="submit"
            id="calculate-age-btn"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 active:scale-[0.99] transition-all flex items-center justify-center space-x-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <Calculator className="w-5 h-5 stroke-[2.2]" />
            <span className="text-base tracking-wide">Calculate Age</span>
          </button>
        </form>
      </div>

      {/* Export & Share Card */}
      <div
        id="export-share-card"
        className="glass-card rounded-2xl p-6 shadow-xl flex flex-col space-y-4"
      >
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Export & Share
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            id="copy-summary-btn"
            type="button"
            onClick={handleCopySummary}
            className="py-3 px-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-200 transition-all text-xs font-semibold flex items-center justify-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500/40"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-sky-400" />
            )}
            <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
          </button>

          <button
            id="share-result-btn"
            type="button"
            onClick={handleShareResult}
            className="py-3 px-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-200 transition-all text-xs font-semibold flex items-center justify-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          >
            <Share2 className="w-4 h-4 text-indigo-400" />
            <span>Share Result</span>
          </button>
        </div>

        {/* Feedback message */}
        {(copied || shareMsg) && (
          <p
            id="share-toast-notification"
            className="text-xs text-center text-emerald-400 font-medium flex items-center justify-center space-x-1.5 animate-fade-in"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{shareMsg || 'Summary copied to clipboard!'}</span>
          </p>
        )}
      </div>
    </section>
  );
};
