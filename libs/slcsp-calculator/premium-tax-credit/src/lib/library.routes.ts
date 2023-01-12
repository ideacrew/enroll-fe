import { Route } from '@angular/router';

import { FeatureShellComponent } from './feature-shell/feature-shell.component';

export const premiumTaxCreditRoutes: Route[] = [
  {
    path: 'results',
    loadChildren: () =>
      import('@enroll/slcsp-calculator/premium-tax-credit/results').then(
        (m) => m.ResultsModule
      ),
  },
  {
    path: 'review',
    loadChildren: () =>
      import('@enroll/slcsp-calculator/premium-tax-credit/review').then(
        (m) => m.ReviewModule
      ),
  },
  {
    path: 'household',
    loadChildren: () =>
      import('@enroll/slcsp-calculator/premium-tax-credit/household').then(
        (m) => m.HouseholdModule
      ),
  },
  {
    path: 'tax-year',
    loadChildren: () =>
      import('@enroll/slcsp-calculator/premium-tax-credit/tax-year').then(
        (m) => m.TaxYearModule
      ),
  },
  { path: '', pathMatch: 'full', component: FeatureShellComponent },
];
