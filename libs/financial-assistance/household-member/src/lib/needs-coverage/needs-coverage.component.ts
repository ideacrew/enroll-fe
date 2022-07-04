import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './needs-coverage.component.html',
  styleUrls: ['./needs-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeedsCoverageComponent {
  form: FormGroup;
  fullName: string;

  constructor(private householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
    this.fullName = this.householdMemberService.fullName;
  }
}
