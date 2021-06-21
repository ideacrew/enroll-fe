import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewHouseholdMemberService } from '../new-household-member.service';

@Component({
  templateUrl: './add-new-person.component.html',
  styleUrls: ['./add-new-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewPersonComponent {
  constructor(public newHouseholdMember: NewHouseholdMemberService) {}
}
