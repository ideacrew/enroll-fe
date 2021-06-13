import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ApplicantsEntity,
  ApplicantsFacade,
} from '@enroll/financial-assistance/store/applicants';

@Component({
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.scss'],
})
export class EditApplicationComponent implements OnInit {
  applicants$: Observable<ApplicantsEntity[]>;

  constructor(private applicantsFacade: ApplicantsFacade) {
    this.applicants$ = this.applicantsFacade.allApplicants$;
  }

  ngOnInit(): void {
    this.applicantsFacade.init();
  }
}
