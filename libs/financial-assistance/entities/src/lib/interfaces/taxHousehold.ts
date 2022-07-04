import { ApplicantReference } from './applicantReference';
import { IaEligibilityKind } from './iaEligibility';
import { ProductEligibilityDetermination } from './productEligibilityDetermination';

/* eslint-disable @typescript-eslint/naming-convention */
export interface TaxHousehold {
  max_aptc?: number;
  csr?: number;
  is_insurance_assistance_eligible?: IaEligibilityKind;
  tax_household_members: TaxHouseholdMember[];
}

export interface TaxHouseholdMember {
  product_eligibility_determination?: ProductEligibilityDetermination;
  applicant_reference?: ApplicantReference;
}
