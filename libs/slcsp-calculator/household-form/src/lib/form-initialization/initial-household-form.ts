import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Month, months } from '../interfaces';
import {
  CountyFormGroup,
  DateOfBirthFormGroup,
  HouseholdFormGroup,
  HouseholdMemberFormGroup,
  MonthFormGroup,
  ResidenceFormGroup,
} from '../interfaces/form-types';

export const defaultHouseholdForm = (): FormGroup<HouseholdFormGroup> =>
  new FormGroup<HouseholdFormGroup>({
    householdConfirmation: new FormControl(undefined, { nonNullable: true }),
    // Start with a single member in the household
    householdCount: new FormControl(1, {
      nonNullable: true,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      validators: [Validators.required, Validators.min(1)],
    }),

    // Start with 2022 because this isn't changing until 2024
    taxYear: new FormControl('2022', { nonNullable: true }),

    // This tool only exists for Maine, so use that as the default
    state: new FormControl('ME', { nonNullable: true }),

    // Begin with a single member in the household
    members: new FormArray([defaultHouseholdMember()]),
  });

export const defaultHouseholdMember = (): FormGroup<HouseholdMemberFormGroup> =>
  new FormGroup<HouseholdMemberFormGroup>({
    name: new FormControl('Mark', { nonNullable: true }),
    dob: createDobFormGroup(),
    residences: new FormArray([createResidenceFormGroup()]),
  });

export const createDobFormGroup = (): FormGroup<DateOfBirthFormGroup> =>
  new FormGroup({
    month: new FormControl('', {
      nonNullable: true,
      validators: [
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ],
    }),
    day: new FormControl('', {
      nonNullable: true,
      validators: [
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
        Validators.min(1),
        Validators.max(31),
      ],
    }),
    year: new FormControl('', {
      nonNullable: true,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      validators: [Validators.required],
    }),
  });

export const createResidenceFormGroup = (): FormGroup<ResidenceFormGroup> =>
  new FormGroup<ResidenceFormGroup>({
    county: createCountyFormGroup(),
    months: createEmptyMonthsFormGroup(),
  });

export const createCountyFormGroup = (): FormGroup<CountyFormGroup> =>
  new FormGroup<CountyFormGroup>({
    zipcode: new FormControl('', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true }),
    fips: new FormControl('', { nonNullable: true }),
    state: new FormControl('', { nonNullable: true }),
  });

export const createEmptyMonthsFormGroup = (): FormGroup<MonthFormGroup> =>
  new FormGroup<MonthFormGroup>({
    jan: new FormControl(false, { nonNullable: true }),
    feb: new FormControl(false, { nonNullable: true }),
    mar: new FormControl(false, { nonNullable: true }),
    apr: new FormControl(false, { nonNullable: true }),
    may: new FormControl(false, { nonNullable: true }),
    jun: new FormControl(false, { nonNullable: true }),
    jul: new FormControl(false, { nonNullable: true }),
    aug: new FormControl(false, { nonNullable: true }),
    sep: new FormControl(false, { nonNullable: true }),
    oct: new FormControl(false, { nonNullable: true }),
    nov: new FormControl(false, { nonNullable: true }),
    dec: new FormControl(false, { nonNullable: true }),
  });

// Create a formGroup just like the empty months, but accept an array of months
// that are set to true
export const createLeftoverMonthsFormGroup = (
  existingMonths: Record<Month, boolean>
): FormGroup<MonthFormGroup> => {
  const formGroup = createEmptyMonthsFormGroup();

  // Loop over the existing months and set the formGroup to true for each
  // using a for...of loop because it's easier to read
  // using the months array from the interfaces file because this makes it typesafe
  for (const month of months) {
    if (existingMonths[month]) {
      formGroup.get(month)?.setValue(true);
    }
  }

  return formGroup;
};
