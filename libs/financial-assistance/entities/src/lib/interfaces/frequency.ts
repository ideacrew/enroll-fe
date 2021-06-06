export const frequency = [
  'Weekly',
  'Monthly',
  'Annually',
  'BiWeekly',
  'Quarterly',
  'SemiMonthly',
  'Hourly',
  'Daily',
  'SemiAnnually',
  '13xPerYear',
  '11xPerYear',
  '10xPerYear',
  'Once',
] as const;

export type Frequency = typeof frequency[number];
