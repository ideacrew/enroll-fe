import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './incarceration-status.component.html',
  styleUrls: ['./incarceration-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncarcerationStatusComponent {
  constructor(public newHouseholdMember: HouseholdMemberService) {}
}
