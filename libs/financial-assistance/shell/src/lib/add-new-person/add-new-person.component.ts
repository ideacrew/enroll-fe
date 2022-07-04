import { OnDestroy } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  ApplicantsEntity,
  ApplicantsFacade,
} from '@enroll/financial-assistance/store/applicants';
import { filterNullish } from '@enroll/util/helpers';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './add-new-person.component.html',
  styleUrls: ['./add-new-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewPersonComponent implements OnDestroy {
  applicantSubscription: Subscription;

  constructor(
    public householdMemberService: HouseholdMemberService,
    private applicantsFacade: ApplicantsFacade
  ) {
    this.applicantSubscription = this.applicantsFacade.selectedApplicants$
      .pipe(
        filterNullish<ApplicantsEntity>(),
        tap((applicant: ApplicantsEntity) =>
          this.householdMemberService.insertApplicant(applicant)
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.applicantSubscription.unsubscribe();
  }
}
