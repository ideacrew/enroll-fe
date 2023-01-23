import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  selectAllMonths(): void {
    this.residenceFormGroup.get('months')?.patchValue({
      jan: true,
      feb: true,
      mar: true,
      apr: true,
      may: true,
      jun: true,
      jul: true,
      aug: true,
      sep: true,
      oct: true,
      nov: true,
      dec: true,
    });
  }

  clearAllMonths(): void {
    this.residenceFormGroup.get('months')?.patchValue({
      jan: false,
      feb: false,
      mar: false,
      apr: false,
      may: false,
      jun: false,
      jul: false,
      aug: false,
      sep: false,
      oct: false,
      nov: false,
      dec: false,
    });
  }
}
