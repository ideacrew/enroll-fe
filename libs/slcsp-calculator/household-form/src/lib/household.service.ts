import { Injectable, isDevMode } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';

import {
  HouseholdFormGroup,
  HouseholdMemberFormGroup,
} from './interfaces/form-types';
import {
  defaultHouseholdForm,
  newHouseholdMember,
} from './form-initialization/initial-household-form';
import { mockHouseholdForm } from './form-initialization/mock-household-form';
import { HouseholdFormValue } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {
  mock = false;
  // Initial form state for household form
  householdForm: FormGroup<HouseholdFormGroup> =
    isDevMode() && this.mock ? mockHouseholdForm() : defaultHouseholdForm();

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

    // Duplicate the primary member's residence to all other members of the form
    const primaryMemberResidence = originalFormValue.members[0].residences;

    const [primaryMember, ...secondaryMembers] = originalFormValue.members;

    const newSecondaryMembers: HouseholdMember[] = secondaryMembers.map(
      (member): HouseholdMember => ({
        ...member,
        residences: primaryMemberResidence,
      })
    );

    const transformedFormValue = {
      ...originalFormValue,
      members: [primaryMember, ...newSecondaryMembers],
    };

    return transformedFormValue;
  }
}
