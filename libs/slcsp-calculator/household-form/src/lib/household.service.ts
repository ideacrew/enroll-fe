import { Injectable, isDevMode } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';
import { HouseholdFormValue } from '@enroll/slcsp-calculator/types';

import {
  HouseholdFormGroup,
  HouseholdMemberFormGroup,
} from '@enroll/slcsp-calculator/types';
import {
  defaultHouseholdForm,
  newHouseholdMember,
} from './form-initialization/initial-household-form';
import { mockHouseholdForm } from './form-initialization/mock-household-form';
import { duplicateResidencesAcrossSecondaryMembers } from './util/transforms/duplicate-residences';
import { extendResidenceMonths } from './util/transforms/extend-residence-months';

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {
  mock = false;
  householdForm: FormGroup<HouseholdFormGroup> =
    isDevMode() && this.mock
      ? mockHouseholdForm()
      : defaultHouseholdForm('2022');

  formHasBeenStarted = false;

  readonly householdConfirmation$ = this.householdForm.get(
    'householdConfirmation'
  )?.valueChanges;

  // Initial form state for household form
  private currentTaxYear: string | undefined;

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

  setHouseholdForm(taxYear: string): FormGroup<HouseholdFormGroup> {
    if (taxYear !== this.currentTaxYear) {
      this.currentTaxYear = taxYear;
      this.householdForm = defaultHouseholdForm(taxYear);
    }
    return this.householdForm;
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
    console.log({ originalFormValue });

    const [primaryMember, ...secondaryMembers] = originalFormValue.members;

    // Extends the residence months to include all 12 months
    const extendedResidences = primaryMember.residences.map((residence) => ({
      ...residence,
      months: extendResidenceMonths(residence.months),
      absent: residence.absent ?? false,
    }));

    const newPrimaryMember: HouseholdMember = {
      ...primaryMember,
      residences: extendedResidences,
    };

    // Duplicates primary member's residences across all secondary members
    const updatedMembers = duplicateResidencesAcrossSecondaryMembers([
      newPrimaryMember,
      ...secondaryMembers,
    ]);

    const transformedFormValue = {
      ...originalFormValue,
      members: updatedMembers,
    };
    console.log(transformedFormValue);

    return transformedFormValue;
  }
}
