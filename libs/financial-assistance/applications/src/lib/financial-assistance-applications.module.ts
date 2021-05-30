import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', // matches /applications
        component: ApplicationsListPageComponent,
      },
      {
        path: ':applicationId/edit',
        component: EditApplicationComponent,
      },
      {
        path: ':applicationId/applicants/:applicantId/tax-info',
        component: TaxInfoComponent,
      },
    ]),
  ],
  declarations: [
    ApplicationsListPageComponent,
    EditApplicationComponent,
    TaxInfoComponent,
  ],
})
export class FinancialAssistanceApplicationsModule {}
