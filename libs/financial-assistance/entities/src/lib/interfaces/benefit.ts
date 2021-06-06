import { Employer } from './employer';
import { Frequency } from './frequency';

/* eslint-disable @typescript-eslint/naming-convention */
export interface Benefit {
  kind: BenefitKind;
  status: BenefitStatusKind;

  name?: string;
  is_employer_sponsored?: boolean;
  employer?: Employer;
  esi_covered: EsiCoveredKind;
  is_esi_waiting_period: boolean;
  is_esi_mec_met: boolean;
  employee_cost: number;
  employee_cost_frequency: EmployeeCostFrequency;
  start_on: string; // date
  end_on: string; // date
  submitted_at: string; // datetime
}

export const benefitStatus = ['is_eligible', 'is_enrolled'] as const;

export type BenefitStatusKind = typeof benefitStatus[number];

export const esiCovered = ['self', 'self_and_spouse', 'family'] as const;

export type EsiCoveredKind = typeof esiCovered[number];

export type EmployeeCostFrequency = Frequency;

export const benefit = [
  'acf_refugee_medical_assistance',
  'americorps_health_benefits',
  'child_health_insurance_plan',
  'medicaid',
  'medicare',
  'medicare_advantage',
  'medicare_part_b',
  'private_individual_and_family_coverage',
  'state_supplementary_payment',
  'tricare',
  'veterans_benefits',
  'naf_health_benefit_program',
  'health_care_for_peace_corp_volunteers',
  'department_of_defense_non_appropriated_health_benefits',
  'cobra',
  'employer_sponsored_insurance',
  'self_funded_student_health_coverage',
  'foreign_government_health_coverage',
  'private_health_insurance_plan',
  'coverage_obtained_through_another_exchange',
  'coverage_under_the_state_health_benefits_risk_pool',
  'veterans_administration_health_benefits',
  'peace_corps_health_benefits',
] as const;

export type BenefitKind = typeof benefit[number];
