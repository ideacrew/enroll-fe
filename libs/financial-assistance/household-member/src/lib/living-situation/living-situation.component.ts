import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './living-situation.component.html',
  styleUrls: ['./living-situation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LivingSituationComponent {
  form: FormGroup;

  constructor(private householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
  }
}
