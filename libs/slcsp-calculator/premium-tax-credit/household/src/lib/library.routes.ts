import { Route } from '@angular/router';
import { formGuard } from '@enroll/slcsp-calculator/household-form';

import { CoverageComponent } from './coverage/coverage.component';
import { HouseholdComponent } from './household/household.component';
import { MemberComponent } from './member/member.component';

export const householdRoutes: Route[] = [
  {
    path: 'member/:memberId',
    component: MemberComponent,
    canMatch: [formGuard],
  },
  { path: 'member/:memberId/coverage', component: CoverageComponent },
  { path: '', pathMatch: 'full', component: HouseholdComponent },
];
