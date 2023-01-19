import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  HouseholdMemberFormGroup,
  ResidenceFormGroup,
} from '../interfaces/form-types';
import { MemberResidenceMonthsComponent } from '../member-residence-months/member-residence-months.component';
import { MemberResidenceZipcodeComponent } from '../member-residence-zipcode/member-residence-zipcode.component';

@Component({
  selector: 'enroll-household-member-residence',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MemberResidenceZipcodeComponent,
    MemberResidenceMonthsComponent,
  ],
  templateUrl: './household-member-residence.component.html',
  styleUrls: ['./household-member-residence.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdMemberResidencesComponent {
  @Input() memberFormGroup!: FormGroup<HouseholdMemberFormGroup>;

  get residences() {
    return this.memberFormGroup.get('residences') as FormArray<
      FormGroup<ResidenceFormGroup>
    >;
  }
}
