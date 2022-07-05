/* eslint-disable @typescript-eslint/naming-convention */
import { ApplicantReference } from './applicant-reference';
import { Attestation } from './attestation';
import { Benefit } from './benefit';
import { CitizenImmigrationStatusInformation } from './citizen-immigration-status-information';
import { Deduction } from './deduction';
import { Demographic } from './demographic';
import { FamilyMemberReference } from './family';
import { FosterCareInformation } from './foster-care';
import { IdentifyingInformation } from './identifying-information';
import { Income } from './income';
import { NativeAmericanInformation } from './native-american-information';
import { PersonName } from './person-name';
import { PregnancyInformation } from './pregnancy-information';
import { StudentInformation } from './student';
import { TaxFilerKind } from './taxFilerKind';
import { VlpDocumentKind } from './vlp-document';

export interface Applicant {
  name: PersonName;
  identifying_information: IdentifyingInformation;
  demographic: Demographic;
  attestation: Attestation;
  is_primary_applicant: boolean;
  is_applying_coverage: boolean;
  pregnancy_information: PregnancyInformation;
  family_member_reference: FamilyMemberReference;
  person_hbx_id: string;

  // Conditional properties
  citizenship_immigration_status_information: CitizenImmigrationStatusInformation;
  vlp_document?: VlpDocumentKind; // Required based on citizen status

  // Tax Info
  is_required_to_file_taxes: boolean;
  tax_filer_kind?: TaxFilerKind;
  is_joint_tax_filing?: boolean;
  is_claimed_as_tax_dependent?: boolean;
  claimed_as_tax_dependent_by?: ApplicantReference;

  native_american_information?: NativeAmericanInformation;

  // Where do these properties come from?
  is_consumer_role?: boolean;
  is_resident_role?: boolean;
  is_consent_applicant?: boolean;

  student?: StudentInformation; // conditional on what?
  is_refugee?: boolean; // conditional on what?
  is_trafficking_victim?: boolean; // conditional on what?
  foster_care?: FosterCareInformation; // conditional on what?

  is_subject_to_five_year_bar?: boolean;
  is_five_year_bar_met?: boolean;
  is_forty_quarters?: boolean;
  is_ssn_applied?: boolean;
  non_ssn_apply_reason?: string;
  moved_on_or_after_welfare_reformed_law?: boolean;
  is_currently_enrolled_in_health_plan?: boolean;
  has_daily_living_help: boolean;
  need_help_paying_bills: boolean;

  // Income
  has_job_income: boolean;
  has_self_employment_income: boolean;
  has_unemployment_income: boolean;
  has_other_income: boolean;
  // Conditional on the above income booleans being true
  incomes?: Income[];

  // Benefits
  has_enrolled_health_coverage: boolean;
  has_eligible_health_coverage: boolean;
  // Conditional on being enrolled or eligible
  benefits?: Benefit[];

  // Deductions
  has_deductions: boolean;
  // Conditional on having deductions
  deductions?: Deduction[];

  is_medicare_eligible: boolean;
  is_self_attested_long_term_care: boolean; // duplicate from attestation?
  has_insurance: boolean;
  has_state_health_benefit: boolean;
  had_prior_insurance: boolean;
  prior_insurance_end_date: string; // date
  age_of_applicant: string;

  hours_worked_per_week: number;
  is_temporarily_out_of_state: boolean;
  is_claimed_as_dependent_by_non_applicant: boolean;

  addresses: unknown[];
  emails: unknown[];
  phones: unknown[];

  // TBD
  // mitc_income?: MitcIncome;
  // mitc_relationships?: MitcRelationship[];
}
