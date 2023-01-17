import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseholdService } from '../household.service';

@Component({
  selector: 'enroll-household-form-info',
  standalone: true,
  imports: [CommonModule],
  template: `<pre>
  {{ householdForm.value | json }}
  </pre
  >`,
  styleUrls: ['./household-form-info.component.scss'],
})
export class HouseholdFormInfoComponent {
  householdForm = inject(HouseholdService).householdForm;
}
