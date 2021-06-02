import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { NewHouseholdMemberService } from '../../new-household-member.service';

@Component({
  selector: 'enroll-immigration-status',
  templateUrl: './immigration-status.component.html',
  styleUrls: ['./immigration-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImmigrationStatusComponent implements OnDestroy {
  constructor(public newHouseholdMember: NewHouseholdMemberService) {}

  ngOnDestroy() {
    this.newHouseholdMember.eligibleImmigration = undefined;
  }
}
