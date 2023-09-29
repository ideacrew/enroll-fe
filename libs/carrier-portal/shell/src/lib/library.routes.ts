import { Route } from '@angular/router';
import { AuthGuard } from '@enroll/console/auth';

import { ShellComponent } from './shell/shell.component';

export const carrierPortalShellRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@enroll/carrier-portal/member-search').then(
            (m) => m.carrierPortalMemberSearchRoutes
          ),
      },
      {
        path: 'members/:id',
        loadChildren: () =>
          import('@enroll/carrier-portal/member-coverage').then(
            (m) => m.carrierPortalMemberCoverageRoutes
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'transactions/:id',
        loadChildren: () =>
          import('@enroll/carrier-portal/transaction-details').then(
            (m) => m.carrierPortalTransactionDetailsRoutes
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];
