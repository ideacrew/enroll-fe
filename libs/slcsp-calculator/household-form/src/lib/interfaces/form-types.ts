import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { Month } from './household-member';

export type HouseholdFormGroup = {
  householdConfirmation: FormControl<boolean | undefined>;
  householdCount: FormControl<number>;
  taxYear: FormControl<string>;
  state: FormControl<string>;
  members: FormArray<FormGroup<HouseholdMemberFormGroup>>;
};

export type HouseholdMemberFormGroup = {
  name: FormControl<string>;
  dob: FormGroup<DateOfBirthFormGroup>;
  residences: FormArray<FormGroup<ResidenceFormGroup>>;
};

export type DateOfBirthFormGroup = {
  month: FormControl<string>;
  day: FormControl<string>;
  year: FormControl<string>;
};

export type ResidenceFormGroup = {
  zipCode: FormControl<string | null>;
  months: FormGroup<MonthFormGroup>;
};

export type MonthFormGroup = Record<Month, FormControl<boolean>>;
