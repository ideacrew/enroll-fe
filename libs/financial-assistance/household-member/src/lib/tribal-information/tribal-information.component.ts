import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './tribal-information.component.html',
  styleUrls: ['./tribal-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TribalInformationComponent {
  form: FormGroup;

  constructor(private householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
  }
}
