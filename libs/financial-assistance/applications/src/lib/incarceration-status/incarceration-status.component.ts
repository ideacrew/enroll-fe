import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NewHouseholdMemberService } from '../new-household-member.service';

@Component({
  templateUrl: './incarceration-status.component.html',
  styleUrls: ['./incarceration-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncarcerationStatusComponent {
  constructor(public newHouseholdMember: NewHouseholdMemberService) {}
}
