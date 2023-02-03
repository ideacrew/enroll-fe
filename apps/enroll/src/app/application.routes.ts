import { Route } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const routes: Route[] = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
    data: {
      title: 'Welcome',
    },
  },
  {
    path: 'financial-assistance',
    loadChildren: () =>
      import('@enroll/financial-assistance/shell').then(
        (m) => m.FinancialAssistanceShellModule
      ),
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];
