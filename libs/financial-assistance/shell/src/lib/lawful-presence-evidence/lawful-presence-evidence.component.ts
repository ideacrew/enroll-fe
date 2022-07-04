import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './lawful-presence-evidence.component.html',
  styleUrls: ['./lawful-presence-evidence.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LawfulPresenceEvidenceComponent {
  constructor(private householdMemberService: HouseholdMemberService) {}
}
