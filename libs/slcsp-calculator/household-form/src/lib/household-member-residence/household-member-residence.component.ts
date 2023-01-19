import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  HouseholdMemberFormGroup,
  ResidenceFormGroup,
} from '../interfaces/form-types';

@Component({
  selector: 'enroll-household-member-residence',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './household-member-residence.component.html',
  styleUrls: ['./household-member-residence.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdMemberResidencesComponent {
  @Input() parent!: FormGroup<HouseholdMemberFormGroup>;

  get residences() {
    return this.parent.get('residences') as FormArray<
      FormGroup<ResidenceFormGroup>
    >;
  }
}
