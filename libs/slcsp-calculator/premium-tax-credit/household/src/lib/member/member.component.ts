import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { selectRouteParam } from '@enroll/shared/state/root-store';
import { Store } from '@ngrx/store';
import { map, shareReplay, tap } from 'rxjs';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';
import { Router } from '@angular/router';

@Component({
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberComponent {
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

  // DRY this up
  householdMemberName$ = this.memberId$.pipe(
    map((memberId) => this.householdMembersArray.at(memberId - 1)?.value),
    map((householdMember) => householdMember.name)
  );

  get householdMemberCount() {
    return this.householdMembersArray.length;
  }

  navigateToNextPage() {
    console.log({
      memberId: this.memberId,
      householdMemberCount: this.householdMemberCount,
    });

    void this.router.navigateByUrl(
      `/premium-tax-credit/household/member/${this.memberId}/coverage`
    );
  }
}
