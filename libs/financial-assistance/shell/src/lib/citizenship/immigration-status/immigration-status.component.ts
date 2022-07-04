import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { HouseholdMemberService } from '../../household-member.service';

@Component({
  selector: 'enroll-immigration-status',
  templateUrl: './immigration-status.component.html',
  styleUrls: ['./immigration-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImmigrationStatusComponent {
  form: FormGroup;
  constructor(public householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
  }
}
