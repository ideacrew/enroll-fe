import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { HouseholdService } from '../../household.service';

export const formGuard: CanMatchFn = () => {
  const householdForm = inject(HouseholdService).householdForm;
  const router = inject(Router);

  if (householdForm.value.householdConfirmation === null) {
    void router.navigateByUrl('/premium-tax-credit/household');
    return false;
  }

  return true;
};
