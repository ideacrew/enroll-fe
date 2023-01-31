import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  HouseholdMemberFormGroup,
  MonthFormGroup,
  ResidenceFormGroup,
  ResidenceFormValue,
} from '@enroll/slcsp-calculator/types';
import { MemberResidenceMonthsComponent } from '../member-residence-months/member-residence-months.component';
import { MemberResidenceZipcodeComponent } from '../member-residence-zipcode/member-residence-zipcode.component';
import {
  createCountyFormGroup,
  createLeftoverMonthsFormGroup,
} from '../form-initialization/initial-household-form';
import { noGapInResidence } from '../util/validators/no-gap-in-residence';
import { MemberAbsentComponent } from '../member-absent/member-absent.component';

@Component({
  selector: 'enroll-household-member-residence',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MemberResidenceZipcodeComponent,
    MemberResidenceMonthsComponent,
    MemberAbsentComponent,
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

  get residenceValues(): ResidenceFormValue[] {
    return this.memberFormGroup.get('residences')?.value ?? [];
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

  isAbsent(index: number): boolean {
    return this.residences.at(index).get('absent')?.value ?? false;
  }

  validCounty(index: number): boolean {
    const countyValue = this.residences.at(index).get('county')?.value;

    if (countyValue === null) {
      return false;
    }

    if (countyValue?.zipcode === '') {
      return false;
    }

    return true;
  }

  addResidence() {
    const residenceMonths: Array<FormGroup<MonthFormGroup>> =
      this.residenceControls.map(
        (residenceControl) =>
          residenceControl.get('months') as FormGroup<MonthFormGroup>
      );

    const newResidenceMonths: FormGroup<MonthFormGroup> =
      createLeftoverMonthsFormGroup(residenceMonths);

    this.residences.push(
      new FormGroup<ResidenceFormGroup>({
        county: createCountyFormGroup(),
        months: newResidenceMonths,
        absent: new FormControl<boolean>(false, { nonNullable: true }),
      })
    );
  }

  showAddResidenceButton(index: number): boolean {
    // Don't show button if another residence has already been added
    const anotherResidence = this.numberOfResidences - 1 > index;

    return (
      (this.validCounty(index) || this.isAbsent) &&
      !noGapInResidence(this.residenceValues) &&
      !anotherResidence
    );
  }

  showMonths(index: number): boolean {
    const countyHasValue = this.validCounty(index);

    return countyHasValue || this.isAbsent(index);
  }
}
