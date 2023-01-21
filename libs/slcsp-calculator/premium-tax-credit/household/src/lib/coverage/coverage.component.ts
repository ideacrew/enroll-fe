import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, shareReplay, tap } from 'rxjs';

import { selectRouteParam } from '@enroll/shared/state/root-store';
import { HouseholdService } from '@enroll/slcsp-calculator/household-form';

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
}
