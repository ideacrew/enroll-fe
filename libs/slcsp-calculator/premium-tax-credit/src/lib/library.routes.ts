import { Route } from '@angular/router';
import { formGuard } from '@enroll/slcsp-calculator/household-form';

import { FeatureShellComponent } from './feature-shell/feature-shell.component';

export const premiumTaxCreditRoutes: Route[] = [
  {
    path: 'results/:taxYear',
    loadChildren: () =>
      import('@enroll/slcsp-calculator/premium-tax-credit/results').then(
        (m) => m.ResultsModule
      ),
    canMatch: [formGuard],
  },
  {
    path: 'review/:taxYear',
    loadChildren: () =>
      import('@enroll/slcsp-calculator/premium-tax-credit/review').then(
        (m) => m.ReviewModule
      ),
    canMatch: [formGuard],
  },
  {
    path: 'household/:taxYear',
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
