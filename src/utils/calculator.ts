import {
  AgeBreakdown,
  CountdownBreakdown,
  WesternZodiac,
  ChineseZodiac,
  LifespanUnits,
  LifeMilestones,
  AgeCalculationResult,
} from '../types';

export const WESTERN_ZODIACS: WesternZodiac[] = [
  { name: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19', element: 'Earth', iconBg: 'bg-emerald-900/40 text-emerald-400 border-emerald-500/20' },
  { name: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18', element: 'Air', iconBg: 'bg-cyan-900/40 text-cyan-400 border-cyan-500/20' },
  { name: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20', element: 'Water', iconBg: 'bg-blue-900/40 text-blue-400 border-blue-500/20' },
  { name: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19', element: 'Fire', iconBg: 'bg-red-900/40 text-red-400 border-red-500/20' },
  { name: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20', element: 'Earth', iconBg: 'bg-emerald-900/40 text-emerald-400 border-emerald-500/20' },
  { name: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20', element: 'Air', iconBg: 'bg-amber-900/40 text-amber-400 border-amber-500/20' },
  { name: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22', element: 'Water', iconBg: 'bg-indigo-900/40 text-indigo-400 border-indigo-500/20' },
  { name: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22', element: 'Fire', iconBg: 'bg-orange-900/40 text-orange-400 border-orange-500/20' },
  { name: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22', element: 'Earth', iconBg: 'bg-[#153424] text-[#4ade80] border-emerald-500/30' },
  { name: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22', element: 'Air', iconBg: 'bg-pink-900/40 text-pink-400 border-pink-500/20' },
  { name: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21', element: 'Water', iconBg: 'bg-rose-900/40 text-rose-400 border-rose-500/20' },
  { name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21', element: 'Fire', iconBg: 'bg-purple-900/40 text-purple-400 border-purple-500/20' },
];

export const CHINESE_ZODIACS: ChineseZodiac[] = [
  { name: 'Rat', animal: '🐀', trait: 'Quick-witted & Charming', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Ox', animal: '🐂', trait: 'Patient & Dependable', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Tiger', animal: '🐅', trait: 'Brave & Confident', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Rabbit', animal: '🐇', trait: 'Gentle & Elegant', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Dragon', animal: '🐉', trait: 'Charismatic & Energetic', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Snake', animal: '🐍', trait: 'Wise & Intuitive', iconBg: 'bg-[#261f14] text-amber-400 border-amber-500/30' },
  { name: 'Horse', animal: '🐎', trait: 'Animated & Independent', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Goat', animal: '🐐', trait: 'Calm & Creative', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Monkey', animal: '🐒', trait: 'Sharp & Curious', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Rooster', animal: '🐓', trait: 'Practical & Observant', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Dog', animal: '🐕', trait: 'Loyal & Honest', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
  { name: 'Pig', animal: '🐖', trait: 'Generous & Compassionate', iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/20' },
];

export function getWesternZodiac(month: number, day: number): WesternZodiac {
  // month: 1 = Jan, 12 = Dec
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return WESTERN_ZODIACS[0];
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return WESTERN_ZODIACS[1];
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return WESTERN_ZODIACS[2];
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return WESTERN_ZODIACS[3];
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return WESTERN_ZODIACS[4];
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return WESTERN_ZODIACS[5];
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return WESTERN_ZODIACS[6];
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return WESTERN_ZODIACS[7];
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return WESTERN_ZODIACS[8]; // Virgo
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return WESTERN_ZODIACS[9];
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return WESTERN_ZODIACS[10];
  return WESTERN_ZODIACS[11];
}

export function getChineseZodiac(birthYear: number): ChineseZodiac {
  const index = (birthYear - 1900) % 12;
  const normalizedIndex = index < 0 ? index + 12 : index;
  return CHINESE_ZODIACS[normalizedIndex];
}

export function calculateAgeBreakdown(dob: Date, target: Date): AgeBreakdown {
  let y1 = dob.getFullYear();
  let m1 = dob.getMonth();
  let d1 = dob.getDate();

  let y2 = target.getFullYear();
  let m2 = target.getMonth();
  let d2 = target.getDate();

  let years = y2 - y1;
  let months = m2 - m1;
  let days = d2 - d1;

  if (days < 0) {
    months--;
    const prevMonthLastDay = new Date(y2, m2, 0).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
  };
}

export function calculateCountdown(dob: Date, fromDate: Date = new Date()): CountdownBreakdown {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let nextBday = new Date(fromDate.getFullYear(), dob.getMonth(), dob.getDate(), 0, 0, 0);

  // If the birthday this year has already passed relative to fromDate
  if (fromDate.getTime() >= nextBday.getTime()) {
    nextBday.setFullYear(fromDate.getFullYear() + 1);
  }

  const dayName = `Falls on a ${dayNames[nextBday.getDay()]}`;

  const diffMs = nextBday.getTime() - fromDate.getTime();
  if (diffMs <= 0) {
    return {
      months: 0,
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
      dayName,
      nextBirthdayDate: nextBday,
    };
  }

  // Calculate calendar months remaining
  let months = nextBday.getMonth() - fromDate.getMonth();
  if (months < 0) months += 12;

  const tempDate = new Date(fromDate);
  tempDate.setMonth(tempDate.getMonth() + months);
  if (tempDate > nextBday) {
    months--;
    tempDate.setTime(fromDate.getTime());
    tempDate.setMonth(tempDate.getMonth() + months);
  }

  const remainingMs = nextBday.getTime() - tempDate.getTime();
  const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((remainingMs % (1000 * 60)) / 1000);

  return {
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: Math.max(0, hours),
    mins: Math.max(0, mins),
    secs: Math.max(0, secs),
    dayName,
    nextBirthdayDate: nextBday,
  };
}

export function calculateFullResults(
  dobString: string,
  targetDateString: string,
  currentLiveTime: Date = new Date()
): AgeCalculationResult {
  const [bYear, bMonth, bDay] = dobString.split('-').map(Number);
  const [tYear, tMonth, tDay] = targetDateString.split('-').map(Number);

  const dob = new Date(bYear, bMonth - 1, bDay, 0, 0, 0);
  // For target date, match time of day or end of day
  const target = new Date(tYear, tMonth - 1, tDay, currentLiveTime.getHours(), currentLiveTime.getMinutes(), currentLiveTime.getSeconds());

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const bornDayOfWeek = dayNames[dob.getDay()];

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const bornFormatted = `${monthNames[dob.getMonth()]} ${dob.getDate()}, ${dob.getFullYear()}`;

  const primaryAge = calculateAgeBreakdown(dob, target);

  // Countdown: calculate from the target or current live time
  const countdown = calculateCountdown(dob, target);

  // Lifespan calculations
  const diffMs = Math.max(0, target.getTime() - dob.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = primaryAge.years * 12 + primaryAge.months;

  const lifespanUnits: LifespanUnits = {
    totalMonths,
    totalWeeks,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
  };

  // Fun Milestones (Estimates based on medical averages)
  // ~70 bpm heart rate average = ~70 * 60 * 24 * days
  const heartbeats = Math.floor(totalDays * 24 * 60 * 70);
  // ~16 breaths per minute average = ~16 * 60 * 24 * days
  const breaths = Math.floor(totalDays * 24 * 60 * 16);

  // Days to 100th birthday
  const hundredthBirthday = new Date(dob.getFullYear() + 100, dob.getMonth(), dob.getDate(), 0, 0, 0);
  const msTo100 = hundredthBirthday.getTime() - target.getTime();
  const daysTo100 = Math.max(0, Math.floor(msTo100 / (1000 * 60 * 60 * 24)));

  const hoursSlept = Math.floor(totalDays * 8); // 8 hours average sleep
  const approxMeals = Math.floor(totalDays * 3); // 3 meals per day

  const milestones: LifeMilestones = {
    heartbeats,
    breaths,
    daysTo100,
    hoursSlept,
    approxMeals,
  };

  const westernZodiac = getWesternZodiac(bMonth, bDay);
  const chineseZodiac = getChineseZodiac(bYear);

  return {
    bornDate: dob,
    bornDayOfWeek,
    bornFormatted,
    targetDate: target,
    primaryAge,
    countdown,
    westernZodiac,
    chineseZodiac,
    lifespanUnits,
    milestones,
  };
}
