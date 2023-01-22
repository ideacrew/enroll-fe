import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

import { HouseholdFormGroup } from '../interfaces/form-types';

@Component({
  selector: 'enroll-review-tax-year',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-tax-year.component.html',
  styleUrls: ['./review-tax-year.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewTaxYearComponent {
  @Input() householdForm!: FormGroup<HouseholdFormGroup>;

  get taxYear() {
    return this.householdForm.get('taxYear')?.value;
  }
}
