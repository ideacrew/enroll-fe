import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './tribal-membership.component.html',
  styleUrls: ['./tribal-membership.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TribalMembershipComponent {
  form: FormGroup;
  constructor(public householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
  }
}
