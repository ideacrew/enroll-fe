import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './citizenship.component.html',
  styleUrls: ['./citizenship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenshipComponent {
  form: FormGroup;
  constructor(public householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
  }
}
