import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CountyFormGroup,
  CoverageFormGroup,
  DateOfBirthFormGroup,
  HouseholdFormGroup,
  HouseholdMemberFormGroup,
  MonthFormGroup,
  ResidenceFormGroup,
} from '../interfaces/form-types';

export const mockHouseholdForm = (): FormGroup<HouseholdFormGroup> =>
  new FormGroup<HouseholdFormGroup>({
    householdConfirmation: new FormControl(true, { nonNullable: true }),
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
    members: new FormArray([mockPrimaryHouseholdMember()]),
  });

const mockPrimaryHouseholdMember = (): FormGroup<HouseholdMemberFormGroup> =>
  new FormGroup<HouseholdMemberFormGroup>({
    primaryMember: new FormControl(true, { nonNullable: true }),
    relationship: new FormControl('self', { nonNullable: true }),
    name: new FormControl('Mark', { nonNullable: true }),
    dob: mockDobFormGroup(),
    residences: new FormArray([mockResidenceFormGroup()]),
    coverage: mockCoverageFormGroup(),
  });

const mockDobFormGroup = (): FormGroup<DateOfBirthFormGroup> =>
  new FormGroup({
    month: new FormControl('1', {
      nonNullable: true,
      validators: [
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ],
    }),
    day: new FormControl('1', {
      nonNullable: true,
      validators: [
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
        Validators.min(1),
        Validators.max(31),
      ],
    }),
    year: new FormControl('1979', {
      nonNullable: true,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      validators: [Validators.required],
    }),
  });

const mockResidenceFormGroup = (): FormGroup<ResidenceFormGroup> =>
  new FormGroup<ResidenceFormGroup>({
    county: mockCountyFormGroup(),
    months: mockMonthsFormGroup(),
  });

const mockCountyFormGroup = (): FormGroup<CountyFormGroup> =>
  new FormGroup<CountyFormGroup>({
    zipcode: new FormControl('04003', { nonNullable: true }),
    name: new FormControl('Cumberland County', { nonNullable: true }),
    fips: new FormControl('23005', { nonNullable: true }),
    state: new FormControl('ME', { nonNullable: true }),
  });

const mockMonthsFormGroup = (): FormGroup<MonthFormGroup> =>
  new FormGroup<MonthFormGroup>({
    jan: new FormControl(true, { nonNullable: true }),
    feb: new FormControl(true, { nonNullable: true }),
    mar: new FormControl(true, { nonNullable: true }),
    apr: new FormControl(true, { nonNullable: true }),
    may: new FormControl(true, { nonNullable: true }),
    jun: new FormControl(true, { nonNullable: true }),
    jul: new FormControl(true, { nonNullable: true }),
    aug: new FormControl(true, { nonNullable: true }),
    sep: new FormControl(true, { nonNullable: true }),
    oct: new FormControl(true, { nonNullable: true }),
    nov: new FormControl(true, { nonNullable: true }),
    dec: new FormControl(true, { nonNullable: true }),
  });

const mockCoverageFormGroup = (): FormGroup<CoverageFormGroup> =>
  new FormGroup<CoverageFormGroup>({
    jan: new FormControl(true, { nonNullable: true }),
    feb: new FormControl(true, { nonNullable: true }),
    mar: new FormControl(true, { nonNullable: true }),
    apr: new FormControl(true, { nonNullable: true }),
    may: new FormControl(true, { nonNullable: true }),
    jun: new FormControl(true, { nonNullable: true }),
    jul: new FormControl(true, { nonNullable: true }),
    aug: new FormControl(true, { nonNullable: true }),
    sep: new FormControl(true, { nonNullable: true }),
    oct: new FormControl(true, { nonNullable: true }),
    nov: new FormControl(true, { nonNullable: true }),
    dec: new FormControl(true, { nonNullable: true }),
  });
