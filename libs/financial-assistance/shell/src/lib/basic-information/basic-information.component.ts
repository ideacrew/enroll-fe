/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationComponent {
  form: FormGroup;
  constructor(public newHouseholdMember: HouseholdMemberService) {
    this.form = this.newHouseholdMember.householdMemberForm;
  }
}
