import {
  Benefit,
  CitizenKind,
  EthnicityKind,
  Deduction,
  RelationshipKind,
  StudentKind,
  StudentSchoolKind,
  TaxFilerKind,
  UsStateAbbreviationKind,
  Address,
  Email,
  PhoneNumber,
  VlpDocument,
} from '@enroll/financial-assistance/entities';

import { EmployerIncome } from './income';

/* eslint-disable @typescript-eslint/naming-convention */

type BaseApplicant = {
  id: string;
  name_pfx?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  name_sfx?: string;
  gender: 'male' | 'female';
  dob: string; // Date
  encrypted_ssn?: string;
  no_ssn?: boolean;
  relationship: RelationshipKind;
  is_primary_applicant: boolean;
  lives_with_primary?: boolean;
  aasm_state: string;
  ethnicity?: EthnicityKind[];
  indian_tribe_member: boolean;
  tribal_id?: string;

  // All applicants must provide a home address
  addresses: Address[];

  // Non-primary applicants don't supply this information
  phones?: PhoneNumber[];
  emails?: Email[];

  is_required_to_file_taxes?: boolean;
  tax_filer_kind?: TaxFilerKind;
  has_job_income?: boolean;
  has_self_employment_income?: boolean;
  has_unemployment_income?: boolean;
  has_other_income?: boolean;
}

export type NoCoverageApplicant = {
  is_applying_coverage: false;
} & BaseApplicant

export type NeedsCoverageApplicant = {
  is_applying_coverage: true;

  citizen_status: CitizenKind;
  vlp_document?: VlpDocument;

  // Tax Filing
  is_joint_tax_filing?: boolean;
  is_claimed_as_tax_dependent?: boolean;
  claimed_as_tax_dependent_by?: string; // Id of other person

  // Non-MAGI Questions
  is_self_attested_blind?: boolean;
  is_self_attested_disabled?: boolean;
  has_daily_living_help?: boolean;

  // Student Questions
  is_student?: boolean;
  student_kind?: StudentKind;
  student_school_kind?: StudentSchoolKind;
  student_status_end_on?: string; // Date;

  // Incarceration Questions
  is_incarcerated: boolean;

  // Pregnancy Questions
  is_pregnant?: boolean;
  is_post_partum_period?: boolean; // update spelling
  children_expected_count?: number;
  pregnancy_due_on?: string; // Date
  pregnancy_end_on?: string; // Date

  // Foster Care Questions
  is_former_foster_care?: boolean;
  age_left_foster_care?: number;
  foster_care_us_sate?: UsStateAbbreviationKind;

  // Legal Attestations
  moved_on_or_after_welfare_reformed_law?: boolean;
  is_veteran_or_active_military?: boolean;
  is_spouse_or_dep_child_of_veteran_or_active_military?: boolean;

  // Income

  income?: EmployerIncome[];

  // Deductions
  has_deductions?: boolean;
  deductions?: Deduction[];

  // Benefits
  has_enrolled_health_coverage?: boolean;
  has_eligible_health_coverage?: boolean;
  benefits?: Benefit[];
} & BaseApplicant

export type Applicant = NoCoverageApplicant | NeedsCoverageApplicant;
