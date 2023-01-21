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

  get fips(): string {
    return this.residenceFormGroup.get('county.fips')?.value || '';
  }

  get countyName(): string {
    return this.residenceFormGroup.get('county.name')?.value || '';
  }

  get stateAbbreviation(): string {
    return this.residenceFormGroup.get('county.state')?.value || '';
  }
}
