import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ApplicantsEntity } from '@enroll/financial-assistance/store/applicants';

@Component({
  selector: 'enroll-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicantCardComponent {
  @Input() applicant!: ApplicantsEntity;
}
