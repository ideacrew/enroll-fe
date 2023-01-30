import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  selectRouteParam,
  selectQueryParam,
} from '@enroll/shared/state/root-store';
import { Store } from '@ngrx/store';
import { map, shareReplay, tap } from 'rxjs';

import {
  HouseholdMemberFormGroup,
  HouseholdService,
} from '@enroll/slcsp-calculator/household-form';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

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

  reviewing$ = this.store.select(selectQueryParam('reviewing'));

  get memberFormGroup(): FormGroup<HouseholdMemberFormGroup> {
    return this.householdMembersArray.at(this.memberId - 1);
  }

  // The validity of this page depends on two things:
  // 1. The dob is valid
  // 2. If the member is the primary member, the residence must be valid
  // 2a. If this is a secondary member, the residence doesn't matter
  // This should eventually be an observable
  get validMemberDetailPage(): boolean {
    const isPrimaryMember = this.memberId === 1;
    const validDobGroup = this.memberFormGroup.get('dob')?.valid ?? false;
    const validResidenceGroup = this.memberResidenceControl?.valid ?? false;

    return isPrimaryMember
      ? validDobGroup && validResidenceGroup
      : validDobGroup;
  }

  get memberResidenceControl() {
    return this.memberFormGroup.get('residences');
  }

  navigateToCoverage(): void {
    if (this.validMemberDetailPage) {
      void this.router.navigateByUrl(
        `/premium-tax-credit/household/member/${this.memberId}/coverage`
      );
    } else {
      throw new Error('Member detail page is not valid');
    }
  }
}
