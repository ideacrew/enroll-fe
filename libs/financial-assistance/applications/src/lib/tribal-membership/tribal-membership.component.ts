import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NewHouseholdMemberService } from '../new-household-member.service';

@Component({
  templateUrl: './tribal-membership.component.html',
  styleUrls: ['./tribal-membership.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TribalMembershipComponent {
  constructor(public newHouseholdMember: NewHouseholdMemberService) {}
}
