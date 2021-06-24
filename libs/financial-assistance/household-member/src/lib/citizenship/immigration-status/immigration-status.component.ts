import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HouseholdMemberService } from '../../household-member.service';

@Component({
  selector: 'enroll-immigration-status',
  templateUrl: './immigration-status.component.html',
  styleUrls: ['./immigration-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImmigrationStatusComponent {
  constructor(public newHouseholdMember: HouseholdMemberService) {}
}
