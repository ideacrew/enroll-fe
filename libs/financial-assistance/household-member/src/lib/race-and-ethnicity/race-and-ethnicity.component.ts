import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  ethnicities,
  latinEthnicities,
} from '@enroll/financial-assistance/entities';

import { NewHouseholdMemberService } from '../new-household-member.service';

@Component({
  templateUrl: './race-and-ethnicity.component.html',
  styleUrls: ['./race-and-ethnicity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaceAndEthnicityComponent {
  ethnicities = ethnicities;
  latinEthnicities = latinEthnicities;
  constructor(public newHouseholdMember: NewHouseholdMemberService) {}
}
