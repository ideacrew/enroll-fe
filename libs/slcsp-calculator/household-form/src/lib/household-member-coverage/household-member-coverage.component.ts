import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HouseholdMemberFormGroup } from '../interfaces/form-types';
import { Month } from '../interfaces';

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

  // Select all months that aren't disabled
  selectAllMonths(): void {
    const coverageControl = this.memberFormGroup.get('coverage');

    if (coverageControl === undefined || coverageControl === null) {
      throw new Error('No months defined');
    }
    // Get existing months as an object
    const existingMonths: Record<Month, boolean> = coverageControl.value;

    const newMonths: Record<Month, boolean> = { ...existingMonths };

    // Set all months to true
    for (const month of Object.keys(existingMonths)) {
      newMonths[month as Month] = true;
    }

    coverageControl.patchValue(newMonths);
  }

  clearAllMonths(): void {
    const coverageControl = this.memberFormGroup.get('coverage');

    if (coverageControl === undefined || coverageControl === null) {
      throw new Error('No months defined');
    }
    // Get existing months as an object
    const existingMonths: Record<Month, boolean> = coverageControl.value;

    const newMonths: Record<Month, boolean> = { ...existingMonths };

    // Set all months to true
    for (const month of Object.keys(existingMonths)) {
      newMonths[month as Month] = false;
    }

    coverageControl.patchValue(newMonths);
  }
}
