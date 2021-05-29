import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'applications',
        loadChildren: () =>
          import('@enroll/financial-assistance/applications').then(
            (m) => m.FinancialAssistanceApplicationsModule
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: 'applications' },
    ]),
  ],
})
export class FinancialAssistanceShellModule {}
