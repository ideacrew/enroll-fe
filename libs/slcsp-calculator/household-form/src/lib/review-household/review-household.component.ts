import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

import { HouseholdFormGroup } from '../interfaces/form-types';
import { ResidenceMonthsPipe } from '../residence-months/residence-months.pipe';

@Component({
  selector: 'enroll-review-household',
  standalone: true,
  imports: [CommonModule, ResidenceMonthsPipe],
  templateUrl: './review-household.component.html',
  styleUrls: ['./review-household.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewHouseholdComponent {
  @Input() householdForm!: FormGroup<HouseholdFormGroup>;

  get householdMembers() {
    return this.householdForm.get('members')?.value;
  }
}
