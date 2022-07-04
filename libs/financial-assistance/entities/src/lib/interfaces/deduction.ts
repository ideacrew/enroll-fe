import { Frequency } from './frequency';

/* eslint-disable @typescript-eslint/naming-convention */
export interface Deduction {
  kind: DeductionKind;
  amount: number;
  start_on: string; // date
  frequency_kind: DeductionFrequency;

  name?: string;
  end_on?: string; // date
  submitted_at: string; // datetime
}

export const deduction = [
  'alimony_paid',
  'deductible_part_of_self_employment_taxes',
  'domestic_production_activities',
  'penalty_on_early_withdrawal_of_savings',
  'educator_expenses',
  'self_employment_sep_simple_and_qualified_plans',
  'self_employed_health_insurance',
  'student_loan_interest',
  'moving_expenses',
  'health_savings_account',
  'ira_deduction',
  'reservists_performing_artists_and_fee_basis_government_official_expenses',
  'tuition_and_fees',
];

export type DeductionKind = typeof deduction[number];

export type DeductionFrequency = Frequency;
