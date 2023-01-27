import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  HouseholdMemberFormGroup,
  MonthFormGroup,
  ResidenceFormGroup,
} from '../interfaces/form-types';
import { MemberResidenceMonthsComponent } from '../member-residence-months/member-residence-months.component';
import { MemberResidenceZipcodeComponent } from '../member-residence-zipcode/member-residence-zipcode.component';
import {
  createCountyFormGroup,
  createLeftoverMonthsFormGroup,
} from '../form-initialization/initial-household-form';

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

  get residenceControls() {
    return this.residences.controls;
  }

  get numberOfResidences(): number {
    return this.residences.length;
  }

  get memberName(): string {
    return this.memberFormGroup.get('name')?.value ?? '';
  }

  addResidence() {
    const residenceMonths: Array<FormGroup<MonthFormGroup>> =
      this.residenceControls.map(
        (residenceControl) =>
          residenceControl.get('months') as FormGroup<MonthFormGroup>
      );

    const newResidenceMonths: FormGroup<MonthFormGroup> =
      createLeftoverMonthsFormGroup(residenceMonths);

    console.log('newResidenceMonths', newResidenceMonths);

    this.residences.push(
      new FormGroup<ResidenceFormGroup>({
        county: createCountyFormGroup(),
        months: newResidenceMonths,
      })
    );
  }
}
