import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import {
  ApplicantsService,
  ApplicantVM,
} from '@enroll/financial-assistance/data-access';

@Component({
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditApplicationComponent {
  applicants$: Observable<ApplicantVM[]>;

  constructor(
    private route: ActivatedRoute,
    private applicantsService: ApplicantsService
  ) {
    this.applicants$ = this.route.paramMap.pipe(
      filter((params) => params.has('applicationId')),
      map((params) => params.get('applicationId')),
      switchMap((applicationId) =>
        this.applicantsService.getApplicants(applicationId)
      )
    );
  }
}
