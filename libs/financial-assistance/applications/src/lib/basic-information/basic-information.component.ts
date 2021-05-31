import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NewHouseholdMemberService } from '../new-household-member.service';

@Component({
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationComponent {
  constructor(public newHouseholdMember: NewHouseholdMemberService) {}
}
