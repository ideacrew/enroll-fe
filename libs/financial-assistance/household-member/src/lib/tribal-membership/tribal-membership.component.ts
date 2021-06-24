import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './tribal-membership.component.html',
  styleUrls: ['./tribal-membership.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TribalMembershipComponent {
  constructor(public newHouseholdMember: HouseholdMemberService) {}
}
