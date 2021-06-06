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

export const income = [
  'alimony_and_maintenance',
  'american_indian_and_alaskan_native',
  'capital_gains',
  'dividend',
  'employer_funded_disability',
  'estate_trust',
  'farming_and_fishing',
  'foreign',
  'interest',
  'lump_sum_amount',
  'military',
  'net_self_employment',
  'other',
  'pension_retirement_benefits',
  'permanent_workers_compensation',
  'prizes_and_awards',
  'rental_and_royalty',
  'scholarship_payments',
  'social_security_benefit',
  'supplemental_security_income',
  'tax_exempt_interest',
  'unemployment_insurance',
  'wages_and_salaries',
  'income_from_irs',
] as const;

export type IncomeKind = typeof income[number];
