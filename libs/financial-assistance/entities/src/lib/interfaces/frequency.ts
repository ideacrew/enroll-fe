export const frequency = [
  'weekly',
  'monthly',
  'annually',
  'bi_weekly',
  'quarterly',
  'semi_monthly',
  'hourly',
  'daily',
  'semi_annually',
  // '13xPerYear',
  // '11xPerYear',
  // '10xPerYear',
  'once',
] as const;

export type Frequency = (typeof frequency)[number];
