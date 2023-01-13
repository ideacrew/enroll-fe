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

  async navigateToMemberDetails() {
    await this.router.navigateByUrl('/premium-tax-credit/household/member');
  }
}
