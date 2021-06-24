import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './citizenship.component.html',
  styleUrls: ['./citizenship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenshipComponent {
  constructor(public newHouseholdMember: HouseholdMemberService) {}
}
