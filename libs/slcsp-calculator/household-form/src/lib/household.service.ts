import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

type HouseholdFormGroup = {
  householdConfirmation: FormControl<boolean | undefined>;
  householdCount: FormControl<number>;
  taxYear: FormControl<string>;
  state: FormControl<string>;
  members: FormArray<FormGroup<HouseholdMemberFormGroup>>;
};

type HouseholdMemberFormGroup = {
  name: FormControl<string>;
  dob: FormGroup<DateOfBirthFormGroup>;
  residences: FormArray<FormGroup<ResidenceFormGroup>>;
};

type DateOfBirthFormGroup = {
  month: FormControl<string>;
  day: FormControl<string>;
  year: FormControl<string>;
};

type ResidenceFormGroup = {
  zipCode: FormControl<string | null>;
  months: FormGroup<MonthFormGroup>;
};

type MonthFormGroup = {
  jan: FormControl<boolean>;
  feb: FormControl<boolean>;
  mar: FormControl<boolean>;
  apr: FormControl<boolean>;
  may: FormControl<boolean>;
  jun: FormControl<boolean>;
  jul: FormControl<boolean>;
  aug: FormControl<boolean>;
  sep: FormControl<boolean>;
  oct: FormControl<boolean>;
  nov: FormControl<boolean>;
  dec: FormControl<boolean>;
};

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {
  // Initial form state for household form
  householdForm: FormGroup<HouseholdFormGroup> =
    new FormGroup<HouseholdFormGroup>({
      householdConfirmation: new FormControl(undefined, { nonNullable: true }),
      // Start with a single member in the household
      householdCount: new FormControl(1, { nonNullable: true }),

      // Start with 2022 because this isn't changing until 2024
      taxYear: new FormControl('2022', { nonNullable: true }),

      // This tool only exists for Maine, so use that as the default
      state: new FormControl('ME', { nonNullable: true }),

      // Begin with a single member in the household
      members: new FormArray([this.createNewHouseholdMember()]),
    });

  readonly householdConfirmation$ = this.householdForm.get(
    'householdConfirmation'
  )?.valueChanges;

  addMemberToHousehold() {
    const numberOfMembersControl = this.householdForm.get('householdCount');

    if (numberOfMembersControl === null) {
      throw new Error(
        'Number of members control is null. This should never happen.'
      );
    } else {
      const numberOfMembers = numberOfMembersControl.value;

      // Increment the number of members in the household
      numberOfMembersControl.setValue(numberOfMembers + 1);

      // Add a new member to the household
      const membersControl = this.householdMembersArray;

      // If members control isn't null, add a new household member to the array
      if (membersControl === null) {
        throw new Error('Members control is null. This should never happen.');
      } else {
        this.householdMembersArray.push(this.createNewHouseholdMember());
      }
    }
  }

  private createNewHouseholdMember(): FormGroup<HouseholdMemberFormGroup> {
    return new FormGroup<HouseholdMemberFormGroup>({
      name: new FormControl('Mark', { nonNullable: true }),
      dob: this.createDobFormGroup(),
      residences: new FormArray([this.createResidencesFormGroup()]),
    });
  }

  private createResidencesFormGroup(): FormGroup<ResidenceFormGroup> {
    return new FormGroup<ResidenceFormGroup>({
      zipCode: new FormControl(''),
      months: this.createMonthsFormGroup(),
    });
  }

  private createMonthsFormGroup(): FormGroup<MonthFormGroup> {
    return new FormGroup<MonthFormGroup>({
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
  }

  private createDobFormGroup(): FormGroup<DateOfBirthFormGroup> {
    return new FormGroup({
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
  }

  // Needed in order to access the household members in the template
  get householdMembersArray(): FormArray<FormGroup<HouseholdMemberFormGroup>> {
    return this.householdForm.get('members') as FormArray<
      FormGroup<HouseholdMemberFormGroup>
    >;
  }

  // Needed in order to iterate over the household members in the template
  get householdMemberControls(): Array<FormGroup<HouseholdMemberFormGroup>> {
    return this.householdMembersArray.controls;
  }
}
