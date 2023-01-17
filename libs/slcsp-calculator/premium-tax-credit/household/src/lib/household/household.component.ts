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

  addMembersToHouseholdForm(): void {
    // const newCount = this.numberInput.nativeElement.value;

    this.householdService.addMemberToHousehold();
  }

  async navigateToMemberDetails() {
    await this.router.navigateByUrl('/premium-tax-credit/household/member');
  }
}
