import { Route } from '@angular/router';
import { TaxYearComponent } from './tax-year/tax-year.component';

export const taxYearRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: TaxYearComponent },
  // lazy load the household module
];
