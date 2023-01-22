import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HouseholdMemberFormGroup } from '../interfaces/form-types';
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

  get householdMemberName() {
    return this.householdMemberFormGroup.get('name')?.value;
  }
}
