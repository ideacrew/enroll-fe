import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HouseholdMemberFormGroup } from '../interfaces/form-types';

@Component({
  selector: 'enroll-household-member-name',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './household-member-name.component.html',
  styleUrls: ['./household-member-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdMemberNameComponent {
  // This could be undefined because FormArrays can be empty
  @Input() parent!: FormGroup<HouseholdMemberFormGroup> | undefined;
}
