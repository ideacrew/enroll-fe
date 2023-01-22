import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, shareReplay, tap } from 'rxjs';

import { selectRouteParam } from '@enroll/shared/state/root-store';
import { HouseholdService } from '@enroll/slcsp-calculator/household-form';
import { Router } from '@angular/router';

@Component({
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverageComponent {
  householdService = inject(HouseholdService);
  householdFormGroup = this.householdService.householdForm;
  householdMembersArray = this.householdService.householdMembersArray;
  memberId!: number;
  router = inject(Router);
  store = inject(Store);
  memberId$ = this.store.select(selectRouteParam('memberId')).pipe(
    map((memberId) => Number.parseInt(memberId ?? '1', 10)),
    tap((memberId) => (this.memberId = memberId)),
    shareReplay(1)
  );

  householdMemberName$ = this.memberId$.pipe(
    map((memberId) => this.householdMembersArray.at(memberId - 1)?.value),
    map((householdMember) => householdMember.name)
  );

  nextStep() {
    if (this.memberId > this.householdMembersArray.length) {
      throw new Error('Invalid member id');
    }

    // need to navigate to either the next member of the household
    // or the review page if this is the last member of the household
    if (this.memberId < this.householdMembersArray.length) {
      void this.router.navigateByUrl(
        `/premium-tax-credit/household/member/${this.memberId + 1}`
      );
    }

    if (this.memberId === this.householdMembersArray.length) {
      void this.router.navigateByUrl(`/premium-tax-credit/review`);
    }
  }
}
