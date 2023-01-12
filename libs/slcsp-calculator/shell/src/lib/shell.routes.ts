import { Route } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

export const slcspCalculatorShellRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ShellComponent },
];
