import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, shareReplay, tap } from 'rxjs';

import {
  selectQueryParam,
  selectRouteParam,
} from '@enroll/shared/state/root-store';
import { HouseholdService } from '@enroll/slcsp-calculator/household-form';
import { ActivatedRoute, Router } from '@angular/router';

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
  route = inject(ActivatedRoute);
  store = inject(Store);
  currentTaxYear = <string>this.route.snapshot.params['taxYear'];
  memberId$ = this.store.select(selectRouteParam('memberId')).pipe(
    map((memberId) => Number.parseInt(memberId ?? '1', 10)),
    tap((memberId) => (this.memberId = memberId)),
    shareReplay(1)
  );

  householdMemberName$ = this.memberId$.pipe(
    map((memberId) => this.householdMembersArray.at(memberId - 1)?.value),
    map((householdMember) => householdMember.name)
  );

  reviewing$ = this.store.select(selectQueryParam('reviewing'));

  get validCoverageForm(): boolean {
    const coverageControl = this.householdMembersArray
      .at(this.memberId - 1)
      .get('coverage');

    const isCoverageValid = coverageControl?.valid ?? false;

    return isCoverageValid;
  }

  nextStep() {
    if (this.memberId > this.householdMembersArray.length) {
      throw new Error('Invalid member id');
    }

    if (this.validCoverageForm === false) {
      return;
    }

    // need to navigate to either the next member of the household
    // or the review page if this is the last member of the household
    if (this.memberId < this.householdMembersArray.length) {
      void this.router.navigate(['../..', `${this.memberId + 1}`], {
        relativeTo: this.route,
      });
      //void this.router.navigateByUrl(
      //  `/premium-tax-credit/household/member/${this.memberId + 1}`
      //);
    }

    if (this.memberId === this.householdMembersArray.length) {
      void this.router.navigateByUrl(
        `/premium-tax-credit/review/${this.currentTaxYear}`
      );
    }
  }
}
