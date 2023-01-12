import { Route } from '@angular/router';

import { HouseholdComponent } from './household/household.component';

export const householdRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HouseholdComponent },
];
