import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Month } from '@enroll/shared/types';

import { ResidenceFormGroup } from '../interfaces/form-types';

@Component({
  selector: 'enroll-member-residence-months',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './member-residence-months.component.html',
  styleUrls: ['./member-residence-months.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberResidenceMonthsComponent {
  @Input() residenceFormGroup!: FormGroup<ResidenceFormGroup>;
  @Input() memberName!: string;

  get fips(): string {
    return this.residenceFormGroup.get('county.fips')?.value || '';
  }

  get countyName(): string {
    return this.residenceFormGroup.get('county.name')?.value || '';
  }

  get stateAbbreviation(): string {
    return this.residenceFormGroup.get('county.state')?.value || '';
  }

  // Select all months that aren't disabled
  selectAllMonths(): void {
    const monthsControl = this.residenceFormGroup.get('months');

    if (monthsControl === undefined || monthsControl === null) {
      throw new Error('No months defined');
    }
    // Get existing months as an object
    const existingMonths: Record<Month, boolean> = monthsControl.value;

    const newMonths: Record<Month, boolean> = { ...existingMonths };

    // Set all months to true
    for (const month of Object.keys(existingMonths)) {
      newMonths[month as Month] = true;
    }

    monthsControl.patchValue(newMonths);
  }

  clearAllMonths(): void {
    const monthsControl = this.residenceFormGroup.get('months');

    if (monthsControl === undefined || monthsControl === null) {
      throw new Error('No months defined');
    }
    // Get existing months as an object
    const existingMonths: Record<Month, boolean> = monthsControl.value;

    const newMonths: Record<Month, boolean> = { ...existingMonths };

    // Set all months to true
    for (const month of Object.keys(existingMonths)) {
      newMonths[month as Month] = false;
    }

    monthsControl.patchValue(newMonths);
  }
}
