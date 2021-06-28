import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './lawful-presence.component.html',
  styleUrls: ['./lawful-presence.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LawfulPresenceComponent {
  form: FormGroup;

  constructor(private householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
  }
}
