export interface AgeBreakdown {
  years: number;
  months: number;
  days: number;
}

export interface CountdownBreakdown {
  months: number;
  days: number;
  hours: number;
  mins: number;
  secs: number;
  dayName: string;
  nextBirthdayDate: Date;
}

export interface WesternZodiac {
  name: string;
  symbol: string;
  dates: string;
  element: string;
  iconBg: string;
}

export interface ChineseZodiac {
  name: string;
  animal: string;
  trait: string;
  iconBg: string;
}

export interface LifespanUnits {
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

export interface LifeMilestones {
  heartbeats: number;
  breaths: number;
  daysTo100: number;
  hoursSlept: number;
  approxMeals: number;
}

export interface AgeCalculationResult {
  bornDate: Date;
  bornDayOfWeek: string;
  bornFormatted: string;
  targetDate: Date;
  primaryAge: AgeBreakdown;
  countdown: CountdownBreakdown;
  westernZodiac: WesternZodiac;
  chineseZodiac: ChineseZodiac;
  lifespanUnits: LifespanUnits;
  milestones: LifeMilestones;
}
