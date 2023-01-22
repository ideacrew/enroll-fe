import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';

@Component({
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  householdForm = inject(HouseholdService).householdForm;
}
