import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { NewHouseholdMemberService } from '../../new-household-member.service';

@Component({
  selector: 'enroll-naturalized-citizen',
  templateUrl: './naturalized-citizen.component.html',
  styleUrls: ['./naturalized-citizen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaturalizedCitizenComponent implements OnDestroy {
  constructor(public newHouseholdMember: NewHouseholdMemberService) {}

  ngOnDestroy() {
    this.newHouseholdMember.naturalized = undefined;
    this.newHouseholdMember.naturalizedDocument = undefined;
  }
}
