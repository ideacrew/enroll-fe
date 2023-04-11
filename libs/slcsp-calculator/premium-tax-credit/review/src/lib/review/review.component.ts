import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';

@Component({
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  route = inject(ActivatedRoute);
  currentTaxYear = <string>this.route.snapshot.params['taxYear'];
  householdForm = inject(HouseholdService).setHouseholdForm(
    this.currentTaxYear
  );
}
