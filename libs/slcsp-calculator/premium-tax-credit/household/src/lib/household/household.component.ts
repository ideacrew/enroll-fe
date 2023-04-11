import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';

@Component({
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  householdService = inject(HouseholdService);
  currentTaxYear = <string>this.route.snapshot.params['taxYear'];
  householdFormGroup = this.householdService.setHouseholdForm(
    this.currentTaxYear
  );
  householdConfirmation$ = this.householdService.householdConfirmation$;
  householdMemberControls = this.householdService.householdMemberControls;

  changeHouseholdCount(newCount: number): void {
    if (newCount < 1) {
      throw new Error('Household count must be greater than 0');
    }

    if (newCount >= 1) {
      this.householdService.updateHouseholdCount(newCount);
    }
  }

  get primaryMemberName(): string {
    return (
      this.householdService.householdMembersArray.at(0).get('name')?.value ??
      'primary member'
    );
  }

  get confirmation(): boolean {
    const confirmationControl = this.householdFormGroup.get(
      'householdConfirmation'
    );

    if (confirmationControl !== undefined && confirmationControl !== null) {
      return confirmationControl.value ?? false;
    }

    return false;
  }

  // This needs to check the validity of four things:
  // 1. The household count is valid (greater than 0)
  // 2. The household confirmation is valid (true)
  // 3. The household member names are valid (not empty)
  // 4. Any secondary members have a valid relationship to the primary member
  get validHouseholdPage(): boolean {
    const validHouseholdCount =
      this.householdFormGroup.get('householdCount')?.valid ?? false;

    const householdConfirmation = this.householdFormGroup.get(
      'householdConfirmation'
    );

    const validHouseholdConfirmation = householdConfirmation?.value ?? false;

    const householdMembers = this.householdService.householdMembersArray;
    const validNames = householdMembers.controls.every(
      (member) =>
        (member.get('name')?.valid ?? false) &&
        (member.get('relationship')?.valid ?? false)
    );

    return validHouseholdCount && validHouseholdConfirmation && validNames;
  }

  navigateToMemberDetails(): void {
    if (this.validHouseholdPage) {
      void this.router.navigate(['member/1'], { relativeTo: this.route });
      //navigateByUrl(`/premium-tax-credit/household/${this.currentTaxYear}/member/1`);
    } else {
      throw new Error('Household page is not valid');
    }
  }
}
