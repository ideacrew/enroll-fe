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

    // this.householdService.addMemberToHousehold();
  }

  async navigateToMemberDetails() {
    await this.router.navigateByUrl('/premium-tax-credit/household/member');
  }
}
