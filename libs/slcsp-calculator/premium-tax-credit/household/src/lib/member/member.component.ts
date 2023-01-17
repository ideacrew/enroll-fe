import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';
import { startWith } from 'rxjs';

@Component({
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberComponent {
  householdService = inject(HouseholdService);
  householdFormGroup = this.householdService.householdForm;
  householdMembersArray = this.householdService.householdMembersArray;

  // DRY this up
  householdMemberName$ = this.householdMembersArray
    .at(0) // needs to be dynamic
    .get('name')
    ?.valueChanges.pipe(
      startWith(this.householdMembersArray.at(0).get('name')?.value)
    );

  getDateError(errorCode: string): boolean {
    return (
      this.householdMembersArray.at(0).get('dob')?.hasError(errorCode) ?? false
    );
  }
}
