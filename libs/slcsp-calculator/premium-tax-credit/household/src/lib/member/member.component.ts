import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { map, shareReplay, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  selectRouteParam,
  selectQueryParam,
} from '@enroll/shared/state/root-store';
import {
  HouseholdService,
  noGapInResidence,
} from '@enroll/slcsp-calculator/household-form';
import { HouseholdMemberFormGroup } from '@enroll/slcsp-calculator/types';

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
    const dob = this.memberFormGroup.get('dob');

    // eslint-disable-next-line unicorn/no-null
    this.memberFormGroup.controls['dob'].setErrors(null);

    if (dob?.valid) {
      const value = dob.value;

      if (Number.parseInt(value.year, 10) > 2022) {
        this.memberFormGroup.controls['dob'].setErrors({
          msg: 'Date of birth cannot be after the tax year',
        });
        return false;
      }

      const age = this.calculateAge(
        new Date(
          Number.parseInt(value.year, 10),
          Number.parseInt(value.month, 10) - 1,
          Number.parseInt(value.day, 10)
        )
      );

      if (age > 125) {
        this.memberFormGroup.controls['dob'].setErrors({
          msg: 'Age cannot exceed 125 years',
        });
        return false;
      }
    } else {
      if (dob?.touched) {
        this.memberFormGroup.controls['dob'].setErrors({
          msg: 'Dob is invalid',
        });
      }

      return false;
    }

    const validResidenceGroup = this.memberResidenceControl?.valid ?? false;
    const memberResidences = this.memberResidenceControl?.value ?? [];
    const noGap = noGapInResidence(memberResidences);

    return isPrimaryMember ? validResidenceGroup && noGap : true;
  }

  calculateAge(date: Date) {
    let diff = (Date.now() - date.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
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
