import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { HouseholdMemberService } from '../../household-member.service';

@Component({
  selector: 'enroll-naturalized-citizen',
  templateUrl: './naturalized-citizen.component.html',
  styleUrls: ['./naturalized-citizen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaturalizedCitizenComponent {
  form: FormGroup;
  constructor(public householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
  }
}
