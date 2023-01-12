import { Employer } from './employer';
import { Frequency } from './frequency';

/* eslint-disable @typescript-eslint/naming-convention */
export interface Income {
  kind: IncomeKind;
  start_on: string; // Date
  amount: number;
  frequency_kind: IncomeFrequency;

  title?: string;
  wage_type?: string;
  hours_per_week?: number;
  amount_tax_exempt?: number;
  end_on?: string; // Date
  is_projected?: boolean;
  employer?: Employer;
  has_property_usage_rights?: boolean;
  submitted_at?: string; // Datetime
}

export type IncomeFrequency = Frequency;

export type EmployerIncomeKind = 'wages_and_salaries';
export type SelfEmploymentIncomeKind = 'net_self_employment';
export type UnemploymentIncomeKind = 'unemployment_income';

export const otherIncome = [
  'alimony_and_maintenance', // Alimony received
  'capital_gains', // Capital gains
  'dividend', // Dividends
  'interest', // Interest
  'pension_retirement_benefits', // Pension or retirement
  'rental_and_royalty', // Rent and royalties
  'social_security_benefit', // Social Security
  'american_indian_and_alaskan_native', // American Indian/Alaska Native Income
  'employer_funded_disability', // Employer-funded disability payments
  'estate_trust', // Estate and trust
  'farming_and_fishing', // Farming or fishing
  'foreign', // Foreign income
  'other', // Other taxable income
  'prizes_and_awards', // Gambling, prizes or awards
  'scholarship_payments', // Taxable scholarship payments

  // These did not appear in the other income list
  'lump_sum_amount',
  'military',
  'permanent_workers_compensation',
  'supplemental_security_income',
  'tax_exempt_interest',
  'unemployment_insurance',
  'income_from_irs',
] as const;

export type OtherIncomeKind = (typeof otherIncome)[number];

export type IncomeKind =
  | EmployerIncomeKind
  | SelfEmploymentIncomeKind
  | UnemploymentIncomeKind
  | OtherIncomeKind;
