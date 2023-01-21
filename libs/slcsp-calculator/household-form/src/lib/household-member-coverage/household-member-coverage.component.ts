import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HouseholdMemberFormGroup } from '../interfaces/form-types';

@Component({
  selector: 'enroll-household-member-coverage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './household-member-coverage.component.html',
  styleUrls: ['./household-member-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdMemberCoverageComponent {
  @Input() memberFormGroup!: FormGroup<HouseholdMemberFormGroup>;
}
