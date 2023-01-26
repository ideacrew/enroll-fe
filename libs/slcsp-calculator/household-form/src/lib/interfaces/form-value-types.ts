import { AllRelationships, Month } from '@enroll/shared/types';
import { SlcspCounty, SlcspMonths } from '@enroll/slcsp-calculator/data-access';

export type HouseholdFormValue = {
  householdConfirmation: boolean | undefined;
  householdCount: number;
  taxYear: string;
  state: string;
  members: HouseholdMemberFormValue[];
};

export type HouseholdMemberFormValue = {
  primaryMember: boolean;
  relationship: AllRelationships | null;
  name: string;
  dob: DateOfBirthFormValue;
  residences: ResidenceFormValue[];
  coverage: CoverageFormValue;
};

export type DateOfBirthFormValue = {
  month: string;
  day: string;
  year: string;
};

export type ResidenceFormValue = {
  county: CountyFormValue;
  months: SlcspMonths;
};

export type CountyFormValue = SlcspCounty;

export type MonthFormValue = Record<Month, boolean>;
export type CoverageFormValue = MonthFormValue;
