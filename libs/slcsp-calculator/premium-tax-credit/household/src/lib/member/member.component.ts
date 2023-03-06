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
import { TitleCasePipe } from '@angular/common';

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

  constructor(private titlecase: TitleCasePipe) {}

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

      if (!this.isValidDate(value)) {
        this.memberFormGroup.controls['dob'].setErrors({
          msg: 'Day is invalid for given month',
        });

        return false;
      }

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
        const invalidKeys: string[] = [];
        for (const key of Object.keys(
          this.memberFormGroup.controls['dob'].controls
        )) {
          const controlErrors =
            this.memberFormGroup.controls['dob'].get(key)?.errors;
          if (controlErrors !== null) {
            invalidKeys.push(this.titlecase.transform(key));
          }
        }

        this.memberFormGroup.controls['dob'].setErrors({
          msg: invalidKeys.join(', ') + ' is invalid',
        });
      }

      return false;
    }

    const validResidenceGroup = this.memberResidenceControl?.valid ?? false;
    const memberResidences = this.memberResidenceControl?.value ?? [];
    const noGap = noGapInResidence(memberResidences);

    return isPrimaryMember ? validResidenceGroup && noGap : true;
  }

  isValidDate(dob: { month: string; day: string; year: string }) {
    const month = Number.parseInt(dob.month, 10);
    const day = Number.parseInt(dob.day, 10);
    const year = Number.parseInt(dob.year, 10);

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29;
    }

    return day <= monthLength[month - 1];
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
