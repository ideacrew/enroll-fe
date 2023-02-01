import { Route } from '@angular/router';
import { AuthGuard } from '@enroll/console/auth';

import { ShellComponent } from './shell/shell.component';

export const consoleShellRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'carrier-portal',
        loadChildren: () =>
          import('@enroll/carrier-portal/shell').then(
            (m) => m.carrierPortalShellRoutes
          ),
        canActivate: [AuthGuard],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'carrier-portal',
      },
    ],
  },
];
