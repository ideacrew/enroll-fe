import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';

@Component({
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdComponent {
  router = inject(Router);
  householdService = inject(HouseholdService);
  householdFormGroup = this.householdService.householdForm;
  householdConfirmation$ = this.householdService.householdConfirmation$;
  householdMemberControls = this.householdService.householdMemberControls;

  changeHouseholdCount(newCount: number): void {
    if (newCount < 1) {
      throw new Error('Household count must be greater than 0');
    }

    if (newCount >= 1) {
      this.householdService.updateHouseholdCount(newCount);
    }
  }

  get primaryMemberName(): string {
    return (
      this.householdService.householdMembersArray.at(0).get('name')?.value ??
      'primary member'
    );
  }

  get confirmation(): boolean {
    const confirmationControl = this.householdFormGroup.get(
      'householdConfirmation'
    );

    if (confirmationControl !== undefined && confirmationControl !== null) {
      return confirmationControl.value ?? false;
    }

    return false;
  }
}
