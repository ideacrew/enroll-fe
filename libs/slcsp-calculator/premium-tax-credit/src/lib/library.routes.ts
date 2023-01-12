import { Route } from '@angular/router';

import { FeatureShellComponent } from './feature-shell/feature-shell.component';

export const premiumTaxCreditRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: FeatureShellComponent },
];
