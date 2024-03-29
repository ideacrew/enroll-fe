import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { AllRelationships, Month } from '@enroll/shared/types';

export type HouseholdFormGroup = {
  householdConfirmation: FormControl<boolean | undefined>;
  householdCount: FormControl<number>;
  taxYear: FormControl<string>;
  state: FormControl<string>;
  members: FormArray<FormGroup<HouseholdMemberFormGroup>>;
};

export type HouseholdMemberFormGroup = {
  primaryMember: FormControl<boolean>;
  relationship: FormControl<AllRelationships | null>;
  name: FormControl<string | null>;
  dob: FormGroup<DateOfBirthFormGroup>;
  residences: FormArray<FormGroup<ResidenceFormGroup>>;
  coverage: FormGroup<CoverageFormGroup>;
};

export type DateOfBirthFormGroup = {
  month: FormControl<string>;
  day: FormControl<string>;
  year: FormControl<string>;
};

export type ResidenceFormGroup = {
  county: FormGroup<CountyFormGroup>;
  months: FormGroup<MonthFormGroup>;
  absent: FormControl<boolean>;
};

export type CountyFormGroup = {
  zipcode: FormControl<string>;
  name: FormControl<string>;
  fips: FormControl<string>;
  state: FormControl<string>;
};

export type MonthFormGroup = Record<Month, FormControl<boolean>>;
export type CoverageFormGroup = MonthFormGroup;
