import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HouseholdMemberFormGroup } from '@enroll/slcsp-calculator/types';
import { HouseholdMemberDobComponent } from '../household-member-dob/household-member-dob.component';
import { HouseholdMemberResidencesComponent } from '../household-member-residence/household-member-residence.component';

@Component({
  selector: 'enroll-household-member',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HouseholdMemberDobComponent,
    HouseholdMemberResidencesComponent,
  ],
  templateUrl: './household-member.component.html',
  styleUrls: ['./household-member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdMemberComponent {
  @Input() householdMemberFormGroup!: FormGroup<HouseholdMemberFormGroup>;
  @Input() memberId!: number;

  get householdMemberName() {
    return this.householdMemberFormGroup.get('name')?.value;
  }

  get validDob(): boolean {
    return this.householdMemberFormGroup.get('dob')?.valid ?? false;
  }

  get showResidence(): boolean {
    return this.memberId === 1 && this.validDob;
  }
}
