import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';

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
        path: ':applicationId/review',
        component: ReviewApplicationComponent,
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
    ReviewApplicationComponent,
  ],
})
export class FinancialAssistanceApplicationsModule {}
