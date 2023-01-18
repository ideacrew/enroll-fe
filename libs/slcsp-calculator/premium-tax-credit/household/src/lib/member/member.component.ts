import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { selectRouteParam } from '@enroll/shared/state/root-store';
import { Store } from '@ngrx/store';
import { map, shareReplay, startWith } from 'rxjs';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';

@Component({
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberComponent {
  householdService = inject(HouseholdService);
  householdFormGroup = this.householdService.householdForm;
  householdMembersArray = this.householdService.householdMembersArray;

  store = inject(Store);
  memberId$ = this.store.select(selectRouteParam('memberId')).pipe(
    map((memberId) => Number.parseInt(memberId ?? '1', 10)),
    shareReplay(1)
  );

  // DRY this up
  householdMemberName$ = this.householdMembersArray
    .at(0) // needs to be dynamic
    .get('name')
    ?.valueChanges.pipe(
      startWith(this.householdMembersArray.at(0).get('name')?.value),
      shareReplay(1)
    );
}
