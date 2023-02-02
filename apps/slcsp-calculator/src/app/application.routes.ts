import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@enroll/slcsp-calculator/shell').then(
        (m) => m.SlcspCalculatorShellModule
      ),
  },
  {
    path: 'premium-tax-credit',
    loadChildren: () =>
      import('@enroll/slcsp-calculator/premium-tax-credit').then(
        (m) => m.SlcspCalculatorPremiumTaxCreditModule
      ),
  },
];
