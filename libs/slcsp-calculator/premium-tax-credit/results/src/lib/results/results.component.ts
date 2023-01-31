import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { months } from '@enroll/shared/types';
import {
  SlcspEstimate,
  SlcspEstimateService,
} from '@enroll/slcsp-calculator/data-access';
import { HouseholdService } from '@enroll/slcsp-calculator/household-form';
import { HouseholdFormValue } from '@enroll/slcsp-calculator/types';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  householdService = inject(HouseholdService);
  slcspEstimateService = inject(SlcspEstimateService);
  monthList = months;

  transformedValue: HouseholdFormValue =
    this.householdService.getTransformedValue();

  estimate$: Observable<SlcspEstimate> =
    this.slcspEstimateService.getSlcspEstimate(
      // Usually typecasting isn't great
      this.transformedValue
    );

  print(): void {
    window.print();
  }
}
