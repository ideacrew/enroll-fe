import { Injectable, isDevMode } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import {
  HouseholdFormGroup,
  HouseholdMemberFormGroup,
} from './interfaces/form-types';
import {
  defaultHouseholdForm,
  defaultHouseholdMember,
} from './form-initialization/initial-household-form';
import { mockHouseholdForm } from './form-initialization/mock-household-form';

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {
  // Initial form state for household form
  householdForm: FormGroup<HouseholdFormGroup> = isDevMode()
    ? mockHouseholdForm()
    : defaultHouseholdForm();

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
        this.householdMembersArray.push(defaultHouseholdMember());
      }
    }
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
