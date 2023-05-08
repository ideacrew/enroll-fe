import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { selectRouteParam } from '@enroll/shared/state/root-store';
import { HouseholdService } from '../../household.service';

export const formGuard: CanMatchFn = () => {
  const householdForm = inject(HouseholdService).householdForm;
  const router = inject(Router);
  const store = inject(Store);

  if (householdForm.value.householdConfirmation === null) {
    store.select(selectRouteParam('taxYear')).subscribe({
      next: (currentTaxYear) => {
        if (currentTaxYear) {
          void router.navigateByUrl(
            `/premium-tax-credit/household/${currentTaxYear}`
          );
        } else {
          void router.navigateByUrl(`/premium-tax-credit/household/3000`);
        }
      },
    });
    return false;
  }

  return true;
};
