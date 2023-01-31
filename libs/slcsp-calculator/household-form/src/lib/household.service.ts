import { Injectable, isDevMode } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { HouseholdFormValue } from '@enroll/slcsp-calculator/types';

import {
  HouseholdFormGroup,
  HouseholdMemberFormGroup,
} from '../../../types/src/lib/form-types';
import {
  defaultHouseholdForm,
  newHouseholdMember,
} from './form-initialization/initial-household-form';
import { mockHouseholdForm } from './form-initialization/mock-household-form';
import { duplicateResidencesAcrossSecondaryMembers } from './util/transforms/duplicate-residences';

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {
  mock = false;
  // Initial form state for household form
  householdForm: FormGroup<HouseholdFormGroup> =
    isDevMode() && this.mock ? mockHouseholdForm() : defaultHouseholdForm();

  formHasBeenStarted = false;

  readonly householdConfirmation$ = this.householdForm.get(
    'householdConfirmation'
  )?.valueChanges;

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

  updateHouseholdCount(newCount: number): void {
    const currentMembers = this.householdMembersArray.length;

    if (newCount < currentMembers) {
      // Remove members from the household
      for (let index = currentMembers; index > newCount; index--) {
        this.householdMembersArray.removeAt(index - 1);
      }
    }

    if (newCount === currentMembers) {
      return;
    }

    if (newCount > currentMembers) {
      // Add members to the household
      for (let index = currentMembers; index < newCount; index++) {
        this.householdMembersArray.push(newHouseholdMember());
      }
    }
  }

  getTransformedValue(): HouseholdFormValue {
    const originalFormValue = this.householdForm.value as HouseholdFormValue;

    const transformedFormValue = {
      ...originalFormValue,
      members: duplicateResidencesAcrossSecondaryMembers(
        originalFormValue.members
      ),
    };
    console.log(transformedFormValue);

    return transformedFormValue;
  }
}
