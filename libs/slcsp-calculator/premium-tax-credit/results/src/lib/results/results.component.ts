import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { months } from '@enroll/shared/types';

import { SlcspEstimateService } from '@enroll/slcsp-calculator/data-access';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';
import { SlcspEstimate } from 'libs/slcsp-calculator/data-access/src/lib/interfaces/slcsp-estimate';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  householdService = inject(HouseholdService);
  slcspEstimateService = inject(SlcspEstimateService);
  monthList = months;

  estimate$: Observable<SlcspEstimate> =
    this.slcspEstimateService.getSlcspEstimate(
      this.householdService.householdForm.value
    );

  print(): void {
    window.print();
  }
}
