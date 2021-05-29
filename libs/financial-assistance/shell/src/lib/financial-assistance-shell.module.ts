import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        // when applications is hit, lazy load the module
        path: 'applications',
        loadChildren: () =>
          import('@enroll/financial-assistance/applications').then(
            (m) => m.FinancialAssistanceApplicationsModule
          ),
      },
      {
        // anything besides /applications will redirect to /applications
        path: '**',
        pathMatch: 'full',
        redirectTo: 'applications',
      },
    ]),
  ],
})
export class FinancialAssistanceShellModule {}
