import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HouseholdMemberFormGroup } from '@enroll/slcsp-calculator/types';

@Component({
  selector: 'enroll-household-member-dob',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './household-member-dob.component.html',
  styleUrls: ['./household-member-dob.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdMemberDobComponent {
  @Input() memberFormGroup!: FormGroup<HouseholdMemberFormGroup>;
}
