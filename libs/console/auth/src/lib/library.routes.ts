import { Route } from '@angular/router';

import { ExpiredUserComponent } from './expired-user/expired-user.component';

export const consoleAuthRoutes: Route[] = [
  { path: 'expired-user', component: ExpiredUserComponent },
];
