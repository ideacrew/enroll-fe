import { Route } from '@angular/router';

import { HouseholdComponent } from './household/household.component';
import { MemberComponent } from './member/member.component';

export const householdRoutes: Route[] = [
  { path: 'member/:memberId', component: MemberComponent },
  { path: '', pathMatch: 'full', component: HouseholdComponent },
];
