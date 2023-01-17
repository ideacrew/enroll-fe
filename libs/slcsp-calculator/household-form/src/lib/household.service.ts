import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
};

type DateOfBirthFormGroup = {
  month: FormControl<string>;
  day: FormControl<string>;
  year: FormControl<string>;
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

  private createDobFormGroup(): FormGroup<DateOfBirthFormGroup> {
    return new FormGroup({
      month: new FormControl('', { nonNullable: true }),
      day: new FormControl('', { nonNullable: true }),
      year: new FormControl('', { nonNullable: true }),
    });
  }

  private createNewHouseholdMember(): FormGroup<HouseholdMemberFormGroup> {
    return new FormGroup<HouseholdMemberFormGroup>({
      name: new FormControl('', { nonNullable: true }),
      dob: this.createDobFormGroup(),
    });
  }

  get householdMembersArray(): FormArray<FormGroup<HouseholdMemberFormGroup>> {
    return this.householdForm.get('members') as FormArray<
      FormGroup<HouseholdMemberFormGroup>
    >;
  }

  get householdMemberControls(): Array<FormGroup<HouseholdMemberFormGroup>> {
    return this.householdMembersArray.controls;
  }
}
