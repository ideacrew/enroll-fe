import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './incarceration-status.component.html',
  styleUrls: ['./incarceration-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncarcerationStatusComponent {
  form: FormGroup;

  constructor(public householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
  }
}
