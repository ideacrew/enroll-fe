import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HouseholdFormGroup } from '../interfaces/form-types';

@Component({
  selector: 'enroll-household-confirmation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './household-confirmation.component.html',
  styleUrls: ['./household-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdConfirmationComponent {
  @Input() parent!: FormGroup<HouseholdFormGroup>;
}
